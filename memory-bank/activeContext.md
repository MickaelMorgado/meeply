# Active Context

## Current Work Focus

The Meeply landing page project is in active development with the following immediate priorities:

### Code Quality Issues
- **ESLint Errors:** One unescaped apostrophe in `IntroSection.tsx` causing React linting error
- **Image Optimization:** Multiple `<img>` tags should be replaced with Next.js `<Image />` components for better performance
- **Font Implementation:** Climate Crisis font has been added to headings but needs verification across all components

### Recent Changes
- **Typography System:** Implemented Climate Crisis font for h1 and h2 headings
- **Component Structure:** Created modular component architecture with separate sections (Hero, Features, Footer, etc.)
- **Asset Integration:** Added Figma-exported images and icons to public directory
- **Git Setup:** Repository initialized and pushed to GitHub (MickaelMorgado/meeply)

## Technical Debt & Issues

### High Priority
- Fix ESLint error in IntroSection.tsx (unescaped apostrophe)
- Replace `<img>` tags with Next.js `<Image />` components for performance
- Verify font loading and fallback behavior

### Medium Priority
- Optimize image assets for web (current images are large Figma exports)
- Implement proper responsive breakpoints
- Add loading states and error boundaries

## Development Environment

- **Framework:** Next.js 16 with App Router
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui component library
- **Deployment:** Configured for Vercel
- **Linting:** ESLint with Next.js and React rules

## Next Steps

1. **Immediate Fixes:**
   - Resolve all ESLint errors and warnings
   - Optimize images and implement Next.js Image component
   - Test font loading across different browsers

2. **Feature Development:**
   - Implement mobile menu functionality
   - Add smooth scrolling between sections
   - Create contact/feedback forms

3. **Performance Optimization:**
   - Implement image optimization and lazy loading
   - Add service worker for caching
   - Optimize bundle size and loading times

## Current Branch: main
- All components and assets have been committed
- Repository is live on GitHub
- Ready for deployment to Vercel

## Known Patterns

- **Component Naming:** PascalCase with Section suffix for page sections
- **Asset Organization:** Images stored in `/public` with descriptive names
- **Styling Approach:** Utility-first with Tailwind, component-specific styles in globals.css
- **File Structure:** Flat component structure in `/components` directory
