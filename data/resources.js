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
       "https://www.ilo.org/topics-and-sectors/digital-labour-platforms", "Hub"],
      ["Standard-setting committee on decent work in the platform economy — ILC record",
       "The drafting record behind C193: the 2022 Meeting of Experts, the 2025 first discussion, Report V(4) of March 2026 and the adoption on 12 June 2026 (406 for, 8 against, 36 abstentions). Day 1 walks through this timeline; the record is where the compromises are visible.",
       "https://www.ilo.org/international-labour-conference/113th-session-international-labour-conference/committees-113th-session-international-labour-conference/standard-setting-committee-decent-work-platform-economy", "Standard"],
      ["Domestic Workers Convention, 2011 (No. 189)",
       "Domestic workers to enjoy conditions no less favourable than workers generally, social security included. The reference instrument for the domestic-work cases in the cohort — Georgia, Türkiye and the Latin American registration models.",
       "https://normlex.ilo.org/dyn/normlex/en/f?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:C189", "Standard"],
      ["Part-Time Work Convention, 1994 (No. 175) and Recommendation No. 182",
       "Thresholds for access to social security must not exclude an unduly large share of part-time workers, must be reviewed periodically and progressively reduced. The standard behind every argument about a minimum-days or minimum-earnings rule.",
       "https://normlex.ilo.org/dyn/normlex/en/f?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:C175", "Standard"],
      ["Private Employment Agencies Convention, 1997 (No. 181), Article 12",
       "Requires the allocation of social security responsibilities between the agency and the user enterprise — the pre-existing answer to the multi-party platform question that C193 Article 24 now restates.",
       "https://normlex.ilo.org/dyn/normlex/en/f?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:C181", "Standard"],
      ["Maternity Protection Convention, 2000 (No. 183)",
       "Maternity protection for all employed women, including those in atypical forms of dependent work, financed through compulsory social insurance or public funds rather than by individual employer liability — the principle behind a pooled maternity benefit for platform workers.",
       "https://normlex.ilo.org/dyn/normlex/en/f?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:C183", "Standard"],
      ["Conventions Nos 118 and 157 — equality of treatment and maintenance of social security rights",
       "The coordination instruments for cross-border work, read in the course alongside Article 19 of C193 on the law applicable where the work is performed. The reference set for the India, Türkiye and Angola cross-border cases.",
       "https://normlex.ilo.org/dyn/normlex/en/f?p=NORMLEXPUB:12100:0::NO::P12100_ILO_CODE:C157", "Standard"],
      ["ILC 2021 — Resolution and conclusions concerning social protection (social security)",
       "The policy orientation the ILO works from until the 2027 recurrent discussion: universal systems including floors, adequate protection for workers in all types of employment through a combination of contributory and non-contributory schemes, and legal certainty on classification.",
       "https://www.ilo.org/sites/default/files/wcmsp5/groups/public/@ed_norm/@relconf/documents/meetingdocument/wcms_806099.pdf", "Standard"],
      ["Council Recommendation of 8 November 2019 on access to social protection for workers and the self-employed",
       "The EU's non-binding coverage instrument, and the complement to the binding Platform Work Directive: formal coverage, effective coverage, adequacy and transparency, with entitlements preserved, accumulated and transferable across all forms of work. A useful benchmark for any national reform, inside the EU or not.",
       "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32019H1115(01)", "Standard"]
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
      ["ISSA — Platform workers media monitor",
       "The International Social Security Association's running digest of platform-work rulings, reforms and scheme launches worldwide. The fastest way to keep the case law category below current.",
       "https://www.issa.int/platform-workers/media-monitor", "Hub"],
      ["Eurofound — Platform Economy Database",
       "Initiatives, regulation and court decisions on platform work across Europe, searchable by actor and country.",
       "https://apps.eurofound.europa.eu/platformeconomydb/", "Data"],
      ["socialprotection.org",
       "Programme profiles, country pages, webinars and the community of practice on extending coverage.",
       "https://www.socialprotection.org/", "Hub"],
      ["ILO — Universal social protection in changing labour markets: protecting workers in all types of employment (2026)",
       "The report behind Monday's ILO framing session. Six priorities for systems adapted to the labour markets of tomorrow: make social insurance inclusive, guarantee a solid floor, finance it adequately and equitably, strengthen gender equality, strengthen social dialogue, and keep coherence with employment and formalization policy.",
       "https://www.ilo.org/publications/universal-social-protection-changing-labour-markets-protecting-workers-all", "Report"],
      ["ILO — Employment and Social Trends 2026",
       "The January 2026 headline numbers used throughout Day 1: 4.9% global unemployment, 260 million young people not in employment, education or training, and employment growing fastest exactly where wage employment is rarest — in low-income countries only about one worker in five is an employee.",
       "https://www.ilo.org/publications/flagship-reports/world-employment-and-social-outlook-trends-2026", "Report"],
      ["World Bank — Working Without Borders: the promise and peril of online gig work (2023)",
       "The source of the 154–435 million range for online gig workers worldwide (4.4–12.5% of the global labour force). Day 1 uses it to make the measurement gap itself a policy problem: you cannot cover what you cannot count.",
       "https://www.worldbank.org/en/topic/digitaldevelopment/publication/online-gig-work", "Report"],
      ["ILO — Digital Labour Platform Tracker",
       "The ILO's running record of platforms, business models and the regulation that applies to them — the research hub behind the count of 142 platforms in 2010 rising past 777 by 2020.",
       "https://digitallabour.ilo.org/", "Data"],
      ["ILO Social Protection Monitor",
       "5,629 social protection measures adopted in 218 countries and territories between 2010 and 2026, searchable by country, branch and type. The quickest way to see what comparable countries have actually legislated, and when.",
       "https://www.social-protection.org/gimi/ShowWiki.action?id=3426", "Data"],
      ["ILO — Generative AI and jobs: a refined global index of occupational exposure (2025)",
       "Working Paper 140 and its 2025 update: one worker in four is in an occupation with some exposure to generative AI, 34% in high-income against 11% in low-income countries, and the highest-exposure category falls disproportionately on women. Most jobs are transformed rather than replaced.",
       "https://www.ilo.org/publications/generative-ai-and-jobs-refined-global-index-occupational-exposure", "Report"],
      ["OECD — Algorithmic management in the workplace (2025)",
       "79% of firms in France, Germany, Italy and Spain and around 90% in the United States use at least one algorithmic management tool. The evidence behind Day 1's 'control without a contract': the indicators of subordination move into software and become invisible on paper.",
       "https://www.oecd.org/en/publications.html", "Report"],
      ["ILO — Women and men in the informal economy: a statistical update",
       "The composition of informal employment worldwide: 46.6% own-account workers, 34.5% employees, 16.0% contributing family workers, 2.8% employers. One informal worker in three is an employee — informality is a compliance problem as much as a self-employment problem.",
       "https://www.ilo.org/publications/women-and-men-informal-economy-statistical-update", "Data"]
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
       "https://compendium.itcilo.org/en/decisions-by-subject", "Case law"],
      ["ILO Policy Resource Package — extending social security and protecting workers in all types of employment",
       "The ILO's modular guidance package, and the backbone of the Wednesday financing session. Separate modules cover domestic workers, the self-employed, micro and small enterprises, agricultural and rural workers, and workers in new forms of work including digital platforms.",
       "https://www.social-protection.org/gimi/Emodule.action?id=126", "Tool"],
      ["ILO — Extending social security to workers in the platform economy",
       "The platform-economy module of the Policy Resource Package: legal certainty on classification, adapted mechanisms for multiple employers and irregular income, simplified procedures, and cross-country coordination for crowdwork.",
       "https://www.social-protection.org/gimi/Emodule.action?id=63", "Tool"],
      ["European Commission — Report on the implementation of the Council Recommendation on access to social protection, COM(2023) 43",
       "19 of 27 Member States still have formal gaps in access to social protection for the self-employed, and 15.3 million self-employed people in the EU have no access to unemployment benefits. Day 1's demonstration that even mature systems leave status-based gaps.",
       "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:52023DC0043", "Report"],
      ["Council Directive (EU) 2021/514 — DAC7 platform income reporting",
       "Since 2023, digital platforms operating in the EU must report seller and worker income to tax authorities. Taught as the first rung of the ladder of platform responsibility: before a platform can be made to contribute, it can be made to report.",
       "https://eur-lex.europa.eu/eli/dir/2021/514/oj", "Standard"]
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
       "https://www.worldbank.org/en/publication/globalfindex", "Data"],
      ["ILO/ISSA Actuarial Services Platform",
       "The joint ILO–ISSA platform (2021) through which member institutions can commission actuarial valuations, reform scenarios and peer review. Presented in the Wednesday session as the route by which a scheme design becomes a costed proposal.",
       "https://issa.int/asp", "Tool"],
      ["Cichon et al. — Financing Social Protection (ILO/ISSA)",
       "The textbook behind the Wednesday framing. Chapter 5 sets out the five basic questions that define any financing system: who is covered, what is covered, the source of financing, the rules of financing and the financial balance rule.",
       "https://www.social-protection.org/", "Reference"],
      ["Plamondon et al. — Actuarial Practice in Social Security (ILO/ISSA)",
       "The companion volume on actuarial valuation. Its premise is the one the course keeps returning to: social security schemes are no islands, and meaningful actuarial work has to be cognizant of the economic, demographic and fiscal context around them.",
       "https://www.social-protection.org/", "Reference"],
      ["ILO — Fiscal Space for Social Protection Handbook",
       "The eight options for creating fiscal space, set against the SPF financing gap of some US$1.3 trillion a year globally and US$526 billion in Africa. Used on Wednesday to make the point that fiscal space is the result of policy choices rather than something that is simply found.",
       "https://www.social-protection.org/gimi/gess/ShowRessource.action?id=55694", "Tool"],
      ["World Social Protection Report portal",
       "The data front end to the flagship report: coverage, legal provisions, expenditure and ratification status by country, with the eleven effective-coverage indicators behind SDG 1.3.1.",
       "https://wspr.social-protection.org/", "Data"],
      ["ILO — Social protection for workers in the informal economy platform",
       "The ILO's dedicated platform on extending coverage to the informal economy: simplified registration, monotax and rural regimes, contribution subsidies, and the country evidence on each.",
       "https://informaleconomy.social-protection.org/", "Hub"],
      ["Monotax and simplified regimes — the comparative record",
       "Unified payment of tax and social security contributions for micro-enterprises and own-account workers: Brazil's Simples (1996/2007) and MEI, Uruguay's Monotributo (2001), Argentina's Monotributo, Colombia's Régimen Simple, Ecuador's RISE, France's auto-entrepreneur regime, Cabo Verde's REMPE. Simplicity and formalization at low administrative cost — at the price of flat contributions and modest benefits.",
       "https://www.social-protection.org/gimi/Emodule.action?id=61", "Practice"]
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
       "https://www.dataprev.gov.br/", "Practice"],
      ["ISSA — Artificial intelligence in social security organizations",
       "The ISSA report behind Thursday's session: the iterative model creation and supervision cycle, a typology of AI applications across the social protection delivery chain, and the governance conditions — data quality, explainability, accountability, humans in the loop — that have to be in place before any of it is deployed.",
       "https://www.issa.int/", "Report"],
      ["ISSA TechByte and Technology Outlook",
       "ISSA's running survey of what member institutions are actually deploying, by technology and by business driver. The Thursday session uses it to show the pattern: client-facing quick wins first, then the structural enablers — workforce, coordination mechanisms, adoption frameworks — that decide whether anything scales.",
       "https://www.issa.int/analysis", "Data"],
      ["The AI risk tiers, applied to a social security institution",
       "The risk-based classification taught on Thursday, from unacceptable (social scoring for benefits, mass biometric surveillance) through high risk (automated eligibility decisions, biometric enrolment, fraud scoring) and limited risk (citizen-facing chatbots) to minimal. Every AI proposal is classified before procurement, and the tier decides the oversight and who signs off.",
       "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai", "Tool"]
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
       "https://www.ilo.org/departments-and-offices/bureau-employers-activities-actemp", "Hub"],
      ["France — ARPE, the platform social dialogue authority",
       "The Autorité des relations sociales des plateformes d'emploi: elected worker representation on ride-hailing and delivery platforms, and sector agreements setting a minimum of €11.75 per active hour in delivery and minima per trip and per hour for drivers. The clearest working example of bargaining for workers who are not employees.",
       "https://arpe.gouv.fr/", "Practice"],
      ["Collective bargaining of platform workers — domestic work leads the way",
       "Where collective agreements for app-mediated work already exist, they grew out of domestic-work organizing rather than out of the delivery sector. Background reading for the Thursday voice session and for the domestic-work cases in the cohort.",
       "https://www.ilo.org/publications/collective-bargaining-platform-workers-domestic-work-leads-way", "Practice"]
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
      ["Malaysia — Gig Workers Act 2025 and mandatory SOCSO coverage",
       "A standalone framework for gig workers, with social security contributions collected per task (reported at 1.25%) and platforms obliged to register workers, alongside a Gig Workers Tribunal and consultative council. Wednesday's country experience.",
       "https://www.perkeso.gov.my/", "Practice"],
      ["Chile — Law 21.431 on platform work",
       "Distinguishes dependent from independent platform workers and sets a social protection baseline. Independently evaluated: limited effect on pay and hours, but a measurable rise in social security coverage — rare evidence on whether this design actually works.",
       "https://cepr.org/voxeu/columns/regulating-platform-work-where-informality-matters-chilean-case", "Practice"],
      ["Brazil — DATAPREV and digital contribution collection",
       "Registration, collection and data exchange at scale, including the simplified contributor regimes. Thursday's country experience.",
       "https://www.gov.br/previdencia/", "Practice"],
      ["Italy — collective bargaining and social security for riders",
       "The interaction of legislation, case law and collective agreements in the delivery sector. Thursday's social partner session.",
       "https://www.cgil.it/", "Practice"]
    ]
  },

  {
    id: "menu",
    title: "Around the world in new forms of work — the regional menu",
    blurb:
      "The cases the week travels through, grouped by the logic each region leans on. Not a ranking: a menu of tools " +
      "to adapt. Four design logics converge across all of them — a status-neutral minimum, platforms as data and " +
      "collection hubs, contributions that follow actual income, and floors that integrate the whole system.",
    weeks: "Mon–Fri · Blocks 1–7",
    items: [
      ["Europe — classify: presumptions, inspection and the courts",
       "Spain's 2020 Supreme Court ruling and the 2021 Riders' Law, with inspectorate fines of €79m and €56.7m and more than 10,600 riders regularized; Portugal's Article 12-A six-indicator presumption (2023); Belgium's eight criteria; Croatia; Italy's Decree 62/2026; the Netherlands' planned rate-based presumption. The lesson taught: a presumption only works at scale when the social security institution has standing, data and mandate — Spain claimed the contributions, and it still took almost a decade.",
       "https://apps.eurofound.europa.eu/platformeconomydb/", "Practice"],
      ["Europe — cover those who stay self-employed",
       "Spain's RETA reform (Royal Decree-law 13/2022): fifteen income brackets, provisional contributions and year-end reconciliation against tax data. Portugal's contracting-entity contribution: a client taking 50–80% of a self-employed worker's annual income pays 7%, above 80% pays 10%, without reclassifying anyone. Germany's Künstlersozialkasse: 50% insured, 30% user levy, 20% State. Estonia's entrepreneur account. France's précompte of micro-entrepreneurs' contributions by platforms from 2027.",
       "https://www.seg-social.es/", "Practice"],
      ["Latin America — simplify, bundle, and make the platform pay",
       "Argentina's Monotributo (1998) and Uruguay's Monotributo plus Law 20.396 (2025) bundle tax and contributions into one payment by turnover category; Brazil's MEI (2008) adds a fixed monthly payment including 5% of the minimum wage to social security. Alongside them, a newer generation makes platforms the registrar and payer: Mexico's December 2024 reform (full IMSS cover above a minimum-wage net income, occupational risks from day one for everyone, 1.3 million registered by February 2026), Colombia's Law 2466/2025 (base 40% of platform income, split 60/40, occupational risks 100% platform, collected through PILA), and Chile's Law 21.431 (withholding rising to 17% by 2028).",
       "https://www.imss.gob.mx/empresas-personas-trabajadoras-plataformas-digitales", "Practice"],
      ["Asia and the Pacific — injury first, collected by the platform",
       "China's occupational injury protection for platform workers, piloted from 2022 and national from July 2026, financed per order at roughly CNY 0.04–0.06 a delivery, with 29.9 million enrolled by June 2026. Malaysia's Gig Workers Act 2025 and SESSA: platforms register workers with SOCSO and deduct 1.25% per task, cover running from the first task for a full year. Indonesia's BPJS Ketenagakerjaan programme with a 50% government subsidy on injury and death contributions. Singapore's Platform Workers Act 2024, with platform CPF contributions aligned gradually to employee rates over 2025–2029. Korea's step-by-step extension — artists 2020, special-type workers 2021, platform workers 2022 — and India's Code on Social Security 2020, in force November 2025, with an aggregator levy of 1–2% of turnover capped at 5% of payouts.",
       "https://www.perkeso.gov.my/", "Practice"],
      ["Arab States — redesign the system, then extend it",
       "Oman's Social Protection Law (Royal Decree 52/2023) replaced several employment-based funds with one Social Protection Fund combining universal life-cycle floors — child, old-age and disability benefits — with insurance for all contract types and a savings system in place of end-of-service gratuity. Jordan's Social Security Corporation extension to self-employed, freelance and app-based drivers, with work injury, maternity and unemployment mandatory and old age, disability and death optional in 50/75/100% brackets, building on the Estidama programmes. Saudi Arabia's free online freelance work document, 430,739 issued cumulatively by 2025.",
       "https://www.ilo.org/resource/news/far-reaching-reforms-oman-set-new-benchmark-social-protection-region", "Practice"],
      ["Africa — extend from the informal economy upwards",
       "Morocco's generalization of social protection (2021–2025): AMO coverage from 42% to more than 32 million people, around 88%, with roughly 4 million self-employed under AMO-TNS on flat contributions by category and some 11 million under tax-financed AMO-Tadamon. Rwanda's Ejo Heza long-term savings scheme: voluntary, flexible, paid through mobile money with a government co-contribution for low-income savers. Egypt's requirement that platforms register workers and pay social insurance. Kenya's contested Business Laws (Amendment) Bill 2024 and South Africa's consideration of UIF and Compensation Fund coverage for platform workers.",
       "https://www.cnss.ma/", "Practice"],
      ["Contribution problems and the designs that answer them",
       "The Wednesday matrix, with the country example attached to each row: no identifiable employer → Germany's artists' fund, Portugal's dependent self-employment contribution, India's construction welfare fund. Low contributory capacity → phased contributions in Jordan, Costa Rica and Uruguay. Fluctuating income → Spain's annual reconciliation. Fragmented earnings → Brazil's MEI, Korea's artists' scheme. Multiple payers → Mexico's domestic workers. Multiple platforms → Singapore's CPF, New York's Black Car Fund. Difficult income declaration → Cabo Verde's REMPE, Brazil's Simples. High administrative cost → the monotax family. Intermittent employment → France's intermittents du spectacle, 507 hours over twelve months. Very low lifetime contributions → tax-financed minimum guarantees such as Chile's PGU.",
       "https://www.social-protection.org/gimi/Emodule.action?id=126", "Tool"]
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

   `feeds` below holds the four ITCILO Compendium subject searches. They have
   now been harvested: subject 4 (employment relationship, 4 decisions),
   subject 22 (social security, 4), subject 26 (telework, 1) and subject 2
   (dismissal, 63) — 71 distinct decisions, one of which the Compendium indexes
   under two subjects. They are a different kind of material from the platform
   cases above: the Compendium collects decisions in which a national court
   actually used an international labour standard to decide the case, which is
   why each carries the instruments relied on and the way the court used them.
   `cpd` below is just the Compendium's URL prefix, kept short for readability.
   ========================================================================== */

var cpd = "https://compendium.itcilo.org/en/compendium-decisions/";

window.CASELAW = {
  note:
    "Courts, not legislators, have decided most of the platform-work coverage questions of the last decade — " +
    "and they have not all decided them the same way. Read each decision for the test it applies, not only for " +
    "who won: the test is what you can transplant. Several of these are under appeal or have been overtaken by " +
    "legislation; verify against the original judgment before citing it. The entries drawn from the ITCILO " +
    "Compendium carry a second lesson: they show national courts reaching for an ILO Convention or " +
    "Recommendation — sometimes one their own country has not ratified — to fill a gap in domestic law.",

  themes: [
    { id: "status", label: "Employment status" },
    { id: "affiliation", label: "Social security affiliation" },
    { id: "contribution", label: "Who owes the contribution" },
    { id: "scope", label: "Scope of the worker concept" },
    { id: "termination", label: "Termination and income loss" },
    { id: "representation", label: "Representation and voice" },
    { id: "regulation", label: "Regulation and governance" },
    { id: "pending", label: "Pending / unsettled" }
  ],

  // The four Compendium subject searches, now harvested into `decisions` below.
  feeds: [
    ["Compendium subject 4 — Employment relationship", "https://compendium.itcilo.org/en/decisions-by-subject?subject=4&save=search"],
    ["Compendium subject 2 — Dismissal", "https://compendium.itcilo.org/en/decisions-by-subject?subject=2&save=search"],
    ["Compendium subject 26 — Telework", "https://compendium.itcilo.org/en/decisions-by-subject?subject=26&save=search"],
    ["Compendium subject 22 — Social security", "https://compendium.itcilo.org/en/decisions-by-subject?subject=22&save=search"]
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
      country: "South Africa", flagRegion: "Africa",
      court: "Labour Court of South Africa, Cape Town", date: "12 January 2018",
      title: "Uber South Africa Technology Services (Pty) Ltd v NUPSAW and Others",
      cite: "C449/17; [2018] ZALCCT 1; (2018) 39 ILJ 903 (LC)",
      theme: "contribution",
      holding:
        "The Court reviewed and set aside the CCMA's 2017 ruling that Uber drivers were employees. The drivers " +
        "had not shown an employment relationship with the local entity, Uber South Africa Technology Services, " +
        "which was the only respondent before it. The Court expressly declined to decide whether they are " +
        "employees of the Dutch parent, Uber B.V.",
      design:
        "Read it next to the Swiss decisions above: in both countries the case turned on which corporate entity " +
        "was named. A scheme that imposes obligations on 'the platform' without defining the liable legal person " +
        "— local subsidiary, foreign operator, or permanent establishment — hands that argument to the platform.",
      url: "https://www.saflii.org/za/cases/ZALCCT/2018/1.html"
    },
    {
      country: "China", flagRegion: "Asia and the Pacific",
      court: "Supreme People's Court", date: "In force 1 September 2025",
      title: "Second Judicial Interpretation on labour dispute cases",
      cite: "Judicial interpretation, social insurance provisions",
      theme: "affiliation",
      holding:
        "Agreements in which a worker waives social insurance, or in which an employer is released from paying " +
        "social insurance contributions in exchange for a cash allowance, are invalid. The obligation follows " +
        "from the law and cannot be contracted away by consent.",
      design:
        "The principle behind every mandatory scheme, stated plainly by a court in the largest platform market " +
        "in the world. Where take-home pay today is higher without contributions, voluntary designs lose; this " +
        "is the legal answer to 'the workers themselves prefer cash'. Its reach still depends on an employment " +
        "relationship being established in the first place.",
      url: "https://www.issa.int/platform-workers/media-monitor"
    },
    {
      country: "Republic of Korea", flagRegion: "Asia and the Pacific",
      court: "Seoul High Court", date: "2026 (reported)",
      title: "Delivery rider — employee under the Labour Standards Act",
      cite: "Reported decision; verify against the original judgment",
      theme: "status",
      holding:
        "A platform delivery rider was held to be an employee under the Labour Standards Act. The court treated " +
        "algorithmic allocation and GPS tracking as evidence of substantial supervision and direction by the " +
        "platform.",
      design:
        "Background to Wednesday's Korean country experience, where employment insurance and industrial accident " +
        "insurance were extended to workers in special types of employment by statute. Courts and the legislature " +
        "have been moving on the same problem from two directions — the sequencing question Friday takes up.",
      url: "https://www.issa.int/platform-workers/media-monitor"
    },
    {
      country: "India", flagRegion: "Asia and the Pacific",
      court: "Karnataka High Court", date: "2025–2026, listed for hearing",
      title: "Challenge to the Karnataka Platform Based Gig Workers Act, 2025",
      cite: "Aggregator challenge to the State welfare fee",
      theme: "pending",
      holding:
        "Aggregators challenged the State's platform-based gig workers legislation, which funds a welfare board " +
        "through a fee levied on aggregator transactions. The Court declined to stay the Act while the challenge " +
        "proceeds.",
      design:
        "A rare live test of the aggregator levy — a financing instrument several countries are considering " +
        "because it collects from the platform rather than from irregular worker earnings. Whether it survives " +
        "matters directly to Lab 2.",
      url: "https://www.business-humanrights.org/en/latest-news/india-supreme-court-reviews-plea-for-social-security-rights-of-gig-and-platform-workers/"
    },
    {
      country: "Kenya", flagRegion: "Africa",
      court: "High Court of Kenya", date: "September 2026",
      title: "Ride-hailing regulations — commission cap struck down",
      cite: "Challenge to the 2022 transport (ride-hailing) regulations",
      theme: "regulation",
      holding:
        "The Court declared key parts of the ride-hailing regulations, including the cap on platform commissions, " +
        "unconstitutional for want of adequate public participation — and suspended the declaration for twelve " +
        "months so that the process could be redone properly.",
      design:
        "Not a status case, and that is the point: courts also police how platform rules are made. A regulation " +
        "that skips consultation can be struck down whatever its merits, and the suspended declaration is a " +
        "model of how a court gives an administration time to fix process without leaving a vacuum. One for the " +
        "governance and sequencing block.",
      url: "https://www.businessdailyafrica.com/bd/economy/blow-to-uber-bolt-drivers-as-court-blocks-18pc-commission-cap-5581212"
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
    },

    /* ========================================================================
       ITCILO COMPENDIUM — SUBJECT 4 · EMPLOYMENT RELATIONSHIP
       ===================================================================== */
    {
      country: "Brazil", flagRegion: "Americas",
      court: "Regional Labour Tribunal of the Third Region", date: "30 September 2003",
      title: "Computer operator engaged through a services cooperative",
      cite: "Case No. 00652-2003-017-03-00-0RO · ILO Recommendation No. 193, para. 8(b)",
      theme: "status",
      holding:
        "A computer operator joined a cooperative that supplied services to a public administration, working for " +
        "the administration while being paid by the cooperative as one of its members. After twenty months the " +
        "arrangement ended and he sought recognition of an employment relationship. The Tribunal held that the " +
        "way the work was actually organised showed subordination, and that the conditions of Article 3 of the " +
        "consolidated labour laws were met.",
      design:
        "The Court leaned on paragraph 8(b) of the Promotion of Cooperatives Recommendation, 2002 (No. 193), " +
        "which asks States to ensure cooperatives are not used to establish disguised employment relationships. " +
        "The intermediary form changes — cooperative then, app now — but the question does not: the social " +
        "security consequence follows the organisation of the work, not the legal wrapper the payer chose.",
      url: cpd + "regional-labour-tribunal-of-the-third-region-rogerio-ferreira-goncalves-1-infocoop-servicos-2013-cooperativa-de-profissionais-de-prestacao-de-servicos-ltda-2-caixa-economica-federal-cef-responsavel-subsidiaria-30-september-2003-00652-2003-017-03-00"
    },
    {
      country: "Burkina Faso", flagRegion: "Africa",
      court: "Ouagadougou Labour Court", date: "8 January 2009",
      title: "Worokuy Esaie v. Clinique des Genêts",
      cite: "Judgment No. 008 · ILO Convention No. 26, Art. 4",
      theme: "status",
      holding:
        "A clinic worker with no written contract was held to be employed under an indefinite contract: the " +
        "Court looked at the exercise of an occupation under the direction and authority of the employer in " +
        "return for remuneration, rejecting the employer's characterisation of the arrangement as a traineeship. " +
        "Unable to prove the wage he said had been agreed, the worker was nevertheless awarded the difference " +
        "between what he received and the statutory minimum wage, under Article 4 of the Minimum Wage-Fixing " +
        "Machinery Convention, 1928 (No. 26).",
      design:
        "Two moves worth copying. First, the absence of a written contract is not an obstacle — the facts of " +
        "direction and remuneration decide. Second, where the worker cannot prove what was promised, the " +
        "statutory floor supplies the figure. Both matter for any scheme that has to reconstruct an earnings " +
        "base for undocumented work.",
      url: cpd + "labour-court-ouagadougou-worokuy-esaie-v-clinique-des-genets-8-january-2009-judgment-no.-008"
    },
    {
      country: "Madagascar", flagRegion: "Africa",
      court: "Antsirabe Labour Court", date: "22 May 2006",
      title: "Security guard engaged under a 'provision of services' agreement",
      cite: "Case No. 13/RG/TT/06 · ILO, The Employment Relationship, Report V(1), ILC 95th Session",
      theme: "status",
      holding:
        "A guard worked for more than five years under an agreement whose Article 11 expressly excluded any " +
        "employment relationship, and which the company said covered only intermittent services. The Court " +
        "reclassified it: the claimant worked solely for the defendant's benefit, hours were set unilaterally by " +
        "the company, and a warning letter showed it held disciplinary power. Termination without the Labour " +
        "Code's dismissal procedure was therefore unlawful.",
      design:
        "Decided weeks before Recommendation No. 198 was adopted, and relying on the ILO report that produced " +
        "it, this is the primacy of facts stated in its purest form: a clause denying the employment " +
        "relationship is evidence of nothing. Exclusivity, unilateral scheduling and disciplinary power are " +
        "exactly the three indicators an algorithm now supplies.",
      url: cpd + "antsirabe-labour-court-22-may-2006-case-no.-13-rg-tt-06"
    },
    {
      country: "Trinidad and Tobago", flagRegion: "Americas",
      court: "Industrial Court", date: "23 January 2007",
      title: "Banking, Insurance and General Workers' Union v. Tri-Star Latin-America Ltd and others",
      cite: "Case No. 74 of 2002 · ILO Recommendation No. 198 (indexed by the Compendium under both employment relationship and dismissal)",
      theme: "status",
      holding:
        "A worker in a triangular arrangement was demoted without notice from team leader to emergency medical " +
        "technician, with a salary cut, and resigned three years later. Applying Recommendation No. 198 — in " +
        "particular the indicators of periodic remuneration and remuneration as the sole or principal source of " +
        "income — the Court identified Tri-Star Latin-America Ltd as the sole employer at the time of the " +
        "demotion and awarded damages for constructive dismissal.",
      design:
        "Two lessons in one case. The R198 indicators do not only answer 'is this employment?' — they answer " +
        "'which of these several entities is the employer?', the question a platform, a fleet partner and a " +
        "local subsidiary are all designed to blur. And a unilateral downgrade of terms, not just an outright " +
        "termination, can amount to dismissal: the direct analogue of a worker whose ranking collapses.",
      url: cpd + "industrial-court-banking-insurance-and-general-workers2019-union-v-tri-star-latin-america-ltd-south-west-regional-health-authority-tobago-regional-health-authority-23-january-2007-case-no-74-of-2002"
    },

    /* ========================================================================
       ITCILO COMPENDIUM — SUBJECT 22 · SOCIAL SECURITY
       ===================================================================== */
    {
      country: "Azerbaijan", flagRegion: "Europe",
      court: "Constitutional Court", date: "29 December 1999",
      title: "Conformity of Article 109 of the Law on Pension Maintenance of Citizens with the Constitution",
      cite: "ICESCR Art. 9 · UDHR Art. 22",
      theme: "affiliation",
      holding:
        "A law allowed citizens serving prison sentences only 20% of their retirement pensions. The " +
        "Constitutional Court struck it down: the restriction was inconsistent with the constitutional right to " +
        "social protection and amounted to a punishment the Criminal Code did not provide for. It relied on " +
        "Article 22 of the Universal Declaration and Article 9 of the ICESCR, noting that international practice " +
        "does not treat conviction as a ground for depriving a person of social security.",
      design:
        "The cleanest statement of the Monday framing: an entitlement built on contributions is a right, not a " +
        "privilege that an administration can discount for a disfavoured group. Any scheme design that reduces " +
        "a benefit by reference to who the claimant is, rather than to the contingency, has to answer this.",
      url: cpd + "constitutional-court-of-the-azerbaijan-republic-on-conformity-of-article-109-of-the-law-on-pension-maintenance-of-citizens-with-articles-25-38-and-71-of-the-constitution-of-the-azerbaijan-republic-29-december-1999"
    },
    {
      country: "France", flagRegion: "Europe",
      court: "Cour de cassation", date: "27 February 1934",
      title: "Castanié v. Widow Hurtado",
      cite: "ILO Convention No. 19 (Equality of Treatment (Accident Compensation), 1925)",
      theme: "affiliation",
      holding:
        "French law made full accident-compensation rights for foreign workers conditional on a bilateral treaty " +
        "with their country. The widow of a Spanish worker killed in a work accident in France claimed the same " +
        "compensation as a French worker. The Supreme Court set the domestic condition aside and applied " +
        "Convention No. 19 directly: double ratification by France and Spain was enough, with no residence " +
        "condition and no separate agreement needed.",
      design:
        "Ninety years old and still the template for cross-border coverage. A ratified equality-of-treatment " +
        "instrument can displace a national rule that conditions entitlement on nationality or on a bilateral " +
        "deal — the question the cohort's cross-border and migrant-worker cases keep running into, and the one " +
        "C193 Article 19 and Conventions Nos 118 and 157 now carry forward.",
      url: cpd + "supreme-court-201ccour-de-cassation201d-castanie-v.-widow-hurtado-request-of-27-february-1934"
    },
    {
      country: "Netherlands", flagRegion: "Europe",
      court: "Central Appeals Tribunal", date: "29 May 1996",
      title: "Personal contributions to the cost of medically prescribed postnatal hospital care",
      cite: "LJN: AL0666 · ILO Conventions Nos 102 and 103",
      theme: "affiliation",
      holding:
        "A 1980 provision requiring insured persons to contribute personally to the cost of postnatal care in " +
        "hospital, where a doctor had prescribed it, was held inconsistent with Conventions Nos 102 and 103 and " +
        "therefore inapplicable. The Tribunal treated the Conventions as binding on everyone under Articles 93 " +
        "and 94 of the Constitution, and cited direct requests of the ILO Committee of Experts spelling out the " +
        "prohibition on cost-sharing for medically required postnatal care.",
      design:
        "Adequacy is justiciable. A co-payment introduced for behavioural reasons — here, to encourage home " +
        "deliveries — was measured against the minimum standards and failed. Any design that shifts cost onto " +
        "the insured person to steer behaviour has to be checked against the branch's own floor first.",
      url: cpd + "central-appeals-tribunal-29-may-1996-ljn-al0666"
    },
    {
      country: "Taiwan, Province of China", flagRegion: "Asia and the Pacific",
      court: "Judicial Yuan", date: "2 August 2002",
      title: "Interpretation No. 549 — survivors' insurance and recently adopted children",
      cite: "No. 549 · ILO Convention No. 102",
      theme: "affiliation",
      holding:
        "A rule barring children whose adoption had been registered less than six months before a parent's death " +
        "from receiving survivors' benefits — an anti-fraud measure — was held to need amendment. The Judicial " +
        "Yuan held the law would sit better with constitutional principles if recently adopted children could be " +
        "recognised as possible beneficiaries, and said the relevant international labour and social security " +
        "Conventions should be taken into account. A separate opinion went further, treating ILO Conventions as " +
        "a legal source limiting legislative discretion.",
      design:
        "An anti-fraud rule drawn as a blunt waiting period excluded a class of genuine beneficiaries. The " +
        "proportionality question it raises is the one behind every qualifying period and every anti-abuse check " +
        "designed into a new scheme — including the dual-confirmation and fictitious-work controls the cohort " +
        "proposed for domestic and agricultural work.",
      url: cpd + "judicial-yuan-2-august-2002-no.-549"
    },

    /* ========================================================================
       ITCILO COMPENDIUM — SUBJECT 26 · TELEWORK
       ===================================================================== */
    {
      country: "Colombia", flagRegion: "Americas",
      court: "Constitutional Court", date: "19 June 2013",
      title: "Action of unconstitutionality against Articles 3 and 6.1 of Law 1221 of 2008 on telework",
      cite: "Case No. C-351/13 · ILO Conventions Nos 87, 98 and 144; Recommendation No. 113",
      theme: "regulation",
      holding:
        "Article 3 of the telework law listed the actors entitled to take part in making public policy on " +
        "telework and omitted trade union organizations. The Court held the omission breached workers' right to " +
        "participate, but rather than strike the provision down — which would have left the policy without a " +
        "legal basis — it declared Article 3 constitutional on condition that trade union organizations be able " +
        "to take part in designing the policy.",
      design:
        "The only decision in these four subjects about a new form of work, and it is not about status at all: " +
        "it is about who sits at the table when the rules for that form of work are written. Read it next to " +
        "Kenya's ride-hailing regulations above — courts police the process, and a remedy that preserves the " +
        "scheme while fixing the consultation defect is a model worth copying.",
      url: cpd + "constitutional-court-action-of-unconstitutionality-against-articles-3-and-6-1-of-law-1221-of-2008-establishing-standards-to-promote-and-regulate-telework-and-other-provisions-19-june-2013-case-no-c-351-13"
    },

    /* ========================================================================
       ITCILO COMPENDIUM — SUBJECT 2 · DISMISSAL
       63 decisions. For a course about platform work this is the file on
       deactivation: what counts as a valid reason, what procedure is owed
       before income stops, who carries the burden of proof, what the worker is
       left with afterwards — and which categories of worker the protection
       reaches at all.
       ===================================================================== */
    {
      country: "Argentina", flagRegion: "Americas",
      court: "Labour Court of Appeal of Santa Fe, First Chamber", date: "8 March 2012",
      title: "Fernández, Pedro v. Ortiz, Arcángel",
      cite: "Case No. 98/10 · ILO Recommendation No. 166, para. 18; ICESCR",
      theme: "termination",
      holding:
        "A worker dismissed without just cause was barred from the statutory compensation because his service " +
        "fell short of a minimum length. The majority held that this did not remove his constitutional right to " +
        "protection against arbitrary dismissal: some compensation was owed. The Court noted that the employer " +
        "had registered the employment relationship irregularly and then dismissed without paying — denying the " +
        "worker both of the options Recommendation No. 166 contemplates, since he was refused compensation and " +
        "had no right to an unemployment benefit either.",
      design:
        "The point that makes this a social security case: irregular registration does not only cost " +
        "contributions, it closes the unemployment branch at exactly the moment the worker needs it. Where a " +
        "platform worker is never registered, deactivation produces the same double gap — no severance and no " +
        "benefit. Registration is the precondition for everything downstream.",
      url: cpd + "labour-court-of-appeal-of-the-city-of-santa-fe-first-chamber-fernandez-pedro-c-ortiz-arcangel-v.-cpl-8-march-2012-case-no.-98-10"
    },
    {
      country: "Argentina", flagRegion: "Americas",
      court: "Supreme Court of Justice", date: "19 May 2010",
      title: "González, Martín Nicolás v. Polimat S.A.",
      cite: "ILO Conventions Nos 52 and 95; Convention No. 158",
      theme: "contribution",
      holding:
        "Emergency decrees had classified a series of pay increases as 'non-remunerative', which lowered the " +
        "base used to calculate the annual complementary wage, untaken holidays and compensation for dismissal " +
        "without just cause. A majority of the Court held the decrees unconstitutional, restored the " +
        "remunerative character of the payments and ordered a fresh ruling — relying among other things on " +
        "Convention No. 95 on the protection of wages and the Holidays with Pay Convention, which requires that " +
        "the worker receive their usual remuneration.",
      design:
        "A direct precedent for the contribution-base question in Lab 2. Labelling part of what a worker earns " +
        "as something other than remuneration shrinks every entitlement calculated on it — pension accrual, " +
        "sickness pay, severance. Platform bonuses, incentives and 'quest' payments raise exactly this: if they " +
        "are earnings in substance, the base has to include them.",
      url: cpd + "supreme-court-of-justice-of-argentina-gonzalez-martin-nicolas-v.-polimat-s.a.-and-other-19-may-2010"
    },
    {
      country: "Argentina", flagRegion: "Americas",
      court: "National Court of Appeal, Fifth Chamber", date: "14 June 2006",
      title: "Parra Vera, Maxima v. San Timoteo S.A.",
      cite: "Case No. 144/05 s.d. 68536 · ILO Conventions Nos 87, 98 and 111",
      theme: "representation",
      holding:
        "A worker dismissed in a restructuring claimed anti-union discrimination. The first-instance court had " +
        "required proof beyond any doubt. The Court of Appeal rejected that standard and, drawing on the ILO " +
        "supervisory bodies and Convention No. 111, established that once the worker shows facts from which " +
        "discrimination may be inferred, the burden shifts to the employer to prove a legitimate reason.",
      design:
        "The evidentiary principle that makes any protection against retaliation operable. A platform worker " +
        "deactivated after organising cannot reconstruct the algorithm's reasons; a rule that asks them to " +
        "prove motive protects nobody. Shifting the burden to the party holding the data is the same move the " +
        "EU Directive makes for status, and C193 Articles 13–15 make for automated decisions.",
      url: cpd + "national-court-of-appeal-fifth-chamber-parra-vera-maxima-v.-san-timoteo-sa-conc.-14-june-2006-case-no.-144-05-s.d.-68536"
    },
    {
      country: "Argentina", flagRegion: "Americas",
      court: "National Labour Appeals Court, Sixth Chamber", date: "10 March 2004",
      title: "Balaguer, Catalina T. v. Pepsico de Argentina S.R.L.",
      cite: "ILO Conventions Nos 87 and 98; ICESCR; ICCPR",
      theme: "representation",
      holding:
        "The claimant held no union office and so fell outside the statutory job security given to union " +
        "leaders, but she was married to a protected leader and herself regularly defended colleagues' rights. " +
        "Dismissed for alleged poor performance after an active role in a collective dispute, she obtained a " +
        "ruling that the dismissal was discriminatory and void, with reinstatement — discrimination, the Court " +
        "held, must cease, and only reinstatement achieves that.",
      design:
        "Protection that attaches to a formal title leaves everyone else exposed. The people who actually " +
        "organise platform workers rarely hold an office that any statute recognises; a design that protects " +
        "only accredited representatives protects almost none of them. Note also the remedy: compensation did " +
        "not suffice, because the deterrent effect of the dismissal would have survived it.",
      url: cpd + "national-labour-appeals-court-sixth-chamber-balaguer-catalina-t.-v.-pepsico-de-argentina-s.r.l.-10-march-2004"
    },
    {
      country: "Argentina", flagRegion: "Americas",
      court: "Labour Court of First Instance, Southern Judicial District", date: "30 September 1998",
      title: "Vargas, Bernardo Silenio v. Provincial Executive Branch",
      cite: "Case No. 556, Final decision No. 565 · ILO Committee on Freedom of Association, Digest",
      theme: "representation",
      holding:
        "A hospital worker responsible for the management of human remains could not do the job properly because " +
        "the machinery was defective. He gave photographs of it to his union, which passed them to the media, " +
        "and was dismissed. Using the case law of the ILO Committee on Freedom of Association, the Court " +
        "treated the disclosure as protected expression within freedom of association and annulled the " +
        "dismissal as a disproportionate sanction.",
      design:
        "Whistleblowing about unsafe working conditions is union activity, and sanctioning it is anti-union " +
        "discrimination. The platform parallel is immediate: riders who publicise unsafe routes, pay cuts or " +
        "algorithmic penalties are exercising the same freedom, and a deactivation that follows has to be " +
        "testable against it.",
      url: cpd + "labour-court-of-first-instance-of-the-southern-judicial-district-vargas-bernardo-silenio-v.-provincial-executive-branch-provincial-ministry-of-health-and-social-welfare-concerning-an-administrative-dispute-30-september-1998-case-no.-556-final-decision-no."
    },
    {
      country: "Australia", flagRegion: "Asia and the Pacific",
      court: "Federal Court of Australia", date: "6 August 1999",
      title: "Konrad v. Victoria Police & Ors",
      cite: "[1999] FCA 988 · ILO Convention No. 158",
      theme: "scope",
      holding:
        "A police constable claimed unfair dismissal under a provision of the Industrial Relations Act that " +
        "protected 'employees'. To decide whether a constable was an employee, the Court went to Convention " +
        "No. 158, the instrument the Division had been enacted to give effect to, and interpreted the domestic " +
        "term in the light of the treaty — using the Vienna Convention's interpretation rules to do so — rather " +
        "than by the common-law understanding of a constable's office.",
      design:
        "The method, not the outcome, is what transfers. Where a statute was enacted to implement a Convention, " +
        "its terms take their meaning from the Convention — so a narrow domestic reading of 'employee' or " +
        "'worker' can be reopened. For institutions implementing C193, the same logic applies to every " +
        "definition in the implementing legislation.",
      url: cpd + "federal-court-of-australia-konrad-v.-victoria-police-ors-6-august-1999-1999-fca-988"
    },
    {
      country: "Australia", flagRegion: "Asia and the Pacific",
      court: "High Court of Australia", date: "19 March 1998",
      title: "Qantas Airways Limited v. Christie",
      cite: "[1998] HCA 18 · ILO Conventions Nos 111 and 158",
      theme: "scope",
      holding:
        "A pilot dismissed on his sixtieth birthday argued that his age-based termination breached the " +
        "prohibition on terminating employment by reason of age. Interpreting the statute in the light of " +
        "Conventions Nos 111 and 158, the Court examined whether age was an inherent requirement of the post — " +
        "international rules barring him from acting as pilot-in-command in most of the airline's routes meant " +
        "it was, and the termination was not discriminatory.",
      design:
        "The inherent-requirements exception is narrow and has to be proved against the actual content of the " +
        "job. Useful on the other side of the ledger too: schemes that set an upper age limit for entry — the " +
        "point Ghana's riders raised about older new entrants to SEED — need the same justification, and " +
        "usually cannot give it.",
      url: cpd + "australian-higher-court-qantas-airways-limited-v.-christie-19-march-1998-1998-hca-18"
    },
    {
      country: "Australia", flagRegion: "Asia and the Pacific",
      court: "Conciliation and Arbitration Commission", date: "2 August 1984",
      title: "Termination, Change and Redundancy Case",
      cite: "[1984] 8 I.R. 34 · ILO Conventions Nos 111 and 158",
      theme: "termination",
      holding:
        "Asked by the trade union confederation to make an award recognising job security rights, the " +
        "Commission drew the list of grounds that could never be valid reasons for dismissal straight from " +
        "Convention No. 158 — race, colour, sex, religion, marital status, family responsibilities, pregnancy, " +
        "political opinion, national extraction and social origin — with the inherent-requirements exception " +
        "from Convention No. 111.",
      design:
        "A regulator writing a rule, not a court resolving a dispute: the Convention supplied the drafting. For " +
        "an institution writing deactivation rules into a platform licence or a scheme regulation, the " +
        "prohibited-grounds list is already drafted and internationally agreed — there is no need to invent one.",
      url: cpd + "australian-conciliation-and-arbitration-commission-termination-change-and-redundancy-case-2-august-1984-1984-8-i.r.-34.r.-34"
    },
    {
      country: "Belgium", flagRegion: "Europe",
      court: "Brussels Labour Court, 20th Chamber", date: "20 February 1992",
      title: "D.D. v. SA Vanduc-Topfilm",
      cite: "Roll No. 79-759/91 · ILO Convention No. 158, Art. 7 (unratified)",
      theme: "termination",
      holding:
        "Belgian law contained no requirement to hear a worker before dismissal for gross misconduct. The Court " +
        "drew on Article 7 of Convention No. 158 even though Belgium had not ratified it, reasoning that the " +
        "instrument had been approved by all four Belgian delegates at the Conference, which at least showed " +
        "that its rules did not greatly unsettle the Belgian legal order. Dismissal without a hearing caused " +
        "damage that had to be compensated.",
      design:
        "An unratified Convention used to fill a gap in national law. Where the domestic statute is silent on " +
        "what process is owed before income stops, the international standard supplies the default — a route " +
        "worth knowing wherever platform deactivation is not yet regulated at all.",
      url: cpd + "brussels-labour-court-20th-chamber-d.d.-v.-sa-vanduc-topfilm-20-february-1992-roll-no.-79-759-91"
    },
    {
      country: "Benin", flagRegion: "Africa",
      court: "Cotonou Court of First Instance", date: "7 December 2009",
      title: "Dismissal during pregnancy following a period of incapacity",
      cite: "Case No. 05-2005 · ILO Convention No. 111",
      theme: "termination",
      holding:
        "A worker with no written contract was incapacitated by a traffic accident for nearly two years and " +
        "became pregnant during that period. Her employer stopped paying her and claimed justification in " +
        "abandonment of the workplace and insubordination, later demanding that she sign an agreement to " +
        "'reinstate' the relationship. The judge found the real reason was the pregnancy following the " +
        "incapacity, and held the termination to be discrimination on grounds of sex, maternity, marital status " +
        "and family situation.",
      design:
        "Two contingencies interacting — sickness then maternity — is where thin protection fails, and it is " +
        "precisely the sequence a platform worker with no sickness cover faces. Note also that the absence of a " +
        "written contract did not defeat the claim.",
      url: cpd + "cotonou-court-of-first-instance-first-class-7-december-2009-case-no.-05-2005"
    },
    {
      country: "Benin", flagRegion: "Africa",
      court: "Cotonou Court of First Instance", date: "20 July 2009",
      title: "Dismissal during extended maternity leave on grounds of physical incapacity",
      cite: "Case No. 54-2002 · ILO Convention No. 183, Art. 8 (unratified)",
      theme: "termination",
      holding:
        "A worker whose job required daily travel by motorbike was diagnosed after childbirth with a condition " +
        "that prevented it, and was dismissed during extended maternity leave for physical incapacity. The " +
        "judge applied Article 8 of the Maternity Protection Convention, 2000 (No. 183) together with the " +
        "Labour Code: dismissal during that period is unlawful and a woman must find the same or an equivalent " +
        "post on return. Compensation was awarded for unfair dismissal and for the harm caused.",
      design:
        "Maternity protection is not only a cash benefit — it is a prohibition on termination and a guarantee of " +
        "return. The cohort's maternity proposals (India placing maternity first, the pooled benefit discussed " +
        "for platform work) have to carry this second half too, or the benefit is paid to someone who has just " +
        "lost their livelihood.",
      url: cpd + "cotonou-court-of-first-instance-first-class-20-july-2009-case-no.-54-2002"
    },
    {
      country: "Botswana", flagRegion: "Africa",
      court: "Industrial Court", date: "Undated in the Compendium; case no. of 2013",
      title: "Mpho C. Ganelang v. Tyre World Ltd.",
      cite: "Case No. IC 169/13 · ILO Convention No. 158 (unratified); CEACR General Survey 1995",
      theme: "termination",
      holding:
        "A branch manager was transferred and then told in writing that she would be responsible for cleaning " +
        "the bathrooms, with her salary unchanged. She resigned. Relying on Convention No. 158 and the 1995 " +
        "General Survey — which treat a worker who leaves because of conduct by the employer as constructively " +
        "discharged, able to sue as if dismissed — the Court found constructive dismissal and awarded eight " +
        "months' wages plus damages for the treatment.",
      design:
        "Pay was untouched; the work was degraded, and that was enough. For platform design the equivalent is " +
        "the account that is never deactivated but is starved of work, or moved to the worst slots after a " +
        "rating drop. A rule that only catches formal termination will not catch any of it.",
      url: cpd + "industrial-court-of-the-republic-of-botswana-mpho-c-ganelang-v-tyreworld-ltd-case-no-ic-169-13"
    },
    {
      country: "Botswana", flagRegion: "Africa",
      court: "Industrial Court", date: "17 October 2011",
      title: "Terence T. Showa & 16 others v. Pathfinder Enterprises T/A NIIT",
      cite: "No. IC 822/09 · ILO Convention No. 158, Art. 13(1)(b)",
      theme: "termination",
      holding:
        "Seventeen workers were made redundant. The Court found the dismissals substantively fair but went on " +
        "to test the process, holding that the employer had to demonstrate full compliance with the statutory " +
        "redundancy procedure and had to create a meaningful forum for consultation. Meetings that were not " +
        "genuine consultation did not qualify; relying on Article 13(1)(b) of Convention No. 158, the Court " +
        "held the dismissals procedurally unfair and awarded compensation.",
      design:
        "Substantively fair and procedurally unfair are separate findings, and the second one still costs. " +
        "Where a platform exits a market or culls a cohort of accounts — Uganda's case names Uber's departure " +
        "exactly — the question is not only whether it may, but what consultation it owed first.",
      url: cpd + "industrial-court-of-the-republic-of-botswana-terence-t.-showa-16-others-v-pathfinder-enterprises-t-a-niit-17-october-2011-no.-ic-822-09"
    },
    {
      country: "Botswana", flagRegion: "Africa",
      court: "Industrial Court", date: "Undated in the Compendium; reported 2006",
      title: "Sebako and Another v. Shona Gas",
      cite: "2006 (1) BLR 86 (IC) · ILO Convention No. 158, Art. 7",
      theme: "termination",
      holding:
        "A gas delivery driver and his assistant were dismissed on a manager's suspicion of theft, without " +
        "investigation. The Employment Act set out no process for misconduct dismissals, so the Court derived " +
        "the general principles of a fair dismissal on a charge of theft from domestic case law and Article 7 " +
        "of Convention No. 158. No theft was proved and no disciplinary enquiry had been held: the dismissal " +
        "was both substantively and procedurally unfair.",
      design:
        "Suspicion plus an automatic consequence is not a procedure. Fraud-detection scoring in a social " +
        "security institution, and the platform's own automated suspension on a suspected-fraud flag, both sit " +
        "exactly here — which is why Thursday's AI session puts human review on the high-risk tier.",
      url: cpd + "industrial-court-of-the-republic-of-botswana-sebako-and-another-v-shona-gas-undated-2006-1-blr-86-ic"
    },
    {
      country: "Botswana", flagRegion: "Africa",
      court: "Industrial Court", date: "22 November 2004",
      title: "Lemo v. Northern Air Maintenance (Pty) Ltd.",
      cite: "2004 (2) BLR 317 (IC) · ILO Conventions Nos 111 and 158; ILO Code of Practice on HIV/AIDS",
      theme: "termination",
      holding:
        "An apprentice aeronautical engineer was dismissed the day after telling his employer he was HIV " +
        "positive; the company pointed to his prolonged absences. The Court treated the timing as the principal " +
        "evidence, and relying on Convention No. 111, Convention No. 158 and the ILO Code of Practice on " +
        "HIV/AIDS — persuasive, it said, so far as consistent with Botswana's international obligations — found " +
        "discrimination and unfair dismissal.",
      design:
        "Sickness absence used as a cover for a prohibited ground. For scheme design the lesson runs the other " +
        "way too: where there is no sickness benefit, absence itself becomes the pretext, so the absence of a " +
        "branch is not neutral — it manufactures grounds for termination.",
      url: cpd + "industrial-court-of-botswana-lemo-v-northern-air-maintenance-pty-ltd-22-november-2004-case-no-2004-2-blr-317-ic"
    },
    {
      country: "Botswana", flagRegion: "Africa",
      court: "Industrial Court", date: "28 March 2004",
      title: "Monare v. Botswana ASH (Pty)",
      cite: "2004 (1) BLR 121 (IC) · ILO Convention No. 158, Arts 4 and 7",
      theme: "termination",
      holding:
        "A worker whose health had deteriorated over years was dismissed while on sick leave. On the facts the " +
        "employer had not known of his HIV status and had been tolerant through long absences, so the " +
        "termination rested on incapacity to perform rather than on status. Applying Articles 4 and 7 of " +
        "Convention No. 158, the Court held that dismissing a sick or injured worker is fair only where there " +
        "is no prospect of recovery within a period the employer can absorb without significant loss.",
      design:
        "The counterpart to the previous case, and the more useful one for design: it sets a test the employer " +
        "has to meet rather than a presumption either way. The duration an employer can absorb is precisely " +
        "what a sickness benefit extends — which is why sickness sits beside injury in several of the cohort's " +
        "contingency orders.",
      url: cpd + "industrial-court-of-botswana-monare-v-botswana-ash-pty-28-march-2004-case-no-2004-1-blr-121-ic"
    },
    {
      country: "Botswana", flagRegion: "Africa",
      court: "Industrial Court", date: "19 December 2003",
      title: "Sarah Diau v. Botswana Building Society",
      cite: "No. IC 50/2003 · ILO Convention No. 111; ILO Declaration on Fundamental Principles and Rights at Work",
      theme: "termination",
      holding:
        "A probationary security assistant was required to produce a certified document of her HIV status as " +
        "part of a pre-employment medical examination. She refused, saying her HIV status was a personal right " +
        "and not an employment requirement, and her contract was terminated. Reading the Constitution together " +
        "with Convention No. 111 and the ILO Declaration, the Court held the requirement violated the right to " +
        "liberty and the termination was unfair and unlawful. Reinstatement and compensation were ordered.",
      design:
        "A data case before the term existed. Collecting a health attribute that the role does not require, and " +
        "making continued engagement turn on it, is unlawful whatever the stated purpose. The same test governs " +
        "every field an institution asks a platform to transmit under C193 Article 16 — minimum dataset, " +
        "purpose limitation, nothing collected because it might one day be useful.",
      url: cpd + "industrial-court-of-botswana-sarah-diau-v.-botswana-building-society-19-december-2003-no.-ic-50-2003"
    },
    {
      country: "Botswana", flagRegion: "Africa",
      court: "Industrial Court", date: "23 April 1999",
      title: "Joel Sebonego v. News Paper Editorial and Management Services Ltd",
      cite: "No. IC 64/98 · ILO Convention No. 158, Arts 4, 6 and 11 (unratified)",
      theme: "termination",
      holding:
        "A newspaper editor absent for months on grounds of ill health, without explaining the reasons, was " +
        "dismissed without notice. Finding no provision in Botswana law on dismissal for medical reasons, the " +
        "Court turned to Convention No. 158 — Article 6, under which temporary absence through illness or " +
        "injury is not a valid reason for termination, and Article 11 on reasonable notice or compensation in " +
        "lieu.",
      design:
        "Article 6 is the sharpest provision in the Convention for this course: illness is a contingency to be " +
        "insured, not a performance problem to be terminated. A scheme with no sickness branch leaves the " +
        "employer or the platform with termination as the only available response to an absent worker.",
      url: cpd + "industrial-court-of-botswana-joel-sebonego-v.-news-paper-editorial-and-management-services-ltd-23-april-1999-no.-ic-64-98"
    },
    {
      country: "Burkina Faso", flagRegion: "Africa",
      court: "Ouagadougou Labour Court", date: "17 June 2003",
      title: "Zongo and others v. owner of the Bataille du Rail Mobil garage",
      cite: "No. 090 · ILO Conventions Nos 26 and 131",
      theme: "contribution",
      holding:
        "Three petrol pump attendants were dismissed by individual note with no explanation and no notice. " +
        "Having found the terminations unlawful, the Court turned to their claim for unpaid wages: their pay " +
        "was below the minima set by the Interprofessional Joint Committee. Reading the Labour Code in " +
        "conformity with Conventions Nos 26 and 131, it held that the statutory minimum cannot be derogated " +
        "from by contract and that the worker may recover the shortfall.",
      design:
        "A wage floor that can be contracted away is not a floor, and the same is true of a contribution base. " +
        "Where platform earnings fall below the statutory minimum, the choice is between a floor applied " +
        "regardless and a scheme whose benefits track whatever the platform chose to pay — the question behind " +
        "every minimum-base rule debated in Lab 2.",
      url: cpd + "ouagadougou-labour-court-zongo-and-others-v.-owner-of-the-bataille-du-rail-mobil-garage-17-june-2003-no.-090"
    },
    {
      country: "Canada", flagRegion: "Americas",
      court: "Supreme Court of Canada", date: "4 May 1989",
      title: "Slaight Communications Inc. v. Davidson",
      cite: "[1989] 1 S.C.R. 1038 · ICESCR",
      theme: "termination",
      holding:
        "An arbitrator found a dismissal to be the product of an intrigue and ordered the employer not only to " +
        "pay compensation but to tell any prospective employer of the worker's actual performance and that an " +
        "award had found no valid grounds for the dismissal. The employer argued this infringed its freedom of " +
        "expression. The Supreme Court upheld the award: the right to work recognised in international " +
        "instruments is of such importance that protecting it justified the restriction.",
      design:
        "A remedy aimed at the reputational damage that outlasts the dismissal. In platform work the equivalent " +
        "harm is a deactivation record or a low rating that follows the worker to the next app — which is why " +
        "several of the cohort's designs insist that the national record, not the platform's file, is what " +
        "travels with the worker.",
      url: cpd + "supreme-court-of-canada-slaight-communication-incorporated-v.-ron-davidson-4-may-1989-1989-1-s.c.r.-1038"
    },
    {
      country: "Belize", flagRegion: "Americas",
      court: "Caribbean Court of Justice", date: "6 July 2012",
      title: "Mayan King Ltd v. Jose L. Reyes and Others",
      cite: "Appeal No. CV 3 (2011) · ILO Conventions Nos 87 and 98",
      theme: "representation",
      holding:
        "Six workers dismissed for trade union activities were awarded a year's salary plus damages; the Court " +
        "of Appeal upheld the finding but cut the award, holding no constitutional right had been violated. The " +
        "Caribbean Court of Justice confirmed a violation of the national Act and of Article 13 of the Belize " +
        "Constitution, reading both in the light of Conventions Nos 87 and 98, which it described as the " +
        "foundation on which trade union activity is premised — including the right not to be discriminated " +
        "against at work for union activity.",
      design:
        "A regional appellate court treating the two freedom-of-association Conventions as the interpretive " +
        "floor for national and constitutional protection. Where platform workers' associations are not " +
        "recognised as trade unions, this is the chain of reasoning that still reaches them.",
      url: cpd + "caribbean-court-of-justice-on-appeal-from-the-court-of-appeal-of-belize-mayan-king-ltd-v.-jose-l.-reyes-and-others-appeal-no.-cv-3-2011-6-july-2012"
    },
    {
      country: "Chile", flagRegion: "Americas",
      court: "Supreme Court of Chile", date: "1 August 2001",
      title: "Carlos Castro Cortés v. Wackenhut Chile",
      cite: "Case No. 2549-01 · ILO Conventions Nos 87 and 98",
      theme: "representation",
      holding:
        "A union leader dismissed because of his office sought immediate reinstatement. Applying the Labour " +
        "Code and the Constitution and invoking Conventions Nos 87 and 98 to underline the fundamental " +
        "character of trade union autonomy and the prohibition of anti-union dismissal, the Supreme Court " +
        "confirmed that the worker was covered by trade union privilege and that the dismissal was void.",
      design:
        "Chilean trade union privilege runs from election until six months after leaving office — a defined " +
        "protected window rather than a case-by-case enquiry. That is an administratively simple device, and it " +
        "is transplantable to platform workers' representatives sitting on a scheme's governance body.",
      url: cpd + "supreme-court-of-chile-carlos-castro-cortes-v.-wackenhut-chile-1-august-2001-case-no.-2549-01"
    },
    {
      country: "Chile", flagRegion: "Americas",
      court: "Supreme Court of Chile", date: "19 October 2000",
      title: "Víctor Améstida Stuardo and others v. Santa Isabel S.A.",
      cite: "Case No. 10.695 · ILO Conventions Nos 87, 98 and 135",
      theme: "representation",
      holding:
        "Workers designated as representatives before their union was formally constituted were dismissed. " +
        "Faced with Labour Code provisions that could be read as contradictory, the Court interpreted them in " +
        "the light of Convention No. 98 on protection against anti-union discrimination and Convention No. 135 " +
        "on workers' representatives, and held that protection reached candidates and representatives from " +
        "before the union existed.",
      design:
        "The moment of greatest vulnerability is before the organisation exists, which is exactly where most " +
        "platform workforces sit today. Protection that begins only on registration of a union arrives after " +
        "the dismissals that prevent one from forming.",
      url: cpd + "supreme-court-of-chile-victor-amestida-stuardo-and-others-v.-santa-isabel-s.a.-19-october-2000-case-no.-10.695"
    },
    {
      country: "Colombia", flagRegion: "Americas",
      court: "Constitutional Court", date: "13 February 2013",
      title: "Tutela actions by 33 women dismissed during pregnancy",
      cite: "Case No. SU-070-13 · ILO Conventions Nos 156 and 183; CEDAW; Recommendation No. 95",
      theme: "scope",
      holding:
        "The Court resolved 33 tutela actions together, covering women who had notified their employer of their " +
        "pregnancy before termination, after it, or only verbally — and, critically, a full range of " +
        "engagement types: permanent contracts, fixed-term contracts, project contracts, agency work, civil " +
        "servants appointed by administrative act, and service (commercial) contracts. It set out the scope of " +
        "maternity protection across all of them, drawing on CEDAW and Conventions Nos 156 and 183.",
      design:
        "The single most transferable decision in this subject for scheme design. A constitutional court took " +
        "one protection and worked out, contract type by contract type, what it means for each — including for " +
        "people engaged under commercial service contracts, which is how most platform workers are engaged. " +
        "That is the exercise C193 Article 12 now requires of every branch.",
      url: cpd + "constitutional-court-actions-calling-for-legal-protection-tutela-lodged-individually-by-33-women-v-various-individuals-and-legal-entities-13-february-2013-case-no-su-070-13"
    },
    {
      country: "Colombia", flagRegion: "Americas",
      court: "Constitutional Court", date: "23 July 2003",
      title: "ASEINPEC and others v. Instituto Nacional Penitenciario y Carcelario",
      cite: "Case No. T-603-03 · ILO Conventions Nos 87 and 98; CFA recommendations",
      theme: "representation",
      holding:
        "After a union was registered, the institution dismissed its leaders without the prior authorisation " +
        "required for workers enjoying trade union protection, and then terminated 81 more members' contracts. " +
        "The Court granted protection to the union's leadership, ordering reinstatement and payment of lost " +
        "wages and benefits, and held that the recommendations of the ILO supervisory bodies must be complied " +
        "with as part of the Organization's Constitution.",
      design:
        "Notable for treating Committee on Freedom of Association recommendations as binding in the domestic " +
        "order — a route into national law that does not depend on winning a fresh constitutional argument. " +
        "Worth knowing for any institution whose platform-work reform is already the subject of a CFA case.",
      url: cpd + "constitutional-court-president-of-the-medellin-branch-of-the-asociacion-sindical-de-empleados-del-instituto-nacional-penitenciario-y-carcelario-aseinpec-and-others-v-instituto-nacional-penitenciario-y-carcelario-inpec-23-july-2003-case-no-t-603-03"
    },
    {
      country: "Colombia", flagRegion: "Americas",
      court: "Constitutional Court, Fourth Appellate Supervisory Chamber", date: "10 August 1999",
      title: "Sindicato de las Empresas Varias de Medellín v. Ministry of Labour and others",
      cite: "T-568/99 · ILO Conventions Nos 87 and 98; CFA Case No. 1916",
      theme: "representation",
      holding:
        "Workers dismissed for taking part in a strike that the administrative authority had declared illegal " +
        "sought reinstatement, relying on a Committee on Freedom of Association recommendation urging the " +
        "Government to reinstate them. The Court applied international law directly, setting aside a national " +
        "provision that was less protective — ratified labour Conventions form part of Colombian legislation, " +
        "and human rights treaties take precedence in the domestic order.",
      design:
        "The clearest instance in the Compendium of a court disapplying a national rule because an " +
        "international standard protects the worker better. Where a domestic provision excludes platform " +
        "workers from a branch, this is the argument that reaches it — and the reason social security " +
        "institutions need standing to make it.",
      url: cpd + "constitutional-court-of-colombia-fourth-appellate-supervisory-chamber-sindicato-de-las-empresas-varias-de-medellin-v.-ministry-of-labour-and-social-security-the-ministry-of-foreign-relations-the-municipio-of-medellin-and-empresas-varias-de-medellin-e"
    },
    {
      country: "Costa Rica", flagRegion: "Americas",
      court: "Supreme Court of Justice, Constitutional Chamber", date: "8 October 1993",
      title: "Dismissal of members of a permanent workers' committee during bargaining",
      cite: "Decision No. 5000-93 · ILO Conventions Nos 87 and 98",
      theme: "representation",
      holding:
        "Three members of a company's permanent workers' committee were dismissed while they were taking steps " +
        "to renegotiate the collective agreement. The company said the dismissals were unrelated to union " +
        "activity. Applying Conventions Nos 87 and 98 — including Article 8(2) of Convention No. 87, under " +
        "which national law must not impair the guarantees the Convention provides — the Chamber found the " +
        "dismissals hindered freedom of association and collective bargaining. The ruling was confirmed by " +
        "legislation a month later.",
      design:
        "Dismissing the negotiators ends the negotiation; that is the harm, and it is collective rather than " +
        "individual. Directly relevant where a platform can deactivate the people sitting opposite it in a " +
        "social dialogue body — France's ARPE model only works if those seats are protected.",
      url: cpd + "supreme-court-of-justice-constitutional-chamber-8-october-1993-decision-no.-5000-93"
    },
    {
      country: "Croatia", flagRegion: "Europe",
      court: "Constitutional Court", date: "10 January 2001",
      title: "Dismissal of a ministry driver for expressing personal opinions",
      cite: "No. U-III 727-1997 · ICCPR Art. 19; ECHR",
      theme: "termination",
      holding:
        "A driver dismissed for professional inadequacy argued that the real reason was his having expressed " +
        "personal opinions in the course of his duties, and that the courts' failure to examine the actual " +
        "reasons left him without an effective remedy. The Constitutional Court analysed the claim against " +
        "Article 19 of the ICCPR and the European Convention.",
      design:
        "The complaint was as much about the review as about the dismissal: the courts had never examined the " +
        "real reason. A redress route that cannot reach the actual ground of a decision is not redress — the " +
        "test to apply to any appeal mechanism against an automated deactivation.",
      url: cpd + "constitutional-court-of-croatia-10-january-2001-no.-u-iii-727-1997"
    },
    {
      country: "Estonia", flagRegion: "Europe",
      court: "Tallinn District Court, Administrative Division", date: "6 November 2001",
      title: "Ly Kovanen v. Ownership Reform Department of the City of Tallinn",
      cite: "Case No. II-3-286/2000 · ILO Conventions Nos 87 and 135",
      theme: "representation",
      holding:
        "A union delegate was dismissed without the labour inspector's authorisation. The employer argued she " +
        "was not a workers' representative because, on the day she was elected, her union had no statutes and " +
        "her election was not minuted. Relying directly on Conventions Nos 87 and 135, the Court held that she " +
        "was effectively performing the duties of the office; the dismissal without authorisation was " +
        "unlawful and compensation was awarded.",
      design:
        "Representative status follows the function performed, not the paperwork — the same primacy-of-facts " +
        "logic that governs employment status, applied to voice. Relevant wherever platform workers' " +
        "collectives cannot meet the formal registration requirements a statute sets for unions.",
      url: cpd + "tallinn-district-court-administrative-division-ly-kovanen-v.-ownership-reform-department-of-the-city-of-tallinn-6-november-2001-case-no.-ii-3-286-2000"
    },
    {
      country: "Ethiopia", flagRegion: "Africa",
      court: "Addis Ababa Court of Appeal", date: "31 July 2006",
      title: "Termination for alleged refusal of duties and abandonment of work",
      cite: "File No. 48008 · ILO Convention No. 158, Art. 9(2)(a)",
      theme: "termination",
      holding:
        "A care provider said she had been dismissed verbally after refusing cleaning duties not in her " +
        "contract; the employer said she had abandoned her post. The witness evidence on both sides was " +
        "inconclusive. Applying Article 9(2)(a) of Convention No. 158, the Court of Appeal held that the burden " +
        "of proving a valid reason lies on the employer; since none had been produced, the worker had to prove " +
        "nothing and the dismissal was unlawful.",
      design:
        "Where evidence is symmetrical, the allocation of the burden decides the case. A platform holds every " +
        "record of the engagement and the worker holds almost none, so the asymmetry is far sharper than here — " +
        "the argument for putting the burden on the platform, and for the disclosure duties in C193 Articles " +
        "13–17, is correspondingly stronger.",
      url: cpd + "addis-ababa-court-of-appeal-31-july-2006-file-no.-48008"
    },
    {
      country: "Greece", flagRegion: "Europe",
      court: "European Court of Human Rights", date: "3 October 2013",
      title: "I.B. v. Greece",
      cite: "Application No. 552/10 · ILO Recommendation No. 200; ICESCR",
      theme: "termination",
      holding:
        "A worker who told three colleagues he was HIV positive was dismissed after they, and then most of the " +
        "workforce, demanded it. The Court found the dismissal was the result of stigmatisation of a person who " +
        "was asymptomatic, and a breach of Articles 8 and 14 of the European Convention, strengthening its " +
        "reasoning with the HIV and AIDS Recommendation, 2010 (No. 200): real or perceived HIV status should " +
        "not be a ground of discrimination, nor a cause of termination.",
      design:
        "Pressure from other workers or customers does not launder a prohibited ground. The platform version is " +
        "the rating system: where deactivation follows customer ratings, the institution has to ask whose " +
        "prejudice the algorithm is aggregating, and C193's transparency and human-review provisions are what " +
        "make that askable.",
      url: cpd + "copy_of_european-court-of-human-rights-i-b-v-greece-3-october-2013-case-no-552-10"
    },
    {
      country: "France", flagRegion: "Europe",
      court: "Cour de cassation, Social Chamber", date: "26 March 2013",
      title: "Cabin crew member — twelve-month probationary period under a contract subjected to foreign law",
      cite: "Appeal No. 11-25580 · ILO Convention No. 158, Art. 2; Rome Convention 1980",
      theme: "scope",
      holding:
        "Cabin crew engaged by an Irish subsidiary of a French airline on a contract written in English and " +
        "subjected by the parties to Irish law, with a six-month probationary period renewable to twelve, was " +
        "terminated during probation. The Supreme Court held that Article 2 of Convention No. 158 is " +
        "mandatory, that a probationary period of a year including renewal is unreasonable, and set aside the " +
        "law chosen by the parties in favour of mandatory French provisions.",
      design:
        "Two things at once: a probation exclusion must be of reasonable duration to be valid, and a choice-of-" +
        "law clause cannot be used to escape the mandatory rules of the place where the work is performed. The " +
        "second is the question Türkiye's and India's cross-border cases turn on, and the one C193 Article 19 " +
        "answers for platform work.",
      url: cpd + "supreme-court-social-chamber-26-march-2013-appeal-no-11-25580"
    },
    {
      country: "France", flagRegion: "Europe",
      court: "Cour de cassation, Social Chamber", date: "4 June 2009",
      title: "Twelve-month 'stage' under a collective agreement",
      cite: "Appeal No. 08-41.359 · ILO Convention No. 158, Art. 2",
      theme: "scope",
      holding:
        "A manager's contract imposed a twelve-month qualifying 'stage' during which the dismissal rules did " +
        "not apply, where other categories under the same agreement served six months. Dismissed just before " +
        "the period ended, he argued the duration was unreasonable under Article 2 of Convention No. 158, which " +
        "allows exclusion only of workers serving a probation of reasonable duration determined in advance. The " +
        "Court agreed and overturned the judgment below.",
      design:
        "A long qualifying period is an exclusion from protection dressed as a trial. The same arithmetic " +
        "applies to waiting periods in a benefit scheme: Türkiye's thirty days for health insurance and " +
        "Ghana's SSNIT minimums are defensible; a year is the point at which the condition swallows the right.",
      url: cpd + "supreme-court-201ccour-de-cassation201d-social-chamber-4-june-2009-appeal-no.-08-41.359"
    },
    {
      country: "France", flagRegion: "Europe",
      court: "Cour de cassation, Social Chamber", date: "1 July 2008",
      title: "Samzun v. de Wee — the 'contrat nouvelles embauches'",
      cite: "Appeal No. F 07-44.124 · ILO Convention No. 158",
      theme: "scope",
      holding:
        "A secretary's fixed-term contract was converted into the statutory 'new hire' contract created by the " +
        "Ordinance of 2 August 2005, which let the employer terminate without justification during the first " +
        "two years. She was dismissed a month later. The courts below, and the Cour de cassation, held the new " +
        "hire contract incompatible with Convention No. 158. The contract type was repealed by law later that " +
        "month.",
      design:
        "A whole statutory contract type struck down for incompatibility with a ratified Convention — the " +
        "strongest form of the argument in this collection. A new category created for a new form of work can " +
        "be tested against the standards, and a 'platform worker' status that carries materially less " +
        "protection is open to exactly this challenge under C193 Article 23.",
      url: cpd + "supreme-court-201ccour-de-cassation201d-social-chamber-mr.-samzun-v.-ms.-de-wee-1-july-2008-appeal-no.-f-07-44.124"
    },
    {
      country: "France", flagRegion: "Europe",
      court: "Cour de cassation, Social Chamber", date: "29 March 2006",
      title: "Notice period for a worker with less than six months' service",
      cite: "Appeal No. 04-46.499 · ILO Convention No. 158, Art. 11",
      theme: "scope",
      holding:
        "The Labour Code made notice compulsory only after six months of service. A worker dismissed after " +
        "three months claimed compensation in lieu, relying on Article 11 of Convention No. 158. The Court " +
        "held that excluding the right to notice for service under six months — a reasonable period of " +
        "employment in the terms of Article 2 — violated the Convention as directly applicable law.",
      design:
        "Convention No. 158 held to be directly applicable, so a worker can invoke it against a service " +
        "threshold in the domestic statute. The transferable point for Lab 1: a qualifying condition is not " +
        "automatically lawful because it is in the law, and short-tenure, intermittent workers are precisely " +
        "who such conditions exclude.",
      url: cpd + "a-worker-had-been-hired-as-a-secretary-under-a-fixed-term-employment-contract.-this-contract-was-terminated-by-signature-of-a-contract-created-by-the-national-legislator-the-201cnew-hire201d-contract-201ccontrat-nouvelles-embauches201d-.-a-month-later-her"
    },
    {
      country: "France", flagRegion: "Europe",
      court: "Cour de cassation, Social Chamber", date: "25 January 2005",
      title: "Staff member of the African Development Bank — immunity and denial of justice",
      cite: "Appeal No. 04-41.012 · ECHR Art. 6; international public order",
      theme: "scope",
      holding:
        "A French staff member of the African Development Bank sued in a French labour court after his contract " +
        "was terminated, despite the headquarters agreement granting the Bank immunity from jurisdiction. The " +
        "Supreme Court held that where the organization had not set up an internal tribunal competent to hear " +
        "such disputes, the impossibility of reaching any judge was a denial of justice contrary to " +
        "international public order, and the French courts had jurisdiction.",
      design:
        "Immunity, like any procedural shield, falls away when it would leave the worker with no forum at all. " +
        "The platform analogue is the foreign-registered operator with an arbitration clause and no local " +
        "presence — the entity question the Swiss and South African cases above also turn on. Access to a " +
        "forum is the precondition of every other right in this list.",
      url: cpd + "supreme-court-201ccour-de-cassation201d-social-chamber-25-january-2005-appeal-no.-04-41.012"
    },
    {
      country: "Georgia", flagRegion: "Europe",
      court: "Tbilisi Court of Appeal", date: "17 November 2014",
      title: "G.Z. and K.G. v. Georgian Railway",
      cite: "Case No. 2b/3964-14 · ILO Convention No. 158, Art. 4 (unratified); Recommendation No. 166",
      theme: "termination",
      holding:
        "A train driver and his assistant were dismissed for failing to apply a brake during a high-speed " +
        "operation, so that the train stopped only after a warning from station staff. Interpreting domestic " +
        "law in the light of Article 4 of Convention No. 158 and the ILO Committee of Experts' pronouncements, " +
        "the Court held that the act and the omission had put passengers' lives at risk and amounted to a " +
        "violation of work duties serious enough to constitute a valid reason for dismissal.",
      design:
        "The Convention cuts both ways: here it supplied the standard by which a dismissal was upheld. A " +
        "framework that gives workers a defensible process also gives the other party a defensible ground — " +
        "the argument to make to a platform that resists deactivation rules as pure cost.",
      url: cpd + "tbilisi-court-of-appeal-ruling-g-z-and-k-g-v-georgian-railway-17-november-2014-case-no-2b-3964-14"
    },
    {
      country: "Georgia", flagRegion: "Europe",
      court: "Supreme Court of Georgia", date: "2 October 2014",
      title: "D.B. v. Tbilisi State University",
      cite: "Case No. AS-106-101-2014 · ILO Convention No. 158, Art. 9(2)(a); Recommendation No. 166",
      theme: "termination",
      holding:
        "A department head was dismissed for two days' absence without warning, notice or any opportunity to " +
        "explain. The Supreme Court addressed whether absence can be a sufficient ground and whether dismissal " +
        "without the chance to respond is permitted, reading Article 102 of the Civil Procedure Code in the " +
        "light of Article 9(2)(a) of Convention No. 158 on the burden of proving justification, and sent the " +
        "case back because the lower courts had not evaluated the facts.",
      design:
        "The Georgian participant's own jurisdiction, and a useful reminder: the Labour Inspection Office's " +
        "difficulty is enforcement, but the courts have already built the interpretive bridge to the ILO " +
        "standards. The domestic-law route into C189 and C193 is open.",
      url: cpd + "supreme-court-of-georgia-d-b-v-tbilisi-state-university-2-october-2014-case-no-as-106-101-2014"
    },
    {
      country: "Indonesia", flagRegion: "Asia and the Pacific",
      court: "Court of Industrial Relations", date: "28 September 2006",
      title: "Ahmadun and others v. Hotel Atlantic",
      cite: "Case No. 55/PL/G/2006/PHI.PN.JKT.PST · ILO Conventions Nos 87 and 98",
      theme: "representation",
      holding:
        "Hotel workers were dismissed after forming a trade union, then barred from the premises, while other " +
        "members were told to leave the union or face dismissal. The employer pleaded staff cuts and said it " +
        "had never authorised the union's creation. Using Conventions Nos 87 and 98 to strengthen its reading " +
        "of Law 21/2000, the Court held the employer had failed to prove any reason other than union " +
        "membership, and ordered compensation plus all wages and benefits from dismissal to judgment.",
      design:
        "'We never authorised it' is not an answer: a union does not need the employer's permission to exist. " +
        "Where platform workers organise, the equivalent claim — that an association has no standing because " +
        "the platform does not recognise it — fails for the same reason.",
      url: cpd + "court-of-industrial-relations-ahmadun-and-others-v-hotel-atlantic-28-september-2006-case-no-55-pl-g-2006-phi-pn-jkt.pst"
    },
    {
      country: "Kenya", flagRegion: "Africa",
      court: "Industrial Court of Kenya", date: "18 September 2013",
      title: "Universities Academic Staff Union v. Maseno University",
      cite: "Case No. 814'N' of 2009 · ILO Convention No. 158 (unratified); CFA Digest; CEACR General Survey 1995",
      theme: "representation",
      holding:
        "Five academics were dismissed after a strike that had been declared illegal and after refusing to " +
        "return to work. The Court found they had been dismissed for taking part in the activities preceding " +
        "the strike and in the strike itself. Reinstatement would have been the proper remedy, but so much " +
        "time had passed that compensation was ordered instead.",
      design:
        "Delay converts the right remedy into the second-best one. For a scheme designer the lesson is about " +
        "service standards: a redress route that takes years is, in practice, a route to damages rather than " +
        "to restored coverage — which is why the cohort's administrative pathways put published deadlines on " +
        "appeals.",
      url: cpd + "industrial-court-of-kenya-universities-academic-staff-union-v-maseno-university-18-september-2013-case-no-814n-of-2009"
    },
    {
      country: "Lesotho", flagRegion: "Africa",
      court: "Labour Court of Lesotho", date: "2 September 1999",
      title: "Serame Khampepe v. Muela Hydropower Project Contractors and four others",
      cite: "No. LC 29/97 · ILO Convention No. 158, Art. 13(1)(a) (unratified)",
      theme: "termination",
      holding:
        "A worker caught in a collective dismissal argued that he should have been consulted individually. " +
        "Reading the Labour Code in the light of Article 13(1)(a) of Convention No. 158 — which requires the " +
        "employer to give workers' representatives relevant information in good time — the Court held that " +
        "where the representatives had been consulted about the collective dismissal, individual pre-dismissal " +
        "interviews were not additionally required. The claimant's union had been consulted, so the appeal " +
        "failed.",
      design:
        "Collective consultation substitutes for individual process only where representatives genuinely exist " +
        "and were genuinely consulted. Both halves matter: for a workforce with no representative body, there " +
        "is nothing for the collective route to substitute for, and the individual process remains owed.",
      url: cpd + "labour-court-of-lesotho-serame-khampepe-v.-muela-hydropower-project-contractors-and-four-others-2-september-1999-no.-lc-29-97"
    },
    {
      country: "Lesotho", flagRegion: "Africa",
      court: "Labour Court of Lesotho", date: "9 February 1996",
      title: "Matete and Bosiu v. Lesotho Highlands Development Authority",
      cite: "No. LC 131/95 · ILO Convention No. 158, Arts 2(4) and 12(1)(a)",
      theme: "affiliation",
      holding:
        "Two civil servants seconded to an authority, whose secondment ended, claimed both the contractual " +
        "end-of-mission bonus and the statutory severance allowance. The Court interpreted the Labour Code " +
        "through Article 12(1)(a) of Convention No. 158 on severance allowances and other separation benefits, " +
        "and Article 2(4), under which a category may be excluded only where special arrangements provide " +
        "protection at least equivalent overall.",
      design:
        "Article 2(4) is the equivalence test, and it is the exact structure of C193 Article 12: a special " +
        "regime for a category of worker is permissible only if, taken as a whole, it protects at least as " +
        "well. The cohort's proposals for a separate platform-worker scheme have to be measured against it, " +
        "not against the status quo.",
      url: cpd + "labour-court-of-lesotho-matete-and-bosiu-v.-lesotho-highlands-development-authority-and-the-chief-executive-9-february-1996-no.-lc-131-95"
    },
    {
      country: "Lesotho", flagRegion: "Africa",
      court: "Labour Court of Lesotho", date: "9 November 1995",
      title: "Maisaaka'Mote v. Lesotho Flour Mills",
      cite: "No. LC 59/95 · ILO Recommendation No. 166, para. 9",
      theme: "termination",
      holding:
        "Facing a disciplinary enquiry, the worker claimed a right to be assisted by a representative of his " +
        "choosing. Under Article 4(c) of the Labour Code, which requires ambiguous provisions to be read in " +
        "conformity with ILO instruments, the Court applied paragraph 9 of Recommendation No. 166: a worker is " +
        "entitled to be assisted by another person when answering allegations, but the Recommendation does not " +
        "specify the type of representation, so the choice was not the worker's.",
      design:
        "A statutory interpretation clause — read ambiguity in conformity with ILO instruments — did the work " +
        "here. Inserting one into a new social security act is cheap, and it gives every later interpretation " +
        "question a settled direction without needing to re-legislate.",
      url: cpd + "labour-court-of-lesotho-maisaaka2019mote-v-lesotho-flour-mills-9-november-1995-no-lc-59-95"
    },
    {
      country: "Malawi", flagRegion: "Africa",
      court: "Industrial Relations Court of Malawi", date: "1 June 2005",
      title: "Banda v. Mahindra Lekha",
      cite: "Case No. IRC 277 of 2004 · ILO Convention No. 111; African Charter",
      theme: "termination",
      holding:
        "A worker was dismissed without any formality after testing HIV positive. Under section 61(1) of the " +
        "Employment Act the burden of showing a valid reason lay on the employer, which gave none; the Court " +
        "inferred that the dismissal followed from her health status, and held that Malawi's ratification of " +
        "Convention No. 111 obliged it to give effect to the rights of people living with HIV. The dismissal " +
        "breached the constitutional rights to equality and to fair labour practices.",
      design:
        "A statutory reversal of the burden of proof doing the work on its own. It is the cheapest protective " +
        "device in this whole collection — no new institution, no new procedure, one clause — and it is the " +
        "model for requiring a platform to justify a deactivation rather than requiring the worker to " +
        "disprove it.",
      url: cpd + "court-of-industrial-relations-of-malawi-banda-v-mahindra-lekha-june-2005-case-no-irc-277-of-2004"
    },
    {
      country: "Malawi", flagRegion: "Africa",
      court: "Supreme Court of Appeal", date: "7 May 2007",
      title: "Malawi Telecommunications Ltd v. Makande and another",
      cite: "ILO Convention No. 158, Arts 13 and 14 (ratified 1986)",
      theme: "termination",
      holding:
        "Workers dismissed on grounds of restructuring argued that their services were still needed. All three " +
        "levels of court agreed that fair procedure had not been followed, the Industrial Relations Court " +
        "having used Convention No. 158 to determine what procedure was required. The Supreme Court held that " +
        "consultation under Articles 13 and 14 means a genuine engagement of the employees in the restructuring " +
        "process, not a purported unilateral notification that seeks no feedback.",
      design:
        "'Genuine engagement, not unilateral notification' is the test to apply to the consultation clauses in " +
        "every one of the cohort's reform sequences. Publishing a decision and inviting comments afterwards is " +
        "the thing this Court said does not count.",
      url: cpd + "malawi-supreme-court-of-appeal-blantyre-malawi-telecommunications-ltd-v.-makande-and-another-7-may-2007"
    },
    {
      country: "Malawi", flagRegion: "Africa",
      court: "Industrial Relations Court of Malawi", date: "1 April 2002",
      title: "Davison Tchete v. Safeguard Services",
      cite: "No. 6 of 2000 · ILO Convention No. 158, Art. 7",
      theme: "termination",
      holding:
        "A worker took three days' sick leave, notified the company, then extended his absence because his " +
        "sister had died. On returning he was refused entry to a meeting and dismissed days later. The " +
        "Employment Act was not yet in force, so the Court read Article 31 of the Constitution in the light of " +
        "Article 7 of Convention No. 158 and held that dismissal without an opportunity to be heard, for " +
        "absences that were justified, violated the right to fair labour practices.",
      design:
        "Justified absence treated as misconduct because nothing in the system recognised it as a contingency. " +
        "Sickness and bereavement are insurable events; where they are not insured, they show up as " +
        "disciplinary files. That is the cost of a narrow contingency list, paid by the worker.",
      url: cpd + "industrial-relations-court-of-malawi-davison-tchete-v.-safeguard-services-1-april-2002-no.-6-of-2000"
    },
    {
      country: "Maldives", flagRegion: "Asia and the Pacific",
      court: "High Court of the Republic of Maldives", date: "12 March 2013",
      title: "Crown Company Private Limited v. Abdulla Anis, Mohamed Sadiq & others",
      cite: "Case No. 2012/HC-A/183 · ILO Convention No. 158 (unratified); Recommendation No. 166",
      theme: "termination",
      holding:
        "Workers were dismissed when their posts were declared redundant. The employer argued that the " +
        "Employment Act prescribed no procedure for redundancy dismissals. The High Court accepted that " +
        "redundancy was a just cause but held that procedural fairness still applied — workers must be notified " +
        "in advance that economic reasons had made them redundant, and informed in advance of the procedures " +
        "and rules that would govern their termination, with the decision taken in good faith.",
      design:
        "Silence in the statute is not permission. For the Maldives participant's own scheme the parallel is " +
        "direct: where the Pension Act says nothing about a process, the standards supply the default — which " +
        "is also why the appeal mechanism in the Retirement Pension Scheme Regulation matters as much as the " +
        "subsidy rate.",
      url: cpd + "high-court-of-the-republic-of-maldives-crown-company-private-limited-v-abdulla-anis-mohamed-sadiq-others-12-march-2013-case-no-2012-hc-a-183"
    },
    {
      country: "Maldives", flagRegion: "Asia and the Pacific",
      court: "High Court of the Republic of Maldives", date: "30 January 2012",
      title: "Maldives Transport and Contracting Company Plc v. Ahmed Mohamed",
      cite: "Case No. 2011/HC-A/134 · ILO Convention No. 158, Art. 7; Recommendation No. 166, paras 7–9",
      theme: "termination",
      holding:
        "A worker dismissed for alleged professional inadequacy won reinstatement and back pay at the " +
        "Employment Tribunal. On appeal the High Court used Article 7 of Convention No. 158 and paragraphs 7 " +
        "to 9 of Recommendation No. 166 to set out the steps a fair performance dismissal requires — including " +
        "advising the employee of the decision with reasons, and allowing the employee, on request, to be " +
        "assisted by a person of their choosing.",
      design:
        "The decision reads as a checklist, which is what makes it usable: warn, hear, allow assistance, decide, " +
        "give reasons. Put the same five steps behind any automated suspension and most of the C193 Articles " +
        "13–15 obligations are satisfied by construction.",
      url: cpd + "high-court-of-the-republic-of-maldives-maldives-transport-and-contracting-company-plc-mtcc-v-ahmed-mohamed-30-january-2012-case-no-2011-hc-a-134"
    },
    {
      country: "Morocco", flagRegion: "Africa",
      court: "Sidi Slimane Court of First Instance", date: "25 May 2005",
      title: "Mounir Ouharro C. v. Ismaïl Alaoui",
      cite: "No. 58/2005 · ILO Convention No. 158, Arts 4 and 7",
      theme: "termination",
      holding:
        "A telephone-service worker dismissed after three years claimed the absence of a valid reason and " +
        "disregard of the Labour Code's termination procedure, and also sought the difference between his pay " +
        "and the legal minimum wage, plus seniority and holiday entitlements. The Court upheld most of the " +
        "claim, reinforcing the Labour Code with Articles 4 and 7 of Convention No. 158: no valid reason, no " +
        "opportunity to defend himself and no written notice.",
      design:
        "The claim bundles termination with unpaid minimum wage and unaccrued entitlements, which is how these " +
        "failures actually arrive — together. A compliance strategy that pursues them separately, through " +
        "separate institutions, recovers less than one that treats the file as a whole.",
      url: cpd + "sidi-slimane-court-of-first-instance-mounir-ouharro-c.-v.-ismail-alaoui-25-may-2005-no.-58-2005"
    },
    {
      country: "Papua New Guinea", flagRegion: "Asia and the Pacific",
      court: "National Court of Justice", date: "16 February 2007",
      title: "Sukuramu v. New Britain Palm Oil Ltd",
      cite: "[2007] PGNC 21; N3124 · ILO Convention No. 158, Art. 7",
      theme: "termination",
      holding:
        "A carpenter dismissed for misconduct after an argument with his supervisor claimed he had been denied " +
        "any opportunity to be heard. Exercising its statutory duty to develop the underlying law as a coherent " +
        "system, the Court held that the common-law rule allowing an employer to hire and fire at will " +
        "contradicted Article 7 of Convention No. 158 and needed to be abolished in Papua New Guinea's " +
        "domestic common law.",
      design:
        "A court abolishing a rule of its own common law because a ratified Convention contradicts it — the " +
        "furthest-reaching judicial move in this collection. Where a legal system's default is that a party may " +
        "end the relationship at will and give no reason, that default is reviewable, which is the question " +
        "behind every unexplained deactivation.",
      url: cpd + "national-court-of-justice-of-papua-new-guinea-sukuramu-v-new-britain-palm-oil-ltd-16-february-2007-2007-pgnc-21-n3124"
    },
    {
      country: "Paraguay", flagRegion: "Americas",
      court: "Appellate Labour Court, Second Chamber", date: "30 May 2000",
      title: "Inca S.A.C.I. v. Virgilio Villalba",
      cite: "Agreement and decision No. 41 · ILO Convention No. 158 (unratified)",
      theme: "termination",
      holding:
        "An employer sought a ruling justifying a dismissal for alleged disrespect, insults and insubordination " +
        "arising from a dispute over a change of tasks the worker objected to. The Appellate Court held that " +
        "reasonably raising or debating a question is an inalienable personal right, and that unless the limit " +
        "of propriety is crossed there is no act contrary to the respect owed to a representative of the " +
        "employer. The first-instance ruling was revoked.",
      design:
        "Objecting to a unilateral change in working conditions is not misconduct. The platform version is the " +
        "worker who contests a reassignment, a rate change or a penalty: a system that treats complaint itself " +
        "as a ground for sanction has closed its own redress channel.",
      url: cpd + "appellate-labour-court-second-chamber-inca-s.a.c.i.-v.-virgilio-villalba-on-justification-of-the-reason-for-dismissal-30-may-2000-agreement-and-decision-no.-41"
    },
    {
      country: "Peru", flagRegion: "Americas",
      court: "Constitutional Court", date: "11 July 2002",
      title: "United Workers Union of Telefónica del Perú and Fetratel",
      cite: "File No. 1124-2001-AA/TC · ILO Convention No. 87; San Salvador Protocol; Convention No. 158",
      theme: "representation",
      holding:
        "Unions challenged a mass layoff plan, with a list of 77 workers appended, as a threat to freedom of " +
        "association and the right to work. By the time the case reached the Constitutional Court many of the " +
        "dismissals had taken place. The Court examined the constitutionality of the rule that permitted them, " +
        "found the dismissals null and void and ordered reinstatement, invoking Article 4 of the San Salvador " +
        "Protocol — a right in force under domestic law or international conventions may not be curtailed on " +
        "the pretext that the Protocol recognises it to a lesser degree.",
      design:
        "The non-regression clause, stated squarely. A new regime for a new form of work may not be used to " +
        "cut back protection that already exists under national law or another instrument — which is the " +
        "constraint on every 'simplified' or 'third category' scheme the cohort considered.",
      url: cpd + "constitutional-court-the-united-workers-union-of-telefonica-del-peru-sa-and-fetratel-11-july-2002-file-no.-1124-2001-aa-tc"
    },
    {
      country: "Philippines", flagRegion: "Asia and the Pacific",
      court: "National Labour Relations Commission", date: "Undated in the Compendium; case no. of 2013",
      title: "Broadwater Marine Phils. Inc. v. Imefhel Rodrigo",
      cite: "Case No. VAC-03-000136-2013 · ILO Convention No. 158 (unratified)",
      theme: "termination",
      holding:
        "A worker was dismissed after she and two colleagues requested a disciplinary investigation into their " +
        "supervisor, following disputes that had cost her housing allowance and overtime pay. The Commission " +
        "held Convention No. 158 to be operative within the domestic legal system without further " +
        "transformation, found the employer had produced no sufficient evidence of a fair reason, and upheld " +
        "the finding of illegal dismissal.",
      design:
        "Retaliation for making a complaint, held unlawful by the Philippine labour machinery — the " +
        "jurisdiction whose participant proposed routing platform-worker complaints through the labour " +
        "tribunals into the social security system. The protection against retaliation is what makes that " +
        "route usable rather than theoretical.",
      url: cpd + "national-labour-relations-commission-broadwater-marine-phils-inc-and-others-v-imefhel-rodrigo-case-no-vac-03-000136-2013"
    },
    {
      country: "South Africa", flagRegion: "Africa",
      court: "Labour Court of South Africa, Johannesburg", date: "16 February 2011",
      title: "Gary Shane Allpass v. Mooikloof Estates (Pty) Ltd",
      cite: "Case No. JS178/09 · ILO Convention No. 111; Recommendation No. 200",
      theme: "termination",
      holding:
        "A riding instructor who had lived with HIV for almost twenty years was dismissed immediately after " +
        "disclosing, on a chronic-medication form, that he took daily medication for it; the employer alleged " +
        "fraudulent misrepresentation of his condition at interview. Strengthening its reasoning with " +
        "Convention No. 111 — on which the Committee of Experts has emphasised the need for a strict " +
        "interpretation — and Recommendation No. 200, the Court held the discrimination unconstitutional and " +
        "awarded twelve months' remuneration, part restitution and part punitive.",
      design:
        "Health data collected for one purpose and used for another, which is the governance failure Thursday's " +
        "session is about. The punitive element of the award is the other half: a remedy priced only at the " +
        "worker's loss leaves the practice profitable.",
      url: cpd + "the-labour-court-of-south-africa-at-johannesburg-gary-shane-allpass-v.-mooikloof-estates-pty-ltd-16-february-2011-case-no.-js178-09"
    },
    {
      country: "South Africa", flagRegion: "Africa",
      court: "Labour Appeal Court", date: "15 March 2000",
      title: "Modise and others v. Steve's Spar",
      cite: "Case No. JA 29/99 · ILO Convention No. 158, Art. 7 (unratified)",
      theme: "termination",
      holding:
        "Workers who took part in a strike the courts had declared illegal were dismissed, after an ultimatum, " +
        "without any chance for them or their representatives to put their case. Facing a gap in national " +
        "legislation and conflicting case law, the Labour Appeal Court held that the audi rule applied even to " +
        "dismissals arising from an illegal strike: Convention No. 158 allows one exception, broad enough to " +
        "cover the usual exceptions, and a no-hearing approach is contrary to it. The workers were reinstated.",
      design:
        "The hearing requirement survives even where the worker's conduct was unlawful. That is the strongest " +
        "possible version of the rule, and it answers the objection a platform will raise about fraud or " +
        "serious misconduct: the suspicion justifies acting, not acting without process.",
      url: cpd + "labour-appeal-court-modise-and-others-v.-steve2019s-spar-15-march-2000-case-no.-ja-29-99"
    },
    {
      country: "Spain", flagRegion: "Europe",
      court: "Constitutional Court", date: "Undated in the Compendium",
      title: "Parliament of Navarre v. Law 3/2012 — the one-year trial period",
      cite: "Case No. 5603-2012 · ILO Convention No. 158; CFA Report, 320th Session",
      theme: "scope",
      holding:
        "The Parliament of Navarre challenged the labour market reform's one-year probationary period for " +
        "permanent 'support for entrepreneurs' contracts as contrary to the right to work and to Convention " +
        "No. 158, along with compulsory arbitration in agreement-suspension disputes and the priority of " +
        "company-level agreements. The majority upheld the law; a dissent argued the Convention is an " +
        "indisputable interpretative canon, that a one-year trial period fails the reasonableness test, and " +
        "that the majority had avoided weighing the employers' advantages against the workers' sacrifices.",
      design:
        "The one case here where the challenge failed, and worth reading for that: a Convention argument is not " +
        "self-executing, and a court may accept a long probation as proportionate in a crisis. The dissent " +
        "supplies the test that did the work in the French cases above — reasonableness measured by weighing " +
        "what each side gains and gives up.",
      url: cpd + "constitutional-court-parliament-of-navarre-v-law-3-2012-case-no-5603-2012"
    },
    {
      country: "Spain", flagRegion: "Europe",
      court: "Supreme Court of Spain", date: "2 October 1989",
      title: "Secundino C.R. v. TOVIC S.L.",
      cite: "ILO Convention No. 135",
      theme: "representation",
      holding:
        "A worker was dismissed for absence from the workplace; the absences were attendance at meetings of the " +
        "commission negotiating the sectoral collective agreement, and the employer argued he had abused the " +
        "time by not returning to his duties afterwards. The Court held that time dedicated to trade union " +
        "representation must be construed broadly, including the exchange of views with colleagues that the " +
        "function requires.",
      design:
        "Representation takes more time than the formal meeting, and a narrow accounting of it becomes a " +
        "disciplinary tool. Any scheme that gives platform workers' representatives paid time for governance " +
        "duties has to define that time generously, or the facility becomes a trap.",
      url: cpd + "supreme-court-of-spain-secundino-c.r.-v.-tovic-s.l.-2-october-1989"
    },
    {
      country: "Spain", flagRegion: "Europe",
      court: "Constitutional Court, Second Chamber", date: "23 November 1981",
      title: "Anti-union dismissal of candidates for workers' representative",
      cite: "Case No. 38/1981 · ILO Conventions Nos 87, 98 and 135; Recommendation No. 143, para. 7(1)",
      theme: "representation",
      holding:
        "Workers were dismissed for economic reasons the day after submitting their candidatures as workers' " +
        "representatives. The lower courts found anti-union discrimination unproven but annulled the " +
        "dismissals on procedural grounds, which under the law then in force let the employer pay compensation " +
        "instead of reinstating. Reading the Constitution through Conventions Nos 87, 98 and 135 and paragraph " +
        "7(1) of Recommendation No. 143, the Constitutional Court declared the dismissals null and void even " +
        "though the victims held no union office, and established the reversal of the burden of proof in cases " +
        "of suspected anti-union discrimination.",
      design:
        "Two devices in one judgment: protection extended to candidates, and the burden shifted once a prima " +
        "facie case appears. Together they are the template for protecting the first people to organise in a " +
        "workforce that has no union yet — which describes almost every platform workforce in the room.",
      url: cpd + "constitutional-court-of-spain-second-chamber-23-november-1981-case-no.-38-1981"
    },
    {
      country: "Tanzania, United Republic of", flagRegion: "Africa",
      court: "High Court of Tanzania, Labour Chamber", date: "15 November 2013",
      title: "Nicodemu Mwita v. Bulyanhulu Gold Mine",
      cite: "Review No. 12 of 2013 · CEACR General Survey 1988; CEDAW General Recommendations Nos 12 and 19",
      theme: "termination",
      holding:
        "A head of security was dismissed after workers reported his assistant's sexual harassment to him and " +
        "he neither acted nor informed his superiors. Using the 1988 General Survey of the ILO Committee of " +
        "Experts and CEDAW General Recommendations Nos 12 and 19, which treat sexual harassment as a form of " +
        "violence against women and define the conduct it covers, the Court held his failure to act and to " +
        "report was a valid ground for terminating his contract.",
      design:
        "The duty runs to whoever receives the report, and failing it is itself a dismissible breach. Read " +
        "against C193's violence and harassment provisions: a complaints channel is worth nothing unless " +
        "someone is accountable for acting on what arrives through it.",
      url: cpd + "supreme-court-of-tanzania-labour-chamber-nicodemu-mwita-v-bulyanhulu-gold-mine-review-no-12-of-2013-15-november-2013"
    },
    {
      country: "Trinidad and Tobago", flagRegion: "Americas",
      court: "Industrial Court of Trinidad and Tobago", date: "27 April 2001",
      title: "Bank and General Workers' Union v. Public Service Association of Trinidad and Tobago",
      cite: "Trade dispute No. 15 of 2000 · ILO Convention No. 158 (unratified); Recommendation No. 119",
      theme: "termination",
      holding:
        "A security officer was dismissed without any hearing for breaches of duty said to be cumulatively " +
        "serious enough to warrant immediate dismissal. Relying on earlier cases built on Recommendation " +
        "No. 119 — in which the Court had held that the right to be heard is a fundamental principle of " +
        "natural justice that the ILO instrument only restates — it found the employer had shown no " +
        "circumstance that could reasonably have prevented a hearing, and awarded damages.",
      design:
        "The Industrial Relations Act lets the Court act on 'the principles and practices of good industrial " +
        "relations', and the Court filled that open standard with ILO instruments. A statutory good-practice " +
        "clause is a quiet way to import international standards into a scheme without amending anything else.",
      url: cpd + "industrial-court-of-trinidad-and-tobago-bank-and-general-workers2019-union-v.-public-service-association-of-trinidad-and-tobago-27-april-2001-trade-dispute-no.-15-of-2000"
    },
    {
      country: "Trinidad and Tobago", flagRegion: "Americas",
      court: "Industrial Court of Trinidad and Tobago", date: "3 March 1998",
      title: "Bank and General Workers' Union v. Home Mortgage Bank",
      cite: "No. 140 of 1997 · ILO Convention No. 158 (unratified)",
      theme: "termination",
      holding:
        "A driver's contract allowed either party to terminate at any time, and the employer did so by letter a " +
        "few months in. At common law no reason was required, but the Industrial Relations Act obliged the " +
        "Court to apply the principles of good industrial relations practice. Drawing those principles from " +
        "Convention No. 158, the Court held the employer had violated its obligations by terminating without a " +
        "valid reason and without a fair opportunity to be heard.",
      design:
        "A contract term permitting termination at will yielded to the standard. This is the closest analogue " +
        "in the collection to a platform's terms of service reserving the right to deactivate an account at " +
        "any time for any reason — a clause of that kind does not settle the question.",
      url: cpd + "industrial-court-of-trinidad-and-tobago-bank-and-general-workers2019-union-v.-home-mortgage-bank-3-march-1998-no.-140-of-1997"
    },
    {
      country: "Zimbabwe", flagRegion: "Africa",
      court: "High Court of Zimbabwe", date: "4 November 2010 and 8 June 2011",
      title: "Gift Bob David Samanyau & 38 others v. Fleximail (Private) Limited",
      cite: "HC 108-11 · ILO Convention No. 158, Art. 10 (unratified)",
      theme: "affiliation",
      holding:
        "Thirty-nine workers had been found unlawfully dismissed and awarded damages in lieu of reinstatement. " +
        "The employer tendered payment by cheque in Zimbabwe dollars in February 2009, when the currency had " +
        "become moribund. Invoking Article 10 of Convention No. 158, under which adequate compensation is due " +
        "for unjustified loss of employment, the Court held that an award must be meaningful and beneficial to " +
        "the beneficiary, and ordered payment in the foreign currency the claimants chose.",
      design:
        "Adequacy is measured at the moment of payment, in money that still buys something. The same point " +
        "governs benefit indexation and the nominal floors in a new scheme: a contribution base or a minimum " +
        "benefit fixed in nominal terms quietly stops being adequate, which is why several of the cohort's " +
        "designs index the floor to the minimum wage rather than to a number.",
      url: cpd + "high-court-of-zimbabwe-gift-bob-david-samanyau-38-ors-v-fleximail-private-limited-4-november-2010-and-8-june-2011-hc-108-11"
    }
  ]
};
