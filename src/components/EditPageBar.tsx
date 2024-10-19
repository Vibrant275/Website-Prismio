import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/navigation';
import { IoLogoGithub } from 'react-icons/io';
import {GITHUB_DOCS_URL} from "@/utils/constants";

interface EditPageProps {
    docName: string;
}

const EditPage: React.FC<EditPageProps> = ({ docName }) => {
    const router = useRouter();
    const docUrl = GITHUB_DOCS_URL + docName + ".mdx";

    const [lastModified, setLastModified] = useState<string>(''); // State for last modified date


    const handleEditClick = () => {
        router.push(docUrl);
    };

    useEffect(() => {
        const fetchLastModified = async () => {
            const githubApiUrl = `https://api.github.com/repos/Vibrant275/Website-Prismio/commits?path=${docName}.mdx`;

            try {
                const response = await fetch(githubApiUrl);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                if (data.length > 0) {
                    const lastCommitDate = new Date(data[0].commit.committer.date).toLocaleDateString();
                    setLastModified(lastCommitDate);
                } else {
                    setLastModified('No commits found');
                }
            } catch (error) {
                console.error('Error fetching last modified date:', error);
                setLastModified('Error fetching date');
            }
        };

        fetchLastModified();
    }, [docName]);


    return (
        <div className="flex items-center space-x-2">
            <IoLogoGithub className="text-2xl text-gray-600" />
            <button
                onClick={handleEditClick}
                className="underline text-blue-500 hover:text-blue-700 transition-colors">
                Edit page
            </button>
            <span className="text-gray-500">Last modified: {lastModified}</span>
        </div>
    );
};

export default EditPage;