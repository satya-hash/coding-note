import type { Config } from "tailwindcss"
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                'bg-primary': '#16161a',
                'text-primary': '#fffffe',
                'text-secondary': '#94a1b2',
                'btn-primary': '#569cd6',
                'link-primary': '#16161a',
                'text-code-comment': '#fffffe',
                'border-primary': '#94a1b2',
                'bg-code': '#242629',
                'text-code': '#fffffe',
            },
            // colors: {
            //     'bg-primary': '#1e1e1e',          // For the main background of the site
            //     'text-primary': '#dcdcdc',        // For primary text color
            //     'text-secondary': '#8a8a8a',      // For secondary text or metadata
            //     'btn-primary': '#569cd6',         // For primary buttons or CTA buttons
            //     'link-primary': '#ce9178',        // For links and other interactive elements
            //     'text-code-comment': '#6a9955',   // For comments or metadata within code blocks
            //     'border-primary': '#3a3a3a',      // For borders and dividers
            //     'bg-code': '#2d2d2d',             // For the background of code blocks
            //     'text-code': '#dcdcdc',           // For the text inside code blocks
            // },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate"), addVariablesForColors],
} satisfies Config
function addVariablesForColors({ addBase, theme }: any) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ":root": newVars,
    });
}
export default config
