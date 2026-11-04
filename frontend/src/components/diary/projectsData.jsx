import React from "react";

export const PROJECTS_DATA = [
  {
    n: "01",
    title: "SIGNALDESK",
    tag: "B2B SaaS · Voice of Customer · Analytics",
    headline: "From scattered customer feedback to actionable product insights.",
    desc: "A centralized feedback analysis experience that turns unstructured customer input into clear, evidence-backed product decisions.",
    role: "Product thinking, problem definition, feature planning, workflow design & development",
    tech: "Python, Streamlit, SQLite, NLP & data processing tools",
    href: "https://signaldesk.streamlit.app/",
    pastelBg: "#eef3f8",
    pastelAccent: "#244263",
    pastelBorder: "rgba(36, 66, 99, 0.18)",
    overview:
      "SignalDesk is a product concept designed to help product teams make sense of customer feedback. It brings scattered feedback into one place, identifies recurring themes and helps teams understand which problems deserve attention.",
    problem:
      "Customer feedback often lives across multiple sources, making it difficult to identify recurring issues and prioritise what needs to be fixed. Product teams spend time organising feedback instead of understanding it and acting on it.",
    goal:
      "Build a centralised feedback analysis experience that turns unstructured customer input into clear, evidence-backed product insights.",
    approach: [
      "Collect: Import customer feedback through CSV files seamlessly.",
      "Prepare: Validate data and automatically mask personally identifiable information (PII).",
      "Analyse: Identify sentiment, intent and recurring problem themes using NLP.",
      "Prioritise: Cluster and group feedback into high-leverage issues that need attention.",
      "Review: Let product managers inspect the raw evidence and quotes behind each insight.",
      "Report: Export privacy-safe findings and summaries for executive discussion.",
    ],
    decisions: [
      {
        title: "Evidence over assumptions",
        desc: "Always show the original feedback quotes and customer context behind every identified problem.",
      },
      {
        title: "Human-in-the-loop",
        desc: "Keep product managers in control of reviewing, refining, and validating automated insights.",
      },
      {
        title: "Privacy by design",
        desc: "Built-in automated PII masking on ingestion and privacy-safe exports.",
      },
      {
        title: "Clarity over complexity",
        desc: "Organise information around the decisions a product manager needs to make, rather than overwhelming charts.",
      },
    ],
    solution:
      "A complete feedback analysis application with an executive overview dashboard, guided analysis workflow, prioritised issue tracker, interactive feedback explorer, review system and privacy-safe reporting.",
    learned:
      "Analysing feedback is only one part of the problem. The real value comes from helping teams understand the evidence, evaluate its importance and make better product decisions.",
    mockup: (
      <div className="h-full w-full bg-[#18212f] p-4 sm:p-5 flex flex-col justify-between text-[#f1ebdd]">
        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#38bdf8]" />
            <span className="font-['Oswald',sans-serif] text-xs tracking-[0.2em] font-semibold text-[#38bdf8]">
              SIGNALDESK · RADAR
            </span>
          </div>
          <span className="font-['Oswald',sans-serif] text-[10px] tracking-[0.18em] bg-[#38bdf8]/15 text-[#38bdf8] px-2.5 py-0.5 rounded-full">
            PII MASKED · LIVE
          </span>
        </div>
        <div className="space-y-2.5 my-3">
          <div className="bg-white/5 rounded-xl p-3 border border-white/10">
            <div className="flex items-center justify-between">
              <span className="font-['Oswald',sans-serif] text-[10px] tracking-[0.18em] text-[#f87171] font-semibold">
                P0 · HIGH ATTENTION
              </span>
              <span className="font-['Oswald',sans-serif] text-[10px] tracking-[0.16em] text-[#fde047]">
                142 VERIFIED QUOTES
              </span>
            </div>
            <div className="font-['Oswald',sans-serif] text-xs tracking-[0.12em] text-white mt-1">
              ONBOARDING DROP-OFF: OTP SMS TIMEOUT
            </div>
            <div className="font-['Space_Grotesk',sans-serif] text-[11px] text-[#f1ebdd]/75 mt-1 truncate">
              &ldquo;Never received the login code on Jio SIM&hellip;&rdquo;
            </div>
          </div>
          <div className="bg-white/5 rounded-xl p-2.5 border border-white/10 flex items-center justify-between text-[11px]">
            <span className="text-white/80">Themes: Auth (48%) · Billing (32%) · UX (20%)</span>
            <span className="text-[#38bdf8] font-['Oswald',sans-serif]">NLP ACTIVE</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-[10px] font-['Oswald',sans-serif] tracking-[0.22em] text-white/60">
          <span>PIPELINE: 1,420 SIGNALS</span>
          <span className="text-[#38bdf8]">CLICK FOR CASE STUDY →</span>
        </div>
      </div>
    ),
  },

  {
    n: "02",
    title: "DAHLIA",
    tag: "Consumer Product · Personal Memory · UX Design",
    headline: "A little garden for the moments you don't want to forget.",
    desc: "A personal memory garden that turns everyday photographs into an evolving botanical archive.",
    role: "Product ideation, problem definition, feature planning, user experience & development",
    tech: "React, Next.js, JavaScript, CSS & browser-based storage",
    href: "https://mydahlia.vercel.app/",
    pastelBg: "#faf0f2",
    pastelAccent: "#7d3b4a",
    pastelBorder: "rgba(125, 59, 74, 0.18)",
    overview:
      "DAHLIA is a personal memory garden that turns everyday photographs into a visual collection of memories. Instead of maintaining a traditional journal, users add photographs to a calendar and watch their digital garden grow.",
    problem:
      "We capture countless photographs, but most eventually disappear into camera rolls. Traditional journaling can also feel like an effort, especially when all someone wants to do is save a small moment from their day.",
    goal:
      "Create a simple, personal and visual way to capture everyday memories without making the process feel like another task.",
    approach: [
      "Open the garden anytime with single-click access.",
      "Select a date on the minimal visual calendar.",
      "Add a photograph of a small everyday moment.",
      "Revisit memories seamlessly through monthly views.",
      "Watch the garden bloom into an archive over time.",
    ],
    decisions: [
      {
        title: "Reduce input effort",
        desc: "Make adding a photograph the single central action instead of requiring written journal entries.",
      },
      {
        title: "Use visual feedback",
        desc: "Represent saved memories organically through a growing botanical garden illustration.",
      },
      {
        title: "Make it personal",
        desc: "Allow users to customize their garden name and themes to foster personal connection.",
      },
      {
        title: "Support revisiting",
        desc: "Organise memories by month and date for effortless nostalgia and reflection.",
      },
      {
        title: "Make memories shareable",
        desc: "Support PDF, PNG and Instagram carousel export formats.",
      },
      {
        title: "User control",
        desc: "Include dedicated light and dark themes for comfortable evening reflection.",
      },
    ],
    solution:
      "A calendar-based memory experience with a personalised garden, daily photo entries, month navigation and memory export options.",
    learned:
      "The best experience isn't always the one with the most features. Sometimes a small interaction, designed thoughtfully, can make a product feel meaningful.",
    mockup: (
      <div className="h-full w-full bg-[#fcf9f5] p-4 sm:p-5 flex flex-col justify-between text-[#3a382f]">
        <div className="flex items-center justify-between border-b border-[#3a382f]/10 pb-2.5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#596743]" />
            <span className="font-['Oswald',sans-serif] text-xs tracking-[0.2em] font-semibold text-[#596743]">
              DAHLIA · MEMORY GARDEN
            </span>
          </div>
          <span className="font-['Oswald',sans-serif] text-[10px] tracking-[0.18em] bg-[#596743]/15 text-[#596743] px-2 py-0.5 rounded-full">
            31 MEMORIES PLANTED 🌱
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2.5 my-3">
          <div className="bg-white rounded-xl p-2.5 border border-[#3a382f]/8 shadow-sm">
            <div className="h-16 bg-[#dda987]/25 rounded-lg flex items-center justify-center text-xl">🌸</div>
            <div className="font-['Oswald',sans-serif] text-[9px] tracking-[0.16em] text-[#814c57] mt-1.5 font-semibold">MAY 12</div>
            <div className="font-['Space_Grotesk',sans-serif] text-[11px] text-[#3a382f]/80 truncate">Cherry blossom walk</div>
          </div>
          <div className="bg-white rounded-xl p-2.5 border border-[#3a382f]/8 shadow-sm">
            <div className="h-16 bg-[#e6d99f]/30 rounded-lg flex items-center justify-center text-xl">☕</div>
            <div className="font-['Oswald',sans-serif] text-[9px] tracking-[0.16em] text-[#596743] mt-1.5 font-semibold">MAY 14</div>
            <div className="font-['Space_Grotesk',sans-serif] text-[11px] text-[#3a382f]/80 truncate">Rain & warm coffee</div>
          </div>
        </div>
        <div className="bg-[#596743]/10 border border-dashed border-[#596743]/30 rounded-lg py-2 px-3 flex items-center justify-between text-[10px] font-['Oswald',sans-serif] tracking-[0.2em] text-[#596743]">
          <span>+ PLANT TODAY&rsquo;S MEMORY</span>
          <span>CLICK FOR CASE STUDY →</span>
        </div>
      </div>
    ),
  },

  {
    n: "03",
    title: "STREAKUP",
    tag: "Consumer Product · Habit Tracking · Engagement",
    headline: "Making consistency visible, one day at a time.",
    desc: "A habit-tracking web application built to make daily progress visible and cultivate long-term consistency.",
    role: "Solo builder — Product concept, feature definition, UX, engineering & deployment",
    tech: "React, Next.js, Tailwind CSS, Vercel",
    href: "https://streak-up-streakup.vercel.app",
    traction: "4–5 active users during early release cohort",
    pastelBg: "#fdf8ee",
    pastelAccent: "#875815",
    pastelBorder: "rgba(135, 88, 21, 0.18)",
    overview:
      "StreakUp is a habit-tracking web application I built to explore how simple progress tracking can help people develop consistency.",
    problem:
      "People often start habits with motivation but struggle to maintain them. Progress can feel invisible, and missing a day can make it difficult to get back on track.",
    goal:
      "Build a simple habit-tracking experience that makes daily progress visible and encourages users to return.",
    approach: [
      "Create a habit with clear, achievable parameters.",
      "Complete the habit in daily life.",
      "Record daily progress with a single satisfying tap.",
      "Build and maintain a visible visual streak.",
      "Revisit progress and consistency trends over time.",
    ],
    decisions: [
      {
        title: "Keep the core action simple",
        desc: "Completing a habit should require minimal effort, under 3 seconds per day.",
      },
      {
        title: "Make progress visible",
        desc: "Use clean streaks and heatmaps to communicate continuous momentum.",
      },
      {
        title: "Encourage repeat engagement",
        desc: "Give users a tangible reason to return without overwhelming push notifications.",
      },
      {
        title: "Avoid unnecessary complexity",
        desc: "Focus strictly on the core habit experience instead of turning it into a bloated productivity suite.",
      },
    ],
    solution:
      "A working React-based habit tracker, independently designed, built and deployed live on Vercel.",
    learned:
      "Building a product doesn't end at deployment. Getting it into people's hands is where the next set of product questions begins.",
    exploreNext:
      "I would investigate where users drop off, what makes them return, and whether streaks motivate people or create pressure. I would also explore how the product could make restarting after a missed day easier.",
    mockup: (
      <div className="h-full w-full bg-[#1b1928] p-4 sm:p-5 flex flex-col justify-between text-[#f1ebdd]">
        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#fb923c]" />
            <span className="font-['Oswald',sans-serif] text-xs tracking-[0.2em] font-semibold text-[#fb923c]">
              STREAKUP · HABIT LOOP
            </span>
          </div>
          <span className="font-['Oswald',sans-serif] text-[10px] tracking-[0.18em] bg-[#fb923c]/20 text-[#fb923c] px-2.5 py-0.5 rounded-full">
            🔥 42 DAY STREAK
          </span>
        </div>
        <div className="space-y-2.5 my-3">
          <div className="bg-white/5 rounded-xl p-3 border border-white/10 flex items-center justify-between">
            <div>
              <div className="font-['Oswald',sans-serif] text-xs tracking-[0.15em] text-white">DEEP WORK · 2 HOURS</div>
              <div className="w-36 sm:w-48 h-1.5 bg-white/10 rounded-full mt-2 overflow-hidden">
                <div className="w-full h-full bg-[#fb923c] rounded-full" />
              </div>
            </div>
            <span className="font-['Oswald',sans-serif] text-[10px] tracking-[0.2em] text-[#fde047]">100% COMPLETE</span>
          </div>
          <div className="bg-white/5 rounded-xl p-3 border border-white/10 flex items-center justify-between">
            <div>
              <div className="font-['Oswald',sans-serif] text-xs tracking-[0.15em] text-white">DAILY READING · 30 MIN</div>
              <div className="w-36 sm:w-48 h-1.5 bg-white/10 rounded-full mt-2 overflow-hidden">
                <div className="w-4/5 h-full bg-[#4ade80] rounded-full" />
              </div>
            </div>
            <span className="font-['Oswald',sans-serif] text-[10px] tracking-[0.2em] text-[#f1ebdd]/70">24 / 30 MIN</span>
          </div>
        </div>
        <div className="flex items-center justify-between pt-1 text-[10px] font-['Oswald',sans-serif] tracking-[0.25em] text-white/60">
          <span>7/7 DAYS ACTIVE</span>
          <span className="text-[#fb923c]">CLICK FOR CASE STUDY →</span>
        </div>
      </div>
    ),
  },

  {
    n: "04",
    title: "SPEECH & PAIN ASSESSMENT ML FOR CEREBRAL PALSY",
    tag: "Accessibility · Machine Learning · Healthcare Tech",
    headline: "Exploring technology for communication beyond words.",
    desc: "An academic research exploration into ML models for speech clarity assistance and facial-expression pain interpretation.",
    role: "Project development, machine-learning workflow, application integration & technical implementation",
    tech: "Python, Kotlin, Android Studio, Flask, Librosa, KNN, TensorFlow/Keras & InceptionV3",
    pastelBg: "#eef6f1",
    pastelAccent: "#255338",
    pastelBorder: "rgba(37, 83, 56, 0.18)",
    overview:
      "This academic project explored machine-learning approaches to support people affected by cerebral palsy through two areas: speech clarity assistance and facial-expression-based pain assessment.",
    problem:
      "Speech difficulties can make everyday communication challenging for people affected by cerebral palsy. Communicating pain can also be difficult when verbal expression is limited.",
    goal:
      "Explore technology-assisted approaches that could support communication and help interpret pain-related facial expressions.",
    approach: [
      "Part 1 (Speech Clarity): Audio recording in WAV format → Librosa audio preprocessing → MFCC feature extraction → KNN classification → Speech-to-text exploration → App UI integration.",
      "Part 2 (Facial Pain Assessment): Image and video capture → FACS annotation mapping → CP-PAIN dataset integration → InceptionV3 feature extraction → TensorFlow/Keras pain estimation model.",
    ],
    decisions: [
      {
        title: "Separate workflows",
        desc: "Treat speech assistance and pain assessment as two distinct, focused interaction pathways.",
      },
      {
        title: "Accessible interactions",
        desc: "Prioritise large tap targets and zero-friction navigation rather than complex diagnostic panels.",
      },
      {
        title: "Multimodal sensory inputs",
        desc: "Combine audio and visual signals to support diverse motor and verbal constraints.",
      },
      {
        title: "Decoupled architecture",
        desc: "Keep the ML processing backend separate from the user-facing mobile client for safety and speed.",
      },
    ],
    solution:
      "An exploratory Android mobile application integrated with Python/Flask backend models evaluating MFCC audio signals and facial action units.",
    limitation:
      "This was an exploratory academic project, not a clinically validated diagnostic or treatment tool. Model performance must be evaluated separately from real-world clinical usefulness.",
    learned:
      "Building for accessibility requires more than making an interface easy to use. It requires understanding the user's communication challenges, the limitations of the technology and the consequences of incorrect outputs.",
    mockup: (
      <div className="h-full w-full bg-[#13231d] p-4 sm:p-5 flex flex-col justify-between text-[#f1ebdd]">
        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#4ade80]" />
            <span className="font-['Oswald',sans-serif] text-xs tracking-[0.2em] font-semibold text-[#4ade80]">
              ACCESSIBILITY · ML RESEARCH
            </span>
          </div>
          <span className="font-['Oswald',sans-serif] text-[10px] tracking-[0.18em] bg-[#4ade80]/15 text-[#4ade80] px-2.5 py-0.5 rounded-full">
            DUAL PIPELINE
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2.5 my-3">
          <div className="bg-white/5 rounded-xl p-3 border border-white/10">
            <div className="font-['Oswald',sans-serif] text-[10px] tracking-[0.16em] text-[#4ade80]">01 · SPEECH CLARITY</div>
            <div className="font-['Space_Grotesk',sans-serif] text-xs text-white mt-1">MFCC + KNN MODEL</div>
            <div className="h-8 bg-black/30 rounded mt-2 flex items-center justify-center gap-1 px-2">
              <span className="w-1 h-3 bg-[#4ade80] rounded" />
              <span className="w-1 h-5 bg-[#4ade80] rounded" />
              <span className="w-1 h-2 bg-[#4ade80] rounded" />
              <span className="w-1 h-6 bg-[#4ade80] rounded" />
              <span className="w-1 h-4 bg-[#4ade80] rounded" />
            </div>
          </div>
          <div className="bg-white/5 rounded-xl p-3 border border-white/10">
            <div className="font-['Oswald',sans-serif] text-[10px] tracking-[0.16em] text-[#38bdf8]">02 · PAIN DETECTION</div>
            <div className="font-['Space_Grotesk',sans-serif] text-xs text-white mt-1">FACS + INCEPTIONV3</div>
            <div className="h-8 bg-black/30 rounded mt-2 flex items-center justify-center text-[11px] text-white/70">
              CP-PAIN DATASET
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between text-[10px] font-['Oswald',sans-serif] tracking-[0.2em] text-white/60">
          <span>ACADEMIC PROTOTYPE</span>
          <span className="text-[#4ade80]">CLICK FOR CASE STUDY →</span>
        </div>
      </div>
    ),
  },

  {
    n: "05",
    title: "PRODUCT THINKING & TEARDOWNS",
    tag: "Product Strategy · Product Sense · UX Analysis",
    headline: "I use products. I question them. I rethink them.",
    desc: "A collection of product teardowns analysing digital experiences, identifying user friction and exploring redesign opportunities.",
    role: "Product analysis, heuristic evaluation, teardown framework & UX recommendations",
    tech: "UX Heuristics, Interaction Architecture, Notion Publishing",
    href: "https://pickled-chair-247.notion.site/Product-Thinking-Teardowns-3e0900d91be98010a138e2571183e521",
    pastelBg: "#f3effa",
    pastelAccent: "#523774",
    pastelBorder: "rgba(82, 55, 116, 0.18)",
    overview:
      "A collection of product teardowns where I analyse existing digital products, understand their user experience and explore opportunities for improvement.",
    goal:
      "Develop a stronger understanding of why products make certain decisions, how those decisions affect users and where better experiences could be created.",
    approach: [
      "Product Context: What does the product do, who is it for and what problem does it solve?",
      "User Journey: How does a user discover, navigate and experience the product end-to-end?",
      "Product Decisions: What deliberate trade-offs and choices shape the current experience?",
      "Friction Points: Where does the flow create confusion, drop-off or unnecessary cognitive effort?",
      "Opportunities: Where are the highest leverage points for product improvement?",
      "Recommendations: Which tangible changes would create meaningful user or business value?",
    ],
    decisions: [
      {
        title: "Onboarding & activation",
        desc: "Examine time-to-value and identify where users drop out during first-session flows.",
      },
      {
        title: "Information architecture",
        desc: "Analyse navigation clarity and ensure key features are discoverable rather than buried.",
      },
      {
        title: "Retention hooks",
        desc: "Evaluate why users return and how habit loops or product feedback loops are sustained.",
      },
      {
        title: "Business vs user alignment",
        desc: "Balance revenue-driving mechanics against honest, delightful user experiences.",
      },
    ],
    teardownItems: [
      { name: "GOOGLE", tagline: "Search, Workspace & Multimodal Discovery Experience" },
      { name: "CRED", tagline: "Gamification, Reward Loops & Financial Clarity Teardown" },
      { name: "SLICE", tagline: "Gen-Z Neo-banking, Credit Card UX & Onboarding Friction" },
    ],
    solution:
      "A living, published teardown dossier exploring product journeys, identifying specific UX opportunities and providing evidence-backed recommendations.",
    learned:
      "Good product thinking isn't about suggesting more features. It's about understanding the problem, questioning existing decisions and knowing which improvements are actually worth making.",
    mockup: (
      <div className="h-full w-full bg-[#1e1728] p-4 sm:p-5 flex flex-col justify-between text-[#f1ebdd]">
        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#c084fc]" />
            <span className="font-['Oswald',sans-serif] text-xs tracking-[0.2em] font-semibold text-[#c084fc]">
              PRODUCT TEARDOWNS
            </span>
          </div>
          <span className="font-['Oswald',sans-serif] text-[10px] tracking-[0.18em] bg-[#c084fc]/15 text-[#c084fc] px-2.5 py-0.5 rounded-full">
            3 DOSSIERS
          </span>
        </div>
        <div className="space-y-2 my-2.5">
          <div className="bg-white/5 rounded-xl p-2.5 border border-white/10 flex items-center justify-between">
            <span className="font-['Oswald',sans-serif] text-xs tracking-wider text-white">GOOGLE SEARCH & AI</span>
            <span className="text-[10px] text-[#c084fc] font-semibold">DISCOVERY UX</span>
          </div>
          <div className="bg-white/5 rounded-xl p-2.5 border border-white/10 flex items-center justify-between">
            <span className="font-['Oswald',sans-serif] text-xs tracking-wider text-white">CRED REWARDS</span>
            <span className="text-[10px] text-[#fde047] font-semibold">GAMIFICATION</span>
          </div>
          <div className="bg-white/5 rounded-xl p-2.5 border border-white/10 flex items-center justify-between">
            <span className="font-['Oswald',sans-serif] text-xs tracking-wider text-white">SLICE PAYMENTS</span>
            <span className="text-[10px] text-[#38bdf8] font-semibold">ONBOARDING</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-[10px] font-['Oswald',sans-serif] tracking-[0.2em] text-white/60">
          <span>READ DOSSIERS</span>
          <span className="text-[#c084fc]">CLICK FOR CASE STUDY →</span>
        </div>
      </div>
    ),
  },

  {
    n: "06",
    title: "GOFLOW",
    tag: "AI Product · Productivity · ADHD-Friendly",
    headline: "Go with the flow. One thing at a time.",
    desc: "An AI-powered productivity web application designed to reduce decision fatigue by breaking thoughts into focus flashcards.",
    role: "Solo builder — Product concept, problem definition, UX, engineering & deployment",
    tech: "Wispr Flow (Voice development), Next.js, AI task orchestration, Tailwind CSS, Vercel",
    href: "https://go-flow-seven.vercel.app",
    pastelBg: "#fcf0e7",
    pastelAccent: "#8f441b",
    pastelBorder: "rgba(143, 68, 27, 0.18)",
    overview:
      "GoFlow is an AI-powered productivity web application designed to help people reduce decision fatigue and make getting started easier. Instead of presenting users with another overwhelming to-do list, GoFlow turns their thoughts into manageable tasks and helps them focus on one thing at a time. The idea came from my own experience with ADHD. I often know what needs to be done, but deciding where to start and actually getting started can be difficult.",
    problem:
      "People can know exactly what they need to do but still struggle to take action. Long to-do lists, competing priorities and constantly deciding what to work on next can create decision fatigue. Sometimes, choosing the next task becomes a task of its own.",
    goal:
      "Build a productivity experience that reduces the effort involved in deciding what to do next and helps people move from thinking about tasks to actually doing them.",
    approach: [
      "Brain dump: Add everything on your mind through natural voice or quick text.",
      "Organise: Automatically parse raw thoughts into discrete tasks using AI.",
      "Pick a task: Surface one single actionable task at a time via interactive flashcards.",
      "Take action: Start a dedicated timer and focus strictly on the selected card.",
      "Keep moving: Shuffle to another task anytime without guilt or shame.",
      "Track progress: Review completed work and time spent through daily history.",
    ],
    decisions: [
      {
        title: "Reduce decision fatigue",
        desc: "Show exactly one task at a time instead of an overwhelming 50-item list.",
      },
      {
        title: "Make starting effortless",
        desc: "Use tangible flashcards to help people transition immediately into action.",
      },
      {
        title: "Flexibility without guilt",
        desc: "Allow instant card shuffling whenever energy or focus demands change.",
      },
      {
        title: "Conversational planning",
        desc: "Built entirely through voice using Wispr Flow, making planning conversational.",
      },
      {
        title: "Time-based progress",
        desc: "Track focused time spent and momentum, not just binary checkmarks.",
      },
    ],
    solution:
      "A working AI-powered productivity web application combining brain dumping, task organisation, interactive flashcards, focus timers, voice input and daily progress history.",
    learned:
      "Sometimes, people don't need another tool to manage their tasks. They need help deciding what to do next. Building GoFlow also changed how I think about building products. I went from having an idea to building and deploying a working application using my voice and Wispr Flow.",
    exploreNext:
      "I would investigate whether presenting one task at a time helps users get started, how often they use shuffle, and whether the experience reduces the time spent deciding what to do. I'd also explore personalisation and easier re-entry after an unproductive day.",
    mockup: (
      <div className="h-full w-full bg-[#241a14] p-4 sm:p-5 flex flex-col justify-between text-[#f1ebdd]">
        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#fb923c]" />
            <span className="font-['Oswald',sans-serif] text-xs tracking-[0.2em] font-semibold text-[#fb923c]">
              GOFLOW · AI PRODUCTIVITY
            </span>
          </div>
          <span className="font-['Oswald',sans-serif] text-[10px] tracking-[0.18em] bg-[#fb923c]/20 text-[#fb923c] px-2.5 py-0.5 rounded-full">
            🎙️ WISPR FLOW
          </span>
        </div>
        <div className="my-3 bg-white/10 rounded-2xl p-4 border border-white/15 text-center">
          <span className="font-['Oswald',sans-serif] text-[10px] tracking-[0.2em] text-[#fb923c] uppercase block">
            CURRENT SINGLE FOCUS
          </span>
          <div className="font-['Oswald',sans-serif] text-base sm:text-lg text-white mt-1 uppercase font-bold tracking-wide">
            Draft synthesis notes for feedback
          </div>
          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="bg-[#fb923c] text-[#241a14] font-['Oswald',sans-serif] text-xs font-bold px-3 py-1 rounded-full">
              25:00 TIMER
            </span>
            <span className="bg-white/10 text-white font-['Oswald',sans-serif] text-xs px-3 py-1 rounded-full">
              SHUFFLE ↻
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between text-[10px] font-['Oswald',sans-serif] tracking-[0.2em] text-white/60">
          <span>ADHD-FRIENDLY WORKFLOW</span>
          <span className="text-[#fb923c]">CLICK FOR CASE STUDY →</span>
        </div>
      </div>
    ),
  },

  {
    n: "07",
    title: "PORTFOLIOS I HAVE CREATED",
    tag: "Web Design · Digital Studios · Portfolio Work",
    headline: "Distinct digital spaces built to tell stories.",
    desc: "A curated collection of personal portfolios and web studios engineered from scratch with bespoke interactions.",
    role: "Sole designer, creative technologist and front-end architect",
    tech: "React, GSAP, Tailwind CSS, Next.js, Custom Shaders & Typography",
    isPortfolioCollection: true,
    pastelBg: "#f0efe8",
    pastelAccent: "#424036",
    pastelBorder: "rgba(66, 64, 54, 0.18)",
    portfolios: [
      {
        title: "DHWANI SAGAR",
        url: "https://www.dhwanisagar.in/",
        label: "dhwanisagar.in",
        desc: "Personal portfolio, design philosophy and interactive creative experiments.",
      },
      {
        title: "4RIN LABS",
        url: "https://www.4rinlabs.com/",
        label: "4rinlabs.com",
        desc: "Digital studio portfolio showcasing product prototypes, experiments, and tech explorations.",
      },
    ],
    mockup: (
      <div className="h-full w-full bg-[#1f1e1a] p-4 sm:p-5 flex flex-col justify-between text-[#f1ebdd]">
        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e6d99f]" />
            <span className="font-['Oswald',sans-serif] text-xs tracking-[0.2em] font-semibold text-[#e6d99f]">
              PORTFOLIOS CREATED
            </span>
          </div>
          <span className="font-['Oswald',sans-serif] text-[10px] tracking-[0.18em] bg-[#e6d99f]/15 text-[#e6d99f] px-2.5 py-0.5 rounded-full">
            2 LIVE WEBSITES
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2.5 my-3">
          <div className="bg-white/5 rounded-xl p-3 border border-white/10 hover:border-[#e6d99f]/40 transition-colors">
            <div className="font-['Oswald',sans-serif] text-xs tracking-wider text-white">DHWANI SAGAR</div>
            <div className="font-mono text-[9px] text-[#e6d99f] mt-1 truncate">dhwanisagar.in</div>
            <div className="mt-2 text-[10px] text-white/60">Creative Portfolio ↗</div>
          </div>
          <div className="bg-white/5 rounded-xl p-3 border border-white/10 hover:border-[#e6d99f]/40 transition-colors">
            <div className="font-['Oswald',sans-serif] text-xs tracking-wider text-white">4RIN LABS</div>
            <div className="font-mono text-[9px] text-[#e6d99f] mt-1 truncate">4rinlabs.com</div>
            <div className="mt-2 text-[10px] text-white/60">Digital Studio ↗</div>
          </div>
        </div>
        <div className="flex items-center justify-between text-[10px] font-['Oswald',sans-serif] tracking-[0.2em] text-white/60">
          <span>CUSTOM WEB EXPERIENCES</span>
          <span className="text-[#e6d99f]">CLICK TO OPEN SITES →</span>
        </div>
      </div>
    ),
  },
];

