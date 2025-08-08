# eazyrev.ai

A sophisticated B2B technology intelligence and sales insights platform designed for enterprise-level performance tracking and analysis.

## Overview

eazyrev provides AI-powered sales insights for IT services and tech vendors, helping teams identify high-value prospects through technographic analysis, buyer intent data, and multi-signal intelligence.

## Key Features

- **Multi-Signal Intelligence**: Combines technographics, job postings, buyer intent, case studies, and CRM data
- **Plug-and-Play Recommendations**: Automated filtering from broad possibilities to targeted opportunities  
- **Opportunity Precision**: Target prospects with organizational fit, tech compatibility, urgency, and tech readiness
- **Specialized Solutions**: Custom lead generation engines for specific platforms (Snowflake services)

## Tech Stack

- **Frontend**: React 18 with TypeScript, Vite bundler
- **UI Components**: shadcn/ui built on Radix UI primitives
- **Styling**: Tailwind CSS with professional design system
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Deployment**: Vercel-ready with static build configuration

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database (optional for development)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5000`

## Project Structure

```
├── client/          # React frontend
├── server/          # Express.js backend  
├── shared/          # Common schemas and types
├── attached_assets/ # Project assets and resources
└── components.json  # shadcn/ui configuration
```

## Pages

- **Home** (`/`) - Main landing page with platform overview
- **Sample Report** (`/sample-report`) - Interactive demo of AI analysis
- **Payment** (`/payment`) - Stripe integration for subscriptions
- **Contact** (`/contact`) - Calendly-embedded scheduling
- **Snowflake Services** (`/snowflake`) - Specialized lead generation (unlisted)

## Design System

- **Typography**: Inter font family with Neue Haas Grotesk for branding
- **Color Palette**: Professional slate grays with blue, emerald, and purple accents
- **Animations**: Subtle professional animations with accessibility support
- **Responsive**: Mobile-first design with sidebar navigation

## Deployment

The project is configured for static deployment to Vercel:

```bash
npm run build  # Builds to dist/public
```

See `DEPLOYMENT.md` for detailed deployment instructions.

## Documentation

For comprehensive project documentation, architecture details, and development guidelines, see `replit.md`.

## License

Proprietary - eazyrev.ai