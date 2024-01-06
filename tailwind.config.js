
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',

  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#ffd650',
        primaryBg: '#001D3D',
        secondary: '#F5c000',
        secondaryBg: '#003566',
        appText: '#020102',

        appUnselectedElement: '#9f9f9f',
        appSelectedElement: '#c1121f'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}
