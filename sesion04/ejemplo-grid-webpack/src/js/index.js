import '../style/style.css'

  (process.env.NODE_ENV !== 'production')
  ? () => console.log('Development mode 💻👊🏻')
  : () => console.log('Production mode 🚀')