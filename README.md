# FCM Journey Mapper — HDS 2026

Static single-file React app for mapping the FCM case cycle experience. Deployed on GitHub Pages.

## File Structure

```
fcm-journey-mapper/
  index.html          — App (components, styles, logic)
  sessions-data.js    — Pre-processed session data (window.FCM_SESSION_DATA)
  README.md           — This file
  transcripts/        — Local only, not deployed. Raw session transcripts.
```

## Adding a New Session

### 1. Prepare the transcript

Place the raw transcript markdown in `transcripts/` (this directory is local only — never deployed).

### 2. Process with Claude Code

Ask Claude Code to process the transcript. Use a prompt like:

```
Process this FCM group discussion transcript into a session data object
for the FCM Journey Mapper. Map findings to these step IDs:
"1" (Get Assignment), "2" (Build Differential), "gap1" (The Gap),
"3" (Small Group), "4" (Patient Encounter), "5" (Coach Feedback),
"6" (Write the Note), "7" (Written Feedback), "gap2" (The Fade),
"8" (Next Case).

For each step, extract:
- summary, themes[], keyQuotes[{text, speaker, context}], contextNotes
- suggestedEmotion (index into EMOTIONS array: 0=Anxious, 1=Uncertain,
  2=Going through motions, 3=Engaged, 4=Confident, 5=Energized, 6=Frustrated)
- suggestedActual, suggestedFriction, suggestedWish

Also generate:
- stability analysis per step (stable/emerging/tentative + evidence + supportCount)
- yield opportunities ranked by yieldScore (1-10) with rationale and interventions
- administrator macroJobs (compliance, progress, teaching-quality)

Output as a JavaScript object matching the schema in sessions-data.js.
```

### 3. Review the output

Check that:
- Step IDs match exactly (`"1"`, `"2"`, `"gap1"`, etc.)
- Quotes are attributed correctly
- Stability levels make sense given the evidence
- Yield scores are justified by the rationale
- Administrator macro jobs are relevant

### 4. Add to sessions-data.js

1. Append the new session object to the `sessions` array
2. Update `meta.totalSessions` and `meta.lastUpdated`
3. Update `cumulative` stability and yield opportunities (merge across sessions)

### 5. Deploy

```bash
git add sessions-data.js
git commit -m "feat: add session N data"
git push
```

GitHub Pages auto-deploys from the main branch.

## Data Schema Reference

```javascript
window.FCM_SESSION_DATA = {
  meta: {
    lastUpdated: "YYYY-MM-DD",
    processedBy: "Claude Code",
    courseYear: "HDS 2026",
    totalSessions: Number
  },

  sessions: [{
    id: "session-N",
    label: "Session N — Description",
    date: "YYYY-MM-DD",
    description: "...",
    participantCount: Number,

    perspectives: {
      student: {
        steps: {
          "[stepId]": {
            summary: "...",
            themes: ["..."],
            keyQuotes: [{ text: "...", speaker: "...", context: "..." }],
            contextNotes: "...",
            suggestedEmotion: Number,    // 0-6, index into EMOTIONS
            suggestedActual: "...",
            suggestedFriction: "...",
            suggestedWish: "..."
          }
        }
      },
      coach: { steps: { /* same shape */ } },
      administrator: {
        macroJobs: [{
          id: "...",
          title: "...",
          status: "...",
          keyInsights: ["..."],
          keyQuotes: [{ text, speaker, context }],
          frictionPoints: ["..."]
        }]
      }
    },

    analysis: {
      stability: {
        "[stepId]": {
          level: "stable" | "emerging" | "tentative",
          evidence: "...",
          supportCount: Number
        }
      },
      yieldOpportunities: [{
        stepId: "...",
        title: "...",
        yieldScore: Number,        // 1-10
        rationale: "...",
        suggestedInterventions: ["..."]
      }]
    }
  }],

  cumulative: {
    stability: { /* same shape as session stability */ },
    yieldOpportunities: [{
      stepId, title, yieldScore,
      sessions: ["session-1", ...]  // which sessions support this
    }],
    trendNotes: "..."
  }
};
```

## EMOTIONS Index

| Index | Emoji | Label |
|-------|-------|-------|
| 0 | 😰 | Anxious |
| 1 | 😟 | Uncertain |
| 2 | 😐 | Going through motions |
| 3 | 🤔 | Engaged |
| 4 | 😊 | Confident |
| 5 | 😁 | Energized |
| 6 | 😤 | Frustrated |

## Features

- **Session selector** — pick a pre-processed session or start blank
- **Three perspectives** — Student, Coach/Faculty, Administrator
- **Pre-filled insights** — themes, quotes, context notes from session data
- **Stability badges** — green (stable), amber (emerging), gray (tentative)
- **High-yield badges** — red pill on steps with yield score >= 7
- **Annotation layering** — user edits stored separately, persist in localStorage
- **Yield analysis** — ranked opportunities with approve/discuss/dismiss triaging
- **Administrator dashboard** — macro jobs-to-be-done (replaces step view)
- **Cumulative analysis** — cross-session trends (appears with 2+ sessions)
- **Export** — markdown export includes session context and yield approvals
