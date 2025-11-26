import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        "./src/app/**/*.{js,jsx,mdx}",
        "./src/components/**/*.{js,jsx,mdx}"
    ],
    theme: {
        extend: {}
    },
    plugins: [daisyui],
    daisyui: {
        themes: ["light"]
    }
};

export default config;
