# Furniture E-Commerce Website

## Overview
This is a modern furniture e-commerce website built with React, TypeScript, Vite, and shadcn/ui components. The project features a responsive design with product browsing, cart functionality, and multiple pages.

## Recent Changes (October 27, 2025)
- **Migrated from Lovable to Replit**: Configured Vite to work in the Replit environment
- **Port Configuration**: Changed from port 8080 to port 5000 (required for Replit webview)
- **Host Configuration**: Set to `0.0.0.0` to allow external connections
- **GitHub Pages Ready**: Base path set to `/` for deployment at ini-itu.github.io root directory
- **GitHub Actions Workflow**: Created automated deployment workflow (.github/workflows/deploy.yml)
- **Added .nojekyll**: Prevents Jekyll processing for proper Vite build deployment
- **Updated README**: Added comprehensive deployment instructions
- **Changed to HashRouter**: Replaced BrowserRouter with HashRouter for GitHub Pages compatibility (prevents 404 on refresh/deep links)

## Project Structure
- **Pages**: Home, Shop, Product Detail, About, Contact, Cart, 404
- **Components**: Navigation, Footer, ProductCard, and full shadcn/ui library
- **Routing**: React Router DOM for client-side navigation
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query for data fetching
- **Deployment**: GitHub Actions for automatic deployment

## Running the Project
The workflow "Start application" runs `npm run dev` which starts the Vite development server on port 5000.

## Deployment to GitHub Pages
### Automatic Deployment (Recommended)
1. Push to `main` branch
2. GitHub Actions automatically builds and deploys
3. Site available at https://ini-itu.github.io/

### First Time Setup
See DEPLOY_GITHUB_PAGES.md for detailed Indonesian instructions.

Quick setup:
1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions"
3. Go to Settings → Actions → General → Workflow permissions
4. Enable "Read and write permissions"

## Tech Stack
- React 18.3.1
- TypeScript
- Vite 5.4.19
- React Router DOM 6.30.1
- shadcn/ui components
- Tailwind CSS
- TanStack Query
- GitHub Actions

## Configuration Files
- **vite.config.ts**: Configured for both Replit dev server and GitHub Pages deployment
- **.github/workflows/deploy.yml**: Automated deployment workflow
- **public/.nojekyll**: Prevents Jekyll processing on GitHub Pages
