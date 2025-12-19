# XYZ Fencing Solutions

Professional fencing solutions website for residential, commercial, and industrial properties.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Deployment](#deployment)
- [Components](#components)
- [Pages](#pages)
- [Styling](#styling)
- [Assets](#assets)

## Overview

XYZ Fencing Solutions is a modern, responsive website built for a professional fencing company that provides high-quality fencing solutions across various sectors including residential, commercial, industrial, and agricultural properties. The website showcases services, completed projects, and provides an easy way for customers to get in touch.

## Features

- **Fully Responsive Design**: Optimized for all device sizes (mobile, tablet, laptop, desktop)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Comprehensive Pages**: Home, About, Services, Projects, Gallery, and Contact
- **Interactive Elements**: Animated sections, image galleries, and contact forms
- **Performance Optimized**: Fast loading times and efficient resource management
- **Accessibility Compliant**: WCAG compliant design for better usability
- **Cross-Browser Compatible**: Works seamlessly across all modern browsers

## Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3
- **UI Components**: shadcn/ui with Radix UI primitives
- **Routing**: React Router DOM 6
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State Management**: React Hooks
- **Form Handling**: React Hook Form (implied)
- **Notifications**: React Toast
- **Linting**: ESLint with TypeScript support
- **Formatting**: Prettier

## Project Structure

```
XYZ Fencing/
├── public/
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── logos/
│   │       ├── logo.jpeg
│   │       └── whatsup.png
│   ├── components/
│   │   ├── figma/
│   │   ├── ui/
│   │   └── [Custom Components]
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   └── App.tsx
├── index.html
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm 8.x or higher

### Installation

```bash
# Clone the repository
git clone [repository-url]

# Navigate to project directory
cd XYZ Fencing

# Install dependencies
npm install
```

## Development

### Running the Development Server

```bash
# Start the development server with hot reloading
npm run dev
```

The application will be available at `http://localhost:8080` (or next available port).

### Building for Production

```bash
# Create a production build
npm run build
```

### Previewing Production Build

```bash
# Preview the production build locally
npm run preview
```

## Deployment

This project can be deployed to any static hosting service such as:

- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Firebase Hosting

### Netlify Deployment (Recommended)

#### Method 1: Deploy with Netlify CLI

1. Install Netlify CLI globally:
   ```bash
   npm install -g netlify-cli
   ```

2. Build your project:
   ```bash
   npm run build
   ```

3. Deploy to Netlify:
   ```bash
   netlify deploy
   ```

4. For production deployment:
   ```bash
   netlify deploy --prod
   ```

#### Method 2: Deploy with Git

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Sign up/in to Netlify
3. Click "New site from Git"
4. Select your repository
5. Configure the deployment settings:
   - Branch to deploy: `main` or `master`
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

Netlify will automatically deploy your site and provide you with a unique URL. 

The `netlify.toml` file in your project root already contains the necessary configuration for deployment.

#### Redirects and Routing

The included `netlify.toml` file handles client-side routing for React Router with a catch-all redirect rule that sends all requests to `index.html`.

For Vercel deployment:
1. Connect your GitHub repository to Vercel
2. Configure the build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist/`
   - Install Command: `npm install`
3. Deploy!

## Components

### Core Components

- **Navbar**: Responsive navigation with mobile menu
- **Hero**: Full-width banner with call-to-action buttons
- **Footer**: Comprehensive footer with contact information
- **CTASection**: Prominent call-to-action section
- **AnimatedSection**: Animation wrapper for scroll-triggered effects
- **FloatingActions**: Universal floating action buttons (scroll-to-top, call, WhatsApp)

### UI Components

- **ServiceCard**: Display for individual services
- **ProjectCard**: Showcase for completed projects
- **TestimonialCard**: Customer testimonials
- **GlassCard**: Transparent card with glass effect

### Utility Components

- **ScrollToTop**: Automatic scroll-to-top on route changes

## Pages

1. **Home** (`/`): Landing page with hero section, services overview, and featured projects
2. **About** (`/about`): Company information and values
3. **Services** (`/services`): Detailed breakdown of fencing services offered
4. **Projects** (`/projects`): Portfolio of completed projects with filtering
5. **Gallery** (`/gallery`): Photo gallery of work in progress and completed projects
6. **Contact** (`/contact`): Contact form and business information

## Styling

The project uses Tailwind CSS for styling with a custom color palette:

- **Primary**: Deep Forest Green (`#2D5D46`)
- **Accent**: Gold/Bronze (`#D4AF37`)
- **Background**: Light Cream (`#F8F5F0`)
- **Text**: Charcoal (`#333333`)

### Responsive Breakpoints

- **Mobile**: 320px - 480px
- **Tablet**: 768px - 1024px
- **Laptop**: 1024px - 1280px
- **Desktop**: 1280px+

## Assets

### Images

All images are sourced from Unsplash with appropriate query parameters for sizing and formatting.

### Logos

- `logo.jpeg`: Main company logo
- `whatsup.png`: WhatsApp icon for floating action button

---

*For any inquiries or support, please contact the development team.*