# FCM Journey Mapper — Evolution Document

## Overview

The FCM Journey Mapper is a static single-file React application built for UVA's Health Design Sprint (HDS) 2026. It allows medical students to map, annotate, and analyze their real experiences through the Foundations of Clinical Medicine (FCM) case cycle — contrasting the "official version" of each step with what actually happens.

The tool was designed, built, and shipped in a single day (February 17, 2026) across 11 commits, evolving from a blank-canvas annotation tool to a data-rich, multi-perspective analytical platform with team collaboration and dark mode support.

**Live URL:** https://hds-2026s-digital-01.github.io/fcm-journey-mapper/

---

## Architecture

The entire application is two files:

| File | Lines | Purpose |
|------|-------|---------|
| `index.html` | 1,105 | All components, styles, and logic (React 18 + Babel in-browser) |
| `sessions-data.js` | 779 | Pre-processed transcript data exposed as `window.FCM_SESSION_DATA` |

**Stack:** React 18 (UMD), Babel standalone (in-browser JSX), Inter + JetBrains Mono fonts, localStorage for persistence. No build step, no bundler, no backend.

**Why single-file?** The tool is served via GitHub Pages and used by medical students on hospital/university networks. A single HTML file with CDN dependencies eliminates build complexity, works on any device with a browser, and can be forked/modified by students learning to code.

---

## Timeline

### Phase 1 — Core App (11:52 AM)

**Commit:** `a7a735c` — *feat: add FCM Journey Mapper app*

The initial version was a blank-canvas journey mapping tool with 10 steps representing the FCM case cycle:

1. Get the Assignment
2. Build Your Differential
3. The Gap (invisible step)
4. Small Group Session
5. Patient Encounter
6. Coach Feedback
7. Write the Note
8. Get Written Feedback
9. The Fade (invisible step)
10. Next Case

**Components (5):**
- `StepCard` — Expandable card for each journey step
- `Field` — Labeled textarea for annotations
- `EmotionalArc` — SVG line chart of emotional trajectory
- `WishlistSummary` — Starred wishes collected as feature seeds
- `FCMJourneyMapper` — Main app container

**Key design decisions:**
- **Invisible steps** (The Gap, The Fade) are first-class: students flagged these as the most important pain points in discovery sessions, but they don't appear in any official FCM documentation
- **Emotion picker** with 7 options mapped to a valence scale (Anxious → Energized, plus Frustrated)
- **Star system** for wishes: starred items become "Feature Seeds" that export directly into PRD-ready job stories
- **Ghost step creation** ("Add Invisible Step After"): students can discover and name steps the official process doesn't acknowledge

**Design language:** Monospace headers (JetBrains Mono), clean card-based UI, emerald/amber/red accent system. The `BRAND` token object established the color vocabulary used throughout all subsequent phases.

---

### Phase 2 — Session Data Layer (1:15 PM)

**Commit:** `c483863` — *feat: add pre-processed session data enhancement*

This was the largest single commit — a near-complete rewrite that transformed the tool from a blank annotation canvas into a data-driven analytical platform. Two new files were created:

- `sessions-data.js` — Structured data layer with a documented schema
- `README.md` — Workflow documentation for adding new sessions

**New components (7 added, 12 total):**
- `SessionSelector` — Dropdown for switching between pre-processed sessions
- `PrefilledInsights` — Themes, quotes, and context notes from transcript analysis
- `StabilityBadge` — Confidence indicators (Stable/Emerging/Tentative) per step
- `HighYieldBadge` — Red pill on steps with yield score >= 7
- `YieldAnalysis` — Ranked improvement opportunities with approve/discuss/dismiss triaging
- `AdminDashboard` — Macro jobs-to-be-done view (replaces step cards for administrators)
- `CumulativeAnalysis` — Cross-session trend summary

**Three-perspective architecture:**
- **Student** — Step-by-step journey with emotions, friction, wishes
- **Coach / Faculty** — Same steps but from the teaching perspective (visibility gaps, bandwidth constraints)
- **Administrator** — Macro jobs-to-be-done (compliance tracking, progress monitoring, teaching quality) instead of step-by-step view

