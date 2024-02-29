/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT"

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    colors: {
      "principal-color": "#F6155B",
      "secondary-color": "#3990AE",
      "normal-color": "#15803d",
      "warning-color": "#F3DA00",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
})
