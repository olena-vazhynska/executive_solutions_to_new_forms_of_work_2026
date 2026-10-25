/* ============================================================================
   PARTICIPANT ROSTER — A9019238, 19–23 October 2026
   ----------------------------------------------------------------------------
   Source: "A9019238_ParticipantList_EN_12_Oct" (34 registered participants).

   One object per person. These records drive the whole Participants tab: the
   searchable / filterable / sortable table, the summary charts and the cohort
   demographics. Any field added here becomes a table column automatically; the
   charts use `country`, `region`, `orgType` and `sex`.

   Conventions and deliberate omissions
   ------------------------------------
   · E-mail addresses, telephone numbers and postal addresses from the roster
     are NOT included — this dashboard is published as a static site.
   · `sex` is taken from the courtesy title (Mr./Ms.) recorded at registration.
   · `country` is the country of the nominating institution; for staff of
     international organizations it is the duty station, and `group` records
     that they were nominated under "International organization".
   · Two institution names in the source list were visibly mis-keyed and are
     corrected here: participant 1 (e-mail domain maptss.gov.ao → Ministry of
     Public Administration, Labour and Social Security) and participant 5
     (listed with Angola's INSS but registered under Cambodia's NSSF).
   ========================================================================== */

window.PARTICIPANTS = [
  /* --- ANGOLA ----------------------------------------------------------- */
  { name: "Vassili De Abreu Agostinho", sex: "M", country: "Angola", region: "Africa", city: "Luanda",
    organization: "Ministry of Public Administration, Labour and Social Security (MAPTSS)",
    orgType: "Government", position: "National Director of Social Security" },
  { name: "Geraldo Dociano Culivela", sex: "M", country: "Angola", region: "Africa", city: "Luanda",
    organization: "Instituto Nacional de Segurança Social (INSS)",
    orgType: "Social security institution", position: "Director" },

  /* --- CAMBODIA --------------------------------------------------------- */
  { name: "Heng Sophannarith", sex: "M", country: "Cambodia", region: "Asia and the Pacific", city: "Phnom Penh",
    organization: "National Social Security Fund (NSSF)",
    orgType: "Social security institution", position: "National Director of Social Security" },
  { name: "Noem Sreyneang", sex: "F", country: "Cambodia", region: "Asia and the Pacific", city: "Phnom Penh",
    organization: "National Social Security Fund (NSSF)",
    orgType: "Social security institution", position: "Head of Division" },
  { name: "Kaing Seyha", sex: "M", country: "Cambodia", region: "Asia and the Pacific", city: "Phnom Penh",
    organization: "National Social Security Fund (NSSF)",
    orgType: "Social security institution", position: "Deputy Head" },

  /* --- GEORGIA ---------------------------------------------------------- */
  { name: "Natia Panozishvili", sex: "F", country: "Georgia", region: "Europe and Central Asia", city: "Tbilisi",
    organization: "Labour Inspection Office of Georgia",
    orgType: "Labour inspection", position: "Head of the Complaints Review Section" },

  /* --- GHANA ------------------------------------------------------------ */
  { name: "Raphael Yelfoglo Segkpeb", sex: "M", country: "Ghana", region: "Africa", city: "Accra",
    organization: "National Health Insurance Authority (NHIA)",
    orgType: "Social security institution", position: "Deputy Chief Executive, Administration & Human Resource" },

  /* --- INDIA ------------------------------------------------------------ */
  { name: "Mahendra Kumar", sex: "M", country: "India", region: "Asia and the Pacific", city: "New Delhi",
    organization: "Ministry of Labour & Employment",
    orgType: "Government", position: "Joint Secretary" },
  { name: "Tejaswi Naik", sex: "M", country: "India", region: "Asia and the Pacific", city: "New Delhi",
    organization: "Ministry of Labour & Employment",
    orgType: "Government", position: "Joint Secretary" },

  /* --- INTERNATIONAL ORGANIZATIONS -------------------------------------- */
  { name: "Denise Chicalia de Magalhães Monteiro", sex: "F", country: "Viet Nam", region: "Asia and the Pacific", city: "Hanoi",
    organization: "International Labour Organization (ILO)",
    orgType: "International organization", position: "Social Protection Programme Manager",
    group: "International organization" },
  { name: "Hande Evsen", sex: "F", country: "Türkiye", region: "Europe and Central Asia", city: "Ankara",
    organization: "International Organization for Migration (IOM) Türkiye",
    orgType: "International organization", position: "Project Associate (Harmonization)",
    group: "International organization" },
  { name: "Felix Mwenge", sex: "M", country: "Zambia", region: "Africa", city: "Lusaka",
    organization: "International Labour Organization (ILO)",
    orgType: "International organization", position: "Technical Officer",
    group: "International organization" },
  { name: "Sümeyye Tanrıverdi", sex: "F", country: "Türkiye", region: "Europe and Central Asia", city: "Ankara",
    organization: "International Organization for Migration (IOM) Türkiye",
    orgType: "International organization", position: "National Project Officer",
    group: "International organization" },

  /* --- MALDIVES --------------------------------------------------------- */
  { name: "Fathimath Nisha Fahmy", sex: "F", country: "Maldives", region: "Asia and the Pacific", city: "Malé",
    organization: "Maldives Pension Administration Office (MPAO)",
    orgType: "Social security institution", position: "Manager, Policy and Programs" },

  /* --- NIGERIA ---------------------------------------------------------- */
  { name: "Oluwafolakemi Alake Akosile", sex: "F", country: "Nigeria", region: "Africa", city: "Lagos",
    organization: "Nigeria Social Insurance Trust Fund (NSITF)",
    orgType: "Social security institution", position: "Head, Branch Human Resources Unit" },
  { name: "Anzaku Emmanuel Auta", sex: "M", country: "Nigeria", region: "Africa", city: "Yola",
    organization: "Nigeria Social Insurance Trust Fund (NSITF)",
    orgType: "Social security institution", position: "Deputy General Manager" },
  { name: "Medinat Awani", sex: "F", country: "Nigeria", region: "Africa", city: "Ibadan",
    organization: "Nigeria Social Insurance Trust Fund (NSITF)",
    orgType: "Social security institution", position: "Regional Head, Claims and Compensation Unit" },
  { name: "Muazu Dalhatu Zurmi", sex: "M", country: "Nigeria", region: "Africa", city: "Abuja",
    organization: "Nigeria Social Insurance Trust Fund (NSITF)",
    orgType: "Social security institution", position: "Head of Department" },
  { name: "Kingsley Dibie", sex: "M", country: "Nigeria", region: "Africa", city: "Lagos",
    organization: "Nigeria Social Insurance Trust Fund (NSITF)",
    orgType: "Social security institution", position: "Assistant General Manager, Inspection (Lekki)" },
  { name: "Adeola Abimbola Folorunso", sex: "F", country: "Nigeria", region: "Africa", city: "Ibadan",
    organization: "Nigeria Social Insurance Trust Fund (NSITF)",
    orgType: "Social security institution", position: "Head of Branch/Region (Ibadan)" },
  { name: "Mercy Nnenna Kowe", sex: "F", country: "Nigeria", region: "Africa", city: "Abuja",
    organization: "Nigeria Social Insurance Trust Fund (NSITF)",
    orgType: "Social security institution", position: "Assistant General Manager" },
  { name: "Asmau Mohammed", sex: "F", country: "Nigeria", region: "Africa", city: "Abuja",
    organization: "Nigeria Social Insurance Trust Fund (NSITF)",
    orgType: "Social security institution", position: "Deputy Director" },
  { name: "Maimuna Suleiman", sex: "F", country: "Nigeria", region: "Africa", city: "Abuja",
    organization: "Nigeria Social Insurance Trust Fund (NSITF)",
    orgType: "Social security institution", position: "Assistant General Manager" },
  { name: "Olaniyi Roqeeb Yusuff", sex: "M", country: "Nigeria", region: "Africa", city: "Abuja",
    organization: "Nigeria Social Insurance Trust Fund (NSITF)",
    orgType: "Social security institution", position: "Head of ICT" },

  /* --- PHILIPPINES ------------------------------------------------------ */
  { name: "Lennard Constantine Serrano", sex: "M", country: "Philippines", region: "Asia and the Pacific", city: "Manila",
    organization: "Department of Labor and Employment (DOLE)",
    orgType: "Government", position: "Assistant Secretary (Deputy Vice Minister)" },

  /* --- TÜRKIYE ---------------------------------------------------------- */
  { name: "Erdem Akbay", sex: "M", country: "Türkiye", region: "Europe and Central Asia", city: "Trabzon",
    organization: "Social Security Institution (SGK)",
    orgType: "Social security institution", position: "Provincial Director" },
  { name: "Tuğçe Boynukısa", sex: "F", country: "Türkiye", region: "Europe and Central Asia", city: "Ankara",
    organization: "Social Security Institution (SGK)",
    orgType: "Social security institution", position: "Social Security Expert" },
  { name: "Naif Gümüş", sex: "M", country: "Türkiye", region: "Europe and Central Asia", city: "Batman",
    organization: "Social Security Institution (SGK)",
    orgType: "Social security institution", position: "Provincial Director" },
  { name: "Ahmet Kavgacı", sex: "M", country: "Türkiye", region: "Europe and Central Asia", city: "Ankara",
    organization: "Social Security Institution (SGK)",
    orgType: "Social security institution", position: "Head of Department" },
  { name: "Harun Sertbaş", sex: "M", country: "Türkiye", region: "Europe and Central Asia", city: "Istanbul",
    organization: "Social Security Institution (SGK)",
    orgType: "Social security institution", position: "Provincial Director" },
  { name: "Burcu Tatoğlu", sex: "F", country: "Türkiye", region: "Europe and Central Asia", city: "Erzincan",
    organization: "Social Security Institution (SGK)",
    orgType: "Social security institution", position: "Social Security Provincial Director" },
  { name: "Ömer Tök", sex: "M", country: "Türkiye", region: "Europe and Central Asia", city: "Ankara",
    organization: "Social Security Institution (SGK)",
    orgType: "Social security institution", position: "Provincial Director" },
  { name: "Ahmet Serdar Yağmur", sex: "M", country: "Türkiye", region: "Europe and Central Asia", city: "Ankara",
    organization: "Social Security Institution (SGK)",
    orgType: "Social security institution", position: "Social Security Expert" },

  /* --- VIET NAM --------------------------------------------------------- */
  { name: "Hong Ngoc Mai", sex: "F", country: "Viet Nam", region: "Asia and the Pacific", city: "Hanoi",
    organization: "Viet Nam Chamber of Commerce and Industry (VCCI)",
    orgType: "Employers' organization", position: "Manager" }
];

