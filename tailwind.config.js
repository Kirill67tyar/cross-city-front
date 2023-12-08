/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        "info-banner": "url('/public/banner/info-banner.jpg')",
        arrow: "url('/public/arrow.png')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
