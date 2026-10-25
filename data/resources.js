/* ============================================================================
   RESOURCES — the course library
   ----------------------------------------------------------------------------
   Two collections feed the Resources tab:

     window.RESOURCES  — thematic groups of links.
                         Each item is [title, description, url, tag]
                         where `tag` is "" or a short badge such as "Standard",
                         "Data", "Tool", "Report".

     window.CASELAW    — the case law category, kept separate because each
                         decision carries court, citation, holding and the
                         scheme-design question it speaks to.

   Keeping the two apart means the case law can grow independently as the
   ITCILO Compendium feeds are harvested (see CASELAW.feeds below).
   ========================================================================== */

window.RESOURCES = [
  {
    id: "standards",
    title: "International labour standards and global frameworks",
    blurb: "The normative spine of the week: what states have agreed, and what the newest instrument adds for platform work.",
    weeks: "Mon–Tue · Blocks 1–2",
    items: [
      ["Decent Work in the Platform Economy Convention, 2026 (No. 193)",
       "Adopted at the 114th International Labour Conference on 12 June 2026. Requires classification to follow the work actually performed rather than the contract label, sets rights around algorithmic management, and — a first for an ILO Convention — calls on states to consider extending protections to all platform workers.",
       "https://www.ilo.org/resource/article/how-will-new-convention-no193-promote-decent-work-platform-economy", "Standard"],
      ["Social Security (Minimum Standards) Convention, 1952 (No. 102)",
       "The benchmark for the nine branches, minimum coverage ratios, benefit levels and the collective financing and governance rules a new scheme has to satisfy.",
       "https://normlex.ilo.org/dyn/normlex/en/f?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:C102", "Standard"],
      ["Social Protection Floors Recommendation, 2012 (No. 202)",
       "Basic social security guarantees for all residents — the floor against which a platform-work scheme's personal scope is judged.",
       "https://normlex.ilo.org/dyn/normlex/en/f?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:R202", "Standard"],
      ["Transition from the Informal to the Formal Economy Recommendation, 2015 (No. 204)",
       "The formalization logic behind most extension strategies: simplified registration, incentives and progressive compliance.",
       "https://normlex.ilo.org/dyn/normlex/en/f?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:R204", "Standard"],
      ["Employment Relationship Recommendation, 2006 (No. 198)",
       "Indicators of the existence of an employment relationship and the primacy of facts — the test national courts keep returning to in platform cases.",
       "https://normlex.ilo.org/dyn/normlex/en/f?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:R198", "Standard"],
      ["Directive (EU) 2024/2831 on improving working conditions in platform work",
       "The EU's rebuttable presumption of employment and its algorithmic management chapter. Transposition deadline 2 December 2026 — a live reference point for the European experience session.",
       "https://eur-lex.europa.eu/eli/dir/2024/2831/oj", "Standard"],
      ["ILO — Digital labour platforms",
       "The ILO's topic hub: policy briefs, research and the standard-setting record behind Convention No. 193.",
       "https://www.ilo.org/topics-and-sectors/digital-labour-platforms", "Hub"]
    ]
  },

  {
    id: "diagnosis",
    title: "Diagnosis — data on coverage, informality and platform work",
    blurb: "Where the gap is, how big it is, and how to evidence it for a minister.",
    weeks: "Mon · Block 1",
    items: [
      ["ILO World Social Protection Database (WSPDB)",
       "SDG 1.3.1 effective coverage by branch, expenditure as a share of GDP and benefit adequacy, by country.",
       "https://www.social-protection.org/gimi/WSPDB.action?id=32", "Data"],
      ["World Social Protection Data Dashboards",
       "The interactive front end to the WSPDB — fastest route to a country coverage profile for a slide.",
       "https://wspdb.social-protection.org", "Data"],
      ["World Social Protection Report 2024–26",
       "The ILO flagship: global and regional coverage, financing gaps and the policy agenda for non-standard work.",
       "https://www.ilo.org/publications/flagship-reports/world-social-protection-report-2024-26", "Report"],
      ["ILOSTAT",
       "Labour force status, informality, own-account work, multiple job-holding and working poverty — the denominators behind any coverage ratio.",
       "https://ilostat.ilo.org/data/", "Data"],
      ["ILOSTAT — Informality",
       "Harmonised informal employment indicators, including informality within non-standard arrangements.",
       "https://ilostat.ilo.org/topics/informality/", "Data"],
      ["World Employment and Social Outlook 2021: The role of digital labour platforms",
       "Still the reference study on platform business models, working conditions and the regulatory questions they raise.",
       "https://www.ilo.org/publications/flagship-reports/world-employment-and-social-outlook-2021-role-digital-labour-platforms", "Report"],
      ["Eurofound — Platform Economy Database",
       "Initiatives, regulation and court decisions on platform work across Europe, searchable by actor and country.",
       "https://apps.eurofound.europa.eu/platformeconomydb/", "Data"],
      ["socialprotection.org",
       "Programme profiles, country pages, webinars and the community of practice on extending coverage.",
       "https://www.socialprotection.org/", "Hub"]
    ]
  },

  {
    id: "legal",
    title: "Classification, coverage and legal design",
    blurb: "Status tests, presumptions, third categories and how each choice lands on the personal scope of a scheme.",
    weeks: "Tue · Blocks 2–3",
    items: [
      ["SSA / ISSA — Social Security Programs Throughout the World",
       "Legal scheme design country by country: who is covered, under what conditions, at what contribution rate. The quickest comparator for a personal-scope decision.",
       "https://www.ssa.gov/policy/docs/progdesc/ssptw/", "Reference"],
      ["ISSA — Guidelines on Social Security Administration",
       "The professional standard for contribution collection, compliance, service delivery and ICT — the benchmark the administrative lab works against.",
       "https://ww1.issa.int/guidelines", "Tool"],
      ["ILO NORMLEX",
       "Ratifications, Committee of Experts comments and national labour and social security legislation (NATLEX) in one place.",
       "https://normlex.ilo.org/", "Reference"],
      ["ITCILO Compendium of court decisions",
       "The Centre's own case law collection, searchable by subject — the parent of the case law category below.",
       "https://compendium.itcilo.org/en/decisions-by-subject", "Case law"]
    ]
  },

  {
    id: "financing",
    title: "Financing and contribution design",
    blurb: "Making contributions work on irregular, intermittent and multiple-source earnings.",
    weeks: "Wed · Block 4",
    items: [
      ["ILO — Extending social security to workers in the informal economy",
       "The ILO's guidance and country lessons on simplified contribution mechanisms, monotax arrangements and subsidised affiliation.",
       "https://www.social-protection.org/", "Tool"],
      ["ISSA — Collection and compliance",
       "Good practice on contribution collection, arrears management and compliance strategies for hard-to-cover groups.",
       "https://ww1.issa.int/guidelines", "Tool"],
      ["OECD Social Expenditure Database (SOCX)",
       "Comparative social expenditure by branch — useful for benchmarking the fiscal envelope of a proposed scheme.",
       "https://www.oecd.org/en/data/datasets/social-expenditure-database-socx.html", "Data"],
      ["World Bank — Global Findex",
       "Account ownership and digital payment use, including receipt of government transfers — the feasibility check behind any digital contribution channel.",
       "https://www.worldbank.org/en/publication/globalfindex", "Data"]
    ]
  },

  {
    id: "administration",
    title: "Administration, digital tools and data exchange",
    blurb: "Registration, collection, interoperability, enforcement and redress — where good design is won or lost.",
    weeks: "Thu · Block 6",
    items: [
      ["ISSA — Information and communication technology guidelines",
       "Reference architecture for registration, identification, data exchange and digital service delivery in social security institutions.",
       "https://ww1.issa.int/guidelines", "Tool"],
      ["ILO — Social protection and digitalization",
       "Briefs and country cases on digital registration, payment and data-sharing in social protection delivery.",
       "https://www.social-protection.org/", "Hub"],
      ["World Bank — Identification for Development (ID4D)",
       "Digital identity as the enabling layer for registration and benefit delivery, with country diagnostics.",
       "https://id4d.worldbank.org/", "Tool"],
      ["DATAPREV (Brazil)",
       "The Brazilian social security data and technology company presenting the Latin American experience on registration, collection and data exchange.",
       "https://www.dataprev.gov.br/", "Practice"]
    ]
  },

  {
    id: "voice",
    title: "Voice, representation and social dialogue",
    blurb: "Who speaks for workers whose employer is an algorithm, and how to bring them into scheme governance.",
    weeks: "Thu · Block 5",
    items: [
      ["ILO — Social dialogue",
       "Institutions, practice and comparative experience on tripartite and bipartite dialogue, including for non-standard workers.",
       "https://www.ilo.org/topics/social-dialogue-and-tripartism", "Hub"],
      ["ITUC and global union federations on platform work",
       "Organizing and bargaining experience with platform workers, including the collective agreements that now exist in several countries.",
       "https://www.ituc-csi.org/", "Practice"],
      ["ILO ACT/EMP — Employers and the platform economy",
       "The employers' perspective on classification, compliance costs and the design of workable obligations.",
       "https://www.ilo.org/departments-and-offices/bureau-employers-activities-actemp", "Hub"]
    ]
  },

  {
    id: "practice",
    title: "Country practice presented during the week",
    blurb: "Follow-up reading for each country experience on the agenda.",
    weeks: "All week",
    items: [
      ["India — Code on Social Security, 2020 and the e-Shram registry",
       "Statutory definitions of gig and platform workers, aggregator contributions and the national registry of unorganised workers. Monday's country experience.",
       "https://www.india.gov.in/", "Practice"],
      ["Mexico — platform work social security reform",
       "The mandatory affiliation of digital platform workers to IMSS, with contributions tied to net income thresholds. Tuesday's country experience.",
       "https://www.imss.gob.mx/", "Practice"],
      ["Republic of Korea — employment insurance for workers in special types of employment",
       "The staged extension of employment insurance and industrial accident insurance to platform and dependent self-employed workers. Wednesday's country experience.",
       "https://www.moel.go.kr/english/main.do", "Practice"],
      ["Malaysia — self-employment social security scheme (SOCSO/PERKESO)",
       "Voluntary and sector-mandated coverage of self-employed and e-hailing workers under the Self-Employment Social Security Act. Wednesday's country experience.",
       "https://www.perkeso.gov.my/", "Practice"],
      ["Brazil — DATAPREV and digital contribution collection",
       "Registration, collection and data exchange at scale, including the simplified contributor regimes. Thursday's country experience.",
       "https://www.gov.br/previdencia/", "Practice"],
      ["Italy — collective bargaining and social security for riders",
       "The interaction of legislation, case law and collective agreements in the delivery sector. Thursday's social partner session.",
       "https://www.cgil.it/", "Practice"]
    ]
  }
];

