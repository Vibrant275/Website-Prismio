import React from 'react';
import {useRouter} from "next/navigation";
import Image from "next/image";

interface ButtonProps {
    icon?: React.ReactNode;    // Optional icon (ReactNode so you can pass any JSX element)
    title: string;             // Title of the button
    description?: string;      // Optional description
    href?: string;      // Optional click handler
}

const Button: React.FC<ButtonProps> = ({icon, title, description, href}) => {
    const router = useRouter();

    function pushDocsPage() {
        if (href != null) {
            router.push(href)
        }
    }

    const iconSize = 36;
    const image = icon as string;

    return (
        <button
            onClick={pushDocsPage}
            className="flex justify-center items-center space-x-3 px-4 py-2 border-2 w-[400px] h-[140px]
            border-gray-200 rounded-lg transition-colors my-8
            duration-300 hover:border-blue-500 hover:bg-blue-50"
        >

            {icon &&
                <Image
                    className="mx-2"
                    alt={title}  // Use title for alt text for accessibility
                    src={image}
                    width={iconSize} // Set a width for the image
                    height={iconSize}/>
            }

            <div className="text-left">
                <span className="block font-semibold text-gray-950 text-lg">{title}</span>
                <span className="block text-md text-gray-500">{description}</span>
            </div>
        </button>
    );
};

export default Button;