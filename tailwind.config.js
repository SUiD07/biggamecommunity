const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Your Custom Font"', ...defaultTheme.fontFamily.sans],
            },
        },
    },
};
