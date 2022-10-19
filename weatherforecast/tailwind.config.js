module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                darkBlue: '#30445C',
                lightBlue: '#5096b1',
                blue: '#1CA1C1',
                extraLightBlue: '#E8F0FEFF',
                grey: '#f4f5f9',
                darkGray: '#737373',
                lightGrey: '#DADEE0',
                lightRed: '#db1c00',
                frame: 'rgba(151,150,150,0.28)',
            },
            spacing: {
                0.5: '0.12rem'
            },
            transitionDuration: {
                DEFAULT: '400ms'
            },
            transitionTimingFunction: {
                DEFAULT: 'ease-in-out'
            }
        },
    },
    plugins: [],
}
