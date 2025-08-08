# replit.md

## Overview

This is a modern full-stack web application for eazyrev, a B2B technology intelligence platform that provides sales insights for IT services and tech vendors. The application is built with a React frontend using Vite, an Express.js backend, and is configured to use PostgreSQL with Drizzle ORM for data persistence.

## System Architecture

The application follows a clean separation between frontend and backend with the following structure:

- **Frontend**: React with TypeScript, hosted in the `client/` directory
- **Backend**: Express.js server in the `server/` directory  
- **Shared**: Common schemas and types in the `shared/` directory
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Bundler**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation

### Backend Architecture  
- **Runtime**: Node.js with Express.js
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Session Management**: Ready for implementation with connect-pg-simple
- **Development**: Hot reloading with tsx in development mode
- **Production**: Compiled to ES modules with esbuild

### Data Storage
- **Primary Database**: PostgreSQL (configured via DATABASE_URL environment variable)
- **ORM**: Drizzle ORM for type-safe database operations
- **Migrations**: Drizzle Kit for schema migrations in `./migrations` directory
- **Current Schema**: Basic user management with username/password authentication

### UI Design System
- **Component Library**: shadcn/ui with "new-york" style
- **Theme**: Neutral base color with CSS variables for customization  
- **Typography**: Inter font family
- **Icons**: Lucide React icon library
- **Responsive**: Mobile-first design with sidebar navigation

## Design Architecture

### Visual Design Philosophy
The eazyrev platform employs a sophisticated, enterprise-grade design system optimized for B2B sales environments. The design emphasizes professionalism, clarity, and subtle sophistication to build trust with enterprise prospects while maintaining modern usability standards.

### Typography System
**Primary Font Stack**: Inter (system fallback: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto)
**Brand Typography**: Neue Haas Grotesk for the eazyrev brand name and primary headings

**Font Weight Hierarchy**:
- Default body text: Light (300) for enhanced readability
- Brand name: Medium weight with -0.02em letter spacing for professional appearance
- Headings: Bold (700) for strong visual hierarchy
- Interface elements: Medium (500) for balanced emphasis

**Responsive Text Sizing**:
- Base font size: 16px for optimal readability
- Enhanced small text: 15px (custom text-sm override)
- Executive summaries: 20px for prominence
- Mobile-first responsive scaling with breakpoint-specific adjustments

