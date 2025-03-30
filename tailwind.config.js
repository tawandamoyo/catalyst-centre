const plugin = require('tailwindcss/plugin');
const themeStyle = require('./content/data/style.json'); // Loads the JSON above
const defaultTheme = require('tailwindcss/defaultTheme'); // Import default theme for font fallback

module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx,yaml,html}', './content/**/*', './.sourcebit-nextjs-cache.json'],
    safelist: [
        // Keep safelist as needed for your specific components/CMS
         'text-neutral', 
         'text-light',
        {
             pattern: /(m|p)(t|b|l|r|x|y)?-(0|px|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/
        },
        // Add any other classes dynamically generated that need safelisting
    ],
    theme: {
        extend: {
            boxShadow: {
                header: '0px 2px 8px rgba(27, 32, 50, .08)' // Keep custom shadows
            },
            colors: {
                // Define colors directly here for Tailwind utilities AND reference them in style.json
                light: themeStyle.light, // #FFFFFF
                dark: themeStyle.dark, // #4A4A4A
                neutral: themeStyle.neutral, // #F4F5F7
                neutralAlt: themeStyle.neutralAlt, // #E5E7EB (or your choice)
                primary: themeStyle.primary, // #6ECB5F (Bright Green)
                secondary: themeStyle.secondary, // #2A3A8D (Deep Blue) - **Crucially added**
                accent: themeStyle.accent, // #F5A623 (Gold/Yellow-Orange) - **Crucially added**
            },
            fontFamily: {
                // Define font families using the keys referenced in style.json
                'sans': ['Lato', ...defaultTheme.fontFamily.sans], // Set Lato as default sans
                'lato': ['Lato', ...defaultTheme.fontFamily.sans], // Key for body font
                'poppins': ['Poppins', ...defaultTheme.fontFamily.sans] // Key for headline font
                // Remove 'serif' if not used
            },
            // Keep other theme extensions as needed
            gridTemplateColumns: {
                '16': 'repeat(16, minmax(0, 1fr))'
            },
            gridColumnStart: {
                'span4': 'span 4'
            },
            gridColumnEnd: {
                'neg3': '-3',
                'span4': 'span 4'
            },
            maxWidth: {
                'sectionBody': '846px'
            },
            padding: {
                '2/3': '66.666%',
                '3/4': '75%',
                '9/16': '56.25%'
            },
            screens: {
                'xs': '480px'
            },
            width: {
                'formField': 'calc(50% - 1rem)'
            }
        }
    },
    plugins: [
        // The plugin now correctly references the font keys ('lato', 'poppins') defined in theme.extend.fontFamily
        plugin(function ({ addBase, addComponents, theme }) {
            addBase({
                body: {
                    // Use the key defined in theme.extend.fontFamily
                    fontFamily: theme(`fontFamily.${themeStyle.fontBody}`) // Should resolve to fontFamily.lato
                },
                'h1,h2,h3,h4,h5,h6,blockquote': {
                     // Use the key defined in theme.extend.fontFamily
                    fontFamily: theme(`fontFamily.${themeStyle.fontHeadlines}`) // Should resolve to fontFamily.poppins
                },
                // Keep heading size/style definitions from style.json
                 'h1,.h1': { fontSize: theme(`fontSize.${themeStyle.h1.size}`), fontWeight: theme(`fontWeight.${themeStyle.h1.weight}`), letterSpacing: theme(`letterSpacing.${themeStyle.h1.letterSpacing}`), textDecoration: themeStyle.h1.decoration, textTransform: themeStyle.h1.case },
                 'h2,.h2': { fontSize: theme(`fontSize.${themeStyle.h2.size}`), fontWeight: theme(`fontWeight.${themeStyle.h2.weight}`), letterSpacing: theme(`letterSpacing.${themeStyle.h2.letterSpacing}`), textDecoration: themeStyle.h2.decoration, textTransform: themeStyle.h2.case },
                 'h3,.h3': { fontSize: theme(`fontSize.${themeStyle.h3.size}`), fontWeight: theme(`fontWeight.${themeStyle.h3.weight}`), letterSpacing: theme(`letterSpacing.${themeStyle.h3.letterSpacing}`), textDecoration: themeStyle.h3.decoration, textTransform: themeStyle.h3.case },
                 'h4,.h4': { fontSize: theme(`fontSize.${themeStyle.h4.size}`), fontWeight: theme(`fontWeight.${themeStyle.h4.weight}`), letterSpacing: theme(`letterSpacing.${themeStyle.h4.letterSpacing}`), textDecoration: themeStyle.h4.decoration, textTransform: themeStyle.h4.case },
                 'h5': { fontSize: theme(`fontSize.${themeStyle.h5.size}`), fontWeight: theme(`fontWeight.${themeStyle.h5.weight}`), letterSpacing: theme(`letterSpacing.${themeStyle.h5.letterSpacing}`), textDecoration: themeStyle.h5.decoration, textTransform: themeStyle.h5.case },
                 'h6': { fontSize: theme(`fontSize.${themeStyle.h6.size}`), fontWeight: theme(`fontWeight.${themeStyle.h6.weight}`), letterSpacing: theme(`letterSpacing.${themeStyle.h6.letterSpacing}`), textDecoration: themeStyle.h6.decoration, textTransform: themeStyle.h6.case }
            });
            // Keep component style definitions from style.json
            addComponents({
                 '.sb-component-button-primary': { borderRadius: theme(`borderRadius.${themeStyle.buttonPrimary.borderRadius}`), boxShadow: theme(`boxShadow.${themeStyle.buttonPrimary.shadow}`), fontWeight: themeStyle.buttonPrimary.weight, letterSpacing: theme(`letterSpacing.${themeStyle.buttonPrimary.letterSpacing}`), padding: `${themeStyle.buttonPrimary.verticalPadding}px ${themeStyle.buttonPrimary.horizontalPadding}px`, textTransform: themeStyle.buttonPrimary.case },
                 '.sb-component-button-secondary': { borderRadius: theme(`borderRadius.${themeStyle.buttonSecondary.borderRadius}`), boxShadow: theme(`boxShadow.${themeStyle.buttonSecondary.shadow}`), fontWeight: themeStyle.buttonSecondary.weight, letterSpacing: theme(`letterSpacing.${themeStyle.buttonSecondary.letterSpacing}`), padding: `${themeStyle.buttonSecondary.verticalPadding}px ${themeStyle.buttonSecondary.horizontalPadding}px`, textTransform: themeStyle.buttonSecondary.case },
                 '.sb-component-link-primary': { fontWeight: themeStyle.linkPrimary.weight, letterSpacing: theme(`letterSpacing.${themeStyle.linkPrimary.letterSpacing}`), textTransform: themeStyle.linkPrimary.case },
                 '.sb-component-link-secondary': { fontWeight: themeStyle.linkSecondary.weight, letterSpacing: theme(`letterSpacing.${themeStyle.linkSecondary.letterSpacing}`), textTransform: themeStyle.linkSecondary.case }
            });
        })
    ]
};