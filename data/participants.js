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
   PRE-COURSE SURVEY — eCampus feedback activity (mod/feedback id=493930)
   ----------------------------------------------------------------------------
   The Participants tab merges the roster above with the entry survey, the way
   the reference dashboard merges its Participants and Demographics tabs.

   The survey results sit behind the ITCILO eCampus login, so nothing is
   pre-filled here: every block below is marked `pending` and the tab renders
   each one as an explicit "awaiting the eCampus export" placeholder rather
   than inventing numbers.

   TO FILL IT IN
   -------------
   Open the feedback activity → Analysis → Export to Excel, then for each block
   set `pending: false` and list the answer counts in `data` as [label, count].
   `responses` is the number of people who answered that question. Everything
   else — bars, percentages, the response-rate meter — is computed for you.
   ========================================================================== */

window.SURVEY = {
  source: "Pre-course survey, ITCILO eCampus (activity 493930)",
  url: "https://ecampus.itcilo.org/mod/feedback/view.php?id=493930",
  updated: null,          // e.g. "2026-10-12"
  invited: 34,            // registered participants
  responses: null,        // total number of respondents, once known

  blocks: [
    { id: "familiarity", pending: true, kind: "bar",
      title: "Familiarity with social protection for new forms of work",
      note: "Self-assessed level of exposure to platform and non-standard work coverage issues.",
      responses: null,
      data: [] },

    { id: "role", pending: true, kind: "bar",
      title: "Professional role in the reform process",
      note: "Where participants sit relative to scheme design: policy, legal, financing, administration, IT, oversight.",
      responses: null,
      data: [] },

    { id: "priority", pending: true, kind: "bar",
      title: "Most pressing coverage gap at home",
      note: "The group of workers participants most need to bring into coverage.",
      responses: null,
      data: [] },

    { id: "buildingblock", pending: true, kind: "bar",
      title: "Scheme design block of greatest interest",
      note: "Coverage architecture · contributions · administration and data · voice and governance.",
      responses: null,
      data: [] },

    { id: "expectations", pending: true, kind: "list",
      title: "What participants want to take home",
      note: "Open-ended expectations, grouped into themes. Add one string per theme.",
      responses: null,
      data: [] }
  ]
};
