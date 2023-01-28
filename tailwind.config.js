/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
    content: ["./index.html"],
    theme: {
        fontFamily: {
            sans: ["Inter", "sans-serif"],
        },
        colors: {
            ...colors,
            "black-mamba": "#151515",
            "grey-blind": "#FAFAFA",
            "blue-core": "#697586",
        },
    },
    plugins: [],
};
