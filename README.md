# Financial Launchpad — Nucor Crawfordsville

A mobile-first, installable financial calculator built for Nucor Steel Crawfordsville employees. Covers budgeting, paycheck analysis, Coast FIRE, Retire at 50 projections, and a Nucor benefits reference.

**Live:** [launchpad.elmills.net](https://launchpad.elmills.net)

---

## Features

- **Budget Buckets** — Monthly spending plan with real-time donut chart
- **Paycheck** — Side-by-side comparison of take-home with/without retirement contributions; shows exact tax savings
- **Coast FIRE** — Compound growth projections to find the age you can stop contributing and coast to retirement
- **Retire at 50** — Nest egg calculator with safe withdrawal rate and inflation assumptions
- **Life Scenarios** — Four career paths (stay 5 yrs, leave after 2, family leave, career welder) with dynamic projections
- **Nucor Benefits** — Confirmed 2025 benefits reference: 401(k), HSA, health, tuition reimbursement, and contribution order guide
- **PWA** — Installable on iOS and Android; works offline after first load
- **PNG Export** — Snapshot any tab as a PNG

---

## Tech Stack

- Pure HTML/CSS/JS — no build step, no framework
- [Chart.js 4.4.1](https://www.chartjs.org/) — charts
- [html2canvas 1.4.1](https://html2canvas.hertzen.com/) — PNG export
- Deployed via [Cloudflare Pages](https://pages.cloudflare.com/)

---

## File Structure

```
├── index.html      # Full app (HTML + CSS + JS)
├── config.js       # All slider defaults, ranges, and steps — edit here
├── manifest.json   # PWA manifest
├── sw.js           # Service worker (offline cache)
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
└── README.md
```

---

## Configuration

All slider settings (defaults, min/max, step) live in **`config.js`**. This is the only file you need to touch to change any financial defaults or ranges.

```js
// Example: Change the default salary from $100k to $75k
'g-sal': { min: 40000, max: 200000, step: 1000, value: 75000 },

// Example: Change the default 401(k) contribution
'g-k4': { min: 0, max: 23500, step: 500, value: 10000 },
```

Sections in `config.js`:
- **Global header** — salary, 401(k), HSA, Roth IRA
- **Budget tab** — monthly spending, car costs, sinking funds
- **Coast FIRE tab** — age, retirement target, spending, inflation, return
- **Retire at 50 tab** — age, spending, inflation, SWR, return

---

## Deployment (Cloudflare Pages)

1. Push this repo to GitHub
2. In Cloudflare Pages → Create project → Connect to Git → select this repo
3. Build settings:
   - **Framework preset:** None
   - **Build command:** *(leave blank)*
   - **Output directory:** `/` (or leave blank)
4. Deploy — Cloudflare Pages serves static files directly

### Custom Domain

In Cloudflare Pages → Custom domains → add `launchpad.elmills.net`

---

## PWA Install

- **Chrome/Edge (desktop):** Click the install icon in the address bar
- **Android Chrome:** "Add to Home Screen" prompt appears automatically
- **iOS Safari:** Share → Add to Home Screen

---

## Tax Assumptions (2025)

- Federal brackets: 10% / 12% / 22% / 24% / 32% / 35% / 37%
- Standard deduction: $15,750 (OBBB-updated)
- Indiana flat rate: 3.05%
- FICA: 7.65%
- Single filer

---

## License

MIT — free to use, adapt, and redistribute with attribution.
