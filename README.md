# Meeply

A simple landing page built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components.

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the landing page.

## Project Structure

```
meeply/
├── app/              # Next.js app directory
│   ├── page.tsx      # Main landing page
│   ├── layout.tsx    # Root layout
│   └── globals.css   # Global styles
├── components/       # React components (shadcn/ui)
├── lib/              # Utility functions
├── public/           # Static assets
└── vercel.json       # Vercel configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Adding shadcn/ui Components

To add new components from shadcn/ui:

```bash
npx shadcn@latest add [component-name]
```

For example:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
```

## Deploy on Vercel

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Import your repository on [Vercel](https://vercel.com/new)

3. Vercel will automatically detect Next.js and configure the build settings

4. Click "Deploy" and your site will be live!

Alternatively, use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
