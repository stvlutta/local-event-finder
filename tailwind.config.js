/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2D3E50", // Richer blue
        secondary: "#E74C3C", // Vibrant red
        background: "#F8F9FA",
        accent: "#3498DB", // Bright blue accent
        text: "#2C3E50",
        'primary-dark': "#1A2530",
        'secondary-dark': "#C0392B",
        'gray-light': "#ECF0F1",
        'success': "#2ECC71",
        'warning': "#F39C12"
      },
      fontFamily: {
        sans: ['Poppins', 'Roboto', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif']
      },
      boxShadow: {
        'card': '0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
        'button': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'input': '0 1px 3px rgba(0, 0, 0, 0.05)'
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem'
      }
    },
  },
  plugins: [],
}

