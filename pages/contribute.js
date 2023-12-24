import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const ContributePage = () => {
    return (
        <main>
            <div className="flex items-center justify-center h-screen">
                {/* Left Section */}
                <div className="w-1/2 h-full relative">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                        <div className="mb-4 text-2xl font-bold">Top Contributors</div>
                        <ul>
                            {/* Display 10 names with badges */}
                            {Array.from({ length: 10 }).map((_, index) => (
                                <li key={index} className="mb-2 flex items-center">
                                    {/* Badge */}
                                    <img
                                        src="/images/badge.png"
                                        alt="Badge"
                                        className="w-6 h-6 mr-2"
                                    />
                                    {/* Contributor Name */}
                                    Contributor {index + 1}
                                </li>
                            ))}
                        </ul>
                        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Show all contributors
                        </button>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-1/2 p-1 flex items-center justify-center" style={{ height: '100vh' }}>
                    <div className="w-1/2 h-1/2 relative bg-gray-100 rounded-lg hover:border-blue-500 border-2 hover:bg-white transition duration-300 flex-col cursor-pointer">
                        <div className="w-1/3 h-1/3 flex items-center justify-center">
                            {/* GitHub Image */}
                            <img
                                src="/images/Github_Normal.png"
                                alt="GitHub Image"
                                className="w-16 h-16 rounded-full object-cover hover:w-20 hover:h-20 transition duration-300"
                            />
                            {/* Hover Image */}
                            <img
                                src="/images/Github_Blue.png"
                                alt="GitHub Image"
                                className="absolute inset-0 w-16 h-16 rounded-full object-cover opacity-0 hover:opacity-100 transition duration-300"
                            />
                        </div>
                        <div className="w-full h-1/3 text-center">
                            Contribute to Prism
                        </div>
                        <div className="w-full h-1/3 flex items-center justify-center">
                            {/* GitHub Link */}
                            <Link href="/sitemap">
                <span className="next-text" style={{ color: '#0099ff', textDecoration: 'none', cursor: 'pointer' }}>
                  Checkout project on GitHub
                </span>
                            </Link>
                            <FontAwesomeIcon icon={faArrowRight} style={{ color: "#0099ff", marginLeft: '0.5rem' }} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ContributePage;
