module.exports = {
    mode: 'jit',
    content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '2rem',
                    lg: '4rem',
                    xl: '6rem',
                    '2xl': '13rem',
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
