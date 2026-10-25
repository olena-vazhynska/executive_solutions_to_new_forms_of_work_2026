/* ============================================================================
   COLLECTIVE BRAIN — what the cohort knows, and what it builds with it
   ----------------------------------------------------------------------------
   Three layers, rendered in this order by assets/brain.js:

     1. KNOWLEDGE MAP   the key subjects of the course as connected nodes
     2. INTEGRATED EXERCISE  the logic that carries a participant from the
                             World Café diagnosis to an executive solution
     3. SOLUTIONS WALL  what participants actually produced, by country

   The solutions wall is deliberately empty until the individual presentations
   are transcribed into `solutions` below. Each card then shows the country,
   the problem framed and the solution designed — NEVER a participant name.
   ========================================================================== */

window.BRAIN = {
  updated: null,          // set to e.g. "2026-10-23" once the wall is filled

  /* ---------------------------------------------------------------------------
     1 · KNOWLEDGE MAP
     The subjects the week puts into the shared brain. `block` ties each one to
     the toolbox block in data/course.js; `feeds` names the lab that uses it.
     ------------------------------------------------------------------------ */
  clusters: [
    {
      id: "scope", label: "Who is covered", block: 2, day: "Tue", color: "a",
      question: "Which workers are inside the scheme, and on what legal basis?",
      subjects: [
        "Employment classification and the primacy of facts",
        "Rebuttable presumptions of employment",
        "Third / intermediate categories",
        "Dependent self-employment",
        "Multi-apping and multiple employers",
        "Cross-border and migrant platform workers"
      ],
      feeds: "Lab 1 — coverage choices"
    },
    {
      id: "architecture", label: "Coverage architecture", block: 3, day: "Tue", color: "b",
      question: "Which contingencies, on what conditions, at what level, and do entitlements travel?",
      subjects: [
        "Personal scope and affiliation rules",
        "Contingencies covered (the nine branches)",
        "Qualifying conditions and waiting periods",
        "Benefit adequacy and the social protection floor",
        "Portability of entitlements across jobs and platforms",
        "Voluntary versus mandatory affiliation"
      ],
      feeds: "Lab 1 — coverage choices"
    },
    {
      id: "financing", label: "Financing", block: 4, day: "Wed", color: "c",
      question: "Who pays, on what earnings base, how often, and what happens when income is irregular?",
      subjects: [
        "Contribution bases for irregular earnings",
        "Rates, floors, ceilings and thresholds",
        "Collection frequency and real-time withholding",
        "Cost-sharing between worker, platform and state",
        "Subsidies and simplified / monotax regimes",
        "Aggregator levies and turnover-based contributions"
      ],
      feeds: "Lab 2 — contribution model"
    },
    {
      id: "administration", label: "Administration and data", block: 6, day: "Thu", color: "d",
      question: "How does a worker actually get registered, counted, collected from and paid?",
      subjects: [
        "Registration pathways and digital identity",
        "Platform reporting obligations",
        "Data exchange and interoperability between institutions",
        "Real-time earnings data",
        "Compliance, inspection and enforcement",
        "Complaints, appeals and redress"
      ],
      feeds: "Lab 3 — administrative pathway"
    },
    {
      id: "voice", label: "Voice and representation", block: 5, day: "Thu", color: "e",
      question: "Who speaks for these workers, and where do they sit in the governance of the scheme?",
      subjects: [
        "Representative organizations for non-standard workers",
        "Intermediary actors and worker collectives",
        "Collective bargaining in the platform economy",
        "Algorithmic transparency and information rights",
        "Tripartite governance of the scheme"
      ],
      feeds: "Peer stress test — voice"
    },
    {
      id: "governance", label: "Governance and sequencing", block: 7, day: "Fri", color: "f",
      question: "In what order do the reforms happen, and how do you know whether they worked?",
      subjects: [
        "Reform sequencing and political feasibility",
        "Institutional mandates and coordination",
        "Transition arrangements and grandfathering",
        "Monitoring indicators and evaluation",
        "Fiscal sustainability over time"
      ],
      feeds: "Individual executive solution"
    }
  ],

  /* ---------------------------------------------------------------------------
     2 · THE INTEGRATED EXERCISE
     One continuous thread across the five days. Each stage consumes the
     previous stage's output — that is the point of the design.
     ------------------------------------------------------------------------ */
  exercise: {
    title: "From a diagnosis to an executive solution",
    blurb:
      "The week is one exercise cut into five pieces. The World Café opens it by naming where scheme design " +
      "fails; each Scheme Design Lab adds one building block to the participant's own answer; Friday puts that " +
      "answer in front of peers. Nothing in the labs is hypothetical — each participant works on their own " +
      "country and their own institution's mandate throughout.",
    stages: [
      { n: 1, day: "Monday", kind: "diagnose", title: "World Café — around the world in new forms of work",
        prompt: "Who is left out, why, and at which point does scheme design fail?",
        input: "Country experience and the morning's framing of the right to social protection",
        activity: "Rotating small-group diagnosis across tables, each table holding one failure point",
        output: "A named coverage gap and the point in the design where it opens",
        uses: ["scope"] },
      { n: 2, day: "Tuesday", kind: "lab", title: "Lab 1 — Coverage architecture",
        prompt: "Translate international standards and national realities into coverage choices.",
        input: "The gap named on Monday, plus Scheme Design I on personal scope and portability",
        activity: "Choose personal scope, contingencies, eligibility conditions and portability rules for your own case",
        output: "Building block 1 — who is covered, for what, on what conditions",
        uses: ["scope", "architecture"] },
      { n: 3, day: "Wednesday", kind: "lab", title: "Lab 2 — Contribution model",
        prompt: "Build a contribution model that works across multiple jobs and platforms.",
        input: "Building block 1, plus Scheme Design II on bases, rates and thresholds",
        activity: "Set the contribution base, rate, threshold, frequency and cost-sharing; test it against irregular earnings",
        output: "Building block 2 — how the scheme is paid for",
        uses: ["financing"] },
      { n: 4, day: "Thursday", kind: "lab", title: "Lab 3 — Administrative pathway",
        prompt: "Make the administrative pathway work: registration, collection, enforcement and redress.",
        input: "Building blocks 1 and 2, plus the administrative innovation and real-time data sessions",
        activity: "Trace one worker end to end through registration, collection, compliance and complaint",
        output: "Building block 3 — the pathway that makes the design operable",
        uses: ["administration"] },
      { n: 5, day: "Friday", kind: "test", title: "Peer-to-peer stress test",
        prompt: "Stress-testing solutions: coverage, financing, administration and voice.",
        input: "The three building blocks assembled into one executive solution",
        activity: "Each participant presents; peers and resource persons apply the four tests below",
        output: "A revised executive solution, with its weakest point identified",
        uses: ["voice", "governance"] },
      { n: 6, day: "Post-course", kind: "deliver", title: "Individual assignment",
        prompt: "Put the gained knowledge into practical perspective.",
        input: "The stress-tested solution and the Friday session on reform sequencing",
        activity: "Five hours of individual work translating the solution into a sequenced proposal for your institution",
        output: "The deliverable that counts towards the Diploma for Social Protection Managers",
        uses: ["governance"] }
    ],

    // The four tests applied on Friday.
    tests: [
      { id: "coverage", label: "Coverage", icon: "◎",
        questions: [
          "Who is now inside the scheme who was outside it before — and can you count them?",
          "Which contingencies does the solution actually cover?",
          "Does the entitlement survive a change of platform, job or status?",
          "Who remains excluded, and is that defensible?"
        ] },
      { id: "financing", label: "Financing", icon: "◈",
        questions: [
          "What is the contribution base when earnings are irregular and come from several sources?",
          "Who pays what share, and what happens in a low-income month?",
          "Is the scheme financially sustainable at the projected take-up?",
          "What is the incentive not to comply, and what removes it?"
        ] },
      { id: "administration", label: "Administration", icon: "▤",
        questions: [
          "Can a worker register without visiting an office?",
          "Where does the earnings data come from, and who is obliged to report it?",
          "What happens when a platform does not comply?",
          "How does a worker contest a decision, and how long does that take?"
        ] },
      { id: "voice", label: "Voice", icon: "◇",
        questions: [
          "Who was consulted in designing this, and who will be consulted in running it?",
          "Are the workers concerned represented in the governance of the scheme?",
          "Do workers have a right to know how automated decisions affecting them are made?",
          "Which social partner would oppose this, and on what ground?"
        ] }
    ]
  },

  /* ---------------------------------------------------------------------------
     3 · SOLUTIONS WALL
     What participants produced in the individual presentations "in search of
     executive solutions".

     PRIVACY RULE: countries and institutions only. No participant names, ever.

     Every entry below is `pending: true` and renders as an awaiting-upload
     card with its structure visible. To fill one in, set `pending: false` and
     complete `title`, `problem`, `solution`, `blocks` and `insight`. Add more
     than one entry per country where several participants presented distinct
     solutions — use `variant` to tell them apart.
     ------------------------------------------------------------------------ */
  solutions: [
    { country: "Angola", region: "Africa", institutions: ["MAPTSS", "INSS"], presentations: 2, pending: true,
      title: "", problem: "", solution: "", blocks: [], insight: "" },
    { country: "Cambodia", region: "Asia and the Pacific", institutions: ["NSSF"], presentations: 3, pending: true,
      title: "", problem: "", solution: "", blocks: [], insight: "" },
    { country: "Georgia", region: "Europe and Central Asia", institutions: ["Labour Inspection Office"], presentations: 1, pending: true,
      title: "", problem: "", solution: "", blocks: [], insight: "" },
    { country: "Ghana", region: "Africa", institutions: ["NHIA"], presentations: 1, pending: true,
      title: "", problem: "", solution: "", blocks: [], insight: "" },
    { country: "India", region: "Asia and the Pacific", institutions: ["Ministry of Labour & Employment"], presentations: 2, pending: true,
      title: "", problem: "", solution: "", blocks: [], insight: "" },
    { country: "Maldives", region: "Asia and the Pacific", institutions: ["MPAO"], presentations: 1, pending: true,
      title: "", problem: "", solution: "", blocks: [], insight: "" },
    { country: "Nigeria", region: "Africa", institutions: ["NSITF"], presentations: 10, pending: true,
      title: "", problem: "", solution: "", blocks: [], insight: "" },
    { country: "Philippines", region: "Asia and the Pacific", institutions: ["DOLE"], presentations: 1, pending: true,
      title: "", problem: "", solution: "", blocks: [], insight: "" },
    { country: "Türkiye", region: "Europe and Central Asia", institutions: ["SGK"], presentations: 8, pending: true,
      title: "", problem: "", solution: "", blocks: [], insight: "" },
    { country: "Viet Nam", region: "Asia and the Pacific", institutions: ["VCCI"], presentations: 1, pending: true,
      title: "", problem: "", solution: "", blocks: [], insight: "" },
    { country: "International organizations", region: "International", institutions: ["ILO", "IOM"], presentations: 4, pending: true,
      title: "", problem: "", solution: "", blocks: [], insight: "" }
  ],

  /* Cross-cutting lessons the cohort reached together. Fill after Friday. */
  convergence: []
};
