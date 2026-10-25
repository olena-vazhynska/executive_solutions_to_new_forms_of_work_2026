/* ============================================================================
   COLLECTIVE BRAIN — what the cohort knows, and what it builds with it
   ----------------------------------------------------------------------------
   Three layers, rendered in this order by assets/brain.js:

     1. KNOWLEDGE MAP   the key subjects of the course as connected nodes
     2. INTEGRATED EXERCISE  the logic that carries a participant from the
                             World Café diagnosis to an executive solution
     3. SOLUTIONS WALL  what participants actually produced, by country

   The solutions wall below is written up from the individual presentations
   given on Friday 23 October 2026. Each card shows the country, the problem
   framed and the solution designed — NEVER a participant name.
   ========================================================================== */

window.BRAIN = {
  updated: "2026-10-23",  // the solutions wall was written up from the Day 5 presentations

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
    { country: "Angola", region: "Africa", institutions: ["MAPTSS", "INSS"], presentations: 2, pending: false,
      title: "Everyone deserves to be protected — bringing self-employed and independent workers into the contributory system",
      problem:
        "Angolan law already admits self-employed workers — phone and computer repair technicians, vehicle " +
        "mechanics, masons, and the newer independent providers of digital services — and most of them work in " +
        "plain sight in public spaces. Around 75% of the national workforce is nevertheless outside the system. " +
        "The barrier named was not the statute: it was seasonal and fluctuating income, the absence of any " +
        "short-term benefit worth joining for, and no large-scale awareness effort.",
      solution:
        "Mandatory affiliation triggered automatically by the issuing of the first receipt, with the hiring " +
        "party withholding its share at the moment it pays for the work and remitting by mobile channel. Short " +
        "qualifying periods — six months of contributions in the last twelve — contributions assessed on actual " +
        "income with a floor indexed to the national minimum wage, and totalisation of contribution periods so " +
        "that moving between employment and self-employment costs nothing. Family benefits and sickness placed " +
        "ahead of old age, because they are what makes joining worth doing.",
      blocks: ["scope", "architecture", "financing", "administration"],
      insight:
        "A scheme that is legally open to a group is not the same as a scheme that covers it. Angola's binding " +
        "constraint was awareness and immediate benefit, not legal scope — so the design put visible short-term " +
        "benefits first and made registration a by-product of being paid." },

    { country: "Cambodia", region: "Asia and the Pacific", institutions: ["NSSF"], presentations: 3, pending: true,
      title: "", problem: "", solution: "", blocks: [], insight: "" },

    { country: "Georgia", region: "Europe and Central Asia", institutions: ["Labour Inspection Office"], presentations: 1, pending: false,
      title: "A labour inspection strategy for domestic work, when the inspector cannot enter the workplace",
      problem:
        "96% of domestic workers — nannies, housekeepers and caregivers, predominantly women — worked under oral " +
        "agreements (2019). Article 15 of the Constitution makes the private home inviolable, so the power under " +
        "Article 16(2)(a) of the Law on Labour Inspection to enter a workplace without notice stops at the door " +
        "of the only workplace that matters here. Enforcement, not legal scope, is where the scheme fails.",
      solution:
        "Mandatory coverage from day one of registration, through two entry routes rather than one: licensed " +
        "recruitment agencies, plus a simple household self-registration gateway — because agency-only " +
        "registration would miss every direct hire. Earnings and hours recorded per shift so contributions track " +
        "irregular work and rights stay portable across households; the cost split three ways between worker, " +
        "employer and state. Enforcement moved off the doorstep into risk-based digital monitoring, targeted " +
        "audits of agencies, lawful data exchange between SESA, the Revenue Service and the Labour Inspection " +
        "Office, and proposed joint liability for agencies and households.",
      blocks: ["scope", "architecture", "financing", "administration", "voice"],
      insight:
        "When the constitution closes the workplace to the inspector, enforcement has to be rebuilt somewhere " +
        "else — in licensing, in data matching and in joint liability. The design question is not how to inspect " +
        "harder, but where else the obligation can be made to bite." },

    { country: "Ghana", region: "Africa", institutions: ["NHIA", "SSNIT"], presentations: 1, pending: false,
      title: "An Accra pilot for bike delivery riders, linking SSNIT, NHIS and injury protection",
      problem:
        "Bike couriers carrying food and parcels through apps and fleet partners can already enrol as " +
        "self-employed members through SEED — at 13.5% of declared monthly income, funded entirely by the rider. " +
        "Irregular earnings, fuel and repair costs, contractor labels and work across several apps make that " +
        "unaffordable in practice, and nothing guarantees continuous injury income protection. NHIS treatment " +
        "and SSNIT pensions do not replace the daily earnings an accident stops.",
      solution:
        "Link the three institutions Ghana already has instead of building a fourth. Work injury cover and NHIS " +
        "activation first, SSNIT pension accrual through SEED in parallel. Contributions assessed on verified " +
        "net delivery earnings, deducted at payout and settled monthly including recorded cash jobs; a proposed " +
        "split of rider 5.5% and platform 8%, with a targeted state subsidy replacing two points of the rider " +
        "share and the platform paying a separately priced injury premium. One SSNIT record with linked NHIS " +
        "membership across apps, and claims coordinated between platforms and fleet partners. Enrolment, active " +
        "cover, payment gaps, claims and take-home earnings reviewed at months 6 and 12.",
      blocks: ["architecture", "financing", "administration", "governance"],
      insight:
        "Pricing injury cover separately from the pension contribution is what makes the package affordable: the " +
        "rider is protected from the first task rather than in thirty years, and the platform pays a premium it " +
        "can underwrite instead of an open-ended liability." },

    { country: "India", region: "Asia and the Pacific", institutions: ["Ministry of Labour & Employment"], presentations: 2, pending: false,
      title: "The two edges of the Code on Social Security — aggregators beyond the border, and work the law does not yet call work",
      problem:
        "Two groups fall outside a statute built for them. The Code on Social Security, 2020 collects from " +
        "domestic aggregators, so the 100,000-odd platform workers engaged by aggregators based outside India " +
        "have no payer at all. At the other edge, digital content creators — a trade that has grown from hobby " +
        "to a profession worth some $3 billion globally — fit no existing definition of 'work' or 'worker', and " +
        "so appear nowhere in the social security legislation.",
      solution:
        "For cross-border aggregators: keep e-Shram for registration and EPFO for collection, and reach the " +
        "offshore payer through social security agreements, with 2.5% from the worker and 2.5% from the platform " +
        "levied per transaction into a single centralised national fund — one assignment in a year qualifying " +
        "for full coverage. For creators: a mandatory one-time unique ID covering every form of online work, " +
        "eKYC collected by the platform in trust under the DPDP Act, contributions on each transaction with a " +
        "floor for low earners, a platform-funded retention allowance of at least three months at prevailing " +
        "minimum wages, annual compliance audits tied to the companies register, and an ombudsman with a " +
        "one-month limit on grievances. Maternity placed first in the contingency order — a life milestone, not " +
        "a sickness, and not a roadblock.",
      blocks: ["scope", "architecture", "financing", "administration"],
      insight:
        "India's gap is not a missing law but a missing payer and a missing definition. Where the aggregator is " +
        "offshore the collection point has to be the transaction and the lever a bilateral agreement; where the " +
        "occupation is new, registration has to come before classification rather than after it." },

    { country: "Maldives", region: "Asia and the Pacific", institutions: ["MPAO"], presentations: 1, pending: false,
      title: "Buying participation — extending contributory pension coverage to the informal sector",
      problem:
        "More than 45,000 Maldivians work outside formal arrangements, self-employed with no clearly defined " +
        "employer, and sit outside the contributory pension scheme because the Pension Act makes participation " +
        "voluntary. A universal old-age pension already paying 233.4% of the national poverty line removes much " +
        "of the reason to join a scheme whose benefit is long-term and invisible. 27% of employed Maldivians are " +
        "in informal employment (Maldives Bureau of Statistics, 2024, Census 2022).",
      solution:
        "Work with the voluntary statute rather than against it, and pay people to come in. A one-off enrolment " +
        "incentive of MVR 5,000 for every newly registered self-employed person, plus a state subsidy of 25% of " +
        "annual contributions, conditional on meeting a qualifying annual contribution threshold with reported " +
        "income below MVR 60,000. Contributions of any amount on any schedule through the self-employed " +
        "collection portal in Koshaaru, with no ceiling, and subsidy eligibility that survives bad months " +
        "provided the annual target is met. Initial fiscal cost of MVR 4.69 million in 2027 for the enrolment " +
        "incentive alone; review every three years, with the registration itself becoming the country's first " +
        "data point on its self-employed workforce.",
      blocks: ["architecture", "financing", "administration"],
      insight:
        "Where a generous universal pension already exists and the law forbids compulsion, the design problem is " +
        "an incentive problem. The scheme has to pay people to join and give them something before retirement, " +
        "or voluntary will keep meaning empty." },

    { country: "Nigeria", region: "Africa", institutions: ["NSITF"], presentations: 10, pending: false,
      title: "Two routes into the Employees' Compensation Scheme — platform drivers through the app, rural farmers through the community",
      problem:
        "Coverage is confined to recognised employment relationships, requires an employer to register workers " +
        "and remit, and asks for payroll documentation, business registration or repeated office visits. That " +
        "excludes ride-hailing, motorcycle-taxi and delivery drivers, whose platforms treat themselves as " +
        "technology intermediaries. It equally excludes village farmers, artisans and long-distance informal " +
        "drivers, who have seasonal or irregular income, multiple occupations and no employer at all — and who " +
        "are too numerous and too mobile to be located one by one.",
      solution:
        "Keep the Employees' Compensation Act as the vehicle and change how people get into it. For platform " +
        "drivers: the platform registers the worker by API call to the social security institution with " +
        "self-service completion by the worker, a 1% levy on each monthly payout withheld and remitted through " +
        "digital payment channels, and registration made a prerequisite for doing business in the country. For " +
        "farmers and artisans: residence-based, community-led entry supported by cooperatives and trade " +
        "associations, NIN as the identity spine with data drawn from NIMC, CAC and FIRS, agent-assisted micro " +
        "deposits through Remita, OPay, Moniepoint and POS kiosks, the state paying the employer share, and a " +
        "floor top-up for low or failed seasons. Injury, health and old age in that order on both routes, with " +
        "aggregation across jobs and platforms and a digital account that follows the worker.",
      blocks: ["scope", "architecture", "financing", "administration"],
      insight:
        "Enforcement is cheapest where the state already holds a chokepoint. For platforms that chokepoint is " +
        "the licence to operate; for rural work it is the cooperative and the mobile-money agent. Neither route " +
        "asks the worker to visit an office." },

    { country: "Philippines", region: "Asia and the Pacific", institutions: ["DOLE"], presentations: 1, pending: false,
      title: "Moving the duty, not the classification — protection and benefits for platform workers",
      problem:
        "Roughly 1.6 million platform workers are outside the social security system. The Labor Code and the " +
        "social security law already bring the self-employed inside mandatory coverage, so the legal scope is " +
        "not the obstacle: as self-employed, platform workers must register themselves and pay by themselves, " +
        "and it is awareness and cash flow that decide who is actually covered.",
      solution:
        "Keep the self-employed classification and move the administrative duty. Mandatory registration by the " +
        "platform operator at the onset of engagement, with the platform withholding and facilitating remittance " +
        "at the rate a regular employer would pay: worker 5% and platform 10% of the minimum wage rate. Where a " +
        "worker is active on several apps, operators share the employer cost prorated to the revenue each earned " +
        "them. Injury entitlement from the start of engagement — the risk begins the moment work is performed — " +
        "then unemployment and health, with a minimum floor benefit for all and an additional tier for workers " +
        "who exceed quotas. Data-sharing agreements between operators, the social security system and the " +
        "Department; enforcement through the existing labour inspectorate; redress through labour-tribunal " +
        "conciliation into the social security system and the ordinary judicial appeal route.",
      blocks: ["scope", "architecture", "financing", "administration", "voice"],
      insight:
        "Where the statute already covers the self-employed, the reform is administrative rather than " +
        "legislative: shift the registration and remittance duty onto the party that already holds the earnings " +
        "data, and the classification fight never has to be won." },

    { country: "Türkiye", region: "Europe and Central Asia", institutions: ["SGK"], presentations: 8, pending: false,
      title: "Three excluded groups, one institution — domestic work below the threshold, seasonal agriculture, and the online cross-border earner",
      problem:
        "Three different exclusion mechanics inside one system. Domestic cleaners and carers are covered only " +
        "above ten days a month per household, and the threshold is counted separately for each household — so " +
        "five households of four days each is twenty days of work and still no comprehensive cover. Seasonal and " +
        "temporary agricultural workers, on the order of 100,000–200,000 and around 80% informal, stay out " +
        "because participation is voluntary, margins are thin, awareness is low and migrant workers face work " +
        "permit or exemption barriers. Digital content creators and freelancers earning through foreign " +
        "platforms are not defined in the legal system at all, and are assessed under general rules that leave " +
        "gaps in pension, health and short-term benefits.",
      solution:
        "One worker account per person, in all three cases. For domestic work: every household declares into a " +
        "single worker account, days and earnings aggregate across households, accrual is proportional and the " +
        "State pays a common support rate with no means test — support following verified work, never fictitious " +
        "days, with dual confirmation and one support account per worker to stop inflated declarations. For " +
        "agriculture: an Agricultural Workforce Platform run by the Ministry on which employers record days " +
        "worked and gross pay and remit both shares on a daily basis, health, family and sickness benefits " +
        "first, occupational accident cover from day one and health insurance after 30 days, and a heavy State " +
        "share in the split. For online and cross-border earners: a dedicated registration route triggered by a " +
        "platform-income threshold, contribution periods aggregated across employment statuses, a pro-rata " +
        "minimum-wage floor and a ceiling at nine to nine-and-a-half times the minimum wage, built on lawful " +
        "matching between the Revenue Administration, SGK, the banks and the platforms under the data protection " +
        "law, with correction and appeal through e-Devlet.",
      blocks: ["scope", "architecture", "financing", "administration", "governance"],
      insight:
        "A threshold applied per employer rather than per worker is an exclusion rule in disguise. Türkiye's " +
        "three cases converge on the same fix — count the worker, not the engagement — and that only works once " +
        "every payer declares into one account." },

    { country: "Uganda", region: "Africa", institutions: ["MGLSD", "NSSF"], presentations: 1, pending: false,
      title: "Designing for the platform leaving — ride-hailing drivers and boda-boda riders",
      problem:
        "96% of surveyed taxi-platform workers reported none of the listed social protection arrangements (ILO, " +
        "2024). Car drivers and motorcycle riders on the ride apps lose their income the moment an accident or a " +
        "deactivation stops them, and commissions, fuel or battery-swap charges and vehicle repayments have " +
        "already taken most of the margin. Employee status would trigger existing NSSF and injury duties and " +
        "voluntary NSSF is open to the self-employed, but new mandatory duties on the apps need legislation. " +
        "Uber's exit from the country in September 2026 showed how quickly a platform can simply leave.",
      solution:
        "A costed Kampala and Wakiso pilot. Pooled work-injury cover from the first trip with no earnings floor, " +
        "NSSF savings accruing in parallel, health, sickness and maternity costed for a later phase. A proposed " +
        "self-employed split of worker 5% and platform 10% of assessed net driving earnings, with the State " +
        "replacing two points of the worker share for eligible low earners and the platform funding the injury " +
        "premium; each app pays on its own earnings share and the apps reconcile quarterly, with no savings " +
        "charge and no loss of accrued balance in a zero-earnings month. One NSSF record across apps and jobs, " +
        "preserved through app switching, deactivation or platform exit; NSSF payments kept visibly separate " +
        "from vehicle loans and battery-swap charges; and free phone, USSD and in-person redress that handles " +
        "injury claims, missing savings and deactivation appeals apart from one another.",
      blocks: ["architecture", "financing", "administration", "governance"],
      insight:
        "Design for the platform leaving. Entitlements that live in the worker's relationship with an app are " +
        "wiped out when it exits; entitlements in one national record survive it. Uganda also insisted on " +
        "measuring net pay after vehicle and energy costs — the gross fare is not the contribution base." },

    { country: "Viet Nam", region: "Asia and the Pacific", institutions: ["VCCI"], presentations: 1, pending: false,
      title: "Status-neutral entry — contributions on real earnings, collected trip by trip",
      problem:
        "Shippers and app drivers — no official statistic, an estimated 600,000 — have no legal status, because " +
        "employee-like work is labelled self-employment. Voluntary social insurance covers only old age and " +
        "survivors, excludes accident, sickness and unemployment, places most of the financing on the worker, " +
        "and calculates the State subsidy as a share of the rural poverty line, so it is neither adequate nor " +
        "attractive. There is no automatic registration, no statutory platform contribution and no collection at " +
        "source.",
      solution:
        "Sidestep the employee-versus-partner argument by making entry status-neutral: coverage attaches to " +
        "income earned through a registered platform. Platforms register the worker at the first paid task " +
        "through an API, using the citizen ID as the single social insurance number; they withhold the worker " +
        "share from trip earnings and remit it with their own share to Vietnam Social Security, which aggregates " +
        "across platforms pro rata to the income each mediated. Injury cover from the first trip with no " +
        "minimum, sickness added to the voluntary scheme, pension accrual on the aggregated base with top-ups in " +
        "bad months; a combined rate below the employee rate, and a contribution base of real earnings net of " +
        "work costs. API compliance made a condition of the operating licence and cross-checked against tax " +
        "data; the worker sees every contribution in the VSS app.",
      blocks: ["scope", "architecture", "financing", "administration", "voice"],
      insight:
        "Letting coverage follow the income rather than the status buys time: workers are protected from the " +
        "first trip while classification is settled on the facts, case by case. Pricing the rate below the " +
        "employee rate lets the scheme be afforded before it is argued about." },

    { country: "International organizations", region: "International", institutions: ["ILO", "IOM"], presentations: 4, pending: false,
      title: "The view from the technical agencies — Zambia's missing middle, Viet Nam's classification trap, migrant workers in Turkish agriculture",
      problem:
        "Seen from the agencies that support the reforms, the gap has the same shape in very different systems. " +
        "Over 70% of Zambian businesses are informal and untraceable, and the 200,000-plus platform drivers now " +
        "working fall into the missing middle of an employer-based scheme designed for regular formal workers. " +
        "In Viet Nam, classification keeps employee-like work inside a voluntary scheme with no short-term " +
        "benefits while effective coverage stands at 38.3% (SDG 1.3.1). In Turkish agriculture, migrant workers " +
        "without a valid work permit or an applicable exemption are excluded before scheme design is even " +
        "reached.",
      solution:
        "Treat the platform economy as the formalisation instrument rather than the problem: platform " +
        "registration makes income traceable for the first time, so the platform registers, withholds and " +
        "remits, and the State formalises and inspects — with injury first, one registration across apps, towns " +
        "and services, and the burden of bad months shared between worker and platform. Anchor each choice in a " +
        "standard: C193 Article 8 on State-led formalisation of platform work, classification on the primacy of " +
        "facts with a mandatory employee regime where an employment relationship exists, R202 on universality, " +
        "coherence and continuity, and C102 on adequacy. For migrant agricultural workers, a simplified digital " +
        "registration route open to all paid agricultural work including seasonal and migrant workers, with " +
        "subsidised formalisation costs and contingency funding for low-income periods. Where contributions " +
        "from one platform do not reach the minimum base, channel them to the institution anyway so the worker " +
        "never loses the record.",
      blocks: ["scope", "architecture", "financing", "voice", "governance"],
      insight:
        "Data is the starting line. In each of these systems the first ask was not a contribution rate but " +
        "evidence — rides, earnings and accidents from the platforms, and a national count that does not yet " +
        "exist. A scheme cannot be costed for a population nobody has measured." }
  ],

  /* Cross-cutting lessons the cohort reached together. Fill after Friday. */
  convergence: [
    "Almost every design moved the registration and collection duty onto the party that already holds the " +
    "earnings data — the platform, the household, the hiring client — leaving the worker nothing to do but " +
    "show up to work. Where no such party exists, cooperatives, community agents and mobile-money networks " +
    "were asked to stand in for it.",

    "Work injury came first nearly everywhere. It is the risk that stops income today, it can be priced and " +
    "covered from the first task without a qualifying period, and it gives a worker a reason to join a scheme " +
    "whose pension pays out in thirty years.",

    "Thresholds counted per engagement rather than per worker emerged as the quiet exclusion mechanism — ten " +
    "days per household, a minimum base per platform, an earnings floor per app. The common fix was one " +
    "account per worker into which every payer declares, with days and earnings aggregated across them.",

    "Classification was repeatedly left unresolved on purpose. Status-neutral entry — coverage attached to " +
    "income earned through a registered platform — let schemes protect people now and settle the " +
    "employee-or-partner question later, on the facts, case by case.",

    "The compliance lever participants trusted was not the inspectorate but the licence: make social security " +
    "reporting a condition of operating in the country, then cross-check what the platform reports against tax " +
    "data. Limited inspection capacity was named as a binding constraint by almost every country.",

    "The 'one number' was the hardest slide in the deck. Several countries have no national count of their " +
    "platform workforce at all, and the first ask of ministers and platforms was evidence — rides, earnings, " +
    "accidents — rather than a contribution rate."
  ]
};