/* ============================================================================
   CASE LAW
   ----------------------------------------------------------------------------
   A separate category under Resources, as requested.

   Every entry is a court decision that changes something for scheme design:
   who is inside the personal scope, who owes the contribution, on what
   earnings base, and who may be heard. Each carries its formal citation so it
   can be verified against the original judgment — the `url` points to the
   judgment where a stable public link exists, and otherwise to an
   authoritative digest.

   `feeds` below holds the four ITCILO Compendium subject searches that should
   be harvested into this list. They sit behind a host this build could not
   reach, so they are listed as links to work through rather than copied in.
   ========================================================================== */

window.CASELAW = {
  note:
    "Courts, not legislators, have decided most of the platform-work coverage questions of the last decade — " +
    "and they have not all decided them the same way. Read each decision for the test it applies, not only for " +
    "who won: the test is what you can transplant. Several of these are under appeal or have been overtaken by " +
    "legislation; verify against the original judgment before citing it.",

  themes: [
    { id: "status", label: "Employment status" },
    { id: "affiliation", label: "Social security affiliation" },
    { id: "contribution", label: "Who owes the contribution" },
    { id: "scope", label: "Scope of the worker concept" },
    { id: "pending", label: "Pending / unsettled" }
  ],

  // The four Compendium subject searches to harvest into this list.
  feeds: [
    ["Compendium subject 4", "https://compendium.itcilo.org/en/decisions-by-subject?subject=4&save=search"],
    ["Compendium subject 2", "https://compendium.itcilo.org/en/decisions-by-subject?subject=2&save=search"],
    ["Compendium subject 26", "https://compendium.itcilo.org/en/decisions-by-subject?subject=26&save=search"],
    ["Compendium subject 22", "https://compendium.itcilo.org/en/decisions-by-subject?subject=22&save=search"]
  ],

  decisions: [
    {
      country: "United Kingdom", flagRegion: "Europe",
      court: "Supreme Court", date: "19 February 2021",
      title: "Uber BV and others v Aslam and others",
      cite: "[2021] UKSC 5",
      theme: "status",
      holding:
        "Drivers are 'workers' under section 230(3)(b) of the Employment Rights Act 1996, not independent " +
        "contractors. The written contract does not determine the question: where a statute confers protection " +
        "that cannot be contracted out of, the court looks at the reality of the relationship and the purpose of " +
        "the legislation.",
      design:
        "Also decided when working time starts — from the moment the driver is in the territory, logged in and " +
        "ready to accept trips, not only while carrying a passenger. That finding fixes the earnings base on " +
        "which any contribution or benefit entitlement would be calculated.",
      url: "https://www.bailii.org/uk/cases/UKSC/2021/5.html"
    },
    {
      country: "Spain", flagRegion: "Europe",
      court: "Tribunal Supremo, Social Chamber", date: "25 September 2020",
      title: "Glovo riders — unification of doctrine",
      cite: "STS 805/2020",
      theme: "status",
      holding:
        "Delivery riders working through the Glovo application are employees. The platform is not a neutral " +
        "intermediary: it sets the price and the terms of the service, owns the algorithm that organises the " +
        "work, and the rider's apparent freedom to choose slots operates inside a scoring system the platform " +
        "controls.",
      design:
        "Directly produced legislation — Ley 12/2021, the 'Ley Rider', which introduced a rebuttable presumption " +
        "of employment for delivery riders and a right for workers' representatives to be informed of the " +
        "algorithm's parameters. A worked example of the courts-to-statute sequence the Friday session covers.",
      url: "https://industrialrelationsnews.ioe-emp.org/industrial-relations-and-labour-law-october-2020/news/article/spain-supreme-court-decision-on-the-employment-status-of-workers-for-a-delivery-company-and-social-dialogue-process-on-a-riders-law"
    },
    {
      country: "France", flagRegion: "Europe",
      court: "Cour de cassation, Chambre sociale", date: "4 March 2020",
      title: "Uber — reclassification of a driver's contract",
      cite: "n° 19-13.316 (following Take Eat Easy, n° 17-20.079, 28 November 2018)",
      theme: "status",
      holding:
        "A driver who joins a platform cannot be treated as an independent contractor where they build no " +
        "clientele of their own, cannot set the price and cannot choose the terms of the service. The " +
        "relationship of subordination follows from the platform's power to give directions, supervise and " +
        "sanction — including by deactivation.",
      design:
        "The French line of cases is the clearest statement that an 'independent clientele' test, not a formal " +
        "contract, decides affiliation to the general social security scheme.",
      url: "https://apps.eurofound.europa.eu/platformeconomydb/actors/court"
    },
    {
      country: "Netherlands", flagRegion: "Europe",
      court: "Hoge Raad (Supreme Court)", date: "24 March 2023",
      title: "FNV v Deliveroo",
      cite: "ECLI:NL:HR:2023:443",
      theme: "status",
      holding:
        "Riders were in an employment relationship. The Court set out an open list of factors — the nature of " +
        "the work, how it is organised and paid, the degree of entrepreneurship, commercial risk — to be weighed " +
        "together, with no single factor decisive and no hierarchy among them.",
      design:
        "The holistic multi-factor test is the one most often borrowed by legislators drafting a statutory " +
        "presumption, because it survives contractual re-engineering by the platform.",
      url: "https://deeplink.rechtspraak.nl/uitspraak?id=ECLI:NL:HR:2023:443"
    },
    {
      country: "Switzerland", flagRegion: "Europe",
      court: "Federal Supreme Court", date: "16 February 2023",
      title: "Uber drivers — old-age and survivors' insurance status",
      cite: "9C_70/2022 and joined cases",
      theme: "affiliation",
      holding:
        "Drivers working through UberX, UberBlack, UberVan and UberGreen are in dependent gainful employment for " +
        "old-age and survivors' insurance (AHV/OASI) purposes, with Uber B.V. as the employer; UberPop drivers " +
        "are dependent on Rasier Operations B.V. Both Dutch companies maintain a permanent establishment in " +
        "Switzerland and are therefore liable for contributions.",
      design:
        "The single most useful decision in this list for a social security institution. Status for social " +
        "security purposes is determined independently of labour law, and a foreign platform entity can be " +
        "brought into the contribution net through a permanent establishment.",
      url: "https://www.homburger.ch/en/insights/uber-liable-to-pay-social-security-contributions-in-switzerland"
    },
    {
      country: "Switzerland", flagRegion: "Europe",
      court: "Federal Supreme Court", date: "March 2021",
      title: "Uber Switzerland GmbH — contribution liability within a group",
      cite: "Appeal against the Zurich Social Insurance Court",
      theme: "contribution",
      holding:
        "The Swiss group entity was not liable for contributions for UberPop drivers: it was neither the actual " +
        "employer nor the relevant establishment, and belonging to the same corporate group is not by itself " +
        "enough to create a contribution obligation.",
      design:
        "The mirror image of the 2023 ruling, and the warning that goes with it — naming the wrong entity in an " +
        "assessment loses the case. Scheme design has to define the liable entity, not only the liable activity.",
      url: "https://www.lexology.com/library/detail.aspx?g=926a70d1-6b2f-4dba-93ce-ba9344ce641a"
    },
    {
      country: "Germany", flagRegion: "Europe",
      court: "Bundesarbeitsgericht (Federal Labour Court)", date: "1 December 2020",
      title: "Crowdworker — microtask platform",
      cite: "9 AZR 102/20",
      theme: "status",
      holding:
        "A crowdworker performing small standardised tasks through a platform was in an employment relationship, " +
        "because the structure of the platform — its rating and levelling system — induced continuous task " +
        "performance in a manner personally directed by the platform.",
      design:
        "Extends the analysis beyond ride-hailing and delivery to online microtask and data work, the segment " +
        "Convention No. 193 brings explicitly into scope.",
      url: "https://apps.eurofound.europa.eu/platformeconomydb/actors/court"
    },
    {
      country: "Italy", flagRegion: "Europe",
      court: "Corte di Cassazione, Labour Section", date: "24 January 2020",
      title: "Foodora riders",
      cite: "No. 1663/2020",
      theme: "scope",
      holding:
        "Riders fall under Article 2 of Legislative Decree 81/2015 on 'hetero-organised' collaborations: without " +
        "deciding whether they are formally subordinate, the Court applied the protections of subordinate " +
        "employment to them, including social security consequences.",
      design:
        "The third-way technique — leave the status question open and attach the protections to the factual " +
        "organisation of the work. A live option for jurisdictions where reclassification is politically blocked. " +
        "Italian courts have since ordered delivery platforms to pay social security contributions for riders.",
      url: "https://apps.eurofound.europa.eu/platformeconomydb/actors/court"
    },
    {
      country: "Belgium", flagRegion: "Europe",
      court: "Brussels Labour Court of Appeal", date: "2025",
      title: "Uber driver — employee status",
      cite: "Reported decision; following the earlier Deliveroo litigation",
      theme: "status",
      holding:
        "An Uber driver was held to be an employee: the real conditions under which the work was performed were " +
        "incompatible with the self-employed classification in the contract.",
      design:
        "Belgium is also the jurisdiction with a statutory administrative route — the rebuttable criteria of the " +
        "2006 Labour Relations Act and its sectoral platform criteria — so it shows the courts and the " +
        "administration working on the same question from two directions.",
      url: "https://www.lexgo.be/en/news-and-articles/14220-another-setback-for-platforms-after-deliveroo-the-brussels-labour-court-of-appeal-rules-that-an-uber-driver-must-also-be-considered-an-employee"
    },
    {
      country: "European Union", flagRegion: "Europe",
      court: "Court of Justice of the European Union", date: "22 April 2020",
      title: "B v Yodel Delivery Network Ltd",
      cite: "Case C-692/19 (reasoned order)",
      theme: "scope",
      holding:
        "A courier is not a 'worker' within the meaning of the Working Time Directive where the independence is " +
        "genuine: a real right to use substitutes, freedom to work for competitors, and freedom to decide whether " +
        "and when to work — provided those freedoms are not notional.",
      design:
        "The counterweight in this list. It marks the boundary of the worker concept and is the decision " +
        "platforms cite; a presumption-based design has to be drafted knowing it exists.",
      url: "https://curia.europa.eu/juris/liste.jsf?num=C-692/19"
    },
    {
      country: "Brazil", flagRegion: "Americas",
      court: "Supremo Tribunal Federal", date: "Pending",
      title: "Employment relationship of application drivers",
      cite: "Tema 1291 (general repercussion)",
      theme: "pending",
      holding:
        "The Supreme Federal Court has taken up, with binding general-repercussion effect, whether app drivers " +
        "have an employment relationship with the platform. Until it rules, labour courts and the Superior " +
        "Labour Court continue to decide inconsistently.",
      design:
        "The backdrop to Thursday's Brazilian experience: an administration can be asked to build registration " +
        "and collection machinery while the underlying status question is still open — a sequencing problem, not " +
        "only a legal one.",
      url: "https://portal.stf.jus.br/"
    },
    {
      country: "India", flagRegion: "Asia and the Pacific",
      court: "Supreme Court of India", date: "Filed 2021, under consideration",
      title: "Indian Federation of App-based Transport Workers v Union of India",
      cite: "Writ petition (civil), social security for gig and platform workers",
      theme: "pending",
      holding:
        "A petition seeking social security rights for gig and platform workers. The Court has pressed the Union " +
        "Government on implementation, indicating that labour and social security rights cannot be denied where " +
        "a statutory regime provides for them.",
      design:
        "Pairs with Monday's India country experience: the Code on Social Security, 2020 already defines gig and " +
        "platform workers and provides for aggregator contributions — the litigation is about making an enacted " +
        "entitlement operational, which is the administrative problem Lab 3 addresses.",
      url: "https://www.business-humanrights.org/en/latest-news/india-supreme-court-reviews-plea-for-social-security-rights-of-gig-and-platform-workers/"
    }
  ]
};
