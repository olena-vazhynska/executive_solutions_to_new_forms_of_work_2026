/* ============================================================================
   THE COLLECTIVE BRAIN — the five-column flow
   ----------------------------------------------------------------------------
   The columns are the course's own Executive Strategy Canvas blocks, in the
   order the week builds them:

     1 The challenge · 2 Coverage architecture · 3 Contribution model
     4 Administrative pathway · 5 Reform sequencing

   Every one of the 27 individual presentations fills all five blocks, so each
   presentation contributes exactly one path across the diagram and every
   column sums to 27. That is what makes the ribbon widths honest.

   HOW THE CODING WAS DONE
   -----------------------
   Each presentation was read in full and assigned ONE primary node per column
   — the decision the deck actually leads with, not every option it mentions.
   A keyword pass was tried first and discarded: the Day 5 template repeats
   every field label ("Portability", "State subsidy", "Multiple payers & bad
   months") in all 27 decks, so matching on labels scored 27/27 on boilerplate
   rather than on choices. `paths` below is therefore hand-coded and auditable:
   one row per presentation, countries only, never a name.

   `evidence` on each node says which part of the library supports it, and is
   what drives the Underlying evidence matrix:
     groups  — ids from window.RESOURCES
     themes  — ids from window.CASELAW.themes
     blocks  — toolbox block numbers from window.COURSE.toolbox
   ========================================================================== */

