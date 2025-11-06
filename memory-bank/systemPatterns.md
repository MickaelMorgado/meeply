# System Patterns

## Architecture Overview

Meeply follows a component-based architecture using Next.js 16 with the App Router. The application is structured as a single-page application with multiple sections that create a cohesive landing page experience.

## Component Architecture

### Page Structure
```
app/
├── page.tsx          # Main landing page composition
├── layout.tsx        # Root layout with metadata
└── globals.css       # Global styles and Tailwind imports

components/
├── Header.tsx        # Navigation and branding
├── HeroSection.tsx   # Main value proposition
├── IntroSection.tsx  # App introduction
├── FeaturesSection.tsx # Feature showcase
├── HowItWorksSection.tsx # Process explanation
├── ProfileStatsSection.tsx # Social proof
├── Footer.tsx        # Contact and legal links
└── [Component].tsx   # Utility components
```

### Component Patterns

- **Section Components:** Large page sections that represent distinct content areas
- **Utility Components:** Reusable elements like buttons, cards, and icons
- **Naming Convention:** PascalCase with descriptive suffixes (Section, Card, etc.)

## Styling Patterns

### Tailwind CSS Approach
- **Utility-First:** All styling done through Tailwind utility classes
- **Mobile-First:** Responsive design starting from mobile breakpoints
- **Component-Specific:** Custom styles in `globals.css` when needed
- **Design System:** Consistent spacing, colors, and typography scales

### Typography Hierarchy
```css
/* Heading hierarchy based on Figma design */
h1 -> Climate Crisis font, largest size, main headlines
h2 -> Climate Crisis font, secondary headlines
h3+ -> System font stack, body text hierarchy
```

## Asset Management

### Image Optimization
- **Next.js Image Component:** Preferred for all images (not yet implemented)
- **Public Directory:** Static assets served from `/public`
- **Figma Exports:** High-fidelity designs exported as PNG/SVG
- **Naming Convention:** Descriptive names with context (iphone-hero, my-profile-stats)

### File Organization
```
public/
├── [feature]-[context].[ext]  # Feature-specific images
├── [brand]-[asset].[ext]      # Brand assets
└── [ui]-[element].[ext]       # UI elements
```

## State Management

### Client-Side State
- **React Hooks:** useState for local component state
- **No Global State:** Simple landing page doesn't require complex state management
- **Form State:** Basic form handling for potential contact forms

## Performance Patterns

### Loading Strategy
- **Static Generation:** Next.js static generation for fast loading
- **Image Optimization:** Lazy loading and responsive images (planned)
- **Bundle Splitting:** Automatic code splitting by Next.js

### SEO Optimization
- **Meta Tags:** Comprehensive metadata in layout.tsx
- **Semantic HTML:** Proper heading hierarchy and semantic elements
- **Performance:** Core Web Vitals optimization

## Development Workflow

### Component Development
1. **Design Review:** Compare with Figma designs
2. **Component Creation:** Build in isolation
3. **Integration:** Add to main page composition
4. **Testing:** Visual and responsive testing
5. **Optimization:** Performance and accessibility checks

### Git Workflow
- **Main Branch:** Production-ready code
- **Feature Branches:** `add-[feature-name]` naming convention
- **Commits:** Descriptive messages following conventional format
- **Deployment:** Automatic Vercel deployments from main branch

## Error Handling

### Build-Time Errors
- **TypeScript:** Strict type checking enabled
- **ESLint:** Code quality and consistency rules
- **Build Failures:** Address all errors before deployment

### Runtime Considerations
- **Graceful Degradation:** Fallbacks for missing assets
- **Error Boundaries:** Component-level error isolation (future implementation)
- **Loading States:** User feedback during async operations (future implementation)
