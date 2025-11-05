# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Meeply is a Next.js 16 landing page using the App Router, TypeScript, Tailwind CSS v4, and shadcn/ui components. The project is configured for deployment on Vercel.

## Development Commands

### Core Commands
- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build for production (validates TypeScript and creates optimized build)
- `npm start` - Start production server (requires build first)
- `npm run lint` - Run ESLint to check code quality

### Adding shadcn/ui Components
```bash
npx shadcn@latest add [component-name]
```

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 16 with App Router (file-based routing in `app/` directory)
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS v4 with custom CSS variables using OKLCH color space
- **UI Components**: shadcn/ui (New York style) with Lucide icons
- **Fonts**: Geist Sans and Geist Mono from Google Fonts

### Project Structure
```
app/
├── page.tsx         # Main landing page (root route)
├── layout.tsx       # Root layout with fonts and metadata
├── globals.css      # Tailwind v4 imports and design tokens
└── favicon.ico

lib/
└── utils.ts         # Utility functions (cn helper for classNames)

public/              # Static assets (SVG icons)

components.json      # shadcn/ui configuration
```

### Key Architecture Patterns

**Next.js App Router**: All pages live in the `app/` directory. The `page.tsx` file is the route entry point, and `layout.tsx` wraps all pages.

**Path Aliases**: Use `@/` to reference project root (e.g., `@/lib/utils`, `@/components/ui/button`).

**Styling System**: 
- Tailwind CSS v4 with inline theme configuration
- Design tokens defined as CSS variables in `globals.css` using OKLCH color space
- Custom dark mode variant: `dark:` prefix works with `.dark` class
- shadcn/ui components use CSS variables for theming (neutral base color)

**Component Strategy**: 
- shadcn/ui components go in `components/ui/` (currently none installed)
- Custom components go in `components/`
- The `cn()` utility in `lib/utils.ts` merges Tailwind classes safely

**TypeScript Configuration**:
- Strict mode enabled
- Path aliases: `@/*` maps to project root
- React JSX transform enabled
- Target: ES2017

### shadcn/ui Configuration
- Style: "new-york"
- RSC (React Server Components): enabled
- CSS Variables: enabled
- Icon Library: lucide-react
- Components location: `@/components/ui`

## Important Notes

- **No typecheck command**: Use `npm run build` to validate TypeScript (Next.js includes type checking in build)
- **CSS Variables**: Theme colors use OKLCH format, not RGB/HSL
- **Tailwind v4**: Uses new `@import "tailwindcss"` syntax (not v3 config file)
- **Server Components by default**: All components in `app/` are React Server Components unless marked with `"use client"`
