# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install       # Install dependencies
npm run dev       # Start dev server (http://localhost:5173 or next available port)
npm run build     # Production build → dist/
```

## Architecture

**Stack:** React 18 + React Router 7 + Tailwind CSS v4 + shadcn/ui (Radix UI) + Recharts + Vite

**Layout shell (`src/app/pages/Root.tsx`):** Wraps all pages. Desktop shows a fixed `Sidebar` (hidden on mobile). Mobile shows a hamburger `Header` that opens the sidebar as a drawer overlay. Main content scrolls in a flex column.

**Routing (`src/app/routes.tsx`):** Single nested route tree — `Root` is the parent, all 7 pages are children rendered via `<Outlet>`.

**Dark mode:** Managed by `next-themes` `ThemeProvider` (in `App.tsx`, `attribute="class"`, `defaultTheme="light"`). The `.dark` class is applied to `<html>`. CSS variables for both themes are defined in `src/styles/theme.css`. **All components must use semantic Tailwind tokens** (`text-foreground`, `text-muted-foreground`, `bg-background`, `bg-card`, `border-border`, `bg-muted/50`) — never hardcoded gray classes (`text-gray-900`, `bg-white`, etc.) or they won't respond to dark mode. The user toggle lives in `Settings.tsx` (Appearance card).

**Colored highlight cards** (e.g. `bg-blue-50 border-blue-200`) need explicit dark variants: `dark:bg-blue-950/50 dark:border-blue-800`.

**UI components:** Pre-built shadcn components live in `src/app/components/ui/`. Custom app components (Header, Sidebar, SensorStatusCard, etc.) are in `src/app/components/`.

**Styles:** `src/styles/index.css` imports fonts → Tailwind → theme variables. Tailwind v4 is configured via the `@tailwindcss/vite` plugin (no `tailwind.config.js`).
