/**
 * FCM Journey Mapper — Sprint Narrative for External Presentation
 *
 * This file is loaded after sessions-data.js and exposes window.SPRINT_NARRATIVE.
 * All quotes use anonymized attribution ("First-year medical student") — anonymization
 * happens at the data layer, not the rendering layer.
 *
 * To extend the presentation: add entries to productEvolution, sprintTimeline, etc.
 * The ExternalPresent component reads this data dynamically.
 */

window.SPRINT_NARRATIVE = {

  /* ── Context ─────────────────────────────────────────── */
  context: {
    institution: "University of Virginia School of Medicine",
    institutionShort: "UVA SOM",
    course: "Foundations of Clinical Medicine (FCM)",
    courseShort: "FCM",
    sprintName: "Health Design Sprint 2026",
    sprintDates: "February 16–20, 2026",
    teamSize: 7,
    teamDescription: "First-year medical students",
    instructor: "Matt Trowbridge, MD",
    instructorRole: "Assistant Professor, Emergency Medicine",
    sprintFraming: "A five-day design sprint embedding first-year medical students as co-designers of their own clinical education tools.",
  },

  /* ── Seed ────────────────────────────────────────────── */
  seed: {
    prompt: "How might we use AI to improve clinical education for medical students?",
    emergenceStory: "The prompt was deliberately broad. Within the first brainstorm session, the team independently converged on Foundations of Clinical Medicine (FCM) — the weekly clinical reasoning course every M1 completes. The critique was unprompted, unanimous, and deeply personal: every student had experienced the same structural frustrations.",
    pullQuote: {
      text: "I wasn't a huge fan of FCM — the weekly four-hour clinical thing felt clunky and not super useful.",
      attribution: "First-year medical student",
    },
    whyFCM: [
      "Every M1 takes FCM — universal shared experience",
      "Structural problems are well-known but unsolved",
      "Weekly cadence creates a natural iteration loop",
      "Bridges preclinical theory and clinical practice",
    ],
  },

  /* ── Sprint Timeline ─────────────────────────────────── */
  sprintTimeline: [
    {
      day: 1,
      date: "Feb 16",
      title: "Understand",
      summary: "Course introduction, LLM foundations, vibe-coding workflow. FCM critique emerged organically during brainstorm — all seven students chose it as their project focus.",
      highlights: ["FCM identified as shared pain point", "Two project teams formed", "Initial journey mapping began"],
    },
    {
      day: 2,
      date: "Feb 17",
      title: "Map & Define",
      summary: "Deep journey mapping with first-person step-by-step accounts. Instructor deep dive revealed coaching gaps. The 'reasoning over checkboxes' insight crystallized as the core design principle.",
      highlights: ["10-step FCM journey mapped across 3 perspectives", "50+ direct quotes captured and attributed", "'Reasoning over checkboxes' emerged as #1 design principle"],
    },
    {
      day: 3,
      date: "Feb 18",
      title: "Converge & Ideate",
      summary: "Synthesis of research findings. Yield-scored opportunities ranked. Product vision defined. Teams began prototyping — Journey Mapper v1 shipped same day.",
      highlights: ["Yield scoring prioritized interventions", "Product requirements drafted", "Journey Mapper v1 shipped as a research artifact"],
    },
    {
      day: 4,
      date: "Feb 19",
      title: "Build",
      summary: "Full build day. FCM Companion app went from concept to v3 in a single day. Interactive differential diagnosis, AI-powered feedback, coach dashboard — all working.",
      highlights: ["FCM Companion v1 → v2 → v3 shipped", "324 practice cases integrated", "AI feedback loop operational"],
    },
    {
      day: 5,
      date: "Feb 20",
      title: "Test & Present",
      summary: "Morning polish and testing. Session dashboard, quiz improvements, PWA support. Afternoon presentations to faculty and peers.",
      highlights: ["v4 and v5 shipped before noon", "PWA enabled for offline use", "Presented to faculty stakeholders"],
    },
  ],

  /* ── Key Findings ────────────────────────────────────── */
  keyFindings: [
    {
      id: "gap",
      title: "The Week-Long Gap",
      summary: "Students complete their differential diagnosis days before the session. By the time they walk in, the case has completely faded from memory. No re-engagement mechanism exists.",
      stability: "stable",
      supportCount: 7,
      totalParticipants: 8,
      quotes: [
        {
          text: "I said it and forget it. In that span of time I was back to learning physiology, step one material into my brain. The clinically relevant stuff just got pushed to the wayside.",
          attribution: "First-year medical student",
        },
        {
          text: "Our exams were always Friday through the weekend, and I would just completely forget about it. It was very low on the priority list.",
          attribution: "First-year medical student",
        },
      ],
    },
    {
      id: "checkboxes",
      title: "Checkboxes Over Reasoning",
      summary: "The VINDICATE mnemonic worksheet rewards completing a form rather than developing genuine clinical reasoning. Students 'fill out the answer key' rather than think through the case.",
      stability: "stable",
      supportCount: 6,
      totalParticipants: 8,
      quotes: [
        {
          text: "Medical students try to be as efficient as possible and find the path of least resistance — we'll just fill out the answer key, as opposed to actually trying to ingrain the system.",
          attribution: "First-year medical student",
        },
        {
          text: "Maybe it's less important if they get the differential correct, but more important if their reasoning is correct — focusing more on analysis and less on checkboxes.",
          attribution: "First-year medical student",
        },
      ],
    },
    {
      id: "loafing",
      title: "Social Loafing in Sessions",
      summary: "In the 4-hour small group session, one or two vocal students drive the discussion while others passively absorb. There's no mechanism to surface individual reasoning.",
      stability: "stable",
      supportCount: 6,
      totalParticipants: 8,
      quotes: [
        {
          text: "I was just taking up space. I knew other people would be more vocal, and I'd eventually be refreshed once they started talking about what's on their differential.",
          attribution: "First-year medical student",
        },
        {
          text: "There's no coercive mechanism to have students really interact. You might be relying on ideas from one or two and the rest are social loafing.",
          attribution: "First-year medical student",
        },
      ],
    },
    {
      id: "feedback",
      title: "Invisible Individual Progress",
      summary: "Coach feedback is generic and group-level. No individualized data on student reasoning exists. Quality varies dramatically by coach assignment, creating unequal clerkship readiness.",
      stability: "stable",
      supportCount: 5,
      totalParticipants: 8,
      quotes: [
        {
          text: "When I started rotations, you could tell people from different FCM groups had very different starting points — some had absolutely no practice, while others were fairly polished.",
          attribution: "Clinical-year medical student",
        },
        {
          text: "The instructor is desperately trying to find out: which of these students is struggling, and I don't even know it? They would love to do more targeted feedback, but they end up doing generic feedback.",
          attribution: "Course instructor",
        },
      ],
    },
  ],

  /* ── Opportunities ───────────────────────────────────── */
  opportunities: [
    {
      id: "reasoning-capture",
      title: "Capture Reasoning, Not Checkboxes",
      yieldScore: 10,
      description: "Replace the static VINDICATE worksheet with an interactive system that captures clinical reasoning at each decision point — not just the final answer list.",
      impact: "Students practice genuine clinical thinking. Coaches receive per-student reasoning snapshots before the session, enabling targeted feedback.",
    },
    {
      id: "bridge-gap",
      title: "Bridge the Gap with Micro-Interactions",
      yieldScore: 9,
      description: "Keep the case alive during the days-long gap between assignment and session with gamified refreshers and spaced repetition.",
      impact: "Students arrive at sessions with fresh, active knowledge instead of stale or forgotten preparation.",
    },
    {
      id: "solo-practice",
      title: "Solo Patient Encounter Practice",
      yieldScore: 8,
      description: "Give every student unlimited AI-powered practice encounters instead of 2-3 live encounters per semester.",
      impact: "Each student builds individual clinical skill independent of group dynamics and limited session time.",
    },
    {
      id: "coach-dashboard",
      title: "Individualized Coach Dashboard",
      yieldScore: 8,
      description: "Provide coaches with per-student reasoning data, persistent gap tracking, and structured feedback templates.",
      impact: "Transforms coaching from guesswork to data-informed mentoring. Standardizes quality across FCM groups.",
    },
    {
      id: "longitudinal",
      title: "Longitudinal Progress Portfolio",
      yieldScore: 7,
      description: "Track student reasoning patterns across cases and semesters, automatically surfacing growth areas and persistent gaps.",
      impact: "Makes the four-year FCM learning arc visible to both students and coaches. Enables early intervention for struggling students.",
    },
  ],

  /* ── Design Criteria ─────────────────────────────────── */
  designCriteria: [
    {
      title: "Reasoning Over Checkboxes",
      description: "The system should evaluate and develop clinical reasoning quality — not worksheet completion. Every interaction should make thinking visible.",
      icon: "🧠",
    },
    {
      title: "Dual-Win: Students AND Coaches",
      description: "Every feature must serve both audiences. Student reasoning data becomes coach insight. Coach feedback drives student growth.",
      icon: "🤝",
    },
    {
      title: "Low-Stakes, High-Engagement",
      description: "FCM is pass/fail. The tool should feel like practice, not evaluation. Reduce friction to engage, not raise stakes.",
      icon: "🎯",
    },
    {
      title: "Institutional Fit",
      description: "Must satisfy the School of Medicine's compliance, progress monitoring, and teaching quality jobs-to-be-done — or it won't be adopted.",
      icon: "🏛️",
    },
    {
      title: "AI as Amplifier, Not Author",
      description: "AI organizes student expertise and enables feedback at scale. It does not replace clinical judgment or human coaching.",
      icon: "🤖",
    },
  ],

  /* ── Success Metrics ─────────────────────────────────── */
  successMetrics: [
    {
      metric: "Session Preparedness",
      description: "Students arrive at FCM sessions with active, recent engagement with the case — not stale or forgotten preparation.",
      measurement: "Pre-session engagement rate, time-to-last-interaction before session",
    },
    {
      metric: "Reasoning Visibility",
      description: "Coach can see individual student reasoning before the session begins, enabling targeted feedback.",
      measurement: "% of students with reasoning data available to coach pre-session",
    },
    {
      metric: "Practice Volume",
      description: "Students get significantly more patient encounter reps than the current 2-3 per semester.",
      measurement: "Cases attempted per student per month",
    },
    {
      metric: "Feedback Quality",
      description: "Coach feedback becomes individualized and reasoning-focused rather than generic and completion-focused.",
      measurement: "Feedback specificity scores, student satisfaction surveys",
    },
    {
      metric: "Clerkship Readiness Equity",
      description: "Reduce the variation in clinical skill levels between students from different FCM groups.",
      measurement: "OSCE score variance across FCM groups",
    },
  ],

  /* ── Product Evolution ───────────────────────────────── */
  productEvolution: [
    {
      id: "journey-mapper",
      product: "FCM Journey Mapper",
      role: "Research Tool",
      versions: [
        {
          version: "v1",
          date: "Feb 18",
          title: "Journey Map Complete",
          description: "Interactive 10-step journey map with 3 perspectives (student, coach, admin). Emotion mapping, friction/wish capture, and yield-scored opportunities.",
          milestone: "First research artifact shipped",
        },
        {
          version: "v2",
          date: "Feb 18",
          title: "Product Lab",
          description: "Added convergence tools: evidence voting, feature selection, budget building, scenario checks, and auto-generated PRD.",
          milestone: "Research → product requirements in one tool",
        },
        {
          version: "v3",
          date: "Feb 18",
          title: "Presentation Day 3",
          description: "Story Mode with 18-page narrative walkthrough. Free Browse for non-linear exploration. Print-ready export.",
          milestone: "Research findings presentable to stakeholders",
        },
      ],
    },
    {
      id: "fcm-companion",
      product: "FCM Companion",
      role: "Student-Facing Product",
      versions: [
        {
          version: "v1",
          date: "Feb 18",
          title: "Core Concept",
          description: "Case-based differential diagnosis with VINDICATE grid and AI-powered feedback on reasoning quality.",
          milestone: "Proof of concept — reasoning capture works",
        },
        {
          version: "v2",
          date: "Feb 19 AM",
          title: "Practice Mode",
          description: "324 practice cases from medical literature. Dual mode: differential-only and full case. Autocomplete diagnosis input.",
          milestone: "Unlimited practice encounters available",
        },
        {
          version: "v3",
          date: "Feb 19 PM",
          title: "Faculty Dashboard",
          description: "Instructor view with student submission tracking, quiz scores, and presentation mode for in-class discussion.",
          milestone: "Dual-win realized — students AND coaches served",
        },
        {
          version: "v4",
          date: "Feb 20 AM",
          title: "Session Dashboard",
          description: "Session-based case management, schedule integration, student notes, and topic voting for in-class priorities.",
          milestone: "Ready for real FCM workflow integration",
        },
        {
          version: "v5",
          date: "Feb 20 PM",
          title: "Polish & PWA",
          description: "Quiz quality improvements, auto-VINDICATE categorization, sentiment capture, and Progressive Web App for offline access.",
          milestone: "Production-quality prototype",
        },
      ],
    },
  ],

  /* ── Feedback Questions ──────────────────────────────── */
  feedbackQuestions: [
    {
      level: "concept",
      levelLabel: "Concept Validation",
      levelColor: "#10B981",
      questions: [
        "Does the 'reasoning over checkboxes' framing resonate with your experience of FCM?",
        "Are these the right pain points? What are we missing?",
        "Would capturing individual student reasoning data change how you coach?",
      ],
    },
    {
      level: "adoption",
      levelLabel: "Adoption Feasibility",
      levelColor: "#3B82F6",
      questions: [
        "What would need to be true for this to be piloted in one FCM group next semester?",
        "Who else needs to see this? What would convince them?",
        "What are the biggest barriers to adoption — technical, cultural, or institutional?",
      ],
    },
    {
      level: "expansion",
      levelLabel: "Expansion Thinking",
      levelColor: "#7C3AED",
      questions: [
        "Could this model apply to other courses beyond FCM?",
        "What longitudinal data would be most valuable for the medical school?",
        "How does this intersect with existing curriculum improvement initiatives?",
      ],
    },
  ],
};