**Annotation layering:** User edits are stored separately from session data in localStorage (`fcm-annotations-{sessionId}`). Session data provides suggested values; user overrides persist independently. This means session data can be updated without losing student annotations.

**Yield analysis workflow:** Each session includes ranked improvement opportunities scored 1-10. Users can triage each opportunity as Approved, Needs Discussion, or Dismissed. Approvals persist in localStorage (`fcm-yield-{sessionId}`).

---

### Phase 3 — Real Transcript Data (1:35 PM)

**Commit:** `3ad69ac` — *feat: add real Day 1 + Day 2 transcript data*

Replaced placeholder session data with two real sessions processed from 6 transcript files (4 from Day 1, 2 from Day 2). This was the moment the tool became populated with actual student voices.

**Day 1 — Kickoff & Brainstorm** (Feb 16, 2026, 10 participants):
- 4 sub-sessions covering course intro, LLM foundations, vibe-coding, and FCM brainstorm
- FCM critique emerged organically — Danielle raised it unprompted, entire group resonated
- Both student teams independently chose FCM as their project focus

**Day 2 — Journey Mapping & Instructor View** (Feb 17, 2026, 8 participants):
- Focused step-by-step FCM journey mapping with first-person accounts
- Instructor deep dive produced the "reasoning over checkboxes" breakthrough — the single most actionable design insight across all sessions
- Social loafing named explicitly with the "coercive mechanism" framing

**Named student contributors:** Danielle, Derek, Matt, Jocelyn, Kevin, Farah, Maddie, Matthew Trowbridge (instructor)

**Key findings crystallized in cumulative analysis:**
| Opportunity | Yield Score | Sessions |
|-------------|-------------|----------|
| Capture Reasoning, Not Checkboxes — Coach Dashboard | 10/10 | Day 1, Day 2 |
| Bridge the Gap / Gamified Refresh | 9/10 | Day 1, Day 2 |
| Solo Patient Encounter Practice | 8/10 | Day 1, Day 2 |
| Individualized Coach Feedback via Reasoning Data | 8/10 | Day 1, Day 2 |
| Restructure Session: Less Gathering, More Synthesis | 8/10 | Day 1, Day 2 |

**Stability findings:** The Gap (`gap1`) achieved highest confidence in the entire dataset — every student who spoke confirmed the pattern across both days, identical experience across different FCM groups and schedules. Steps 6, 7, and gap2 remained data-thin and were flagged for targeted exploration in future sessions.

---

### Phase 4 — Export & Launch Polish (1:45–1:54 PM)

**Commit:** `5460baa` — *feat: default to latest session, enhance exports with framing + Socratic prompts*
**Commit:** `96a5a12` — *fix: emoji rendering, update intro text, polish session badge for student launch*

These two commits prepared the tool for student use:

- **Default to latest session** instead of blank template — students see real data immediately
- **Session dropdown relabeled:** "Session Progression — see how focus sharpened day to day"
- **Markdown export enhanced** with:
  - Context section explaining the HDS project, FCM background, and how to use the document with a PRD
  - "Instructions for Claude" section with a 5-step Socratic method prompt — when students paste the export into Claude, it asks probing questions rather than immediately generating solutions
- **Copy for Claude** button includes the same Socratic framing in compact format
- **Intro text updated** to reflect the two real sessions and guide student workflow
- **Session badge** in stats bar shows current session with formatted date

**The Socratic prompt design** was a deliberate pedagogical choice: the export tells Claude to reflect back friction points, ask probing questions, surface hidden assumptions, and push for ruthless prioritization — training students in design judgment, not just feature listing.

---

### Phase 5 — v2 Feature Batch (2:51–3:20 PM)

Six features requested by the instructor, built and shipped in 30 minutes:

#### 5a. Collapse/Expand All (2:51 PM)

**Commit:** `c894c41` — *feat: collapse/expand all button*

Toggle button in the stats bar row. Implementation uses an incrementing signal counter (`expandSignal`) — even values collapse, odd values expand. The signal is passed to each `StepCard`, which syncs its local `expanded` state via `useEffect`. A `useRef` guard prevents the effect from firing on initial render.

