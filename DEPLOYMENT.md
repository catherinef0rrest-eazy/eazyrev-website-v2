# Vercel Deployment Instructions

## For Static Deployment (Recommended)

This project is configured as a static React application that can be deployed to Vercel without a backend.

### Step 1: Project Configuration

The project already includes:
- `vercel.json` - Vercel configuration for SPA routing
- Vite configuration optimized for static builds

### Step 2: Deploy to Vercel

1. **Via Vercel CLI:**
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Via GitHub Integration:**
   - Push your code to GitHub
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect the React/Vite project

### Step 3: Build Settings in Vercel Dashboard

If deploying via dashboard, use these settings:
- **Framework Preset:** Vite
- **Build Command:** `vite build`
- **Output Directory:** `dist/public`
- **Install Command:** `npm install`

### Step 4: Environment Variables (if needed)

No environment variables are required for the static deployment.

## Troubleshooting

If you encounter the error shown in your screenshot:
1. Make sure you're deploying from the project root
2. Ensure the build command is set to `vite build` (not the full-stack build)
3. Verify the output directory is `dist/public`

## Alternative: Frontend-Only Build

If issues persist, you can build just the frontend:
1. Navigate to the `client` directory
2. Run `npm install && npm run build`
3. Deploy the `dist` folder contents

The site will be fully functional as a static application with all animations, routing, and interactive features working properly.