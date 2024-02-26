/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT"

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "principal-color": "#F6155B",
      "secondary-color": "#3990AE",
    },
    extend: {},
  },
  plugins: [],
})
