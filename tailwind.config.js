/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            keyframes: {
                sweep3D: {
                    "0%": { transform: "rotateY(0deg)" },
                    "50%": { transform: "rotateY(180deg)" },
                    "100%": { transform: "rotateY(0deg)" },
                },
                slideInUp: {
                    "0%": { transform: "translateY(20%)", opacity: 0 },
                    "100%": { transform: "translateY(0)", opacity: 1 },
                },
            },
            animation: {
                sweep3D: "sweep3D 0.5s ease-in-out",
                slideInUp: "slideInUp 0.5s ease-out",
            },
        },
    },
    plugins: [
        require('daisyui'),
      ],
};
