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
                    '0%': { transform: 'rotateY(0deg)' },
                    '50%': { transform: 'rotateY(180deg)' },
                    '100%': { transform: 'rotateY(0deg)' },
                },
            },
            animation: {
                sweep3D: 'sweep3D 0.5s ease-in-out', // Durasi dipercepat menjadi 0.5 detik
            },
        },
    },
    plugins: [],
};
