# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Standards

Behave like a senior staff engineer. Follow best and recommended Next.js and React patterns, along with best recommended software development practices.

## Build & Development Commands

- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint checks
- `npm run type-check` - TypeScript type validation

## Architecture

This is a personal portfolio website built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

### Source Structure

All source code is under `src/app/`:
- `page.tsx` - Home page entry point
- `layout.tsx` - Root layout with Geist font configuration and SEO metadata
- `components/` - Reusable React components (all PascalCase: Avatar, Button, CardContainer, Container, Footer, Header, Main)
- `fonts/` - Local Geist font files
- `globals.css` - Tailwind imports

### Custom Tailwind Colors

The project uses a custom color palette defined in `tailwind.config.ts`. Use these instead of default Tailwind colors:
- `primary-100/200/300` - Blues (#0077C2, #59a5f5, #c8ffff)
- `accent-100/200` - Cyan tones (#00BFFF, #00619a)
- `text-100/200` - Grays (#333333, #5c5c5c)
- `bg-100/200/300` - White/light grays (#FFFFFF, #f5f5f5, #cccccc)

### Static Assets

Public assets are in `public/`:
- `images/` - Profile thumbnail and hero image
- Resume PDF files

### TypeScript Configuration

- Path alias: `@/*` maps to `./src/*`
- Strict mode enabled