#### 5b. Mobile Polish (2:52 PM)

**Commit:** `d247a38` — *fix: mobile polish*

CSS-only changes at `@media (max-width: 600px)`:
- Emotion buttons switch from flex-wrap to CSS grid (`repeat(auto-fill, minmax(140px, 1fr))`)
- Yield card action buttons stack vertically with full width
- Perspective tabs get `overflow-x: auto` with `-webkit-overflow-scrolling: touch` for momentum scrolling
- Admin dashboard cards go full-width (`min-width: 0`)

CSS class names were added to key elements (`emotion-buttons`, `yield-card-actions`, `perspective-tabs`, `admin-card`) to enable the media query targeting without inline style overrides.

#### 5c. Leading Opportunities Summary (2:52 PM)

**Commit:** `3fafe32` — *feat: leading opportunities summary*

New `LeadingOpportunities` component rendered between the session selector and perspective tabs. Always visible regardless of which session is selected. Shows the top 3 cumulative yield opportunities with score badges, titles, session counts, and one-line rationales.

Collapsible to just the header after first visit — collapse state persists in localStorage (`fcm-leading-collapsed`). Provides persistent strategic context as students navigate between sessions and perspectives.

#### 5d. Team Annotations Export/Import (2:53 PM)

**Commit:** `859d81f` — *feat: team annotations export/import*

Enables team collaboration without a database:

- **Export Annotations** button gathers all localStorage keys matching `fcm-annotations-*` and `fcm-yield-*` into a single JSON file with metadata. Downloads as `fcm-annotations-YYYY-MM-DD.json`.
- **Import Annotations** button opens a file picker. On import: validates the JSON structure (checks for `meta.tool === "FCM Journey Mapper"`), merges annotations into localStorage (imported values overwrite per-step), reloads current session state, and shows a confirmation with count.

JSON schema:
```json
{
  "meta": { "exportedAt": "ISO-8601", "tool": "FCM Journey Mapper" },
  "annotations": { "session-id": { "step-id": { "actual": "...", ... } } },
  "yieldApprovals": { "session-id": { "stepId-index": "status" } }
}
```

#### 5e. Diff View Between Sessions (3:05 PM)

**Commit:** `2fd60db` — *feat: diff view between sessions*

When viewing a session that isn't the first, a toggle switch appears: "Show changes from Day 1." When enabled:

- **New themes** in `PrefilledInsights` get a green "New" badge
- **New quotes** get a green left-border (instead of blue) plus a "New" badge
- **Stability changes** in `StabilityBadge` show arrows: "Emerging → Stable"
- **New yield opportunities** in `YieldAnalysis` get a "New" badge
- **Score changes** show deltas: "+2" in green or "-1" in red

Comparison logic finds the previous session in the sessions array and diffs themes (set difference), quotes (text match), stability levels, and yield opportunity titles/scores.

Three new sub-components: `DiffBadge` (colored pill with "New"/"Changed"/"Upgraded" labels), the toggle switch itself (CSS-animated slider), and the comparison functions (`getDiffData`, `getPrevStability`, `getDiffYieldOpps`).

#### 5f. Dark Mode (3:20 PM)

**Commit:** `e34dc92` — *feat: dark mode toggle*

The largest surface-area change — touches every component.

**Implementation approach:** React Context (`ThemeContext`) provides the active theme object. Every component calls `useTheme()` to get the current token set. The main component holds `darkMode` state (initialized from localStorage) and computes `const theme = darkMode ? BRAND_DARK : BRAND`.

**BRAND_DARK token mappings:**

| Light Token | Light Value | Dark Value | Purpose |
|-------------|-------------|------------|---------|
| `offWhite` | `#F9FAFB` | `#1A1A1A` | Page background |
| `white` | `#FFFFFF` | `#2D2D2D` | Card backgrounds |
| `black` | `#1A1A1A` | `#F9FAFB` | Primary text |
| `lightGray` | `#E5E7EB` | `#374151` | Borders, dividers |
| `darkGray` | `#2D2D2D` | `#E5E7EB` | Secondary text |
| `emeraldLight` | `#D1FAE5` | `#064E3B` | Success backgrounds |
| `amberLight` | `#FEF3C7` | `#78350F` | Warning backgrounds |
| `redLight` | `#FEE2E2` | `#7F1D1D` | Error backgrounds |
| `blueLight` | `#DBEAFE` | `#1E3A5F` | Info backgrounds |

