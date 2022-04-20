module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                lato: ["Lato", "sans-serif"],
            },
            colors: {
                primary: "#1E3231",
                secondary: "#485665",
                darkpink: "#D0A5C0",
                lightpink: "#D0A5C0",
                gray: "#E5E5E5",
            },
            backgroundImage: {
                "hero-bg": "url('/public/imgs/hero-bg.jpg')",
                "about-bg": "url('/public/imgs/about-bg.jpg')",
            },
        },
    },
    plugins: [],
};
