# Cyberpunk Blog Template

A modern, responsive blog template with a cyberpunk aesthetic built using Next.js and Tailwind CSS.

## Overview

This project is a fully functional blog website template featuring a cyberpunk-inspired design. It's built with modern web technologies and includes various interactive elements and animations to create an engaging user experience.

## Features

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices
- **Modern UI Components**: 
  - Interactive hero sections
  - Bento box layout for featured posts
  - Blog cards with hover effects
  - Modal dialogs for post statistics
  - Comment section with reactions
- **Animations**:
  - Scroll-triggered animations
  - Parallax effects
  - Text glitch effects
  - Scan line animations
- **Blog Functionality**:
  - Blog post pages with rich formatting
  - Search and filtering capabilities
  - Post reactions and comments
  - Post metadata and statistics

## Technologies Used

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/SWARAJ-42/cyber-blog-website.git
   cd cyber-blog-website
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

\`\`\`
cyber-blog-website/
├── app/                  # Next.js app router pages
│   ├── blog/             # Blog post pages
│   ├── about/            # About page
│   ├── page.tsx          # Home page
│   └── layout.tsx        # Root layout
├── components/           # Reusable components
│   ├── ui/               # UI components (shadcn)
│   └── ...               # Custom components
├── hooks/                # Custom React hooks
├── public/               # Static assets
└── styles/               # Global styles
\`\`\`

## Customization

### Content

- Edit blog posts in the `app/blog/[slug]/page.tsx` files
- Update author information in the about page and home page
- Modify the featured posts on the home page

### Styling

- Main color scheme can be adjusted in `tailwind.config.ts`
- Global styles are defined in `app/globals.css`
- Component-specific styles are included within each component

### Images

- Replace images in the `public/` directory with your own
- Update image references in the components as needed

## Acknowledgments

- Design inspiration from modern cyberpunk aesthetics
- Some of the code generations were done using [Claude.ai](https://claude.ai/), [ChatGPT](https://chatgpt.com/).
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
