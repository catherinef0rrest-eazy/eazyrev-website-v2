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

### Production Build
- Frontend builds to static assets in `dist/public`
- Backend compiles to ES modules in `dist/` directory
- Single Node.js process serves both static assets and API routes
- Environment variables control database connections and API keys

### Environment Configuration
- `DATABASE_URL`: PostgreSQL connection string (required)
- `NODE_ENV`: Environment mode (development/production)
- Additional environment variables for external service integrations

## Changelog
```
Changelog:
- July 05, 2025. Initial setup
- July 05, 2025. Typography updates: Applied Neue Haas Grotesk to H1 headings and eazyrev brand name, set default body font weight to light (300), increased base font size to 16px for better readability
- July 05, 2025. Font refinements: Updated body font weight to 350, adjusted eazyrev brand letter spacing to -0.02em, increased Executive Summary text to 20px, and enhanced text-sm size to 15px for better readability
```

## User Preferences
```
Preferred communication style: Simple, everyday language.
```