# eazyrev.ai - AI-Powered Sales Insights Platform

A modern, static web application for eazyrev, an AI-powered technology intelligence platform that helps enterprise tech sales teams transform complex technology landscapes into clear cross-sell, upsell, and co-sell opportunities.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Static Deployment**: No backend dependencies, perfect for CDN deployment
- **AI-Powered Insights**: Showcase technology intelligence and sales optimization
- **Interactive Demo**: Sample report demonstrating platform capabilities
- **Secure Payments**: Integrated with Stripe for payment processing
- **Professional Animations**: Sophisticated hover effects and transitions

## 🛠 Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui built on Radix UI primitives
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Animations**: Framer Motion and CSS animations

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/catherinef0rrest-eazy/eazyrev-website-v2.git
   cd eazyrev-website-v2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5000
   ```

## 🏗 Project Structure

```
├── client/src/
│   ├── components/      # Reusable UI components
│   │   ├── ui/         # shadcn/ui components
│   │   └── layout/     # Layout components (sidebar, navigation)
│   ├── pages/          # Route components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions and configurations
│   └── data/           # Static data and sample content
├── server/             # Express.js backend (development only)
├── shared/             # Shared types and schemas
└── dist/               # Production build output
```

## 🎨 Design System

### Typography
- **Primary Font**: Inter (weight 350 for body text)
- **Brand Font**: Neue Haas Grotesk for "eazyrev.ai" brand name
- **Responsive Text**: Mobile-first approach with proper scaling

### Colors
- **Primary**: Slate gray palette (50-900)
- **Accent**: Rainbow gradient for navigation indicators
- **Backgrounds**: White with subtle gray gradients

### Components
- **Buttons**: Professional black with subtle animations
- **Cards**: Elevated with enterprise-grade shadows
- **Navigation**: Rainbow gradient sidebar indicator
- **Forms**: Clean, accessible with proper validation

## 📱 Mobile Optimization

- **Responsive Design**: Optimized for all screen sizes
- **Touch-Friendly**: Minimum 44px touch targets
- **Proper Typography**: Prevents text cutoff and awkward breaks
- **Smooth Scrolling**: Automatic scroll-to-top on page navigation
- **Optimized Navigation**: Clean mobile menu with proper close button

## 🚀 Deployment

### Static Deployment (Recommended)

**Vercel** (Recommended)
1. Connect your GitHub repository to Vercel
2. Build Command: `npm run build`
3. Output Directory: `dist/public`
4. Deploy automatically on push

**Netlify**
1. Connect repository to Netlify
2. Build Command: `npm run build`
3. Publish Directory: `dist/public`
4. Enable form handling for contact forms

### Manual Build
```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run db:push` - Push database schema changes (if using database)

## 🔧 Configuration

### Environment Variables
No environment variables required for static deployment. The application is fully self-contained.

### Customization
- **Brand Colors**: Edit `client/src/index.css` CSS variables
- **Typography**: Modify font imports and classes in `client/src/index.css`
- **Sample Data**: Update `client/src/data/sample-analysis.json`
- **Contact Integration**: Configure Calendly URL in contact components

## 🎯 Key Features

### Homepage
- Hero section with animated statistics
- Feature highlights with professional animations
- Sample report preview
- Integrated contact form with Calendly

### Sample Report
- Interactive technology intelligence demonstration
- Company profile with responsive badges
- Executive summary with actionable insights
- Technology gap analysis
- Revenue opportunity calculations

### Payment Integration
- Secure Stripe integration
- Professional payment interface
- SSL security indicators
- Mobile-optimized layout

### Contact Page
- Embedded Calendly scheduling
- Professional contact form
- Company information
- Call-to-action sections

## 🔒 Security

- **SSL/TLS**: All communications encrypted
- **Payment Security**: PCI DSS compliant via Stripe
- **Data Protection**: No sensitive data stored locally
- **Input Validation**: Comprehensive form validation with Zod

## 🎨 Animations

- **Hover Effects**: Subtle button and card animations
- **Page Transitions**: Smooth navigation between pages
- **Loading States**: Professional skeleton screens
- **Scroll Animations**: Elements animate on scroll
- **Rainbow Gradients**: Animated navigation indicators

## 📈 Performance

- **Optimized Bundle**: Tree-shaking and code splitting
- **Fast Loading**: Vite's optimized build process
- **Responsive Images**: Proper image optimization
- **Minimal Dependencies**: Lightweight component library

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is proprietary software owned by eazyrev.ai. All rights reserved.

## 📞 Support

For support, email catherine@eazy.systems or visit [eazyrev.ai](https://eazyrev.ai)

---

**Built with ❤️ by the eazyrev team**