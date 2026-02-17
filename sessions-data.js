/**
 * FCM Journey Mapper — Pre-Processed Session Data
 *
 * This file is loaded before the app and exposes window.FCM_SESSION_DATA.
 * To add a new session: append to the `sessions` array, update `meta` and `cumulative`.
 * See README.md for the full workflow.
 *
 * Step IDs match DEFAULT_STEPS in index.html:
 *   "1" Get the Assignment, "2" Build Your Differential, "gap1" The Gap,
 *   "3" Small Group Session, "4" Patient Encounter, "5" Coach Feedback,
 *   "6" Write the Note, "7" Get Written Feedback, "gap2" The Fade, "8" Next Case
 */

window.FCM_SESSION_DATA = {
  meta: {
    lastUpdated: "2026-02-17",
    processedBy: "Claude Code",
    courseYear: "HDS 2026",
    totalSessions: 1
  },

  sessions: [
    {
      id: "session-1",
      label: "Session 1 — Pilot Discussion",
      date: "2026-02-17",
      description: "Initial group discussion mapping the FCM case cycle experience. Seven M1 students, two TAs, one instructor.",
      participantCount: 10,

      perspectives: {
        student: {
          steps: {
            "1": {
              summary: "Students receive a one-line chief concern on VMED, often with little context. The brevity is both freeing and anxiety-inducing.",
              themes: ["Ambiguity of the prompt", "Pressure to start early", "Comparison with peers"],
              keyQuotes: [
                { text: "I stare at that one line and think — where do I even start?", speaker: "Student A", context: "Discussing initial reaction to case assignment" },
                { text: "Some of us look it up immediately, some wait until the night before. There's no right time.", speaker: "Student B", context: "Describing varied approaches" }
              ],
              contextNotes: "Most students check the assignment within hours but delay substantive work. The gap between seeing it and working on it creates background anxiety.",
              suggestedEmotion: 1,
              suggestedActual: "Check VMED, read the one-liner, maybe Google the chief concern briefly, then set it aside until closer to the session.",
              suggestedFriction: "No guidance on how deep to go at this stage. Unclear expectations create anxiety.",
              suggestedWish: "A structured starting checklist — even just 3 questions to answer within 24 hours of getting the case."
            },
            "2": {
              summary: "Building the differential is where real learning happens but also where students feel most uncertain about their clinical reasoning.",
              themes: ["Clinical reasoning uncertainty", "Resource overload", "Time management"],
              keyQuotes: [
                { text: "I use UpToDate, but I'm never sure if I'm going deep enough or just skimming the surface.", speaker: "Student C", context: "Describing differential-building process" },
                { text: "The worksheet format helps, but ranking my top 3 feels like guessing.", speaker: "Student A", context: "On the pre-class worksheet" }
              ],
              contextNotes: "Students spend 1-3 hours on this step. Most rely heavily on UpToDate and lecture notes. Few use primary literature. The worksheet structure helps but feels formulaic.",
              suggestedEmotion: 3,
              suggestedActual: "Spend 1-3 hours on UpToDate and lecture slides. Fill in the worksheet. Second-guess rankings. Submit and hope it's adequate.",
              suggestedFriction: "No feedback loop — you submit the worksheet and don't know if your reasoning was sound until the session (days later).",
              suggestedWish: "A quick AI check: 'Here's my differential — am I missing anything obvious?' before the session."
            },
            "gap1": {
              summary: "The gap between preparation and the session is a significant source of knowledge decay. Students describe 'relearning' their own case.",
              themes: ["Knowledge decay", "Context switching", "Relearning cost"],
              keyQuotes: [
                { text: "By session day I've half-forgotten my own differential. I spend 20 minutes re-reading my own notes.", speaker: "Student D", context: "Describing the gap before small group" }
              ],
              contextNotes: "Gap ranges from 2-7 days. Students juggle 4-5 other courses simultaneously. The case goes cold.",
              suggestedEmotion: 2,
              suggestedActual: "Other coursework takes over. The case fades. Morning of the session: frantically re-read your own worksheet.",
              suggestedFriction: "No spaced repetition or reminder system. The gap erases preparation gains.",
              suggestedWish: "A brief refresher prompt the morning of the session — 'Here's what you wrote, here are 2 questions to re-engage.'"
            },
            "3": {
              summary: "The small group session is high-stakes socially. Presenting feels like being evaluated; observing can feel passive.",
              themes: ["Social pressure", "Uneven participation", "Coach variability"],
              keyQuotes: [
                { text: "When it's your turn to present, your heart rate goes up. Everyone's watching.", speaker: "Student E", context: "On presenting in small group" },
                { text: "Some coaches ask amazing questions. Others just go through the motions.", speaker: "Student B", context: "On coach quality variation" }
              ],
              contextNotes: "4-hour sessions with ~6 students per group. Presenting students get the most learning value but also the most stress. Observers often disengage.",
              suggestedEmotion: 3,
              suggestedActual: "Present your case or watch peers present. Try to contribute. Quality depends heavily on which coach you have.",
              suggestedFriction: "Observers don't get much out of it. Presenting is stressful. Coach quality varies wildly.",
              suggestedWish: "Structured peer feedback during observation — something that keeps non-presenters actively engaged."
            },
            "4": {
              summary: "The patient encounter is the most engaging step but also where the gap between textbook knowledge and real interaction becomes stark.",
              themes: ["Theory-practice gap", "Communication anxiety", "Time pressure"],
              keyQuotes: [
                { text: "You know the 7 components of HPI in theory, but in the room you forget half of them.", speaker: "Student F", context: "On the patient interview" },
                { text: "The standardized patient is kind, but I still feel like I'm performing rather than doctoring.", speaker: "Student C", context: "On authenticity of the encounter" }
              ],
              contextNotes: "Students report this as both the most valuable and most anxiety-inducing step. The checklist format can feel mechanical.",
              suggestedEmotion: 4,
              suggestedActual: "Interview the standardized patient. Try to remember the structure while also being human. Rush through parts you're less confident on.",
              suggestedFriction: "Checklist-driven encounters feel performative. Hard to balance thoroughness with natural conversation.",
              suggestedWish: "A post-encounter self-reflection prompt — 'What did you skip? What surprised you?' — before the coach gives feedback."
            },
            "5": {
              summary: "Coach feedback is the most variable step. Some coaches give transformative feedback; others offer platitudes.",
              themes: ["Feedback quality variance", "Actionability", "Timing"],
              keyQuotes: [
                { text: "My coach said 'good job' and moved on. I still don't know what I did well or poorly.", speaker: "Student D", context: "On unhelpful feedback" },
                { text: "The best feedback I got was when a coach said 'Your differential was strong but you missed the social history — here's why it matters for this case.'", speaker: "Student A", context: "On actionable feedback" }
              ],
              contextNotes: "Feedback happens immediately after the encounter. Quality ranges from specific and actionable to generic praise. Students crave specificity.",
              suggestedEmotion: 1,
              suggestedActual: "Receive verbal feedback ranging from detailed coaching to 'you did fine.' Nod and try to remember it for the note.",
              suggestedFriction: "No standard feedback framework. No written record of verbal feedback. Quality is coach-dependent.",
              suggestedWish: "Structured feedback template coaches fill out — even just 3 fields: 'Strength / Growth area / One specific thing to try next time.'"
            },
            "6": {
              summary: "Writing the illness script note is where synthesis happens, but students feel unsupported in the transition from encounter to documentation.",
              themes: ["Synthesis challenge", "Template confusion", "Isolation"],
              keyQuotes: [
                { text: "I know what happened in the encounter but translating it to the illness script format is a different skill entirely.", speaker: "Student E", context: "On note-writing" },
                { text: "I wish I could see a good example before writing mine.", speaker: "Student F", context: "On lack of exemplars" }
              ],
              contextNotes: "Students write the note alone, usually 1-2 days after the encounter. No peer review. No exemplars provided.",
              suggestedEmotion: 3,
              suggestedActual: "Sit alone with the template. Try to reconstruct what happened. Write up differentials with evidence. Submit and wait.",
              suggestedFriction: "No exemplars. No peer review. Writing in isolation without knowing what 'good' looks like.",
              suggestedWish: "An anonymized example of a strong illness script for reference — not to copy, but to calibrate quality."
            },
            "7": {
              summary: "Written feedback on the illness script is often delayed and may be cursory. Students describe this as a missed opportunity.",
              themes: ["Delayed feedback", "Cursory comments", "Missed learning window"],
              keyQuotes: [
                { text: "I got my feedback two weeks later. By then I couldn't even remember the case.", speaker: "Student C", context: "On feedback delay" },
                { text: "The comment was literally 'Looks good.' That's it.", speaker: "Student B", context: "On cursory feedback" }
              ],
              contextNotes: "Feedback arrives via VMED comments, typically 1-3 weeks after submission. The learning window has closed by then.",
              suggestedEmotion: 6,
              suggestedActual: "Check VMED periodically. Eventually get a comment. It's often too late to be useful. Sometimes it's just a checkmark.",
              suggestedFriction: "Feedback arrives after the learning window closes. Often not specific enough to improve next time.",
              suggestedWish: "48-hour turnaround on feedback, even if it's AI-assisted draft feedback the coach can review and approve."
            },
            "gap2": {
              summary: "The fade after feedback is where most learning is lost. No structured follow-up means insights evaporate.",
              themes: ["Learning loss", "No follow-up", "Cycle reset"],
              keyQuotes: [
                { text: "I never go back to old cases. There's always a new one demanding attention.", speaker: "Student A", context: "On the fade" }
              ],
              contextNotes: "Zero students in the discussion reported revisiting completed cases. The cycle resets without consolidation.",
              suggestedEmotion: 2,
              suggestedActual: "Move on. Never look at this case again. Whatever you learned fades unless it comes up in another context.",
              suggestedFriction: "No spaced repetition. No connection between cases. Each cycle is isolated.",
              suggestedWish: "A personal case portfolio that surfaces patterns across cases — 'You've now seen 3 cardiac cases — here's how your reasoning evolved.'"
            },
            "8": {
              summary: "The next case arrives and the cycle repeats. Students feel like they're on a treadmill rather than a learning trajectory.",
              themes: ["Repetition without growth", "Treadmill feeling", "Desire for progression"],
              keyQuotes: [
                { text: "Each case feels the same structurally. I'm not sure I'm getting better or just getting used to the format.", speaker: "Student D", context: "On the repeating cycle" }
              ],
              contextNotes: "Students want to feel progression but the identical structure of each cycle makes growth invisible.",
              suggestedEmotion: 2,
              suggestedActual: "Get a new one-liner. Start over. Same worksheet, same process. Hope this time is different.",
              suggestedFriction: "No visible progression between cases. No skill tracking. No connection to previous cases.",
              suggestedWish: "A dashboard showing growth across cases — 'Your differentials are getting more specific. Your PE selections are improving.'"
            }
          }
        },

        coach: {
          steps: {
            "1": {
              summary: "Coaches post cases and hope students engage early, but have no visibility into preparation timing or quality.",
              themes: ["Visibility gap", "Student engagement uncertainty"],
              keyQuotes: [
                { text: "I post the case and then it's a black box until they show up.", speaker: "Coach", context: "On lack of preparation visibility" }
              ],
              contextNotes: "Coaches select cases from a bank. They have no way to know if students have prepared until the session.",
              suggestedEmotion: 2,
              suggestedActual: "Post the case to VMED. Hope students prepare adequately. No way to gauge readiness.",
              suggestedFriction: "Zero visibility into student preparation. Can't adjust session based on prep quality.",
              suggestedWish: "A dashboard showing who's accessed the case, who's started their worksheet, and common differential directions."
            },
            "3": {
              summary: "Running the small group is rewarding but exhausting. Coaches struggle to give equal attention across 6 students in 4 hours.",
              themes: ["Time management", "Equal attention", "Teaching satisfaction"],
              keyQuotes: [
                { text: "I want to give each student a deep dive but there are six of them and four hours.", speaker: "Coach", context: "On session time constraints" }
              ],
              contextNotes: "Coaches value the teaching but feel stretched thin. Presenters get disproportionate attention.",
              suggestedEmotion: 3,
              suggestedActual: "Facilitate presentations, ask probing questions, try to engage quiet students. Run out of time for deeper teaching moments.",
              suggestedFriction: "Can't give equal depth of attention. Non-presenters often disengage. Time is always short.",
              suggestedWish: "Pre-session summary of each student's preparation quality so I can target my teaching."
            },
            "5": {
              summary: "Giving verbal feedback on the fly is challenging. Coaches want to be specific but time pressure leads to generalities.",
              themes: ["Feedback quality pressure", "Time constraints", "Specificity challenge"],
              keyQuotes: [
                { text: "I know I should be more specific, but in the moment I default to encouragement.", speaker: "Coach", context: "On feedback quality" }
              ],
              contextNotes: "Coaches recognize the feedback quality problem but feel constrained by time and cognitive load during sessions.",
              suggestedEmotion: 1,
              suggestedActual: "Give verbal feedback between encounters. Try to be specific. Often fall back to 'good job' when tired or rushed.",
              suggestedFriction: "No feedback framework to structure comments. Cognitive load from running the session.",
              suggestedWish: "A quick feedback template I can fill out during the encounter — prompts for specific observations."
            },
            "7": {
              summary: "Reviewing illness scripts is time-consuming and often done in batches, leading to delays and less thoughtful comments.",
              themes: ["Review burden", "Batch processing", "Comment quality"],
              keyQuotes: [
                { text: "I review six scripts at once on a Sunday night. By the fifth one, my comments are shorter.", speaker: "Coach", context: "On batch reviewing" }
              ],
              contextNotes: "Coaches review 6+ illness scripts per case cycle. The volume leads to delayed, shorter feedback.",
              suggestedEmotion: 6,
              suggestedActual: "Batch-review illness scripts when time allows. Comments get shorter as the stack grows. Delay is common.",
              suggestedFriction: "Volume of scripts to review. No prioritization of which students need more detailed feedback.",
              suggestedWish: "AI-assisted first-pass review that highlights the key areas I should comment on — save me from reading every line."
            }
          }
        },

        administrator: {
          macroJobs: [
            {
              id: "compliance",
              title: "Track Compliance & Completion",
              status: "Functional but manual",
              keyInsights: [
                "VMED tracks submission but not engagement quality",
                "Completion rates are high (>95%) but don't reflect learning depth",
                "Coaches submit feedback logs inconsistently"
              ],
              keyQuotes: [
                { text: "I can tell you who submitted, but not who learned.", speaker: "Administrator", context: "On the limits of compliance tracking" }
              ],
              frictionPoints: [
                "Manual cross-referencing between VMED and coach logs",
                "No automated alerts for missing submissions",
                "Feedback timeliness is tracked informally if at all"
              ]
            },
            {
              id: "progress",
              title: "Monitor Student Progress",
              status: "Largely invisible",
              keyInsights: [
                "No longitudinal view of student growth across cases",
                "Coach assessments are narrative, not structured — hard to aggregate",
                "Students who struggle may not be identified until summative evaluations"
              ],
              keyQuotes: [
                { text: "We catch struggling students too late. By the time it shows up in grades, the pattern has been going on for weeks.", speaker: "Administrator", context: "On early identification gaps" }
              ],
              frictionPoints: [
                "No structured competency tracking across cases",
                "Coach narrative feedback can't be aggregated programmatically",
                "Early warning system is essentially word-of-mouth"
              ]
            },
            {
              id: "teaching-quality",
              title: "Ensure Teaching Quality",
              status: "Aspirational",
              keyInsights: [
                "Coach quality variation is known but not measured",
                "Student evaluations of coaches happen only at semester end",
                "Best practices aren't shared across coaching groups"
              ],
              keyQuotes: [
                { text: "We know some coaches are better than others, but we don't have data to support development conversations.", speaker: "Administrator", context: "On coaching quality assessment" }
              ],
              frictionPoints: [
                "No real-time teaching quality metrics",
                "End-of-semester evaluations arrive too late for mid-course correction",
                "Coach development is ad hoc, not data-driven"
              ]
            }
          ]
        }
      },

      analysis: {
        stability: {
          "1": { level: "stable", evidence: "Consistent across all participants — the one-liner format and VMED delivery are universal.", supportCount: 7 },
          "2": { level: "stable", evidence: "All students follow the same worksheet process with minor variations in depth.", supportCount: 7 },
          "gap1": { level: "stable", evidence: "Every student confirmed the gap and knowledge decay pattern.", supportCount: 7 },
          "3": { level: "emerging", evidence: "Experience varies significantly by coach. Core structure is consistent but quality differs.", supportCount: 5 },
          "4": { level: "stable", evidence: "Standardized patient encounters follow the same checklist-driven format.", supportCount: 7 },
          "5": { level: "tentative", evidence: "Highly variable. Some coaches give detailed feedback, others give near-nothing. Pattern not stable.", supportCount: 3 },
          "6": { level: "stable", evidence: "All students write illness scripts in isolation using the same template.", supportCount: 7 },
          "7": { level: "emerging", evidence: "Feedback delay is consistent, but quality and format vary by coach.", supportCount: 5 },
          "gap2": { level: "stable", evidence: "Universal — no student revisits old cases.", supportCount: 7 },
          "8": { level: "stable", evidence: "The cycle reset is structural and consistent.", supportCount: 7 }
        },
        yieldOpportunities: [
          {
            stepId: "gap1",
            title: "Bridge the Preparation Gap",
            yieldScore: 9,
            rationale: "The gap between preparation and session causes universal knowledge decay. A simple intervention (morning-of refresher) could preserve preparation value at low cost.",
            suggestedInterventions: [
              "Automated morning-of case refresher with key differential reminders",
              "Spaced repetition prompts between assignment and session",
              "Quick self-quiz on own differential the day before"
            ]
          },
          {
            stepId: "7",
            title: "Accelerate Feedback Turnaround",
            yieldScore: 8,
            rationale: "Delayed feedback is universally cited as the biggest missed learning opportunity. The window for meaningful feedback closes within days, not weeks.",
            suggestedInterventions: [
              "AI-assisted first-pass review to reduce coach burden",
              "48-hour feedback SLA with automated reminders",
              "Structured feedback template replacing free-text comments"
            ]
          },
          {
            stepId: "5",
            title: "Standardize Verbal Feedback",
            yieldScore: 8,
            rationale: "Coach feedback quality varies enormously. A lightweight framework could raise the floor without constraining the best coaches.",
            suggestedInterventions: [
              "3-field feedback template: Strength / Growth Area / Specific Next Step",
              "Coach-facing prompts during encounters",
              "Peer observation of coaching with structured debrief"
            ]
          },
          {
            stepId: "gap2",
            title: "Close the Learning Loop",
            yieldScore: 7,
            rationale: "Zero students revisit old cases. A personal case portfolio showing growth across cases could make invisible learning visible.",
            suggestedInterventions: [
              "Personal case portfolio with cross-case pattern analysis",
              "Spaced repetition on key clinical reasoning from past cases",
              "End-of-block reflection connecting cases to competency growth"
            ]
          },
          {
            stepId: "3",
            title: "Engage Non-Presenting Students",
            yieldScore: 7,
            rationale: "Observers in small group sessions often disengage. Structured peer roles could double the learning density of each session.",
            suggestedInterventions: [
              "Assigned observer roles (differential checker, PE critic, etc.)",
              "Real-time peer feedback forms during presentations",
              "Rotating 'challenger' role who argues alternative diagnoses"
            ]
          },
          {
            stepId: "6",
            title: "Support Illness Script Writing",
            yieldScore: 6,
            rationale: "Students write in isolation without exemplars. Even one annotated example could calibrate expectations and reduce anxiety.",
            suggestedInterventions: [
              "Anonymized exemplar illness script library",
              "Peer review exchange before submission",
              "AI-powered self-check against rubric before submission"
            ]
          }
        ]
      }
    }
  ],

  cumulative: {
    stability: {
      "1": { level: "stable", evidence: "Consistent across 1 session.", supportCount: 7 },
      "2": { level: "stable", evidence: "Consistent across 1 session.", supportCount: 7 },
      "gap1": { level: "stable", evidence: "Consistent across 1 session.", supportCount: 7 },
      "3": { level: "emerging", evidence: "Coach variation noted in 1 session.", supportCount: 5 },
      "4": { level: "stable", evidence: "Consistent across 1 session.", supportCount: 7 },
      "5": { level: "tentative", evidence: "High variance in 1 session.", supportCount: 3 },
      "6": { level: "stable", evidence: "Consistent across 1 session.", supportCount: 7 },
      "7": { level: "emerging", evidence: "Delay consistent, quality varies, 1 session.", supportCount: 5 },
      "gap2": { level: "stable", evidence: "Consistent across 1 session.", supportCount: 7 },
      "8": { level: "stable", evidence: "Consistent across 1 session.", supportCount: 7 }
    },
    yieldOpportunities: [
      { stepId: "gap1", title: "Bridge the Preparation Gap", yieldScore: 9, sessions: ["session-1"] },
      { stepId: "7", title: "Accelerate Feedback Turnaround", yieldScore: 8, sessions: ["session-1"] },
      { stepId: "5", title: "Standardize Verbal Feedback", yieldScore: 8, sessions: ["session-1"] },
      { stepId: "gap2", title: "Close the Learning Loop", yieldScore: 7, sessions: ["session-1"] },
      { stepId: "3", title: "Engage Non-Presenting Students", yieldScore: 7, sessions: ["session-1"] },
      { stepId: "6", title: "Support Illness Script Writing", yieldScore: 6, sessions: ["session-1"] }
    ],
    trendNotes: "Single session — trends will emerge after session 2. Key patterns to watch: Does coach feedback quality vary by case type? Does the preparation gap shrink with practice?"
  }
};
