# Furniture E-Commerce Website

## Overview
This is a modern furniture e-commerce website built with React, TypeScript, Vite, and shadcn/ui components. The project features a responsive design with product browsing, cart functionality, and multiple pages.

## Recent Changes (October 27, 2025)
- **Migrated from Lovable to Replit**: Configured Vite to work in the Replit environment
- **Port Configuration**: Changed from port 8080 to port 5000 (required for Replit webview)
- **Host Configuration**: Set to `0.0.0.0` to allow external connections
- **GitHub Pages Ready**: Base path set to `/` for deployment at ini-itu.github.io root directory

## Project Structure
- **Pages**: Home, Shop, Product Detail, About, Contact, Cart, 404
- **Components**: Navigation, Footer, ProductCard, and full shadcn/ui library
- **Routing**: React Router DOM for client-side navigation
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query for data fetching

## Running the Project
The workflow "Start application" runs `npm run dev` which starts the Vite development server on port 5000.

## Deployment to GitHub Pages
To deploy to GitHub Pages at ini-itu.github.io:
1. Run `npm run build` to create the production build
2. The build output will be in the `dist` folder
3. Deploy the `dist` folder contents to the root of your GitHub Pages repository

## Tech Stack
- React 18.3.1
- TypeScript
- Vite 5.4.19
- React Router DOM 6.30.1
- shadcn/ui components
- Tailwind CSS
- TanStack Query
