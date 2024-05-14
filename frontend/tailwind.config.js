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
        'doneloadImage': "url('../src/assets/image/cool-background.png')",
        'landingImage': "url('https://img.freepik.com/free-vector/flat-minimal-geometric-background_52683-61878.jpg?w=1380&t=st=1712904045~exp=1712904645~hmac=d897f124026194bed8d6aaee7ef1031a6632b72d3a57767e687cb0d3967a7688')",
        'defaultImage': "url('https://img.freepik.com/free-vector/landing-page-concept-illustration_114360-4292.jpg')"
      },
      fontFamily: {
        'Ubuntu': ['Ubuntu', 'sans-serif'],
        'Kanit': ['Kanit', 'sans-serif']
      },

      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        color1: '#577399',
        color2: '#d0e1d4',
        color3: '#ff7d4a',
        color4: '#1a1b25',
        color5: '#2e933c',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

