/** @type {import('tailwindcss').Config} */
/** @type {import('@tailwindcss/forms').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'bgImageOne': "url('https://images.pexels.com/photos/5420576/pexels-photo-5420576.jpeg')",
        'imageLoginImage': "url('https://img.freepik.com/free-photo/3d-portrait-people_23-2150793921.jpg')",
        'imageForgotImage': "url('https://images.pexels.com/photos/3013823/pexels-photo-3013823.jpeg')",
        'imageRegisImage': "url('https://images.pexels.com/photos/7031674/pexels-photo-7031674.jpeg')",
        'doneloadImage': "url('../src/assets/image/cool-background.png')"
      },
      fontFamily:{
        'Ubuntu': ['Ubuntu', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

