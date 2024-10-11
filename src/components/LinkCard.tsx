import React from 'react';
import {ChevronRight} from "lucide-react";
import Link from "next/link";

interface WidgetProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    divider?: boolean;
    href?: string;
}

const LinkCard: React.FC<WidgetProps> = ({icon, title, description, divider = true, href = ''}) => {
    const content = (
        <div className={'w-[520px] cursor-pointer hover:bg-gray-100 transition-all rounded-xl pt-3'}>
            <div className="flex items-center justify-start p-4 w-[500px] mb-3">
                <div className="border-1.5 border-gray-300 rounded-lg p-3 flex items-center justify-center size-11 mr-5">
                    <span className="text-primary text-2xl">{icon}</span>
                </div>

                <div className="flex flex-col items-start">
                    <span className="font-semibold text-lg">{title}</span>
                    <span className="text-sm text-gray-500 text-start">{description}</span>
                </div>

                <div className="ml-auto">
                    <ChevronRight size={22} strokeWidth={1.5} className="text-gray-400" />
                </div>
            </div>

            {divider ? <div className={'border-t-1.5 border-gray-100 w-full'} /> : null}
        </div>
    );

    return href ? <Link href={href}>{content}</Link> : <div>{content}</div>;
};

export default LinkCard;
