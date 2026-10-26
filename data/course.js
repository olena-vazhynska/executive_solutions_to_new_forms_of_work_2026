/* ============================================================================
   COURSE CONTENT — Executive Solutions to New Forms of Work (A9019238)
   ----------------------------------------------------------------------------
   Everything the Overview and Learning journey tabs display lives here.
   Sources: the A9019238 Information Note (SPGT flyer) and the
   "AGENDA 2026 DRAFT RPs FINAL" timetable, 19–23 October 2026, Turin.
   Edit the text here — no need to touch assets/app.js.
   ========================================================================== */

window.COURSE = {
  code: "A9019238",
  title: "Executive Solutions to New Forms of Work",
  programme: "Social Protection, Governance and Tripartism (SPGT)",
  start: "2026-10-19",
  end: "2026-10-23",
  venue: "ITCILO Campus, Turin, Italy",
  modality: "Residential",
  language: "English",
  hours: 60,
  days: 5,
  price: "€2,595 (tuition €1,840 + subsistence €755)",
  applicationDeadline: "2026-09-11",
  applyUrl: "https://oarf2.itcilo.org/STF/A9019238/en",

  contact: {
    org: "International Training Centre of the ILO",
    unit: "Programme on Social Protection, Governance and Tripartism (SPGT)",
    address: "Viale Maestri del Lavoro, 10 · 10127 Turin · Italy",
    person: "Olena Vazhynska, Activity Manager",
    email: "O.Vazhynska@itcilo.org",
    web: "https://www.itcilo.org"
  },

  lead:
    "Five days in Turin for senior social protection decision-makers: diagnose the coverage gaps " +
    "that platform work, gig work and non-standard employment open up, and leave with a scheme " +
    "design of your own that has been stress-tested by your peers.",

  overview:
    "This course is designed for senior professionals and policymakers in the field of social protection " +
    "who seek to address the evolving landscape of the labour markets. As digital platforms, gig-work and " +
    "non-standard employment models reshape the world of work, the need for executive and innovative social " +
    "protection strategies that are both inclusive and adaptive is gaining a priority. The course aims to " +
    "provide insights to challenges and opportunities that the new forms of work present, guiding participants " +
    "through policy design, implementation as well as administrative and IT solutions. By exploring case " +
    "studies and emerging practices, participants will be versed into the forward-looking solutions for social " +
    "protection frameworks that ensure protection for all, regardless of the employment status.",

  // KEY FEATURES — the three cards under the overview.
  pillars: [
    ["Insight into emerging trends",
     "Understand the latest global trends in labour markets and digital transformation, and what they mean for social protection policy and practice."],
    ["Focus on executive solutions",
     "Application-oriented solutions and strategies tailored to senior professionals navigating complex and evolving labour markets."],
    ["Pathway to the ITCILO Diploma",
     "One of four eligible courses towards the Diploma for Social Protection Managers, completed within five years plus a capstone assessment."]
  ],

  // WHAT WILL I LEARN? — from the Information Note.
  topics: [
    ["Digitalization and labour markets.", "Implications of digitalization, automation and globalization for labour markets and social protection systems."],
    ["Policy debates and standards.", "Key debates, international frameworks and emerging approaches to adapting systems to dynamic labour market realities."],
    ["Coverage gaps.", "The main social protection gaps emerging from platform work, gig economy roles and other non-standard arrangements."],
    ["Legal, institutional and technological responses.", "Innovative approaches to extending protection to all workers, including those with multiple employers or unclear status."],
    ["Administrative innovation and governance.", "Regulatory and governance frameworks at national and international levels shaping platform work and social protection innovation."],
    ["Classification, contributions and portability.", "Employment classification, contributory mechanisms and the portability of entitlements."],
    ["Assessing solutions.", "Effectiveness, equity and sustainability of executive-level solutions for emerging labour forms."]
  ],

  // WHAT WILL I BE ABLE TO DO? — from the Information Note.
  outcomes: [
    "Identify key challenges and opportunities in expanding coverage for workers in non-standard and digital employment settings.",
    "Assess the relevance of international labour standards and recommendations for your national system.",
    "Draw lessons from comparative practices and adapt insights to your organization's or country's strategic priorities.",
    "Recognize entry points for legal or institutional reform that improve the inclusiveness and adequacy of protection.",
    "Reflect on financing strategies and the use of digital technologies in benefits administration.",
    "Engage in informed dialogue with stakeholders and formulate ideas for collaborative, cross-sectoral approaches to policy adaptation and innovation."
  ],

  // WHY SHOULD I JOIN? — from the Information Note.
  why: [
    ["Forward-looking perspective", "See how labour market shifts reshape the design of inclusive and sustainable social protection systems."],
    ["Global expertise", "Engage with the ILO, ITCILO and other key institutions working on future-oriented reforms."],
    ["Analytical depth", "Deepen your capacity to analyse challenges and articulate policy responses in a fast-changing employment landscape."],
    ["Peer network", "Connect with peers across countries and sectors in an interactive learning environment."],
    ["A curated toolbox", "Access materials, case studies, tools and frameworks that can inspire your own policy or organizational initiative."],
    ["Real-world innovation", "Reflect on innovations that address administrative, legal and financial bottlenecks in extending protection."],
    ["Diploma credit", "Take a step towards the ITCILO Diploma for Social Protection Managers."]
  ],

  audience:
    "Executives, managers, planners and other professionals committed to building universal and comprehensive " +
    "social protection systems, ensuring that no one is left behind. It is intended for a range of professionals " +
    "from both the governmental and non-governmental sectors, including employers' and workers' organizations, " +
    "and is equally beneficial for professionals from UN agencies, civil society organizations, research " +
    "institutes and consultancy firms.",

  // HOW — the three phases of the 60 learning hours.
  phases: [
    ["Pre-course · 10 hours", "Self-guided study on the ITCILO eCampus, including a pre-course assessment and the entry survey that profiles the cohort."],
    ["Residential week · 45 hours", "Five intensive days at the ITCILO in Turin: plenary sessions, country experiences, a World Café and three Scheme Design Labs."],
    ["Post-course assignment · 5 hours", "An individual assignment that puts the executive solution developed in Turin into practical perspective."]
  ],

  learningFormat:
    "The week alternates between two tracks. Mornings and early afternoons build the toolbox — standards, " +
    "classification, coverage architecture, financing, voice, administration and governance, each anchored in a " +
    "country experience. Late afternoons put the toolbox to work in the Scheme Design Lab, where participants " +
    "build their own solution, block by block, and stress-test it with their peers on Friday.",

  /* ---------------------------------------------------------------------------
     THE TOOLBOX — the building blocks the week assembles, in order.
     `lab` marks the Scheme Design Lab session that applies the block.
     ------------------------------------------------------------------------ */
  toolbox: [
    { n: 1, day: "Mon", title: "Diagnosis", kicker: "What is at stake",
      blurb: "The right to social protection in new forms of work, the labour market transformations behind the gaps, and where scheme design actually fails. Two named instruments carry the day: the five families of barriers, and the seven-link coverage chain that locates each exclusion in a rule, a threshold or a process.",
      tools: ["Five hidden assumptions of social insurance", "Five families of barriers (ILO typology)", "The seven-link coverage chain", "Legal versus effective coverage", "Five worker personas", "World Café diagnostic"],
      lab: null },
    { n: 2, day: "Tue", title: "Legal and institutional adaptation", kicker: "Who counts, and who is responsible",
      blurb: "Classification as the gateway to social security: the four faces of misclassification, the R198 indicators translated into their platform equivalents, six legal techniques used around the world, and the ladder of platform responsibility that can secure coverage even while status is contested.",
      tools: ["Four faces of misclassification", "R198 para. 13 indicators, read against the app", "Six legal techniques (courts, presumptions, third status, status-neutral duties)", "Presumptions compared — who can trigger reclassification", "Ladder of platform responsibility: data provider · collector · contributor · employer", "Inter-institutional mandate map"],
      lab: null },
    { n: 3, day: "Tue", title: "Coverage architecture", kicker: "Scheme Design I",
      blurb: "Five deliberate decisions — personal scope, contingencies, eligibility, adequacy and portability — tested against C102, R202 and Article 12 of C193, and against the ten-question checklist the Lab then applies to the participant's own group of workers.",
      tools: ["Four architectures of personal scope", "The take-up ladder (voluntary → mandatory with third-party registration)", "Risk exposure × design difficulty grid", "Contingency triggers redefined for platform work", "Aggregation across payers — one worker, one record", "Four dimensions of portability", "Ten-question coverage checklist"],
      lab: "Lab 1 — translate international standards and national realities into coverage choices" },
    { n: 4, day: "Wed", title: "Financing and contributions", kicker: "Scheme Design II",
      blurb: "Financing as a set of policy choices rather than a given: the five questions that define a financing system, the ten classic contribution problems matched to design responses and country examples, and the fiscal space that has to be found for the rest.",
      tools: ["Five questions that define a financing system", "Ten contribution problems → design responses → country examples", "Contribution base options for irregular earnings", "Threshold, floor and ceiling design", "Monotax and simplified regimes", "Contribution subsidies and matching", "Fiscal space options and actuarial valuation", "\"You are the Minister of Finance\" exercise"],
      lab: "Lab 2 — build a contribution model that works across multiple jobs and platforms" },
    { n: 5, day: "Thu", title: "Voice and representation", kicker: "Who speaks for the worker",
      blurb: "The role of social partners and workers' voices in scheme design, and how to engage representative organizations and intermediary actors when the counterpart is a platform and the workforce is dispersed.",
      tools: ["Stakeholder and intermediary mapping", "Social dialogue entry points", "Representation of non-standard workers", "Collective bargaining in the platform economy"],
      lab: null },
    { n: 6, day: "Thu", title: "Administration and data", kicker: "Scheme Design III",
      blurb: "From regulatory change to real-time data: registration, contribution collection, data exchange, enforcement and redress — plus the governance of the algorithms the institution itself is starting to run, and those the platform already runs.",
      tools: ["Registration pathways and the \"once-only\" principle", "Collection and withholding mechanics", "Data exchange and interoperability", "Enforcement and redress", "AI risk tiers and human-in-the-loop review", "Algorithmic management and C193 transparency duties"],
      lab: "Lab 3 — make the administrative pathway work: registration, collection, enforcement and redress" },
    { n: 7, day: "Fri", title: "Governance and sequencing", kicker: "From design to reform",
      blurb: "What turns a good scheme design into a reform that actually happens: sequence, governance, coalition and monitoring — tested against the phasing of the reforms the week has examined.",
      tools: ["Six sequencing principles (protect first, data before obligations, pilot–evaluate–legislate…)", "Reform phasing timeline", "Governance and inter-agency coordination", "Coalition map: supporters, resisters, how to win the majority", "Seven core monitoring indicators"],
      lab: null },
    { n: 8, day: "Fri", title: "Stress test", kicker: "The integrated exercise",
      blurb: "Peer-to-peer assessment of each executive solution against four tests: coverage, financing, administration and voice. The measure is not elegance — it is what changes for the worker in the first twelve months.",
      tools: ["Executive Strategy Canvas (the five blocks)", "Four-test stress grid", "Peer scoring on five criteria", "Individual presentation"],
      lab: "Peer-to-peer assessment and individual presentations" }
  ],

  /* ---------------------------------------------------------------------------
     WHERE EACH TOOLBOX BLOCK LEADS
     Keyed by block number. `groups` are RESOURCES category titles, used to
     pre-filter the Resources explorer; `cluster` is the knowledge-map cluster
     id in data/brain.js; `flow` is a node id in data/flow.js. These drive the
     "explore further" links under each block and each Scheme Design Lab, so a
     session is never a dead end.
     ------------------------------------------------------------------------ */
  toolboxLinks: {
    1: { groups: ["Diagnosis — data on coverage, informality and platform work"],
         cluster: null,            flow: "ch.platform" },
    2: { groups: ["Classification, coverage and legal design"],
         cluster: "scope",         flow: "cv.neutral" },
    3: { groups: ["International labour standards and global frameworks"],
         cluster: "architecture",  flow: "cv.mandatory" },
    4: { groups: ["Financing and contribution design"],
         cluster: "financing",     flow: "fi.platform" },
    5: { groups: ["Voice, representation and social dialogue"],
         cluster: "voice",         flow: "sq.ministry" },
    6: { groups: ["Administration, digital tools and data exchange"],
         cluster: "administration", flow: "pa.api" },
    7: { groups: ["Around the world in new forms of work — the regional menu"],
         cluster: "governance",    flow: "sq.ssi" },
    8: { groups: ["Case law"],
         cluster: "governance",    flow: null }
  },

  /* ---------------------------------------------------------------------------
     TIMETABLE — the residential week, exactly as in the agenda.
     ------------------------------------------------------------------------ */
  programme: [
    { n: 1, date: "2026-10-19", weekday: "Monday", theme: "Framing the problem",
      sessions: [
        { time: "09:00 – 10:30", title: "Opening and introduction to the course",
          subtitle: "Course roadmap: a global journey through social protection scheme design",
          people: ["Charles Crevier, ITCILO", "Olena Vazhynska, ITCILO", "Nuno Cunha, INWORK, ILO-Geneva", "Christina Behrendt, SOCPRO, ILO-Geneva"],
          kind: "plenary" },
        { time: "11:00 – 12:30", title: "What's at stake? The right to social protection in new forms of work",
          people: ["Olena Vazhynska, ITCILO"], kind: "plenary" },
        { time: "14:00 – 15:15", title: "Labour market transformations: social protection gaps and design constraints",
          subtitle: "Country experience: India",
          people: ["Karun Gopinath, ITCILO"], kind: "plenary" },
        { time: "15:45 – 17:00", title: "World Café: around the world in new forms of work",
          subtitle: "Who is left out, why, and at which point does scheme design fail?",
          people: ["Resource persons and participants"], kind: "exercise" },
        { time: "17:30", title: "City tour", people: [], kind: "social" }
      ] },
    { n: 2, date: "2026-10-20", weekday: "Tuesday", theme: "Classification and coverage",
      sessions: [
        { time: "09:00 – 10:30", title: "Legal and institutional adaptations",
          subtitle: "Classification, coverage and responsibilities in the platform economy",
          people: ["Olena Vazhynska, ITCILO-Turin"], kind: "plenary" },
        { time: "11:00 – 12:30", title: "European experience",
          subtitle: "From employment-status debates to workable social security coverage · Group picture",
          people: [], kind: "experience" },
        { time: "14:00 – 15:15", title: "SCHEME DESIGN I — Coverage architecture",
          subtitle: "Personal scope, contingencies, eligibility, adequacy and portability",
          people: ["Olena Vazhynska, ITCILO-Turin"], kind: "design" },
        { time: "15:45 – 17:00", title: "Scheme Design Lab",
          subtitle: "Translate international standards and national realities into coverage choices",
          people: ["Resource persons and participants"], kind: "lab" },
        { time: "17:00 – 18:00", title: "Country experience: Mexico", people: [], kind: "experience" }
      ] },
    { n: 3, date: "2026-10-21", weekday: "Wednesday", theme: "Financing the scheme",
      sessions: [
        { time: "09:00 – 10:30", title: "Financing and contribution models for diverse work arrangements",
          subtitle: "Irregular, intermittent and multiple-source earnings",
          people: ["Helmut Schwarzer, SOCPRO, ILO-Geneva"], kind: "plenary" },
        { time: "11:00 – 12:30", title: "Asian experience",
          subtitle: "Contributory solutions for self-employed, multi-employer and platform workers · Country experiences: South Korea, Malaysia",
          people: ["DWT-Bangkok"], kind: "experience" },
        { time: "14:00 – 15:15", title: "SCHEME DESIGN II — Contributions",
          subtitle: "Contribution bases, rates, thresholds, frequency and cost-sharing",
          people: ["Helmut Schwarzer, SOCPRO, ILO-Geneva"], kind: "design" },
        { time: "15:45 – 17:00", title: "Scheme Design Lab",
          subtitle: "Build a contribution model that works across multiple jobs and platforms",
          people: ["Resource persons and participants"], kind: "lab" }
      ] },
    { n: 4, date: "2026-10-22", weekday: "Thursday", theme: "Voice and administration",
      sessions: [
        { time: "09:00 – 10:30", title: "The role of social partners and workers' voices in scheme design",
          subtitle: "Engaging representative organizations and intermediary actors",
          people: ["Rossella Marinucci, CGIL-Rome"], kind: "plenary" },
        { time: "11:00 – 12:30", title: "From regulatory change to real-time data",
          subtitle: "Algorithms, transparency, data access and compliance",
          people: ["Mauricio Escribens, SPGT, ITCILO-Turin", "Karun Gopinath, ITCILO"], kind: "plenary" },
        { time: "14:00 – 15:15", title: "Administrative innovation: digital tools for extending coverage",
          subtitle: "Latin American experience & Brazil — registration, contribution collection and data exchange",
          people: ["Rodrigo Ortiz D'Avila Assumpção, DATAPREV, Brazil"], kind: "experience" },
        { time: "15:45 – 17:00", title: "Scheme Design Lab",
          subtitle: "Make the administrative pathway work: registration, collection, enforcement and redress",
          people: ["Resource persons and participants"], kind: "lab" },
        { time: "19:00", title: "End-of-course dinner", people: [], kind: "social" }
      ] },
    { n: 5, date: "2026-10-23", weekday: "Friday", theme: "From design to reform",
      sessions: [
        { time: "09:00 – 10:30", title: "Building effective strategies: from scheme design to reform sequencing",
          subtitle: "Governance, implementation and monitoring",
          people: ["Olena Vazhynska, SPGT, ITCILO-Turin"], kind: "plenary" },
        { time: "11:00 – 12:30", title: "Peer-to-peer assessment and individual presentations",
          subtitle: "Stress-testing solutions: coverage, financing, administration and voice",
          people: ["Resource persons and participants"], kind: "exercise" },
        { time: "12:30", title: "Wrap up and closing ceremony", people: ["ILO and ITCILO"], kind: "plenary" }
      ] }
  ]
};
