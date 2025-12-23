const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      theme: {
        extend: {
          keyframes: {
            glass: {
              "0%": {
                opacity: "0.35",
              },
              "50%": {
                opacity: "0.55",
              },
              "100%": {
                opacity: "0.35",
              },
            },
          },
          animation: {
            glass: "glass 2.8s ease-in-out infinite",
          },
        },
      },
    }
  },
  plugins: [],
});