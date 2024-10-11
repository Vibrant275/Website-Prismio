/** @type {import('tailwindcss').Config} */

const {nextui} = require("@nextui-org/react");

module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pagesx/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        fontFamily: {
            inter: ["Inter", "sans-serif"],
            playWrite: ["Playwrite DE Grund", 'sans-serif'],
        },
        extend: {},
    },
    plugins: [nextui(
        {
            themes: {
                light: {
                    colors: {
                        primary: '#0099FF',
                    }
                },
            },
        }
    )],
};