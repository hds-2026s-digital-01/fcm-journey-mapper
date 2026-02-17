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
    totalSessions: 2
  },

  sessions: [
    /* ================================================================
     * DAY 1 — Kickoff + Brainstorm (4 sub-sessions, ~3 hours)
     * Broad exploration: course intro, FCM critique emerged organically,
     * app ideation, team formation. Energy highest during FCM pain-point
     * brainstorm in Session 3.
     * ================================================================ */
    {
      id: "day-1",
      label: "Day 1 — Kickoff & Brainstorm",
      date: "2026-02-16",
      description: "Course kickoff, LLM foundations, vibe-coding workflow, and a deep brainstorm on FCM pain points. FCM critique emerged organically — Danielle raised it unprompted and the entire group resonated. Both teams chose FCM as their project focus.",
      participantCount: 10,

      perspectives: {
        student: {
          steps: {
            "1": {
              summary: "Students receive a one-line chief complaint on VMED with minimal context. The brevity encourages box-checking rather than clinical thinking. Students described this as feeling disconnected from clinical reality — no patient interaction, no stakes, no urgency.",
              themes: ["Minimal context creates artificial broadness", "Assignment feels disconnected from clinical urgency", "Timing varies widely — night before vs. week prior"],
              keyQuotes: [
                { text: "you get a cheap complaint, and then we have a form that we fill out, which is vindicates, and you come up with all the possible diagnoses that it could be", speaker: "Danielle", context: "Describing the literal first step of FCM case delivery" },
                { text: "you just come up with a differential, and then you kind of put random things just to fill out, like, whatever acronym you're using. And it's kind of like random things that like, oh, pregnancy. And there's like, no reason at all to expect pregnancy, but Oh, I did have to put something down.", speaker: "Danielle", context: "How the VINDICATE worksheet encourages filler over reasoning" },
                { text: "everything was more like theoretical, and there was no like, I know, sense of urgency attached to the information", speaker: "Danielle", context: "Contrasting preclinical FCM with clerkship urgency" }
              ],
              contextNotes: "The assignment is delivered through VMED. Students fill out a VINDICATE(S) mnemonic-based differential diagnosis form. The form structure encourages breadth over depth — students pad with implausible diagnoses to fill the template. No coach engagement at this stage.",
              suggestedEmotion: 2,
              suggestedActual: "Receive a one-line chief complaint on VMED. Open the VINDICATE(S) worksheet. Generate a broad differential, often padding with implausible diagnoses to fill the template. Complete it anywhere from the night before to a week prior.",
              suggestedFriction: "The one-line prompt with no patient context makes the exercise feel abstract and formulaic. Students game the system by filling in unlikely diagnoses. No feedback loop. Timing flexibility means some students lose all momentum.",
              suggestedWish: "A more interactive, case-rich starting experience that creates genuine clinical stakes — not a static form."
            },
            "2": {
              summary: "Students use the VINDICATE(S) mnemonic framework to build a broad differential. This is where the bulk of pre-session independent work happens, but students described it as formulaic — the goal becomes filling out the form rather than developing genuine clinical reasoning. Multiple students noted they take a path-of-least-resistance approach.",
              themes: ["Template rewards completion over reasoning quality", "Path of least resistance — students fill the answer key", "Differential generated in isolation without feedback", "No structured use of evidence-based resources"],
              keyQuotes: [
                { text: "medical students try to be as efficient as possible and find the path of least resistance, and therefore, we'll go about just filling out the answer key, as opposed to actually trying to ingrain the system in their head", speaker: "Matt (student)", context: "Why the VINDICATE worksheet fails to build real clinical reasoning" },
                { text: "a lot of time our classes were trying to fill out a templated format. And I get that you're trying the exercises to teach us to have some sort of system in our mind, but there you can easily get... we just fill out the vindicates key", speaker: "Matt (student)", context: "Shared experience from his and Danielle's FCM group" },
                { text: "when I do the differential form, then it's not until a week later that we're looking at the X ray", speaker: "Danielle", context: "Temporal disconnect between building differential and getting clinical data" }
              ],
              contextNotes: "VINDICATE(S) = Vascular, Infectious, Neoplastic, Degenerative, Iatrogenic, Congenital, Autoimmune, Traumatic, Endocrine/metabolic, Structural. Students recognized the pedagogical intent but described execution as counterproductive — teaches form-filling, not reasoning.",
              suggestedEmotion: 2,
              suggestedActual: "Open the VINDICATE(S) template. Fill in differential diagnoses across categories, often padding with implausible entries to complete the form. Submit and move on to other coursework.",
              suggestedFriction: "Mnemonic framework encourages breadth over reasoning depth. Students game the system. No adaptive feedback on reasoning quality. Exercise feels disconnected from actual clinical decision-making.",
              suggestedWish: "An interactive diagnostic simulation with branching paths and consequences. A system that captures reasoning — not just answers — at each decision point, and sends that data to the coach."
            },
            "gap1": {
              summary: "One of the most emotionally charged pain points. Multiple students described the days-long gap between completing the differential and the FCM session as a major structural flaw. During the gap, students attend other classes, study other material, and the case fades from memory. Students described arriving at the session with completely stale thinking.",
              themes: ["Temporal disconnect erases cognitive engagement", "Other coursework crowds out FCM", "No re-engagement mechanism exists", "Gap converts iterative learning into fragmented experience"],
              keyQuotes: [
                { text: "if you go ahead and, like, get it done the week prior, then a week goes by and you've just done this differential, and it's like, probably plus or minus helpful. But then there's a lag between that and then... you don't really get closure on whatever this patient case is until the next week.", speaker: "Danielle", context: "The structural gap between assignment and session" },
                { text: "sometimes with FCM, when there's such a huge break and lag and like, this piece is here and that piece is there, it's like, hard to learn. Or like, it's not hard to learn, but it just makes it, like convoluted for no reason.", speaker: "Jocelyn", context: "Reacting to fragmented delivery of case information" },
                { text: "it's also you're in class, like every day, and you may be discussing other things, so it's just a lag", speaker: "Danielle", context: "Why the gap is especially damaging for preclinical students with packed schedules" }
              ],
              contextNotes: "Matt Trowbridge identified this as a central design flaw: 'the space between... it's like, by the time you get back to it, stale, and so you kind of have no chance.' The gap is structural — built into the weekly FCM cadence.",
              suggestedEmotion: 2,
              suggestedActual: "Days pass. Attend other classes, study other material. The chief complaint and differential fade from active memory. No system re-engages you. Arrive at the FCM session with stale or forgotten thinking.",
              suggestedFriction: "The single most cited structural problem. Breaks cognitive continuity. Students who complete work early are penalized most. No nudge, no spaced repetition, no re-engagement mechanism.",
              suggestedWish: "A system that keeps the case alive during the gap — periodic micro-interactions, a brief 'pick up where you left off' prompt before the session."
            },
            "3": {
              summary: "The 4-hour small group session was the core in-person experience but was heavily criticized for length, pacing, and format. Group dynamics allow students to hide behind peers. The format focuses too much on information gathering rather than synthesis and presentation. Quality varies dramatically by coach.",
              themes: ["Four hours is universally too long", "Group dynamic allows hiding behind peers", "Heavy on gathering, light on synthesis", "Format feels antiquated"],
              keyQuotes: [
                { text: "I wasn't a huge fan of FCM, of the weekly four hour kind of like clinical type of thing, I felt like it was kind of clunky and not super useful", speaker: "Danielle", context: "Opening statement in Session 3 brainstorm — set the tone for the entire FCM critique" },
                { text: "during the FCM cases, everyone in the group in the room comes up with questions that we want to ask the patient. So I think that aspect of trying to figure out how to incorporate that into this idea would definitely like be pleasing to everyone", speaker: "Jocelyn", context: "Identifying collaborative questioning as the valuable kernel within the bloated session" },
                { text: "you can oftentimes, like, lean on your fellow classmates, since, like, you know, one person's going to bring up like a zebra, another person's going to bring up, like, a more common diagnosis... But it's not really reflective of your own individualized thinking.", speaker: "Derek", context: "Group dynamic masks individual reasoning gaps" }
              ],
              contextNotes: "Kevin provided strong clerkship perspective: different FCM groups had wildly different starting points when they hit the wards. Session includes reviewing case/differential, questioning standardized patient, reviewing imaging/labs, discussing diagnosis.",
              suggestedEmotion: 6,
              suggestedActual: "Arrive with stale differentials. Group reviews the case together. Collaboratively generate questions for the standardized patient. One student practices history-taking. Group reviews imaging and labs. Discuss and narrow the differential. Session stretches to 4 hours.",
              suggestedFriction: "Too long (4 hours). Individual practice time is minimal — Kevin noted only 2-3 histories per semester. Group dynamics mask individual gaps. Format feels outdated. Quality varies dramatically by coach.",
              suggestedWish: "Shorter, more focused sessions. Students arrive pre-primed through interactive tools. In-person time for synthesis, presentation practice, collaborative reasoning about close-call differentials."
            },
            "4": {
              summary: "The standardized patient encounter happens within the 4-hour session. Students take turns interviewing the actor. The encounter is the most valued part of FCM in concept but severely limited in practice — each student gets only 2-3 turns across an entire semester. The real challenge is not the interview but real-time differential adjustment.",
              themes: ["Extremely limited individual practice — 2-3 encounters per semester", "Observing peers is a poor substitute", "Real-time differential adjustment is the hard part, not the interview"],
              keyQuotes: [
                { text: "my FCM was every week one person practice doing history, and so throughout the whole semester, you'd only do, like one, two or three, like two or three histories, and you really didn't get any reps in, which is the whole point of FCM", speaker: "Kevin", context: "Quantifying the scarcity of actual patient encounter practice" },
                { text: "I think it's not necessarily like, in my opinion, hard for most people to learn how to interview patients, but it's difficult to like, generate like a differential just based on like, a chief complaint, and then, like, you get information from your patient or the chart, and then you have to quickly, like, adjust your differential automatically", speaker: "Farah", context: "Distinguishing interview skill (easier) from real-time differential adjustment (harder)" }
              ],
              contextNotes: "Farah made an important distinction: the interview itself is not the hard part — it's the real-time cognitive work of adjusting your differential based on incoming information. This hidden cognitive complexity is not addressed by the current format.",
              suggestedEmotion: 1,
              suggestedActual: "One student interviews the standardized patient while others observe. The student asks questions, performs limited physical exam. Across a full semester, each student gets only 2-3 turns. Observers learn passively.",
              suggestedFriction: "Extreme scarcity — 2-3 reps per semester. No way to practice outside the session. Real cognitive challenge (adjusting differential in real-time) is not explicitly coached. Each encounter is high-stakes relative to its rarity.",
              suggestedWish: "An AI-powered practice partner for unlimited patient encounter simulations. Voice-agent technology for presentation practice. Decouple encounter practice from the weekly session schedule."
            },
            "5": {
              summary: "Coach feedback during and after the encounter was described as limited, inconsistent, and poorly individualized. There is no formalized feedback on the pre-session differential. In-session feedback is often group-level rather than individual. Coach quality varies dramatically.",
              themes: ["Feedback addresses the group, not the student", "No formalized feedback on the differential", "Coach quality varies creating unequal experiences", "Presentation feedback is minimal or absent"],
              keyQuotes: [
                { text: "there's not really formalized feedback on that, necessarily. And second, when you're actually in class going over the case, you can oftentimes, like, lean on your fellow classmates... But it's not really reflective of your own individualized thinking", speaker: "Derek", context: "Absence of individualized feedback as a key gap" },
                { text: "part of the problem I think you're getting to is the fact that there is, like, very limited room for feedback in FCM", speaker: "Derek", context: "Opening his feedback analysis" },
                { text: "some people like, absolutely no practice and had no idea what they're doing, whereas other people were, like, fairly polished for starting. So I think there's a big variability in what each FCM coach focuses on", speaker: "Kevin", context: "Downstream effect of inconsistent coaching on clerkship readiness" }
              ],
              contextNotes: "Derek made the most sophisticated observation: the real value would be capturing individual reasoning data over time so coaches could provide targeted feedback and students could track development. He explicitly called out the dual audience: useful for coaches AND students.",
              suggestedEmotion: 6,
              suggestedActual: "Coach provides group-level verbal feedback during and after the case discussion. No structured feedback on the pre-session differential. Quality depends entirely on the individual coach.",
              suggestedFriction: "Feedback is group-level, not individualized. No data on individual student reasoning. No longitudinal tracking. Coach quality varies widely. Pass/fail nature of FCM reduces motivation for improvement.",
              suggestedWish: "A system that captures individual student reasoning at each decision point, tracks it longitudinally, and provides coaches with actionable data for targeted feedback."
            },
            "6": {
              summary: "The illness script / note-writing step was not directly discussed in Day 1 transcripts. However, Farah's commentary about the gap between gathering and synthesizing information strongly implies this step is under-emphasized. She noted FCM focuses too much on gathering information rather than synthesizing and communicating it — 'the big gap between pre clinicals and clinicals.'",
              themes: ["Synthesis and presentation under-emphasized", "Note-writing not experienced as a distinct memorable step", "Transition from gathering to communicating is the real skill needed"],
              keyQuotes: [
                { text: "FCM time wise, they focused a lot on gathering information rather than synthesizing and communicating information, which is actually the big gap between pre clinicals and clinicals", speaker: "Farah", context: "Identifying the synthesis/communication gap as the core missed opportunity in FCM" },
                { text: "it's not necessarily like, in my opinion, hard for most people to learn how to interview patients, but it's difficult to like, generate like a differential just based on like, a chief complaint, and then... you have to quickly, like, adjust your differential automatically. And then it's like, what do you do next?", speaker: "Farah", context: "The cognitive challenge of real-time synthesis" }
              ],
              contextNotes: "Evidence is thin. No student described a note-writing or illness script exercise. The synthesis step appears to happen informally during group discussion rather than through a formal written deliverable. This may indicate step 6 is poorly formalized or not experienced as distinct.",
              suggestedEmotion: 1,
              suggestedActual: "Unclear from Day 1 transcripts. If note-writing exists, it is not memorable enough for students to discuss. Synthesis appears to happen informally during the group discussion.",
              suggestedFriction: "If note-writing exists, it isn't impactful enough to discuss. The real friction is that synthesis skills are under-practiced. Students arrive at clerkships without adequate practice communicating clinical reasoning in written form.",
              suggestedWish: "A structured synthesis exercise — perhaps an AI-assisted illness script generator with feedback on reasoning structure and communication."
            },
            "7": {
              summary: "Written feedback was not described in detail. The broader feedback inadequacy theme (Step 5) extends here. The pass/fail nature of FCM was cited as reducing the incentive for coaches to write and students to read detailed feedback. Jocelyn noted that individualized feedback is being implemented for clerkships but not yet for pre-clerkship.",
              themes: ["Written feedback appears absent or inconsequential", "Pass/fail grading reduces motivation for both sides", "Individualized feedback is a clerkship-era innovation not yet in pre-clerkship"],
              keyQuotes: [
                { text: "especially not during pre clerkships. I know, like during clerkships, they're trying to implement more like individualized feedback, but during pre clerkships is still kind of like a do your best.", speaker: "Jocelyn", context: "Confirming absence of individualized feedback systems in pre-clerkship" },
                { text: "the fact that all of FCM and the CPS exam we take at the end of FCM is all pass fail. If we can make this as low stakes as possible, to just kind of like introduce the material in a cohesive way, I think that would be important.", speaker: "Danielle", context: "Proposing the app maintain low-stakes feel consistent with pass/fail FCM" }
              ],
              contextNotes: "Written feedback was not directly discussed as a distinct step. The pass/fail structure suggests detailed written commentary simply doesn't happen. This step needs more exploration in future sessions.",
              suggestedEmotion: 2,
              suggestedActual: "Unknown from Day 1 transcripts. If written feedback exists, students don't experience it as meaningful or memorable. Pass/fail grading structure suggests minimal written commentary.",
              suggestedFriction: "If feedback exists, it arrives too late. Pass/fail removes incentive. No longitudinal tracking through written feedback.",
              suggestedWish: "Automated, real-time feedback on reasoning quality that accumulates over time. A dashboard showing growth patterns and persistent reasoning gaps."
            },
            "gap2": {
              summary: "No structured follow-up after the session was described. Jocelyn noted that students end up learning all the cases at the end of the semester right before the Clinical Performance Exam, rather than building knowledge cumulatively. The case-by-case format prevents pattern recognition across cases.",
              themes: ["No structured review after case concludes", "Knowledge is not cumulative — students cram before the final", "No spaced repetition or longitudinal reinforcement"],
              keyQuotes: [
                { text: "even though, in theory, we're supposed to be preparing for that exam throughout the semester, through the FCM cases. Really, it doesn't even feel like you're doing that, because the cases are so kind of disorganized. So everybody ends up learning the cases at the end, right before the exam.", speaker: "Jocelyn", context: "How lack of cumulative learning leads to end-of-semester cramming" },
                { text: "you don't really get closure on whatever this patient case is until the next week", speaker: "Danielle", context: "Delayed closure — but even that closure is transient" }
              ],
              contextNotes: "The fade is implicit rather than explicitly named. Students described FCM as fragmented and non-cumulative. The Clinical Performance Exam (CPS) is the only accountability checkpoint — suggesting individual case learning does not persist.",
              suggestedEmotion: 2,
              suggestedActual: "Case ends. Move on to next week's coursework. No structured review. No spaced repetition. At semester's end, re-learn all cases for the Clinical Performance Exam.",
              suggestedFriction: "Complete absence of post-session reinforcement. Knowledge does not accumulate case-over-case. Semester's learning collapses into a cramming session before the final exam.",
              suggestedWish: "Longitudinal tracking of reasoning across cases. Spaced repetition. A portfolio of case experiences that reveals patterns."
            },
            "8": {
              summary: "The cycle-repeats nature of FCM was implicit throughout. Students described FCM as a weekly cadence with the same structural problems repeating. No student described a mechanism by which learning from one case informs the approach to the next.",
              themes: ["Each case is standalone — no cumulative building", "Same structural frustrations repeat weekly", "No mechanism for iteration between cases"],
              keyQuotes: [
                { text: "I think it was very aimed at, like, getting the right answers. But when you go to clerkships, you're very much on, like, Okay, well, what else can we, you know, brainstorm. What else do you think is going on?", speaker: "Danielle", context: "Contrasting FCM's case-by-case mindset with open-ended clerkship reasoning" }
              ],
              contextNotes: "This step was not discussed as a distinct moment — it is the structural repetition. The key insight is that repetition without iteration means the same problems persist across every case.",
              suggestedEmotion: 2,
              suggestedActual: "New chief complaint arrives. Open the same VINDICATE(S) template. The cycle repeats with no structural variation or cumulative development.",
              suggestedFriction: "Same problems repeat each week. No progressive difficulty. No personalization based on prior performance. No connection between cases.",
              suggestedWish: "Progressive case complexity that adapts to student development. Connections between cases. Longitudinal progress tracking."
            }
          }
        },

        coach: {
          steps: {
            "1": {
              summary: "No direct discussion of coach role at the assignment stage. Danielle implied coaches do not review or respond to the initial differential worksheet before the session.",
              themes: ["Coach passive at this stage", "No pre-session engagement with student work"],
              keyQuotes: [],
              contextNotes: "Coaches have no visibility into student reasoning quality before the session begins.",
              suggestedEmotion: 2,
              suggestedActual: "Post the case to VMED. No further engagement until the session.",
              suggestedFriction: "Zero visibility into student preparation. Can't adjust session based on prep quality.",
              suggestedWish: "A dashboard showing who's engaged with the case and the quality of their reasoning."
            },
            "3": {
              summary: "Coaches run the session but quality varies dramatically. Kevin noted students from different FCM groups arrived at clerkships with very different skill levels, implying inconsistent coaching.",
              themes: ["Coaching quality varies enormously", "No standardized rubric", "No pre-session data on individual students"],
              keyQuotes: [
                { text: "there's a big variability in what each FCM coach focuses on, and I think that's been one of my issues. FCM is just the standardized component is just not standardized at all", speaker: "Kevin", context: "Naming the core teaching quality problem" },
                { text: "I started my rotations on I am... you could tell, like, people from different FCM had very different starting points, where, like, some people like, absolutely no practice and had no idea what they're doing, whereas other people were, like, fairly polished for starting", speaker: "Kevin", context: "Direct clerkship-entry evidence of FCM quality variation" }
              ],
              contextNotes: "Kevin's clerkship perspective is the strongest evidence: variable outcomes prove variable coaching quality.",
              suggestedEmotion: 2,
              suggestedActual: "Facilitate the 4-hour session. Focus areas are self-determined, not standardized. No pre-session data on students.",
              suggestedFriction: "No standardized coaching rubric. No pre-session data on individual student reasoning. Four-hour format may exhaust coach and students alike.",
              suggestedWish: "Pre-session summary of each student's preparation quality so coaching can be targeted."
            },
            "5": {
              summary: "Coaches lack tools for individualized assessment. No pre-session visibility into student reasoning and no standardized framework for feedback delivery.",
              themes: ["Coaches lack data for individualized feedback", "No standardized feedback framework", "Feedback is ad hoc and coach-dependent"],
              keyQuotes: [
                { text: "that data is sent to the FCM coach, so you can't really fake it till you make it like, oh yeah, I knew it was a PE when you thought it was anxiety", speaker: "Danielle", context: "Proposing an interactive tool that captures and shares student reasoning with coaches" }
              ],
              contextNotes: "Danielle envisioned a future where coaches receive reasoning data before the session, enabling them to say 'some of us were thinking anxiety — why is PE more likely?'",
              suggestedEmotion: 6,
              suggestedActual: "Give verbal feedback to the group, not individuals. Default to generic encouragement. Cannot target instruction to actual reasoning gaps because data doesn't exist.",
              suggestedFriction: "No dashboard or data on individual performance. No pre-session engagement with student work. Feedback is ad hoc and coach-dependent.",
              suggestedWish: "Student reasoning data sent to coach before the session. Targeted, individualized feedback based on actual reasoning patterns."
            },
            "7": {
              summary: "Written feedback appears inconsistent. Pass/fail structure and lack of standardized rubrics mean this varies widely by coach.",
              themes: ["Pass/fail may disincentivize detailed written feedback", "No standardized rubric"],
              keyQuotes: [],
              contextNotes: "No detailed discussion of coach burden in writing feedback on Day 1. Evidence is thin.",
              suggestedEmotion: 2,
              suggestedActual: "May or may not provide written feedback in LMS. Quality and timing vary by coach. Pass/fail reduces incentive for thorough review.",
              suggestedFriction: "Feedback timing unknown but likely delayed. No evidence that written feedback loops back into student development.",
              suggestedWish: "AI-assisted feedback drafting that reduces coach burden while improving quality and consistency."
            }
          }
        },

        administrator: {
          macroJobs: [
            {
              id: "compliance",
              title: "Track Compliance & Completion",
              status: "Coarse-grained — tracks attendance and submission, not quality",
              keyInsights: [
                "FCM is pass/fail, simplifying compliance but reducing signal about development",
                "The Clinical Performance Exam (CPS) at semester's end is the primary assessment checkpoint",
                "No granular tracking of engagement or reasoning quality within the FCM cycle"
              ],
              keyQuotes: [
                { text: "the fact that all of FCM and the CPS exam we take at the end of FCM is all pass fail", speaker: "Danielle", context: "Describing the low-stakes grading structure" }
              ],
              frictionPoints: [
                "Pass/fail provides minimal signal beyond attendance",
                "No mechanism to detect students going through motions vs. genuinely engaging",
                "Compliance tracking is disconnected from learning quality"
              ]
            },
            {
              id: "progress",
              title: "Monitor Student Progress",
              status: "Essentially unaddressed — no longitudinal tracking exists",
              keyInsights: [
                "No individualized progress monitoring during pre-clerkship FCM",
                "Clerkships beginning to implement individualized feedback but pre-clerkship lags behind",
                "Derek proposed confidence-vs-proficiency tracking as a valuable metric",
                "CPS exam is the only summative assessment, revealing no formative trajectory"
              ],
              keyQuotes: [
                { text: "one of the advantages of Danielle's app idea here is being able to actually gather data on what each individual student's sticking points are and what their strengths are, so that they can look at that and kind of focus on that moving forward", speaker: "Derek", context: "Proposing individualized data capture for longitudinal tracking" },
                { text: "especially not during pre clerkships. I know, like during clerkships, they're trying to implement more like individualized feedback, but during pre clerkships is still kind of like a do your best", speaker: "Jocelyn", context: "Confirming absence of progress monitoring in pre-clerkship" }
              ],
              frictionPoints: [
                "No formative assessment data between start of semester and CPS exam",
                "No way to identify at-risk students early in the FCM cycle",
                "Group-level data masks individual performance variation",
                "Coach variability means progress monitoring would need to be coach-independent"
              ]
            },
            {
              id: "teaching-quality",
              title: "Ensure Teaching Quality",
              status: "Poorly addressed — quality varies by coach with no visibility",
              keyInsights: [
                "FCM coaching quality varies dramatically across groups",
                "No standardized rubric, focus areas, or quality metrics",
                "Students from different groups arrive at clerkships with measurably different skill levels",
                "The intended 'standardized' component is not standardized in practice"
              ],
              keyQuotes: [
                { text: "there's a big variability in what each FCM coach focuses on, and I think that's been one of my issues. FCM is just the standardized component is just not standardized at all", speaker: "Kevin", context: "Naming the core teaching quality problem" }
              ],
              frictionPoints: [
                "No calibration across FCM coaches",
                "No data-driven quality monitoring",
                "Coach focus areas are self-determined, not standardized",
                "No feedback loop from clerkship outcomes back to FCM coaching quality"
              ]
            }
          ]
        }
      },

      analysis: {
        stability: {
          "1": { level: "emerging", evidence: "Danielle provided detailed account of assignment process. Jocelyn and Matt (student) corroborated VINDICATE worksheet limitations. No contradicting perspectives.", supportCount: 3 },
          "2": { level: "stable", evidence: "Three students (Danielle, Matt, Jocelyn) independently described the same template-filling behavior and its limitations. Most heavily discussed step.", supportCount: 3 },
          "gap1": { level: "stable", evidence: "Danielle and Jocelyn both described the gap independently. Matt Trowbridge confirmed it as a core pain point. Universally recognized as problematic.", supportCount: 4 },
          "3": { level: "stable", evidence: "Five students (Danielle, Jocelyn, Matt, Derek, Kevin) all contributed critiques. Most discussed step across all four transcripts. Universal agreement on core problems.", supportCount: 5 },
          "4": { level: "emerging", evidence: "Kevin provided the most direct evidence (2-3 histories per semester). Farah added cognitive complexity dimension. Others did not discuss specifically.", supportCount: 3 },
          "5": { level: "stable", evidence: "Derek provided detailed analysis. Kevin corroborated with clerkship outcome data. Danielle proposed solution-state. Three independent perspectives pointing to the same gap.", supportCount: 3 },
          "6": { level: "tentative", evidence: "No student directly described a note-writing step. Farah's synthesis comments are the closest evidence. Needs validation.", supportCount: 1 },
          "7": { level: "tentative", evidence: "No direct description of written feedback delivery. Inferred from broader feedback discussion and pass/fail context.", supportCount: 1 },
          "gap2": { level: "emerging", evidence: "Jocelyn's comment about end-of-semester cramming is direct evidence. Danielle's delayed closure comments imply it. No one described post-session follow-up.", supportCount: 2 },
          "8": { level: "tentative", evidence: "Implied by discussion of non-cumulative learning. No student described the transition between cases explicitly.", supportCount: 1 }
        },
        yieldOpportunities: [
          {
            stepId: "gap1",
            title: "Bridge the Gap with AI-Powered Case Continuity",
            yieldScore: 9,
            rationale: "The week-long gap was the most universally cited pain point (4+ participants). It's structural and undermines every other step. Solving it has cascading positive effects on steps 1, 2, 3, and 5.",
            suggestedInterventions: [
              "AI-driven 'case alive' micro-interactions during the gap",
              "Spaced repetition nudges keyed to the specific case",
              "'Pick up where you left off' briefing 24 hours before the session",
              "Interactive case continuation building on the initial differential"
            ]
          },
          {
            stepId: "2",
            title: "Replace Static Worksheet with Interactive Diagnostic Simulation",
            yieldScore: 9,
            rationale: "The VINDICATE(S) template was described by 3 students as encouraging form-filling over reasoning. Danielle prototyped an alternative during the session and got immediate group buy-in. Both teams chose to build on this.",
            suggestedInterventions: [
              "Choose-your-own-adventure diagnostic simulation with branching paths and consequences",
              "Require typed clinical reasoning at each decision point (not just answer selection)",
              "Integrate cost awareness, likelihood ratios, evidence-based medicine principles",
              "Send reasoning data to FCM coach before the session"
            ]
          },
          {
            stepId: "5",
            title: "Enable Data-Driven Individualized Coaching",
            yieldScore: 8,
            rationale: "Derek identified that feedback is group-level, not individualized. This addresses both student experience (better feedback) and administrator need (progress monitoring, teaching quality). Kevin's evidence of variable outcomes makes it urgent.",
            suggestedInterventions: [
              "Dashboard for coaches showing individual student reasoning patterns and persistent gaps",
              "Pre-session briefing highlighting common reasoning errors in the group's submissions",
              "Standardized feedback rubric aligned to FCM learning objectives",
              "Longitudinal progress visualization for students and coaches"
            ]
          },
          {
            stepId: "3",
            title: "Restructure Session: Less Gathering, More Synthesis",
            yieldScore: 8,
            rationale: "Multiple students (Farah, Kevin, Danielle) noted sessions are too long and spend disproportionate time on information gathering. If students arrive pre-primed, in-person time could be radically restructured.",
            suggestedInterventions: [
              "Shorten the session by moving information gathering to interactive pre-session tool",
              "Dedicate in-person time to presentation practice and synthesis",
              "Add structured presentation rounds where every student presents",
              "Use AI voice agent for individual presentation practice outside sessions"
            ]
          },
          {
            stepId: "4",
            title: "Multiply Patient Encounter Reps with AI Simulation",
            yieldScore: 7,
            rationale: "Kevin quantified the scarcity: 2-3 encounters per semester. Farah identified that the real challenge is real-time differential adjustment. AI simulations could provide unlimited practice.",
            suggestedInterventions: [
              "AI standardized patient voice agent for unlimited history-taking practice",
              "Real-time differential adjustment exercises during simulation",
              "Post-encounter feedback on questioning strategy and reasoning",
              "Integration with the interactive case simulation"
            ]
          },
          {
            stepId: "gap2",
            title: "Build Longitudinal Case Portfolio with Spaced Review",
            yieldScore: 7,
            rationale: "Jocelyn's observation that students cram all cases before the CPS exam reveals no cumulative learning occurs. A case portfolio with spaced review could transform isolated experiences into a developmental arc.",
            suggestedInterventions: [
              "Automated case portfolio accumulating across the semester",
              "Spaced repetition of key reasoning lessons from past cases",
              "AI-highlighted cross-case connections",
              "Progress dashboard showing trajectory across all cases"
            ]
          }
        ]
      }
    },

    /* ================================================================
     * DAY 2 — FCM Journey Mapping + Instructor Deep Dive (2 sub-sessions)
     * Focused exploration: specific step-by-step FCM journey mapping,
     * then instructor/coach perspective deep dive. Rich first-person
     * accounts of the Gap. "Reasoning over checkboxes" emerged as the
     * single most actionable design insight.
     * ================================================================ */
    {
      id: "day-2",
      label: "Day 2 — Journey Mapping & Instructor View",
      date: "2026-02-17",
      description: "Focused FCM journey mapping with first-person step-by-step accounts, followed by an instructor-perspective deep dive. Significantly sharpened Day 1 findings — the Gap was deeply corroborated, social loafing was named explicitly, and the 'reasoning over checkboxes' insight emerged as the strongest design principle.",
      participantCount: 8,

      perspectives: {
        student: {
          steps: {
            "1": {
              summary: "Students receive a one-line chief concern with potential for engagement that quickly dissipates. Multiple students described immediately thinking about follow-up questions and 'can't miss' diagnoses, but the energy fades because there is no feedback loop or interactive element.",
              themes: ["Initial spark quickly fades", "Efficiency over depth", "Variable engagement across students"],
              keyQuotes: [
                { text: "How did I start thinking about, like, some extra information I would want, like, past medical history, more qualifying factors in terms of what the shortness of breath is associated with... I'm also just kind of thinking of, like, what are some things that you like, don't want to miss", speaker: "Matty", context: "Describing initial reaction to receiving a case prompt" },
                { text: "I am just getting through this as fast as I possibly can... I am getting the diff generated and out the door, because I'm not gonna think about this for another week", speaker: "Matt Trowbridge (paraphrasing Matt/student)", context: "Characterizing the efficiency-first mindset" }
              ],
              contextNotes: "Trowbridge explicitly named this as a step 'everybody wishes were awesome' but currently falls flat. Day 2 sharpens Day 1 insight that this step has untapped potential for gamification.",
              suggestedEmotion: 1,
              suggestedActual: "Receive a one-line chief concern on VMED. Briefly consider what questions to ask and what diagnoses not to miss. Then move on quickly to generate a differential.",
              suggestedFriction: "No interactive element. No feedback on whether initial thinking is on track. No engagement hook beyond the bare prompt.",
              suggestedWish: "An engaging, gamified first encounter with the case that sparks genuine curiosity and sets up meaningful preparation."
            },
            "2": {
              summary: "Students use systematic mnemonics (VINDICATE, head-to-toe) to build broad differentials. The process is solitary with no real-time feedback. Submission varies wildly by coach. Danielle's profound Day 2 insight: the system should evaluate reasoning quality, not just checkbox completion.",
              themes: ["Breadth over depth — exhaustive differentials including rare diagnoses", "Checkbox mentality — complete it to show you did it", "No standardized submission or feedback", "Reasoning quality invisible"],
              keyQuotes: [
                { text: "I feel like a lot of kids like you, to use, like, one of the mnemonics. I think I used, like, vindicate, and then I would just go as broad as possible. Because usually when like end up in like class, like you like, I feel like the push is to have some like, even like the rare things", speaker: "Student", context: "Describing the mechanical process of building a differential using mnemonics" },
                { text: "We just did it, showed that we did it, and then talk about it in class... We never got feedback on the differentials itself", speaker: "Jocelyn", context: "The differential was a completion exercise with no substantive feedback" },
                { text: "maybe it's less important if they get the differential correct, but more important if their reasoning is correct... focusing more on analysis and less on just like check boxes", speaker: "Danielle", context: "Day 2 Session 2 — called 'profound' by Trowbridge" }
              ],
              contextNotes: "Day 2 significantly deepens Day 1 here. Danielle's reasoning-vs-checkboxes insight is the single most actionable design principle from both days. Submission process variability (Box, email, bring to class) means learning experience is random depending on coach assignment.",
              suggestedEmotion: 2,
              suggestedActual: "Use a mnemonic to generate a broad differential. Upload or email it (format varies by coach). Rarely receive feedback on the differential itself. Move on.",
              suggestedFriction: "No feedback on reasoning quality. Submission varies by coach. No way to know if you're on track. Emphasis on breadth discourages deep thinking about any single diagnosis.",
              suggestedWish: "A system that captures and evaluates clinical reasoning (not just the list), gives immediate feedback, and standardizes the submission/review process."
            },
            "gap1": {
              summary: "The most vividly discussed invisible step across both days. Every student who spoke confirmed complete knowledge decay during the gap. Days (often a full week) pass while students are consumed by physiology/anatomy coursework and exams. Most do not refresh before walking into the session.",
              themes: ["Submit it and forget it — universal experience", "Competing priorities dominate — exams crowd out FCM", "No re-engagement mechanism", "Low stakes = low persistence"],
              keyQuotes: [
                { text: "I said it and forget it. I don't know. I was probably, like, one of the least engaged people in FCM... in that span of time, I was like, back to learning about, like, physiology, or whatever, step one Minjia, into my brain. So it felt like the actual, like clinically relevant stuff just got pushed to the wayside.", speaker: "Derek", context: "Complete displacement of FCM material by basic science coursework" },
                { text: "our exam for always Friday through the weekend, and so like, I and then, like, completely forget about it... I wasn't gonna, like, Oh, let me keep up with this every day and be thinking about this every day, because it was just very low on the priority list.", speaker: "Danielle", context: "How exam timing makes FCM preparation a casualty of scheduling" },
                { text: "I usually would just, like, pull up my sheet when I got in the room, honestly... I would do the differential on Tuesday, and then, like, worry about all the big things, and then walk in, like, Monday in the afternoon for FCM and be like, you know, I don't even remember what the one liner was.", speaker: "Student", context: "Reconstructing forgotten case knowledge right before the session" }
              ],
              contextNotes: "Already identified in Day 1, but Day 2 provides much richer personal accounts. Multiple students independently confirmed the exact same pattern. Trowbridge explicitly suggested this is a prime opportunity: 'maybe you play the game twice.'",
              suggestedEmotion: 2,
              suggestedActual: "Days pass. Completely forget the case while focusing on exams and basic science. Either walk in cold or do a 30-second refresh by pulling up the worksheet right before the session.",
              suggestedFriction: "No re-engagement mechanism. No spaced repetition. No quick refresh tool. Scheduling mismatch between preparation and session. Case knowledge fully decays.",
              suggestedWish: "A quick, low-friction re-engagement experience (gamified refresh, 2-minute recap challenge) right before or at the start of the FCM session."
            },
            "3": {
              summary: "Day 2 made the social loafing dynamic explicit. A few vocal students carry the discussion while others disengage. 'No coercive mechanism' for individual participation became a running theme. The flipped-classroom model depends on quality preparation which doesn't happen.",
              themes: ["Social loafing is the norm", "No coercive mechanism for participation", "Generic group feedback", "Flipped classroom without the flip"],
              keyQuotes: [
                { text: "the coach feedback is more generalized to the group, not individualized to the students... how the sessions are designed, there's not a coercive mechanism to have students really interact. So you might be relying on ideas from one or two and then the rest are social loafing.", speaker: "Matt (student)", context: "Identifying the fundamental engagement problem" },
                { text: "I was just I was taking up space, and I knew that other people would be more vocal, and so it's like, I would eventually be refreshed once they started talking about what's on their differential.", speaker: "Danielle", context: "Candidly describing passive participation" },
                { text: "it is generally a lower or stake environment. But I think that, like building something like this, where it is like, like, less friction to be engaged, I think is actually really valuable for that reason.", speaker: "Student", context: "Acknowledging FCM's low-stakes nature while arguing for technology-enabled engagement" }
              ],
              contextNotes: "The 'coercive mechanism' phrase became a running theme (Trowbridge found it amusingly blunt). The insight that introverts 'probably know the most and just don't say it' was raised by Trowbridge based on student discussion.",
              suggestedEmotion: 2,
              suggestedActual: "A few vocal students drive the discussion. Others sit passively, re-learning the case in real time from what others say. Coach gives group-level feedback. Individual clinical reasoning goes unobserved for most.",
              suggestedFriction: "No individual accountability. Feedback is generic. Introverts are invisible. Session quality depends on prep quality, which is poor. No structured way to surface what each student knows.",
              suggestedWish: "A mechanism ensuring every student's thinking is visible (pre-session reasoning capture), enabling targeted discussion and giving introverts a voice."
            },
            "4": {
              summary: "Less directly discussed on Day 2 but referenced through the lens of preparation quality. The encounter is where the gap becomes painfully visible. Jocelyn's app prototype directly targets this step, allowing individual practice.",
              themes: ["High-stakes moment with low preparation", "Observer vs. interviewer divide"],
              keyQuotes: [
                { text: "you're able to actually practice by yourself, instead of kind of relying on, like, everyone in the room and not really having your own say if you're not the person interviewing", speaker: "Jocelyn", context: "Describing prototype app's value for individual patient encounter practice" },
                { text: "early in FCM, how you are just kind of going through the motions of, like, how do I take a history, like, how do I perform a physical exam? And less emphasis on like the clinical reasoning, just because you don't know much", speaker: "Derek", context: "Developmental mismatch between what FCM asks and what students can deliver early on" }
              ],
              contextNotes: "The patient encounter is discussed less in isolation on Day 2 and more as the downstream consequence of poor preparation and the gap. Both team prototypes aim to better prepare students for this moment.",
              suggestedEmotion: 1,
              suggestedActual: "One student interviews the standardized patient while others observe. The interviewer draws on partially-forgotten preparation. Observers have no structured role.",
              suggestedFriction: "Only one student gets the active experience. Preparation has decayed. No individual practice opportunity. Observer role is passive and unstructured.",
              suggestedWish: "Every student gets to practice the encounter individually (via simulation/app) before or in addition to the live encounter."
            },
            "5": {
              summary: "Day 2 Session 2 delivers the richest data on this step. Coach feedback is generic, group-oriented, and often superficial. Danielle's key insight: feedback focuses on checkbox completion (did you fill out VINDICATE?) rather than reasoning quality. The shift from 'did you complete it?' to 'is your reasoning sound?' is the central design insight.",
              themes: ["Generic over individualized", "Superficial completion focus", "Real-time probing vs. post-hoc correction", "Anchor bias on vocal students"],
              keyQuotes: [
                { text: "with the more individualized feedback, it prevents coaches from getting something that's like, superficial and that could just apply to everyone", speaker: "Derek", context: "Arguing for technology-enabled individualized feedback" },
                { text: "some probing, like, as the process happens, I think is... part of it was, like, active feedback, in the sense that the coach would, like, probe if they saw that something was missed, so that you weren't like, you know, getting through your whole thing and then being like, Oh, you missed this red flag symptom. It's like, that doesn't really help", speaker: "Matt (student)", context: "Contrasting real-time probing (valuable) with after-the-fact correction (unhelpful)" },
                { text: "instead of going through and checking to make sure everyone has vindicates fully filled out, you can just look to see, okay, this person thought like it was a PE because of these things. And so if this person is, like, completely off base, okay, we should touch on PE more specifically in class", speaker: "Danielle", context: "Proposing reasoning-based feedback — saves coach time while being more targeted" }
              ],
              contextNotes: "This is where Day 2 Session 2 delivers the strongest data. The reasoning-over-checkboxes shift was called 'profound' by Trowbridge and is the single most actionable design insight across both days.",
              suggestedEmotion: 6,
              suggestedActual: "Coach gives verbal feedback to the group. Often generic ('good job, remember to check X'). Individual reasoning gaps go undetected. Quality varies dramatically.",
              suggestedFriction: "Feedback is generic. Reasoning quality invisible. Coaches anchor on vocal students. No structured way to assess individual understanding. Coach has no pre-session data.",
              suggestedWish: "Coaches receive a pre-session summary of each student's reasoning, enabling targeted, individualized feedback."
            },
            "6": {
              summary: "Not directly discussed in Day 2 transcripts. Only obliquely referenced through the general discussion of skill progression — early FCM focuses on history/PE mechanics, not clinical reasoning or note quality.",
              themes: ["Under-discussed on Day 2", "Implied skill progression"],
              keyQuotes: [
                { text: "early in FCM, how you are just kind of going through the motions of, like, how do I take a history, like, how do I perform a physical exam? And less emphasis on like the clinical reasoning", speaker: "Derek", context: "Implies note-writing is a later-developing skill not emphasized early" }
              ],
              contextNotes: "Weak Day 2 data. The absence of discussion may itself be informative — students may not view note-writing as a memorable part of the cycle.",
              suggestedEmotion: 2,
              suggestedActual: "Write an illness script or clinical note after the session. Process and quality expectations are unclear and coach-dependent.",
              suggestedFriction: "Unclear expectations. No structured template or feedback loop specific to note quality. Disconnected from the live encounter.",
              suggestedWish: "Clearer guidance and timely feedback on note-writing quality, connected to the specific case encounter."
            },
            "7": {
              summary: "Limited Day 2 discussion but structural issues are clear from context: reviewing and commenting on each student's work is a time burden with no tool support, leading to inconsistent follow-through. Whether you get written feedback depends entirely on your coach.",
              themes: ["Wildly inconsistent", "Delayed and disconnected"],
              keyQuotes: [
                { text: "at least my FCM coach would like go through it and make comments. But I don't know if other FCM coaches would actually give feedback", speaker: "Matty", context: "Revealing complete inconsistency in whether written feedback exists" },
                { text: "how we turned it in, like, varied so much based on who your coach was. We like for us, we just brought, either brought it to class or emailed the FCM coach.", speaker: "Jocelyn", context: "Lack of standardized submission and feedback process" }
              ],
              contextNotes: "The key insight is variability — written feedback is not a reliable step for most students. Connects to administrator concern about ensuring teaching quality.",
              suggestedEmotion: 6,
              suggestedActual: "Some students receive written comments (via Box, email, LMS). Many receive none. Timing is delayed and inconsistent.",
              suggestedFriction: "Feedback may never arrive. When it does, the case is forgotten. No standardized mechanism. Coach workload makes thorough review impractical.",
              suggestedWish: "Timely, structured written feedback within 24-48 hours, with a standardized process across all coaches."
            },
            "gap2": {
              summary: "Day 2 reinforces the Day 1 finding. Danielle's point about longitudinal tracking directly addresses the absence of structured follow-up. The idea that a coach tracks 6 students over 4 years with no systematic tools is a key structural insight.",
              themes: ["No structured revisitation", "Lost learning opportunity — no longitudinal tracking"],
              keyQuotes: [
                { text: "some metric of helping the student visualize their own gaps, as well as, like tracking progression over time. Because I understand that it is a kind of a load for like one coach to track six people's progression over four years. Like, that's a lot", speaker: "Danielle", context: "Identifying absence of longitudinal tracking as a systemic gap" }
              ],
              contextNotes: "Not as extensively discussed as gap1, but Danielle's longitudinal tracking point directly addresses it. One coach tracking 6 students over 4 years with no tools is a key structural insight.",
              suggestedEmotion: 2,
              suggestedActual: "Case ends. No follow-up, no revisitation, no spaced repetition. Move on to next case or next exam cycle.",
              suggestedFriction: "No mechanism for revisiting cases. No longitudinal tracking. No spaced repetition. Coach has no tools to track patterns across cases.",
              suggestedWish: "A system enabling longitudinal tracking across cases, with automated identification of persistent gaps and growth patterns."
            },
            "8": {
              summary: "Day 2 adds the nuance that FCM demands are supposed to progress over time (from basic history-taking to labs/imaging/clinical reasoning) but this progression is coach-dependent and informal.",
              themes: ["Disconnected cycles", "Informal progression — coach discretion only"],
              keyQuotes: [
                { text: "I know, like, the requirements for those progress throughout, like, the FCM years. And I'm trying to remember if, like, our daily case discussion also did the same thing... I think part of that is, like, the coach's discretion to, like, determine what reasonable demands are for analysis", speaker: "Matt (student)", context: "Questioning whether FCM case complexity intentionally progresses" },
                { text: "if we could, like, tailor the app to early on and early on in the clinical cases, focus more on, like, hitting all the review of systems points, or, like, making sure that you're taking a complete HPI versus actual clinical reasoning. I think that would be important.", speaker: "Derek", context: "Proposing adaptive scaffolding that matches student development level" }
              ],
              contextNotes: "The progression insight is important — FCM is supposed to develop students over years but cycle-to-cycle progression is informal and coach-dependent.",
              suggestedEmotion: 2,
              suggestedActual: "New case arrives with no reference to previous cases. Skill expectations informally increase over time but are not systematically scaffolded.",
              suggestedFriction: "No cumulative learning arc. No connection between cases. Progression depends entirely on coach discretion. No adaptive difficulty.",
              suggestedWish: "An adaptive system that connects cases over time, scaffolds increasing complexity, and makes the learning arc visible."
            }
          }
        },

        coach: {
          steps: {
            "1": {
              summary: "Coaches assign a one-line chief concern with no visibility into how students engage with it or what preparation actually occurs.",
              themes: ["Visibility gap", "No pre-session data", "Assignment is one-size-fits-all"],
              keyQuotes: [
                { text: "you literally, like, you know, teaching, even my design being class, which I'm passionate about, like, it all blurs together at some point. But I've done this like, 12 years, you know, like, kind of, you can get a little rote", speaker: "Matthew Trowbridge", context: "Describing the instructor experience applicable to FCM coaches" }
              ],
              contextNotes: "Coaches have no data on student engagement with the assignment. Cannot differentiate between deep engagement and speed-running.",
              suggestedEmotion: 2,
              suggestedActual: "Post the case. Hope students prepare. No way to gauge readiness.",
              suggestedFriction: "Zero visibility into student preparation. Can't adjust session based on prep quality. Assignment is one-size-fits-all.",
              suggestedWish: "A dashboard showing who's accessed the case, who's started their worksheet, and common differential directions."
            },
            "3": {
              summary: "Running the small group is rewarding but exhausting. Coaches anchor on the 1-2 vocal students, while introverts and less vocal students are invisible. The 'Jones Nguyen effect' — bright students disengaged in the back — is a known problem.",
              themes: ["Anchor on vocal students", "Introverts invisible", "No pre-session data", "Coach bandwidth extremely limited"],
              keyQuotes: [
                { text: "there could be an opportunity for what some people may call the Jones Nguyen effect, you know, of like the the 15 minutes where some of your your super bright students are sitting in the back going like, oh, yeah, oh, that's right. FCM, you know. So can we get everybody a little bit more on the same page?", speaker: "Matthew Trowbridge", context: "Naming the problem of disengaged-but-capable students" },
                { text: "it's keeping track of multiple students all the time, and kind of having pretty... you're honing in on little, tiny signals, because there's not, like, strong signals coming back to you all the time", speaker: "Matthew Trowbridge", context: "Describing the coach's information-poor environment" }
              ],
              contextNotes: "Day 2 Session 2 explicitly names the information poverty coaches face. 'Negative 3% of their bandwidth' is allocated to FCM preparation.",
              suggestedEmotion: 2,
              suggestedActual: "Facilitate discussion, try to engage quiet students. Anchor on the 1-2 vocal students. Run out of time for deeper teaching moments.",
              suggestedFriction: "No individual student data. Anchoring on vocal students. Generic feedback as default. Extremely limited bandwidth for FCM preparation.",
              suggestedWish: "Pre-session summary of each student's reasoning so coaching can be targeted to actual gaps."
            },
            "5": {
              summary: "Day 2 Session 2 provides the richest coach-perspective data. Coaches want to give meaningful individualized feedback but lack the data and time. They default to generic group feedback. The ideal — real-time probing during the encounter — requires attention and expertise that varies by coach.",
              themes: ["Want to be specific but default to encouragement", "Pre-session reasoning data would transform feedback", "Reasoning-over-checkboxes is a dual win"],
              keyQuotes: [
                { text: "on the instructor side... what you're desperately trying to find out, as we said yesterday... which of these students is struggling, and I don't even know it, right? They would love to know that and be able to do more pinpoint but they kind of end up doing generic feedback", speaker: "Matthew Trowbridge", context: "Core coach frustration with the information-poor feedback model" }
              ],
              contextNotes: "The reasoning-over-checkboxes shift serves both students AND coaches. Coaches get actionable data; students get targeted feedback. This dual-win framing crystallized on Day 2.",
              suggestedEmotion: 6,
              suggestedActual: "Give verbal feedback between encounters. Try to be specific. Often fall back to 'good job' when cognitive load is high.",
              suggestedFriction: "No systematic student assessment data. Time constraints. Defaults to generic feedback. Cannot track longitudinal patterns.",
              suggestedWish: "Student reasoning data delivered before the session. Targeted feedback based on actual misconceptions, not guesses."
            },
            "7": {
              summary: "Reviewing illness scripts is a time burden with no tool support. Coach workload makes thorough review impractical at scale. Some coaches do it diligently, others do not — no accountability mechanism.",
              themes: ["Manual review process", "Inconsistent follow-through", "Time burden competes with clinical/research duties"],
              keyQuotes: [],
              contextNotes: "Not discussed in depth from coach perspective on Day 2 but structural issues are clear. Reviewing 6+ scripts per case cycle with no tool support leads to delayed, shorter feedback.",
              suggestedEmotion: 6,
              suggestedActual: "Batch-review illness scripts when time allows. Comments get shorter as the stack grows. Delay is common.",
              suggestedFriction: "Volume of scripts. No prioritization. Manual process. Inconsistent follow-through.",
              suggestedWish: "AI-assisted first-pass review that highlights areas needing coach attention."
            }
          }
        },

        administrator: {
          macroJobs: [
            {
              id: "compliance",
              title: "Track Compliance & Completion",
              status: "Partially addressed — submission tracked but not standardized",
              keyInsights: [
                "The school needs to demonstrate FCM sessions cover required clinical competencies",
                "Current tracking depends on individual coach documentation practices",
                "No centralized system captures what was actually taught vs. what was supposed to be covered"
              ],
              keyQuotes: [
                { text: "there's probably the School of Medicine, that if they're honest, what they really need to do is show that they're compliant with whatever the recommendations are, and that they can show and document that they covered these things", speaker: "Matthew Trowbridge", context: "Identifying the administrator's core compliance job-to-be-done" }
              ],
              frictionPoints: [
                "No standardized submission process across coaches",
                "No centralized documentation of what was covered per session",
                "Compliance verification is retrospective and manual"
              ]
            },
            {
              id: "progress",
              title: "Monitor Student Progress",
              status: "Essentially unaddressed — no longitudinal tracking exists",
              keyInsights: [
                "Tracking 6 students x 4 years per coach with no tools is impractical",
                "Student progression through skill levels (history-taking → clinical reasoning → management) is informal",
                "No way to identify struggling students until they fail an OSCE"
              ],
              keyQuotes: [
                { text: "it is a kind of a load for like one coach to track six people's progression over four years. Like, that's a lot, but if we can kind of, like, summarize generally how they did in each case, and maybe, like, touch on high points, it would make it easier for the instructor, but also it would give insight to the student", speaker: "Danielle", context: "Identifying the absence of progress monitoring tools" }
              ],
              frictionPoints: [
                "No longitudinal data collection",
                "No automated progress visualization",
                "Struggling students invisible until they fail high-stakes assessment",
                "Coach memory is the only tracking mechanism"
              ]
            },
            {
              id: "teaching-quality",
              title: "Ensure Teaching Quality",
              status: "Poorly addressed — varies dramatically with no visibility",
              keyInsights: [
                "Teaching quality is entirely coach-dependent with no standardization or oversight",
                "Any solution must satisfy institutional jobs-to-be-done or it won't be accepted",
                "Feedback quality, session engagement, and outcomes are all unmeasured"
              ],
              keyQuotes: [
                { text: "if those jobs are not satisfied by whatever we met in the long run, then the app, the new the new thing, won't be accepted, right?", speaker: "Matthew Trowbridge", context: "Warning that solutions must satisfy institutional needs or be rejected" }
              ],
              frictionPoints: [
                "No quality metrics for FCM teaching",
                "No standardized expectations across coaches",
                "Student experience varies dramatically by coach assignment",
                "No feedback loop for coaches on their own effectiveness"
              ]
            }
          ]
        }
      },

      analysis: {
        stability: {
          "1": { level: "stable", evidence: "Multiple students describe the same minimal-engagement pattern. Corroborated across Day 1 and Day 2.", supportCount: 4 },
          "2": { level: "stable", evidence: "Mnemonic-driven breadth approach confirmed by 3+ students. Checkbox mentality unanimous. Submission variability confirmed by students from different FCM groups.", supportCount: 5 },
          "gap1": { level: "stable", evidence: "Strongest consensus in entire dataset. Every student who spoke confirmed complete knowledge decay. Identical pattern across different FCM schedules.", supportCount: 6 },
          "3": { level: "stable", evidence: "Social loafing described by multiple students. Generic feedback confirmed. 'Coercive mechanism' absence agreed upon.", supportCount: 4 },
          "4": { level: "emerging", evidence: "Less directly discussed on Day 2. Observer passivity mentioned by Jocelyn. Preparation decay effects inferred from gap discussion.", supportCount: 2 },
          "5": { level: "stable", evidence: "Rich Day 2 Session 2 data. Group-level generic feedback confirmed. Reasoning-vs-checkbox insight well-supported. Real-time probing vs. post-hoc distinction made.", supportCount: 4 },
          "6": { level: "tentative", evidence: "Minimal Day 2 discussion. Only oblique references to skill progression. No direct student accounts of note-writing.", supportCount: 1 },
          "7": { level: "emerging", evidence: "Two students directly described inconsistent feedback. Coach variability confirmed. Less extensively discussed than other steps.", supportCount: 2 },
          "gap2": { level: "emerging", evidence: "Danielle's longitudinal tracking point is strong but singular. Absence of follow-up is implied rather than extensively discussed.", supportCount: 2 },
          "8": { level: "emerging", evidence: "Progression discussion from Derek and Matt. Informal scaffolding confirmed. Not deeply explored.", supportCount: 2 }
        },
        yieldOpportunities: [
          {
            stepId: "2",
            title: "Capture Reasoning, Not Checkboxes — Coach Dashboard",
            yieldScore: 10,
            rationale: "Addresses the #1 Day 2 insight (Danielle's 'reasoning over checkboxes' point, called 'profound' by Trowbridge). Solves coach information poverty, student invisible-reasoning problem, and social loafing simultaneously. Dual win for students and instructors.",
            suggestedInterventions: [
              "Structured reasoning prompts during differential building",
              "AI-summarized reasoning dashboard for coaches before session",
              "Flagging of students with potential misconceptions",
              "Coach receives per-student reasoning snapshots"
            ]
          },
          {
            stepId: "gap1",
            title: "Gamified Case Refresh at Session Start",
            yieldScore: 9,
            rationale: "Universally corroborated (6/6+ students). Directly addresses complete knowledge decay. Trowbridge explicitly suggested 'play the game twice.' Low implementation complexity, high impact on session quality.",
            suggestedInterventions: [
              "2-minute gamified case recap before session",
              "Push notification day-before with key case facts",
              "Quick differential review challenge",
              "Spaced repetition integration"
            ]
          },
          {
            stepId: "4",
            title: "Solo Patient Encounter Practice for All Students",
            yieldScore: 8,
            rationale: "Jocelyn's prototype demonstrates the concept. Addresses observer-passivity problem. Every student gets to practice clinical reasoning against the case, not just the one who interviews.",
            suggestedInterventions: [
              "AI-powered Choose Your Own Adventure case simulation",
              "Individual history-taking practice with voice agent",
              "Differential refinement through simulated patient responses",
              "Pre-session individual encounter run-through"
            ]
          },
          {
            stepId: "5",
            title: "Standardize and Individualize Coach Feedback",
            yieldScore: 8,
            rationale: "Day 2 Session 2 makes explicit that coaches want to identify struggling students but lack data. Pre-session reasoning data would transform the feedback experience.",
            suggestedInterventions: [
              "Coach receives reasoning summary before session",
              "Structured feedback template (Strength / Growth Area / Specific Next Step)",
              "Real-time observation prompts during encounters",
              "Longitudinal feedback tracking"
            ]
          },
          {
            stepId: "8",
            title: "Adaptive Skill Scaffolding Across Cases",
            yieldScore: 7,
            rationale: "Derek and Matt both identified progression issue — early FCM should focus on history/PE mechanics, later on clinical reasoning. Currently entirely coach-dependent.",
            suggestedInterventions: [
              "Configurable complexity levels per case",
              "Automatic progression based on demonstrated competency",
              "Early cases emphasize ROS completeness, later cases reasoning quality",
              "OSCE-aligned skill milestones"
            ]
          },
          {
            stepId: "gap2",
            title: "Longitudinal Progress Tracking Portfolio",
            yieldScore: 7,
            rationale: "Danielle identified that tracking 6 students over 4 years is impractical without tools. Auto-generated progress summaries would transform the coach-student relationship.",
            suggestedInterventions: [
              "Per-student reasoning quality dashboard",
              "Case-over-case trend visualization",
              "Automated identification of persistent gaps",
              "Student-facing growth portfolio"
            ]
          },
          {
            stepId: "7",
            title: "Standardize Feedback Timing and Mechanism",
            yieldScore: 6,
            rationale: "Current feedback is inconsistent, delayed, and disconnected. A standardized template with AI-assisted pre-population would reduce coach burden while improving quality.",
            suggestedInterventions: [
              "AI-drafted feedback based on student reasoning data",
              "Standardized feedback template replacing free-text",
              "24-hour delivery window with automated reminders",
              "Feedback linked to specific reasoning gaps"
            ]
          }
        ]
      }
    }
  ],

  /* ================================================================
   * CUMULATIVE ANALYSIS — Day 1 → Day 2 evolution
   * Shows how understanding deepened and focus sharpened.
   * ================================================================ */
  cumulative: {
    stability: {
      "1": { level: "stable", evidence: "Consistent across both days. Day 2 added nuance about variable engagement (Matty earnest vs. Matt speed-running).", supportCount: 5 },
      "2": { level: "stable", evidence: "Strongest evidence across both days. VINDICATE form-filling confirmed by 4+ students. Day 2 added the 'reasoning over checkboxes' design principle.", supportCount: 6 },
      "gap1": { level: "stable", evidence: "Highest-confidence finding in the entire dataset. Every student who spoke confirmed the pattern across both days. Identical experience across different FCM groups and schedules.", supportCount: 7 },
      "3": { level: "stable", evidence: "Heavily discussed both days. Day 1 focused on length and format; Day 2 named social loafing explicitly and proposed the 'coercive mechanism' framing.", supportCount: 6 },
      "4": { level: "emerging", evidence: "Day 1 provided Kevin's quantitative data (2-3 reps/semester) and Farah's cognitive complexity insight. Day 2 added prototype validation. Fewer direct accounts than other steps.", supportCount: 4 },
      "5": { level: "stable", evidence: "Strong across both days. Day 1 established the gap; Day 2 Session 2 provided the richest data with the reasoning-over-checkboxes breakthrough and coach-perspective insights.", supportCount: 5 },
      "6": { level: "tentative", evidence: "Thin evidence across both days. Only oblique references. May need targeted questions in future sessions.", supportCount: 1 },
      "7": { level: "emerging", evidence: "Day 1 established pass/fail context. Day 2 added submission variability evidence from Jocelyn and Matty. Still less discussed than other steps.", supportCount: 3 },
      "gap2": { level: "emerging", evidence: "Day 1 established cramming pattern (Jocelyn). Day 2 added longitudinal tracking insight (Danielle). Implied rather than extensively discussed.", supportCount: 3 },
      "8": { level: "emerging", evidence: "Day 2 added the progression/scaffolding insight from Derek and Matt. Still not deeply explored as a distinct moment.", supportCount: 2 }
    },
    yieldOpportunities: [
      { stepId: "2", title: "Capture Reasoning, Not Checkboxes — Coach Dashboard", yieldScore: 10, sessions: ["day-1", "day-2"] },
      { stepId: "gap1", title: "Bridge the Gap / Gamified Refresh", yieldScore: 9, sessions: ["day-1", "day-2"] },
      { stepId: "4", title: "Solo Patient Encounter Practice", yieldScore: 8, sessions: ["day-1", "day-2"] },
      { stepId: "5", title: "Individualized Coach Feedback via Reasoning Data", yieldScore: 8, sessions: ["day-1", "day-2"] },
      { stepId: "3", title: "Restructure Session: Less Gathering, More Synthesis", yieldScore: 8, sessions: ["day-1", "day-2"] },
      { stepId: "gap2", title: "Longitudinal Progress Tracking Portfolio", yieldScore: 7, sessions: ["day-1", "day-2"] },
      { stepId: "8", title: "Adaptive Skill Scaffolding Across Cases", yieldScore: 7, sessions: ["day-2"] },
      { stepId: "7", title: "Standardize Feedback Timing and Mechanism", yieldScore: 6, sessions: ["day-1", "day-2"] }
    ],
    trendNotes: "Day 1 → Day 2 shows clear focus sharpening. Day 1 was broad brainstorming where FCM critique emerged organically; Day 2 provided deep first-person accounts and crystallized design principles. Key shifts: (1) The Gap moved from 'identified' to 'deeply corroborated' with 6+ individual accounts. (2) Coach perspective gained real depth — Day 2 Session 2's instructor deep dive produced the 'reasoning over checkboxes' breakthrough, the single most actionable design insight. (3) Social loafing was named explicitly with the 'coercive mechanism' framing. (4) Skill progression emerged as a new Day 2 theme. (5) Steps 6, 7, and gap2 remain data-thin across both days and need targeted exploration. (6) The dual-win principle crystallized — the strongest interventions serve both students AND coaches simultaneously."
  }
};
