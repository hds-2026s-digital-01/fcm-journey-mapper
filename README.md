# FCM Journey Mapper & Product Lab

**A research-to-PRD pipeline that turns user research into structured product requirements — built during the [Health Design Sprint](https://github.com/uva-medical-design/health-design-sprint) at the University of Virginia School of Medicine.**

> The Product Lab is a 4-stage process for transforming raw user research into a product requirements document, complete with constraint budgets, archetype positioning, and design philosophy reinterpretation.

## What It Does

### Journey Map

Interactive timeline of the medical education case cycle (Foundations of Clinical Medicine), with:

- **9 steps** mapped across the full case cycle — from assignment through differential building, the cognitive gap, small group session, patient encounter, feedback, note writing, and the fade
- **Emotional journey tracking** across three perspectives (Student, Faculty Coach, Course Director)
- **Stability analysis** — green (stable), amber (emerging), gray (tentative) badges show finding confidence across sessions
- **High-yield opportunity detection** — ranked intervention points with yield scores, triage actions (approve/discuss/dismiss)
- **Pre-processed session data** — themes, quotes, context notes, and friction/wish annotations from real student research sessions

### Product Lab

A structured 4-stage pipeline for converting user research into product decisions:

1. **Evidence Wall** — All surfaced pain points, wishes, and quotes organized by stakeholder perspective (Student, Instructor, Course Director). Click items to prioritize — votes flow directly into the PRD.

2. **Product DNA Map** — Drag a pin on a 2x2 archetype matrix (Engagement x Structure) to position your product. Four quadrants — The AI Tutor, The Study Group, The Quick Hit, The Dashboard — each mapped to reference apps (Duolingo, Piazza, Strava, ChatGPT). Synergy detection highlights powerful feature combinations across archetypes.

3. **Product Builder** — Select features from a wishlist, each with explicit point costs. A 10-point budget forces trade-off decisions. Five analysis lenses let you examine your choices from different angles:
   - **Budget** — Real-time cost tracking with over-budget warnings
   - **Tech Stack** — Required infrastructure for selected features
   - **Product Shape** — Stakeholder coverage, engagement pattern mix, step coverage visualization
   - **What Would X Do?** — Reinterpret your feature set through the design philosophy of Duolingo, Piazza, Strava, or ChatGPT. Each philosophy applies verdict tags (PERFECT FIT, SIMPLIFY, CUT IT, GAMIFY IT) to every selected feature with specific adaptation notes.
   - **Scenarios** — User scenarios that test whether your feature set addresses real moments in the student workflow

4. **PRD Draft** — Auto-generated product requirements document from all your decisions. Includes vision statement, prioritized evidence, feature specifications with costs and stakeholder mapping, archetype positioning, design philosophy, and explicit "not building" declarations. Renders as formatted markdown with export.

### Presentation Modes

- **Team Review** — 18-page narrative walkthrough for internal team discussion. Research findings, journey moments, budget negotiation, scenario testing, and PRD generation — all as a guided story with discussion prompts and instructor notes.
- **External Present** — 10-chapter overview for stakeholders (Context, Seed, Discovery, Map, Findings, Opportunities, Criteria, Built, Demo, Feedback). Anonymized quotes, timeline of what was built, and structured feedback collection.
- **Mobile** — 4-tab touch-optimized layout (Overview, Journey, Findings, Build) for on-the-go review.
- **Free Browse** — Non-linear exploration mode within Team Review, with tab-based navigation across Journey Map and Product Lab.

## Try It

**[Live demo](https://hds-2026s-digital-01.github.io/fcm-journey-mapper/)**

Add `?present` to the URL (or `#present` for file:// URLs) for presentation mode.

## Technical Details

Single-file React application (~4,850 lines). No build step required.

- **Stack:** React 18 (in-browser Babel/JSX), CSS-in-JS, localStorage persistence
- **Data:** Pre-processed session data in `sessions-data.js`, sprint narrative in `sprint-narrative.js`
- **Dependencies:** React 18, ReactDOM, Babel standalone (all loaded via CDN)
- **Fonts:** Inter + JetBrains Mono (Google Fonts)
- **PWA:** Service worker + manifest for installable web app
- **Deployment:** Static HTML — works on any web server, GitHub Pages, or directly from the filesystem

```bash
# Local development — just open the file
open index.html

# Or use a local server for full PWA support
npx live-server
```

### Architecture

Everything lives in `index.html`: components, styles, state management, and data processing. Key architectural decisions:

- **In-browser Babel** transpiles JSX at runtime — no build tooling, no node_modules
- **CSS-in-JS** via inline styles with brand tokens (light/dark themes)
- **`PROJECT_CONFIG`** constant extracts course-specific values for future cohort reuse
- **localStorage** persists all user annotations, feature selections, votes, and PRD drafts
- **Responsive** — mobile banner auto-detects small screens and offers the mobile-optimized view

## Why This Matters

The Product Lab demonstrates that structured design processes can be encoded into interactive tools — making design thinking systematic rather than intuitive. Built by medical students during a 10-day design sprint, it shows how domain experts can create sophisticated research pipelines without engineering backgrounds.

The constraint budget (10 points across features of varying cost) is the key pedagogical innovation: it forces teams to make explicit trade-off decisions rather than building wish lists. Combined with the "What Would X Do?" lens — which reinterprets every feature through a consumer product's design philosophy — teams develop product intuition while making concrete decisions.

## License

[MIT](LICENSE)

## Related

- **[Health Design Sprint](https://github.com/uva-medical-design/health-design-sprint)** — The methodology and course framework
- **[FCM Companion](https://github.com/uva-medical-design/fcm-companion)** — The clinical reasoning platform that was built using this pipeline

---

*Built during the Health Design Sprint at the University of Virginia School of Medicine, February 2026.*
