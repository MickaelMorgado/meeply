# Tech Context

## Core Technologies

### Frontend Framework
- **Next.js 16:** React framework with App Router for modern web development
- **React 18:** Component-based UI library with concurrent features
- **TypeScript:** Type-safe JavaScript for better development experience

### Styling & UI
- **Tailwind CSS v4:** Utility-first CSS framework for rapid styling
- **shadcn/ui:** High-quality React components built on Radix UI primitives
- **Climate Crisis Font:** Custom typography for brand identity

### Development Tools
- **ESLint:** Code linting with Next.js and React rules
- **TypeScript Compiler:** Type checking and compilation
- **PostCSS:** CSS processing with Tailwind integration

## Development Environment

### Package Management
- **npm:** Node package manager for dependency management
- **package.json:** Project configuration and scripts
- **package-lock.json:** Dependency lock file for reproducible builds

### Project Structure
```
meeply/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Main page component
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   └── favicon.ico        # Site favicon
├── components/            # React components
├── lib/                   # Utility functions
│   └── utils.ts          # shadcn/ui utilities
├── public/               # Static assets
├── memory-bank/          # Project documentation
├── personal-memory-bank/ # Personal scripts (submodule)
├── node_modules/         # Dependencies
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind configuration
├── components.json       # shadcn/ui configuration
├── tsconfig.json         # TypeScript configuration
├── eslint.config.mjs     # ESLint configuration
├── postcss.config.mjs    # PostCSS configuration
└── vercel.json          # Vercel deployment config
```

## Build & Deployment

### Build Process
- **Next.js Build:** Static generation with `npm run build`
- **TypeScript Compilation:** Type checking during build
- **Asset Optimization:** Automatic image and code optimization

### Deployment
- **Vercel:** Platform for frontend deployment
- **Git Integration:** Automatic deployments from main branch
- **Environment Variables:** Configuration for different environments

## Technical Constraints

### Browser Support
- **Modern Browsers:** Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Mobile Browsers:** iOS Safari, Chrome Mobile
- **No IE Support:** Focus on modern web standards

### Performance Targets
- **Core Web Vitals:** Good scores for LCP, FID, CLS
- **Bundle Size:** Optimized for fast loading
- **Image Optimization:** WebP format with fallbacks

## Development Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  }
}
```

### Script Usage
- `npm run dev` - Start development server on localhost:3000
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## Dependencies

### Core Dependencies
- `next`: ^16.0.1 - React framework
- `react`: ^18.3.1 - UI library
- `react-dom`: ^18.3.1 - React DOM rendering
- `typescript`: ^5.6.3 - Type system

### Styling Dependencies
- `tailwindcss`: ^4.0.0-alpha.33 - CSS framework
- `@tailwindcss/postcss`: ^4.0.0-alpha.33 - PostCSS plugin
- `autoprefixer`: ^10.4.20 - CSS vendor prefixes

### UI Components
- `@radix-ui/react-slot`: ^1.1.0 - Component composition
- `class-variance-authority`: ^0.7.0 - Component variants
- `clsx`: ^2.1.1 - Conditional classes
- `tailwind-merge`: ^2.5.2 - Tailwind class merging

## Version Control

### Git Configuration
- **Repository:** https://github.com/MickaelMorgado/meeply
- **Branch Strategy:** Main branch for production
- **Commit Convention:** Conventional commits for consistency

### Submodules
- **personal-memory-bank:** Git submodule for personal scripts and tools
- **Location:** `/personal-memory-bank` directory
- **Purpose:** Access to personal development utilities

## Code Quality

### Linting Rules
- **ESLint Config:** Next.js recommended rules
- **TypeScript:** Strict type checking enabled
- **Import Sorting:** Organized imports for maintainability

### Current Issues
- ESLint errors in IntroSection.tsx (unescaped entities)
- Image optimization warnings (using `<img>` instead of `<Image />`)
- Need to implement proper error boundaries

## Future Technical Improvements

### Planned Enhancements
- **Image Optimization:** Implement Next.js Image component
- **Performance Monitoring:** Add Core Web Vitals tracking
- **Testing:** Add unit and integration tests
- **Accessibility:** Implement ARIA labels and keyboard navigation
- **PWA Features:** Add service worker and offline capabilities
