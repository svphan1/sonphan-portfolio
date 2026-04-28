# Portfolio

Portfolio site for Son Phan.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

- `npm run dev` - start the local development server
- `npm run build` - create a production build
- `npm run start` - run the production build
- `npm run lint` - run ESLint
- `npm run format` - format files with Prettier
- `npm run format:check` - verify Prettier formatting

## Project Structure

- `app/` - App Router routes, metadata, and global styles
- `components/layout/` - reusable page shell components
- `components/sections/` - homepage sections such as Hero, Skills, Experience, Projects, and Contact
- `lib/` - typed shared content and configuration
- `public/` - static assets
- `eslint.config.mjs` - ESLint configuration for Next.js, TypeScript, and Prettier
- `postcss.config.mjs` - Tailwind CSS PostCSS setup
