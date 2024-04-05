/** @type {import('tailwindcss').Config} */
/** @type {import('@tailwindcss/forms').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'bgImageOne': "url('https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg')",
        'imageLoginImage': "url('https://images.pexels.com/photos/4473099/pexels-photo-4473099.jpeg')",
      },
      backdropFilter: {
        'blur-saturate': 'blur(16px) saturate(180%)',
      },
      backgroundColor: theme => ({
        'bg-card': 'rgba(17, 25, 40, 0.75)',
      }),
      borderColor: theme => ({
        'border-card': 'rgba(255, 255, 255, 0.125)',
      }),
      borderRadius: {
        'card': '12px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

