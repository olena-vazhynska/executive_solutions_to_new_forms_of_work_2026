# Executive Solutions to New Forms of Work 2026 — course dashboard

Static dashboard for ITCILO course **A9019238**, residential, ITCILO Campus Turin, **19–23 October 2026** (60 learning hours: 10 pre-course, 45 residential, 5 post-course).

Built in the house style of the [Impact Assessment 2026 dashboard](https://olena-vazhynska.github.io/impact_assessment_2026/) — same ITCILO palette, typography and components — with the course key visual behind the hero (`assets/key-visual.jpg`, resampled to 2000px from the 3543×2362 original in the project tree) under an ILO blue scrim.

**Not yet deployed.** GitHub Pages has never been switched on for this repository, and the only branch is `claude/epic-sagan-wi6emk`. To publish: Settings → Pages → deploy from branch, root folder.

## Tabs

| Tab | What it holds |
| --- | --- |
| **Overview** | The course description from the Information Note — what it is about, what you will learn, what you will be able to do, who takes it, key facts, and the resource persons drawn from the agenda. |
| **Learning journey** | The logic of the week: eight **toolbox** blocks built in the mornings, three **Scheme Design Labs** that turn them into the participant's own solution, the three course phases, and the full day-by-day programme with a day filter and a "Scheme Design track only" toggle. Every block and every teaching session carries an **Explore further** row into the Resources explorer and the Collective brain. |
| **Participants** | The roster merged with the cohort demographics: searchable, filterable, sortable table, summary charts that follow the filters, and the pre-course survey from the eCampus underneath. |
| **Resources** | The course library in the **Explore Evidence** layout of the reference dashboard: a left sidebar with the search box and checkbox facets, and a main column with a result count, a sort control and one card per item. Resources and court decisions are one stream, so **Case law** works as a Category facet while the decisions keep their own themes and jurisdictions. |
| **Collective brain** | The five-column flow from a coverage gap to a reform, in the visual language of the Academy dashboard — ribbons weighted by how many presentations travel them, a golden most-travelled route, a Leading themes / Explore all toggle, and an **Underlying evidence** matrix beneath. Then the knowledge map, the integrated exercise with its four Friday stress tests, and the solutions wall by country. |

## Editing the content

All content lives in `data/` — nothing in `assets/` needs to be touched. The one exception is a new case law **theme**: adding one to `CASELAW.themes` also wants an accent colour in `assets/style.css` (see the note on the case law below), or its chip falls back to the neutral style.

| File | Content |
| --- | --- |
| `data/course.js` | Course description, key facts, contact, the eight toolbox blocks, and the five-day programme. |
| `data/participants.js` | `PARTICIPANTS` — one object per person, any field you add becomes a table column. `SURVEY` — the pre-course survey blocks. |
| `data/resources.js` | `RESOURCES` — eight thematic link groups, each item `[title, description, url, tag]`. `CASELAW` — 97 court decisions with citation, holding and scheme-design relevance, plus the `themes` that classify them and the Compendium `feeds` they were harvested from. |
| `data/brain.js` | `clusters` (knowledge map), `exercise` (the integrated exercise and its four tests), `solutions` (the wall), `convergence` (closing lessons). |
| `data/flow.js` | The five-column flow: `columns`, `nodes` with the evidence each cites, and `paths` — one row per individual presentation. See **The collective brain flow** below. |

`data/course.js` also holds `toolboxLinks`, the single place that says where each toolbox block leads: the `RESOURCES` category titles to pre-filter the explorer with, and the flow node or cluster to open in the Collective brain. The three rendering modules are `assets/app.js` (overview, journey, participants), `assets/explore.js` (the Resources explorer) and `assets/flow.js` + `assets/brain.js` (the Collective brain).

Open `index.html` directly, or publish via GitHub Pages (Settings → Pages → deploy from branch, root folder).
Append `?now=2026-10-21T10:00:00%2B02:00` to preview the dashboard at a given moment during the week.

## The collective brain flow

The five columns are the course's own Executive Strategy Canvas blocks, in the order the week builds them: **The challenge → Coverage architecture → Contribution model → Administrative pathway → Reform sequencing**. Only the visual treatment comes from the Academy dashboard.

Every one of the 27 individual presentations fills all five blocks, so each contributes exactly one path and every column sums to 27 — which is what makes the ribbon widths honest.

**How the coding was done.** A keyword pass was tried first and discarded: the Day 5 template repeats every field label ("Portability", "State subsidy", "Multiple payers & bad months") in all 27 decks, so matching on labels scored 27/27 on boilerplate rather than on choices. `paths` in `data/flow.js` is therefore hand-coded, one row per presentation, with **one primary node per column** — the decision the deck leads with, not every option it mentions. Countries and institutions only.

Selecting a node traces its routes, dims the rest, lists the countries that chose it, and lights up only the evidence supporting it. The **Underlying evidence** matrix is one dot per item across court decisions, resources, executive solutions, the pre-course survey and the course sessions; a node's `evidence` field says which `RESOURCES` groups, `CASELAW` themes and toolbox blocks it draws on.

To re-code a presentation, edit its row in `paths`. To add a node, add it to `nodes` with an `evidence` block and point some paths at it — the counts, the ribbons and the column totals are all derived, never stored.

## The solutions wall

Written up from the individual presentations given on Friday 23 October 2026. All eleven entries in `solutions` are complete; each card carries the country, the institutions represented, the problem framed, the solution designed, the toolbox blocks it draws on and the transferable insight. **Countries and institutions only — participant names are never stored in this repository.**

One thing a future editor should know: **there is a Uganda entry that has no matching roster record.** A presentation on ride-hailing and boda-boda riders was submitted by someone outside the 34-person participant list, so the wall totals 35 presentations against a 34-person roster. Remove the entry or reconcile the roster if that is wrong.

Cambodia was registered — three NSSF participants — but submitted no presentation, so it is not listed. `pending: true` still renders an awaiting-upload card with its structure visible if you ever need one.

Add more than one entry per country where several participants presented genuinely distinct solutions — `variant` is there to tell them apart, though the current cards fold each country's strands into a single entry so that the "countries and groups" count stays honest.

## A note on the case law

`CASELAW.decisions` holds **97 decisions** from three different sources, and they are read differently.

The **first seventeen** are platform-work decisions compiled for this dashboard. They are teaching material: several are under appeal or have been overtaken by legislation, and **every entry should be verified against the original judgment before it is relied on or cited**.

The **last nine** come from the course materials themselves — `Court_cases.docx` and `List_of_recent-decisions_Europe_platform_work.docx` under `PPTs\2025`. Kenya's *Veronica Muthio Kioka* is written up from the full judgment held in the same folder. The other eight are European platform decisions carrying the outcome exactly as the course's own list records it, selected for what their divergence shows — Austria splitting two each way in a single year, Italy placing riders in all three categories within three years, and *URSSAF v Deliveroo*, the one case where the contribution collector rather than the worker brought the claim. Where a judgment's text could not be read, no holding was invented: the Court of Justice part-time line, the comparative employment-relationship set and the UK EAT part-time case are listed as **reading lists in the legal category**, with citations as recorded in `Court_cases.docx`, rather than as decisions with holdings.

The **middle 71** are the full harvest of the four ITCILO Compendium subject searches listed in `CASELAW.feeds` — subject 4 (employment relationship, 4 decisions), 22 (social security, 4), 26 (telework, 1) and 2 (dismissal, 63). One decision is indexed by the Compendium under two subjects and appears once here. Every link is the Compendium's own URL, so `cpd` at the top of the file is just that prefix kept short. These are a different kind of material: the Compendium collects decisions in which a national court actually used an international labour standard to decide the case, which is why each `cite` names the instruments relied on. Where the Compendium records no date, the entry says so rather than guessing.

The ITCILO Compendium remains the authoritative collection for all of them.

All eight case law themes carry their own accent. The six cluster colours `--c-a` to `--c-f` were already taken, so the two themes that have no matching knowledge cluster — `termination` and `representation` — use two further tokens, `--c-g` and `--c-h`, declared alongside them in `assets/style.css` for light, system-dark and toggled-dark.

## Privacy

The roster omits e-mail addresses, telephone numbers and postal addresses from the source participant list. Participant names appear **only** in `data/participants.js`, which drives the Participants tab. The Collective brain tab is designed so that participant output is attributed to a country and an institution, never to a person — and nothing in `data/brain.js`, `data/course.js` or `data/resources.js` names a participant.
