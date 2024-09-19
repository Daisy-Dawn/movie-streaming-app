import withMT from '@material-tailwind/react/utils/withMT'

/** @type {import('tailwindcss').Config} */
export default withMT({
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                purple: '#C961DE',
                blue: '#2954A3',
                darkBlue: '#2F2F8A',
                royalBlue: '#1C1C65',
                navyBlue: '#0F103F',
                darkPurple: '#663399',
            },
            // screens: {
            //     'min-1250': '1250px',
            // },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                roboto: ['Roboto', 'sans-serif'],
                manrope: ['Manrope', 'sans-serif'],
            },
        },
    },
    plugins: [],
})
