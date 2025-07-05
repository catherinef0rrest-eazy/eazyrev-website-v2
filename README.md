# eazyrev.ai - AI-Powered Sales Intelligence Platform

A modern, static website for eazyrev - an enterprise-level AI-powered insights engine that helps tech sales teams transform complex technology landscapes into clear cross-sell, upsell, and co-sell opportunities.

## 🚀 Live Demo

Visit the live application: [eazyrev-website-v2.vercel.app](https://eazyrev-website-v2.vercel.app)

## ✨ Features

- **Modern Design**: Clean, professional interface with sophisticated animations
- **Fully Responsive**: Optimized for all screen sizes with comprehensive mobile downsizing
- **Interactive Elements**: Rainbow gradient hover effects, card animations, and smooth transitions
- **Sample Report Preview**: Live demonstration of AI-powered analysis capabilities
- **Calendly Integration**: Embedded scheduling for sales demos and consultations
- **Static Deployment**: Zero backend dependencies for fast, reliable hosting

## 🛠 Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui built on Radix UI primitives
- **Routing**: Wouter for lightweight client-side routing
- **Icons**: Lucide React icon library
- **Deployment**: Vercel with static hosting

## 📁 Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Application pages
│   │   ├── data/          # Static data files
│   │   └── lib/           # Utilities and helpers
├── server/                # Development server (not used in production)
├── shared/               # Shared types and schemas
├── attached_assets/      # Project assets and references
└── dist/                # Build output directory
```

## 🎨 Design Features

### Typography
- **Brand Font**: Neue Haas Grotesk for "eazyrev.ai" branding
- **Body Font**: Inter with weight 350 for optimal readability
- **Responsive Sizing**: Comprehensive mobile downsizing for perfect fit

### Animations
- **Card Hover Effects**: Sophisticated shimmer and shadow transitions
- **Rainbow Gradients**: Semi-transparent rainbow colors with dark overlays
- **Icon Animations**: Rotation and scaling on hover
- **Page Transitions**: Smooth navigation between sections
- **Accessibility**: Respects reduced motion preferences

### Mobile Optimization
- **Aggressive Downsizing**: All elements proportionally reduced for mobile
- **Overflow Protection**: Comprehensive CSS rules prevent content cutoff
- **Touch Targets**: Properly sized buttons and interactive elements
- **Compact Layout**: Optimized spacing and typography for small screens

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd eazyrev-website
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open [http://localhost:5000](http://localhost:5000) in your browser

### Building for Production

```bash
npm run build
```

The static files will be generated in the `dist/public` directory.

## 📱 Pages Overview

### Home Page (`/`)
- Hero section with value proposition
- Company statistics and metrics
- Feature highlights with animations
- Sample report preview
- Call-to-action buttons

### Sample Report (`/sample-report`)
- Interactive demonstration of AI analysis
- Real company data showcase
- Metrics visualization
- Recommendation engine preview

### Contact (`/contact`)
- Embedded Calendly scheduling widget
- Sales team contact information
- Demo booking functionality

### Payment (`/payment`)
- Stripe integration for service purchases
- Pricing information
- Secure payment processing

## 🎯 Key Components

### Sample Report Preview
- **Browser-style Interface**: Realistic report presentation
- **Interactive Metrics**: Hoverable cards with detailed information
- **Company Analysis**: TechForward Regional Bank case study
- **Recommendation Engine**: AI-powered sales suggestions

### Mobile Navigation
- **Hamburger Menu**: Clean slide-out navigation
- **Brand Integration**: Logo and consistent styling
- **Touch-Optimized**: Properly sized interactive elements

### Animation System
- **CSS Keyframes**: Custom animations for enhanced UX
- **Intersection Observer**: Trigger animations on scroll
- **Performance Optimized**: Smooth 60fps animations

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run db:push` - Push database schema (development only)

### Environment Variables

No environment variables required for static deployment. All integrations use public keys or direct embedding.

### Code Style

- **TypeScript**: Strict type checking enabled
- **ESLint**: Code quality and consistency
- **Prettier**: Automatic code formatting
- **Tailwind**: Utility-first CSS approach

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Set build command: `vite build`
3. Set output directory: `dist/public`
4. Deploy automatically on push to main branch

### Alternative Static Hosts

The built application works with any static hosting provider:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized with code splitting
- **Image Optimization**: SVG icons and optimized assets
- **Caching**: Aggressive caching for static assets

## 🔗 Integrations

### Calendly
- Embedded scheduling widget
- Custom styling to match brand
- Mobile-responsive design

### Stripe (Payment Processing)
- Direct payment links
- Secure transaction handling
- No backend integration required

## 🎨 Customization

### Colors
Modify colors in `client/src/index.css`:
- Primary: Slate color palette
- Accent: Rainbow gradients for hover effects
- Background: Subtle gradients and shadows

### Typography
Update font settings in `tailwind.config.ts` and CSS variables in `index.css`.

### Animations
Customize animations in the CSS keyframes section or modify component-specific animation classes.

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is proprietary software for eazyrev.ai. All rights reserved.

## 📞 Support

For questions or support:
- Email: support@eazyrev.ai
- Schedule a demo: [Calendly Link](https://calendly.com/ashwin-eazy/eazy-strategy-call)
- Website: [eazyrev.ai](https://eazyrev.ai)

---

Built with ❤️ for enterprise tech sales teams