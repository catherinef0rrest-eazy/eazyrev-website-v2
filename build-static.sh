#!/bin/bash

# Build script for static deployment to Vercel
echo "Building static frontend for deployment..."

# Clean previous builds
rm -rf dist

# Build only the frontend (static)
npx vite build

echo "Static build completed successfully!"
echo "Deploy the contents of dist/public to your hosting provider"