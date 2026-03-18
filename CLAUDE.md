# AquaGuard App

A Figma-to-code school project — water monitoring dashboard UI prototype.

## Deployment

Vercel auto-deploys on every push to `master`. No manual deploy needed.

- **GitHub:** https://github.com/BeatFlip/aquaguard-app
- **Live site:** https://design-thinking-adguard.vercel.app

```bash
git add <files>
git commit -m "description"
git push origin master
```

## Tech Stack

- **React 18** + **TypeScript**, **Vite 6**
- **Tailwind CSS v4** (`@tailwindcss/vite` plugin — no PostCSS config)
- **shadcn/ui** — Radix primitives in `src/app/components/ui/` (don't edit these)
- **React Router v7** — `createBrowserRouter`, nested under `Root`
- **Recharts** (charts), **lucide-react** (icons), **next-themes** (dark mode)

## Commands

```bash
npm run dev    # dev server (Vite)
npm run build  # production build → dist/
```

## Project Structure

```
src/
├── app/
│   ├── App.tsx                      # Router setup
│   ├── routes.tsx                   # All route definitions
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   ├── RecentAlerts.tsx         # Dashboard alert summary widget
│   │   ├── RiskIndicator.tsx
│   │   ├── SensorStatusCard.tsx
│   │   ├── WaterUsageChart.tsx
│   │   └── ui/                      # shadcn/ui primitives (don't edit)
│   └── pages/
│       ├── Root.tsx                  # Shell layout (sidebar + header)
│       ├── Dashboard.tsx             # /
│       ├── Sensors.tsx               # /sensors
│       ├── Alerts.tsx                # /alerts
│       ├── Maintenance.tsx           # /maintenance
│       ├── Services.tsx              # /services
│       ├── Insurance.tsx             # /insurance
│       ├── Settings.tsx              # /settings (5 tabs: Profile, Notifications, Security, Billing, Privacy)
│       └── NotFound.tsx
└── styles/
    ├── theme.css                     # CSS design tokens (light/dark)
    └── index.css / tailwind.css / fonts.css
```

## Key Conventions

- **All data is static** — hardcoded in each page file, no backend
- **Mobile-first responsive**: breakpoint at `sm` (640px), cards compact on mobile
- **Dark mode**: `next-themes` + `.dark` class on `<html>`, use `dark:` variants
- **Tabs**: use `w-full` + `flex-1` on triggers for proportional width
- Alerts use a simplified single `nextStep` string per alert (not a list of recommendations)
- Settings Privacy tab covers data collection, access transparency, and user data rights
- Insurance page emphasizes insurance-subsidized sensor value proposition
