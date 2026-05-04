# Libris — Online Book Borrowing Platform

## Purpose
**Libris** is a modern online library web app where users can browse books by category, search titles/authors, view book details, and manage their profile using secure authentication.

## Live URL
- **Live site**: `https://libris-next.vercel.app`

## Key Features
- **Responsive UI** for mobile, tablet, and desktop.
- **Homepage sections**: banner CTA (“Find Your Next Read”), announcement marquee, featured books, and extra custom sections.
- **All Books** page with:
  - **Search** by title/author
  - **Category filter sidebar** (Story / Tech / Science)
  - **Book cards** with “View Details”
- **Authentication (BetterAuth)**:
  - Email/password login & registration
  - Google social login
  - Toast-based success/error feedback
- **Profile** page:
  - Shows logged-in user info (name, email, avatar)
  - Update user info (name + image)

## Tech Stack
- **Next.js** (App Router)
- **React**
- **Tailwind CSS**
- **DaisyUI**
- **HeroUI**
- **MongoDB**
- **BetterAuth**

## NPM Packages Used
Some notable packages used in this project:
- **better-auth**, **@better-auth/mongo-adapter**
- **mongodb**
- **tailwindcss**, **daisyui**
- **@heroui/react**, **@iconify/react**
- **react-hook-form**
- **react-toastify**
- **animate.css**
- **react-fast-marquee**
- **swiper**

## Project Routes
- `/` — Home
- `/all-books` — Browse/search/filter all books
- `/all-books/[id]` — Single book details
- `/profile` — My profile
- `/signin` — Login
- `/signup` — Register

## Local Setup
1. **Clone** the repository
2. Install dependencies:

```bash
npm install
```

3. Create an environment file (see below)
4. Run the project:

```bash
npm run dev
```

Then open `http://localhost:3000`.

## Environment Variables
Create a `.env.local` file in the project root and add:

```bash
MONGODB_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_oauth_client_id
GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret

# Optional (only if needed for your environment)
NEXT_PUBLIC_AUTH_BASE_URL=http://localhost:3000
```

## Data
This project uses JSON data for books and categories:
- `public/data.json`
- `public/category.json`
