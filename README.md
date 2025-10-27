# Luxe Living - Furniture E-Commerce

A modern furniture e-commerce website built with React, TypeScript, Vite, and shadcn/ui.

## 🚀 Deployment to GitHub Pages

This project is configured to deploy to GitHub Pages at the root directory (`https://ini-itu.github.io/`).

### Automatic Deployment

Every push to the `main` branch automatically triggers a GitHub Actions workflow that builds and deploys the site.

### Manual Setup (First Time Only)

1. Go to your repository settings: `https://github.com/ini-itu/ini-itu.github.io/settings/pages`
2. Under **Build and deployment**:
   - **Source:** Select "GitHub Actions"
3. Go to `Settings → Actions → General → Workflow permissions`:
   - Enable "Read and write permissions"
   - Save changes

### Deploy Manually

You can also trigger a manual deployment:
1. Go to the "Actions" tab in your repository
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

### Local Development

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:5000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
├── src/
│   ├── pages/          # Page components (Home, Shop, About, etc.)
│   ├── components/     # Reusable components
│   │   └── ui/        # shadcn/ui components
│   ├── data/          # Static data (products)
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions
│   └── assets/        # Images and media
├── public/            # Static files
└── .github/
    └── workflows/     # GitHub Actions workflows
```

## 🛠️ Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite 5
- **Language:** TypeScript
- **Routing:** React Router DOM
- **UI Components:** shadcn/ui + Radix UI
- **Styling:** Tailwind CSS
- **State Management:** TanStack Query
- **Forms:** React Hook Form + Zod

## 🎨 Features

- Responsive design
- Product browsing and filtering
- Shopping cart functionality
- Multiple pages (Home, Shop, Product Detail, About, Contact)
- Modern UI with shadcn components
- SEO optimized

## 📝 Original Project

This project was originally created with [Lovable](https://lovable.dev/projects/d74b3924-cb0e-4cfd-9524-b71c46ae83c6).