### Color Palette
**Primary Colors**:
- Deep slate backgrounds (#1e293b) for enterprise sophistication
- Neutral grays (#64748b, #94a3b8) for secondary content
- Pure white backgrounds for content clarity

**Accent Colors**:
- Blue (#3b82f6) for interactive elements and links
- Emerald (#10b981) for positive metrics and success states
- Yellow (#eab308) for highlights and priority indicators
- Purple gradients for premium feature emphasis

**Professional Gradients**:
- Subtle slate gradients (from-slate-900 via-slate-800 to-slate-900)
- Blue-to-purple transitions for premium sections
- Transparent overlays for depth without distraction

### Animation & Interaction Design
**Animation Philosophy**: Subtle, professional animations that enhance user experience without being distracting in B2B sales contexts.

**Core Animation Types**:
- **Card Hover Effects**: Gentle shadow elevation and shimmer effects on metric cards
- **Button Interactions**: Advanced hover states with shadow and transform effects
- **Staggered Animations**: Statistics appear with sequential timing for visual impact
- **Icon Rotations**: Subtle rotations on interactive elements
- **Page Transitions**: Smooth fade-ins for professional navigation experience

**Specific Animation Elements**:
- Typewriter effect with cursor for dynamic text presentation
- Float animations on key content cards
- Shimmer effects on navigation elements with greyish-white gradients
- Rainbow gradient animations reserved for primary call-to-action elements
- Accessibility support: `prefers-reduced-motion` respect for user preferences

### Component Architecture
**Layout Components**:
- Responsive sidebar navigation with collapsible mobile drawer
- Material design principles with proper spacing (space-y-6 between items)
- Enterprise-grade shadows and border treatments
- Consistent card-based content organization

**Interactive Elements**:
- Professional button styles with advanced hover states
- Form components with Zod validation and error handling
- Toast notifications with professional styling
- Loading states and skeleton UI for data fetching

**Content Presentation**:
- Executive summary cards with background highlighting
- Statistics display with animated counters
- Technology analysis grids with hover interactions
- Company profile cards with consistent spacing and typography

### Responsive Design Strategy
**Breakpoint System**:
- Mobile-first approach with sm (640px), md (768px), lg (1024px) breakpoints
- Adaptive typography scaling across device sizes
- Touch-friendly interface elements on mobile
- Desktop-optimized sidebar navigation

**Mobile Optimizations**:
- Hamburger menu for mobile navigation
- Optimized text sizing for readability
- Touch-friendly button sizes and spacing
- Streamlined layouts for smaller screens

### Brand Integration
**Logo Implementation**:
- Custom favicon using authentic eazy logo SVG
- Brand name styling with specific letter spacing
- Consistent brand presentation across all pages

**Professional Aesthetics**:
- Stripe payment integration with authentic branding
- Calendly embedding with seamless visual integration
- Enterprise-appropriate color choices and spacing
- Subtle animations that enhance rather than distract from content

## Data Flow

1. **Client Requests**: React frontend makes API calls to Express backend
2. **API Routes**: Express routes handle business logic and database operations
3. **Database Operations**: Drizzle ORM provides type-safe database queries
4. **Response Handling**: TanStack Query manages caching and state updates
5. **UI Updates**: React components re-render based on query state changes

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Neon database adapter for serverless PostgreSQL
- **@tanstack/react-query**: Server state management and caching
- **drizzle-orm & drizzle-zod**: Type-safe ORM with Zod schema validation
- **@radix-ui/***: Headless UI component primitives
- **wouter**: Lightweight routing library

### Development Tools
- **Vite**: Fast build tool with HMR support
- **TypeScript**: Type safety across the entire stack
- **Tailwind CSS**: Utility-first CSS framework
- **@replit/vite-plugin-***: Replit-specific development enhancements

### External Integrations
- **Calendly**: Embedded scheduling widget for contact/demo booking
- **Stripe**: Payment processing (configured for ecommerce functionality)

## Deployment Strategy

### Development
- Frontend and backend run as separate processes in development
- Vite dev server provides HMR and asset serving
- Express server runs with tsx for TypeScript execution
- Database migrations managed via `npm run db:push`

### Static Deployment (Vercel/Netlify)
- **Build Command:** `vite build`
- **Output Directory:** `dist/public`
- **Framework:** Vite/React SPA
- **Routing:** Client-side routing with fallback to index.html
- **No backend required** - fully static application with Calendly integration

### Full-Stack Deployment (Alternative)
- Frontend builds to static assets in `dist/public`
- Backend compiles to ES modules in `dist/` directory
- Single Node.js process serves both static assets and API routes
- Environment variables control database connections and API keys

### Deployment Files
- `vercel.json`: Vercel configuration for SPA routing
- `build-static.sh`: Script for static-only builds
- `DEPLOYMENT.md`: Complete deployment instructions

### Environment Configuration
- No environment variables required for static deployment
- `DATABASE_URL`: PostgreSQL connection string (only for full-stack)
- `NODE_ENV`: Environment mode (development/production)

## Changelog
```
Changelog:
- July 05, 2025. Initial setup
- July 05, 2025. Typography updates: Applied Neue Haas Grotesk to H1 headings and eazyrev brand name, set default body font weight to light (300), increased base font size to 16px for better readability
- July 05, 2025. Font refinements: Updated body font weight to 350, adjusted eazyrev brand letter spacing to -0.02em, increased Executive Summary text to 20px, and enhanced text-sm size to 15px for better readability
- July 05, 2025. Typography standardization: Established consistent text sizing across all pages (text-base for descriptive content, text-xl for subtitles, text-sm enhanced to 15px for small text), ensured uniform spacing and readability
- July 05, 2025. Professional animation system: Added sophisticated animations including card hover effects with shimmer, advanced button interactions, staggered stats animations, icon rotations, typewriter cursor effects, sidebar enhancements, and page transitions. Includes accessibility support for reduced motion preferences
- July 05, 2025. Enhanced interactive elements: Added rainbow gradient animations to sidebar navigation indicator and main call-to-action buttons with hover effects, improved sample report preview with card-based layout and professional shadows
- July 08, 2025. Material design navigation: Implemented professional greyish white shimmer effects with proper spacing (space-y-6) between sidebar items to prevent shadow overlap
- July 08, 2025. Brand integration enhancements: Added authentic Stripe icon with rounded edges, implemented custom favicon using eazy logo SVG for brand consistency
- July 08, 2025. Typography consistency: Optimized responsive text sizing for homepage elements, ensuring matching sizes between key sections on mobile while maintaining desktop hierarchy
- July 08, 2025. Mobile experience optimization: Fixed "TechForward Regional Bank" text display on mobile by removing truncation and implementing proper responsive sizing
- July 08, 2025. Comprehensive design documentation: Added detailed Design Architecture section covering visual philosophy, typography system, color palette, animation principles, component architecture, responsive strategy, and brand integration
- August 08, 2025. Snowflake services page: Created specialized lead generation page for Snowflake services with PDF content integration, professional styling matching existing design system, and responsive Snowflake logo implementation
- August 08, 2025. Design system alignment: Updated pricing components to match homepage benefit components, removed icons from key sections, standardized card styling and typography consistency across all pages
- August 08, 2025. Navigation optimization: Removed Snowflake page from sidebar and mobile navigation menus, making it an unlisted page accessible by direct URL while maintaining cleaner navigation focused on core user journey
- August 08, 2025. Documentation cleanup: Created comprehensive README.md and updated project documentation to reflect current architecture, features, and deployment configuration
```

## User Preferences
```
Preferred communication style: Simple, everyday language.
```