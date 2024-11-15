import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import "../../styles/navbar.css"
import React from "react";
import {ThemeProvider} from "next-themes";
import {NextUIProvider} from "@nextui-org/react";
import {Footer} from "@/components/footer";
import {siteConfig} from "@/config/site";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: siteConfig.name,
    description: siteConfig.description,
    keywords: [
        "Prismio",
        "Programming",
        "Language",
        "Open Source",
        "Cross platform",
        "Multi platform",
        "Software",
        "Development",
        "Native",
        "Performance",
        "System",
        "Game"
    ],
    authors: [
        {
            name: siteConfig.author,
            url: siteConfig.authorURL,
        },
    ],
    creator: "Vibrant",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <html lang="en">
        <body className={inter.className}>

            <ThemeProvider attribute={'class'} defaultTheme={'light'} themes={["light", "dark"]} enableSystem={false}>
                <NextUIProvider>
                    {children}
                    <Footer />
                </NextUIProvider>
            </ThemeProvider>
        </body>
        </html>

    );
}