/* ============================================================================
   PRE-COURSE SURVEY — eCampus feedback activity (mod/feedback/view.php?id=493930)
   ----------------------------------------------------------------------------
   The Participants tab merges the roster above with this entry survey, the way
   the reference dashboard merges its Participants and Demographics tabs.

   Figures below are the Analysis tab of the eCampus activity: 29 of the 34
   registered participants answered, across 7 questions. Open-ended answers are
   grouped into themes, with responses in Turkish translated.

   Block kinds
   -----------
     "bar"    [label, count] pairs. `ordered: true` keeps the order given
              (use it for ordinal scales); otherwise bars sort by size.
     "scale"  a 1–10 distribution; also takes `mean`, `median`, `min`, `max`.
     "list"   one string per theme.

   `responses` is the number of people who answered that question — it differs
   between questions, so it is set per block. Percentages, bars and the
   response-rate meter are all computed; nothing else needs editing.
   ========================================================================== */

window.SURVEY = {
  source: "Pre-course survey, ITCILO eCampus (activity 493930) — Analysis tab",
  url: "https://ecampus.itcilo.org/mod/feedback/view.php?id=493930",
  updated: "2026-10-12",
  invited: 34,
  responses: 29,

  blocks: [
    { id: "background", kind: "bar", ordered: false,
      title: "Academic background",
      note: "A legal and economic cohort above all — the two disciplines that argue classification and financing.",
      responses: 29,
      data: [
        ["Economics", 7], ["Law", 7], ["Administration", 5], ["Management", 3],
        ["Other", 3], ["Finance", 2], ["Information Technology", 1], ["Political Science", 1]
      ] },

    { id: "experience", kind: "bar", ordered: true,
      title: "Years of experience in social protection",
      note: "Ordered from least to most. Two thirds bring more than five years; a small group is new to the field.",
      responses: 29,
      data: [
        ["None", 2], ["Less than 2 years", 4], ["2–5 years", 2],
        ["5–10 years", 8], ["10–20 years", 11], ["More than 20 years", 2]
      ] },

    { id: "training", kind: "bar", ordered: true,
      title: "Previous social protection training",
      note: "An almost even split — the week has to work for both halves of the room.",
      responses: 29,
      data: [["Yes", 15], ["No", 14]] },

    { id: "status", kind: "bar", ordered: true,
      title: "Where the participant's country stands",
      note: "Most arrive from systems that already work — the task is extension to new forms of work, not construction from zero.",
      responses: 29,
      data: [
        ["At the initial stages of thinking about social protection", 1],
        ["In the process of designing a new policy or programme", 3],
        ["New policy or programme recently introduced", 2],
        ["Ongoing policy / law reform process", 5],
        ["Well established policy or programme in place", 18]
      ] },

    { id: "topics", kind: "bar", ordered: false,
      title: "Topics of interest",
      note: "Up to two choices each, so the counts sum to more than the number of respondents.",
      responses: 29,
      data: [
        ["Social protection and labour market transformations", 15],
        ["Harnessing technology to reach informal and platform workers", 15],
        ["Extension of coverage: practical examples of contributory schemes", 14],
        ["Administrative innovation: digital tools for extending coverage", 11],
        ["Financing and contribution models for diverse work arrangements", 9],
        ["Navigating the ILO normative framework", 6],
        ["What's at stake? Gaps and risks in diversified employment", 4],
        ["Engaging social partners and intermediary actors", 4],
        ["From regulatory change to real-time data collection", 4],
        ["Legal and institutional adaptations", 3]
      ] },

    { id: "confidence", kind: "scale",
      title: "Confidence on new forms of work",
      note: "Self-rated from 1 (not confident) to 10 (very confident) before the course.",
      responses: 26, min: 1, max: 10, mean: 6.04, median: 6,
      data: [["1", 1], ["2", 1], ["3", 0], ["4", 3], ["5", 5], ["6", 4], ["7", 6], ["8", 4], ["9", 1], ["10", 1]] },

    { id: "hopes", kind: "list",
      title: "What participants hope to take home",
      note: "Open-ended answers grouped into themes, most frequent first. Responses in Turkish have been translated.",
      responses: 29,
      data: [
        "Extending coverage to platform, gig, informal and self-employed workers — the most frequent hope by a clear margin.",
        "Financing and contribution design: who pays, and what contribution model works for platform workers.",
        "International good practice and comparative country experience, and exchange with peers.",
        "ILO frameworks, legal frameworks and policy design for non-standard work.",
        "Using technology and digital tools to reach informal and platform workers.",
        "Formalisation and registration of workers who remain outside the registered system.",
        "Inclusion of migrants, refugees and host communities.",
        "Direct application to the participant's own institution, and professional development as a manager."
      ] }
  ],

  // Read-across between the survey and the programme — shown under the charts.
  readacross: [
    ["Technology ranks joint first, with 15 of 29 choosing it.",
     "Thursday carries it twice: administrative innovation with DATAPREV, and the session on real-time data."],
    ["Contributory extension is third at 14, financing ninth at 9.",
     "The cohort wants the examples more than the mechanics — Wednesday should lead with the Asian and Latin American cases and derive the contribution model from them."],
    ["Legal and institutional adaptation ranks last, chosen by 3.",
     "Yet Law is tied as the most common academic background, and classification decides everything downstream. Tuesday morning may need to earn its place rather than assume it."],
    ["Mean confidence is 6.0 out of 10, with a spread from 1 to 10.",
     "Wide enough that the Scheme Design Labs should mix experience levels deliberately rather than let groups form by country."],
    ["18 of 29 come from well-established systems.",
     "The Labs are extension problems inside working institutions, not greenfield design — a useful framing for the World Café on Monday."]
  ]
};
