# DigitalStore

A modern, full-featured digital products store built with **React 18**, **Vite**, **TailwindCSS**, and **React Router v6**.

## Features

- 🏠 **Home page** — Hero section, category cards, and featured products
- 🛍️ **Shop page** — Full product grid with search and category filtering
- 📄 **Product Detail page** — Image, description, rating, and Add to Cart
- 🛒 **Cart page** — Manage items, adjust quantities, view totals
- ✅ **Checkout page** — Form validation, order summary, success state
- 💾 **Persistent cart** — Cart saved to localStorage
- 📱 **Responsive** — Mobile and desktop layouts via Tailwind CSS
- 🎨 **Indigo/Purple color scheme** — Clean, modern UI

## Product Categories

- 🎓 Courses
- 📚 E-Books
- 🎵 Music
- 🎮 Games
- 💻 Software

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Vite | Build tool |
| TailwindCSS | Styling |
| React Router v6 | Client-side routing |
| Context API + useReducer | Cart state management |
| localStorage | Cart persistence |

## Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
```

## Project Structure

```
src/
  data/
    products.js        # 12 sample digital products
  context/
    CartContext.jsx    # Cart state + localStorage persistence
  components/
    Navbar.jsx         # Sticky nav with cart badge
    Footer.jsx         # Links + categories
    ProductCard.jsx    # Reusable product card
  pages/
    Home.jsx           # Hero + featured + categories
    Shop.jsx           # Grid with search + filter
    ProductDetail.jsx  # Single product view
    Cart.jsx           # Cart management
    Checkout.jsx       # Order form + success state
  App.jsx
  main.jsx
```