window.FLOW = {
  updated: "2026-10-23",
  total: 27,

  columns: [
    { id: "challenge",  n: 1, label: "The challenge",
      kicker: "Who is left out, and where the scheme fails", color: "a" },
    { id: "coverage",   n: 2, label: "Coverage architecture",
      kicker: "Who is in scope, and how they enter", color: "b" },
    { id: "financing",  n: 3, label: "Contribution model",
      kicker: "Who pays the employer share", color: "c" },
    { id: "pathway",    n: 4, label: "Administrative pathway",
      kicker: "How the worker actually gets in", color: "d" },
    { id: "sequencing", n: 5, label: "Reform sequencing",
      kicker: "Who leads, and what comes first", color: "f" }
  ],

  /* --------------------------------------------------------------------------
     NODES — grouped by column. `n` is computed from `paths`, not stored.
     ----------------------------------------------------------------------- */
  nodes: [
    /* 1 · THE CHALLENGE ---------------------------------------------------- */
    { id: "ch.platform", col: "challenge", label: "Platform drivers and riders",
      note: "Ride-hailing, delivery and boda-boda workers whose platform calls itself a technology intermediary.",
      evidence: { groups: ["diagnosis", "practice", "menu"], themes: ["status", "scope"], blocks: [1, 2] } },
    { id: "ch.online", col: "challenge", label: "Online and cross-border earners",
      note: "Content creators, streamers and freelancers paid by clients or platforms located abroad.",
      evidence: { groups: ["diagnosis", "standards"], themes: ["scope", "affiliation"], blocks: [1, 2] } },
    { id: "ch.domestic", col: "challenge", label: "Domestic workers in short engagements",
      note: "Cleaners and carers working a few days a month for each of several households.",
      evidence: { groups: ["standards", "legal", "voice"], themes: ["scope", "termination"], blocks: [1, 2] } },
    { id: "ch.selfemp", col: "challenge", label: "Self-employed and own-account workers",
      note: "Technicians, mechanics, masons and independent providers with no employer to register them.",
      evidence: { groups: ["financing", "legal"], themes: ["affiliation", "status"], blocks: [1, 4] } },
    { id: "ch.rural", col: "challenge", label: "Informal farmers and artisans",
      note: "Village and small-scale producers with seasonal income, no employer and no fixed workplace.",
      evidence: { groups: ["financing", "administration"], themes: ["affiliation"], blocks: [1, 4] } },
    { id: "ch.agri", col: "challenge", label: "Seasonal agricultural workers",
      note: "Temporary and migrant agricultural labour, where informality runs around 80 per cent.",
      evidence: { groups: ["standards", "financing"], themes: ["scope", "termination"], blocks: [1, 4] } },

    /* 2 · COVERAGE ARCHITECTURE -------------------------------------------- */
    { id: "cv.mandatory", col: "coverage", label: "Mandatory entry, a third party registers",
      note: "Coverage is compulsory and the duty to enrol sits with the platform, not the worker.",
      evidence: { groups: ["standards", "practice", "menu"], themes: ["status", "contribution"], blocks: [3] } },
    { id: "cv.statusbased", col: "coverage", label: "Status-based, inside the existing scheme",
      note: "Keep the national scheme and bring the group in under a defined status rather than build anew.",
      evidence: { groups: ["standards", "legal"], themes: ["scope", "affiliation"], blocks: [2, 3] } },
    { id: "cv.neutral", col: "coverage", label: "Status-neutral — coverage follows the income",
      note: "Entry attaches to income earned through a registered platform, leaving classification to the facts.",
      evidence: { groups: ["standards", "legal", "menu"], themes: ["status", "scope"], blocks: [2, 3] } },
    { id: "cv.threshold", col: "coverage", label: "An income threshold opens a self-employed route",
      note: "Above a declared-income trigger the earner is assessed as self-employed and registered as such.",
      evidence: { groups: ["legal", "financing"], themes: ["scope"], blocks: [2, 3] } },
    { id: "cv.account", col: "coverage", label: "One worker account, every payer declares into it",
      note: "Days and earnings aggregate across households or employers so no per-engagement threshold excludes anyone.",
      evidence: { groups: ["standards", "administration"], themes: ["scope", "affiliation"], blocks: [3, 6] } },
    { id: "cv.voluntary", col: "coverage", label: "Voluntary, with incentives to join",
      note: "Where the statute forbids compulsion, participation is bought with subsidies and visible short-term benefits.",
      evidence: { groups: ["financing", "diagnosis"], themes: ["affiliation"], blocks: [3, 4] } },
    { id: "cv.residence", col: "coverage", label: "Residence-based, community-led entry",
      note: "Coverage follows residence, with cooperatives and community structures carrying the registration.",
      evidence: { groups: ["administration", "financing"], themes: ["affiliation"], blocks: [3, 6] } },

    /* 3 · CONTRIBUTION MODEL ------------------------------------------------ */
    { id: "fi.platform", col: "financing", label: "The platform withholds and remits",
      note: "Deduction at payout of both shares, settled monthly or weekly to the institution.",
      evidence: { groups: ["financing", "administration", "menu"], themes: ["contribution"], blocks: [4, 6] } },
    { id: "fi.threeway", col: "financing", label: "Worker, employer and State share it three ways",
      note: "An explicit split that keeps the worker's rate low where the sector's margins are thin.",
      evidence: { groups: ["financing", "menu"], themes: ["contribution"], blocks: [4] } },
    { id: "fi.workeronly", col: "financing", label: "The worker funds it alone",
      note: "The self-employed route: the earner pays both shares, with targeted support in low months.",
      evidence: { groups: ["financing"], themes: ["affiliation", "contribution"], blocks: [4] } },
    { id: "fi.state", col: "financing", label: "The State pays the employer share",
      note: "Where no employer exists and contributory capacity is low, the budget stands in for one.",
      evidence: { groups: ["financing", "diagnosis"], themes: ["contribution"], blocks: [4, 7] } },
    { id: "fi.client", col: "financing", label: "The hiring party withholds at payment",
      note: "Whoever pays for the work deducts its share at the moment it pays, with no standing employer.",
      evidence: { groups: ["financing", "legal"], themes: ["contribution"], blocks: [4] } },
    { id: "fi.levy", col: "financing", label: "A per-transaction levy on the platform",
      note: "A small charge on every task or payout into a central fund, rather than a payroll rate.",
      evidence: { groups: ["financing", "practice", "menu"], themes: ["contribution", "pending"], blocks: [4] } },
    { id: "fi.incentive", col: "financing", label: "An enrolment incentive and matching subsidy",
      note: "A one-off payment to join plus a State match on annual contributions, to make voluntary work.",
      evidence: { groups: ["financing"], themes: ["affiliation"], blocks: [4] } },

    /* 4 · ADMINISTRATIVE PATHWAY -------------------------------------------- */
    { id: "pa.api", col: "pathway", label: "The platform registers through an API",
      note: "Enrolment at the first paid task, machine to machine, with the worker completing by self-service.",
      evidence: { groups: ["administration", "menu"], themes: ["contribution", "regulation"], blocks: [6] } },
    { id: "pa.portal", col: "pathway", label: "Self-registration through e-government",
      note: "The worker enrols through the national digital service, with in-person help where needed.",
      evidence: { groups: ["administration"], themes: ["affiliation"], blocks: [6] } },
    { id: "pa.declare", col: "pathway", label: "The employer or household declares",
      note: "The party engaging the worker files the days and earnings; the worker can see the record.",
      evidence: { groups: ["administration", "legal"], themes: ["scope", "termination"], blocks: [6] } },
    { id: "pa.community", col: "pathway", label: "Community agents and cooperatives",
      note: "Registration and micro-collection through trusted local structures and mobile-money agents.",
      evidence: { groups: ["administration", "financing"], themes: ["affiliation"], blocks: [6] } },
    { id: "pa.uniqueid", col: "pathway", label: "A one-time unique ID for all online work",
      note: "A single identifier issued once and reused by every platform, with eKYC under data-protection law.",
      evidence: { groups: ["administration", "standards"], themes: ["regulation"], blocks: [6] } },
    { id: "pa.remote", col: "pathway", label: "Remote channels and mobile payment",
      note: "Registration by app or phone and frequent low-value payments, with no office visit.",
      evidence: { groups: ["administration", "financing"], themes: ["affiliation"], blocks: [6] } },

    /* 5 · REFORM SEQUENCING -------------------------------------------------- */
    { id: "sq.ssi", col: "sequencing", label: "The social security institution leads",
      note: "Delivery-led: the institution that will run the scheme owns the design and the timetable.",
      evidence: { groups: ["administration", "voice"], themes: ["regulation", "affiliation"], blocks: [7, 8] } },
    { id: "sq.ministry", col: "sequencing", label: "The ministry of labour leads",
      note: "Policy-led: the labour ministry convenes, finance agrees the budget, the institution administers.",
      evidence: { groups: ["voice", "practice", "menu"], themes: ["regulation", "representation"], blocks: [7, 8] } },
    { id: "sq.intermin", col: "sequencing", label: "An inter-ministerial task force leads",
      note: "Where the reform crosses mandates, a central body chairs and the institution implements.",
      evidence: { groups: ["voice", "standards"], themes: ["regulation"], blocks: [7, 8] } },
    { id: "sq.agency", col: "sequencing", label: "A dedicated agency leads on its own mandate",
      note: "The scheme's own administrator drives it, billing the subsidy to the finance ministry.",
      evidence: { groups: ["administration", "financing"], themes: ["affiliation"], blocks: [7, 8] } }
  ],

  /* --------------------------------------------------------------------------
     PATHS — one row per individual presentation. Country and institution only.
     `sol` points at the matching entry in window.BRAIN.solutions by country.
     ----------------------------------------------------------------------- */
  paths: [
    { country: "Türkiye",      inst: "SGK",   sol: "Türkiye",
      nodes: ["ch.platform", "cv.mandatory",   "fi.platform",   "pa.api",       "sq.ssi"] },
    { country: "Viet Nam",     inst: "ILO",   sol: "International organizations",
      nodes: ["ch.platform", "cv.neutral",     "fi.platform",   "pa.api",       "sq.intermin"] },
    { country: "Viet Nam",     inst: "VCCI",  sol: "Viet Nam",
      nodes: ["ch.platform", "cv.neutral",     "fi.platform",   "pa.api",       "sq.intermin"] },
    { country: "Zambia",       inst: "ILO",   sol: "International organizations",
      nodes: ["ch.platform", "cv.neutral",     "fi.platform",   "pa.api",       "sq.ministry"] },
    { country: "Philippines",  inst: "DOLE",  sol: "Philippines",
      nodes: ["ch.platform", "cv.mandatory",   "fi.platform",   "pa.api",       "sq.ministry"] },
    { country: "Nigeria",      inst: "NSITF", sol: "Nigeria",
      nodes: ["ch.platform", "cv.mandatory",   "fi.platform",   "pa.api",       "sq.ssi"] },
    { country: "Uganda",       inst: "NSSF",  sol: "Uganda",
      nodes: ["ch.platform", "cv.mandatory",   "fi.platform",   "pa.api",       "sq.ministry"] },
    { country: "Ghana",        inst: "SSNIT", sol: "Ghana",
      nodes: ["ch.platform", "cv.mandatory",   "fi.platform",   "pa.api",       "sq.ministry"] },
    { country: "India",        inst: "MoLE",  sol: "India",
      nodes: ["ch.platform", "cv.statusbased", "fi.levy",       "pa.portal",    "sq.ministry"] },

    { country: "Türkiye",      inst: "SGK",   sol: "Türkiye",
      nodes: ["ch.online",   "cv.threshold",   "fi.workeronly", "pa.portal",    "sq.ssi"] },
    { country: "Türkiye",      inst: "SGK",   sol: "Türkiye",
      nodes: ["ch.online",   "cv.threshold",   "fi.workeronly", "pa.portal",    "sq.ssi"] },
    { country: "Türkiye",      inst: "SGK",   sol: "Türkiye",
      nodes: ["ch.online",   "cv.threshold",   "fi.workeronly", "pa.portal",    "sq.ssi"] },
    { country: "Türkiye",      inst: "IOM",   sol: "International organizations",
      nodes: ["ch.online",   "cv.threshold",   "fi.workeronly", "pa.portal",    "sq.ssi"] },
    { country: "India",        inst: "MoLE",  sol: "India",
      nodes: ["ch.online",   "cv.neutral",     "fi.levy",       "pa.uniqueid",  "sq.ministry"] },

    { country: "Türkiye",      inst: "SGK",   sol: "Türkiye",
      nodes: ["ch.domestic", "cv.statusbased", "fi.threeway",   "pa.declare",   "sq.ssi"] },
    { country: "Türkiye",      inst: "SGK",   sol: "Türkiye",
      nodes: ["ch.domestic", "cv.statusbased", "fi.threeway",   "pa.declare",   "sq.ssi"] },
    { country: "Türkiye",      inst: "SGK",   sol: "Türkiye",
      nodes: ["ch.domestic", "cv.account",     "fi.threeway",   "pa.declare",   "sq.ssi"] },
    { country: "Georgia",      inst: "LIO",   sol: "Georgia",
      nodes: ["ch.domestic", "cv.account",     "fi.threeway",   "pa.declare",   "sq.ministry"] },

    { country: "Türkiye",      inst: "SGK",   sol: "Türkiye",
      nodes: ["ch.agri",     "cv.statusbased", "fi.threeway",   "pa.declare",   "sq.ministry"] },
    { country: "Türkiye",      inst: "IOM",   sol: "International organizations",
      nodes: ["ch.agri",     "cv.statusbased", "fi.threeway",   "pa.declare",   "sq.ministry"] },

    { country: "Angola",       inst: "INSS",  sol: "Angola",
      nodes: ["ch.selfemp",  "cv.voluntary",   "fi.client",     "pa.remote",    "sq.ministry"] },
    { country: "Angola",       inst: "MAPTSS", sol: "Angola",
      nodes: ["ch.selfemp",  "cv.mandatory",   "fi.platform",   "pa.api",       "sq.ministry"] },
    { country: "Maldives",     inst: "MPAO",  sol: "Maldives",
      nodes: ["ch.selfemp",  "cv.voluntary",   "fi.incentive",  "pa.portal",    "sq.agency"] },
    { country: "Nigeria",      inst: "NSITF", sol: "Nigeria",
      nodes: ["ch.selfemp",  "cv.statusbased", "fi.client",     "pa.community", "sq.ssi"] },

    { country: "Nigeria",      inst: "NSITF", sol: "Nigeria",
      nodes: ["ch.rural",    "cv.statusbased", "fi.state",      "pa.community", "sq.intermin"] },
    { country: "Nigeria",      inst: "NSITF", sol: "Nigeria",
      nodes: ["ch.rural",    "cv.statusbased", "fi.state",      "pa.community", "sq.intermin"] },
    { country: "Nigeria",      inst: "NSITF", sol: "Nigeria",
      nodes: ["ch.rural",    "cv.residence",   "fi.state",      "pa.community", "sq.ssi"] }
  ],

  /* The most-travelled route from a challenge to a reform, as a node id list. */
  golden: ["ch.platform", "cv.mandatory", "fi.platform", "pa.api", "sq.ministry"],

  headline:
    "Twenty-seven executive solutions, each one a single route across the five blocks of the Strategy Canvas. " +
    "<b>Platform drivers and riders</b> are the most-named excluded group, and the route the room travelled " +
    "most often runs from there through <b>mandatory entry with a third party registering</b> and " +
    "<b>the platform withholding at source</b> to <b>registration through an API</b>. Who leads the reform " +
    "splits almost evenly between the labour ministry and the social security institution. " +
    "Select any node to trace its route and see the evidence underneath it."
};