Accent colors (emerald, amber, red, blue) remain identical in both themes for consistency — they represent semantic meaning (success, warning, error, info) that should be recognizable regardless of mode.

Toggle is a sun/moon emoji button in the top-right corner of the header. Preference persists in localStorage (`fcm-dark-mode`). Body background syncs via `useEffect`.

---

## Component Architecture (Final State)

```
FCMJourneyMapper (main)
├── ThemeContext.Provider
├── Header (inline) — title, dark mode toggle
├── Intro box (dismissible)
├── SessionSelector — session dropdown + description
├── DiffToggle (inline) — show/hide session diff
├── LeadingOpportunities — top 3 cumulative opportunities
├── Perspective tabs — Student / Coach / Administrator
│
├── [Student/Coach view]
│   ├── Stats bar — annotated count, seeds, invisible, session badge, collapse/expand
│   ├── StepCard[] — one per journey step
│   │   ├── StabilityBadge — stable/emerging/tentative + diff arrows
│   │   ├── HighYieldBadge — red pill for yield >= 7
│   │   ├── PrefilledInsights — themes (with diff badges), quotes (with diff borders)
│   │   ├── Field[] — actual, thinking, friction, wish textareas
│   │   └── Emotion picker — 7 emotion buttons
│   ├── EmotionalArc — SVG line chart
│   ├── WishlistSummary — starred wishes as feature seeds
│   ├── YieldAnalysis — ranked opportunities with diff badges + score deltas
│   └── CumulativeAnalysis — cross-session trends
│
├── [Administrator view]
│   └── AdminDashboard — macro jobs-to-be-done cards
│
└── Export buttons — Markdown, Copy for Claude, Export Annotations, Import Annotations
```

**Total components:** 16

---

## Data Flow

```
sessions-data.js (static, pre-processed transcripts)
        │
        ▼
  FCMJourneyMapper
        │
        ├── Session data (read-only) ──► PrefilledInsights, StabilityBadge, YieldAnalysis
        │
        ├── localStorage annotations ──► StepCard fields (layered over session data)
        │
        ├── localStorage yield approvals ──► YieldAnalysis triage states
        │
        ├── Diff computation ──► DiffBadge, StabilityBadge arrows, score deltas
        │
        └── ThemeContext ──► All components (useTheme → BRAND or BRAND_DARK)
```

**Persistence:** All user state lives in localStorage. No backend, no authentication, no database. Team collaboration happens through JSON export/import files.

---

## Metrics

| Metric | Value |
|--------|-------|
| Total lines of code | 1,884 |
| Components | 16 |
| Commits | 11 |
| Build time (wall clock) | ~3.5 hours |
| Sessions with real data | 2 (Day 1: 10 participants, Day 2: 8 participants) |
| Transcript files processed | 6 |
| Named student quotes | 50+ |
| Yield opportunities tracked | 8 cumulative |
| Perspectives | 3 (Student, Coach, Administrator) |
| Journey steps | 10 (8 visible + 2 invisible) |
| External dependencies | 3 (React 18, ReactDOM 18, Babel standalone) |
| Build toolchain | None (zero-config static hosting) |

---

## Design Principles

1. **Real voices over abstractions.** Every insight in the tool traces back to a named student's actual words from a recorded session. The tool never invents or generalizes.

2. **Invisible steps are first-class.** The Gap and The Fade — structural problems that appear in no official FCM documentation — are represented as prominently as official steps. Students can discover and name their own invisible steps.

3. **Annotations layer, never overwrite.** Session data provides suggested values. Student edits are stored separately and persist independently. Updating session data never destroys student work.

4. **Export teaches design thinking.** The Socratic prompts embedded in exports mean the tool doesn't just collect data — it shapes how students process that data with AI assistants.

5. **Zero-config deployment.** A medical student on a hospital computer should be able to open the URL and start working immediately. No accounts, no installs, no build steps.
