# Executive Solutions to New Forms of Work 2026 — course dashboard

Static dashboard for ITCILO course **A9019238**, residential, ITCILO Campus Turin, **19–23 October 2026** (60 learning hours: 10 pre-course, 45 residential, 5 post-course).

Built in the house style of the [Impact Assessment 2026 dashboard](https://olena-vazhynska.github.io/impact_assessment_2026/) — same ITCILO palette, typography and components.

## Tabs

| Tab | What it holds |
| --- | --- |
| **Overview** | The course description from the Information Note — what it is about, what you will learn, what you will be able to do, who takes it, key facts, and the resource persons drawn from the agenda. |
| **Learning journey** | The logic of the week: eight **toolbox** blocks built in the mornings, three **Scheme Design Labs** that turn them into the participant's own solution, the three course phases, and the full day-by-day programme with a day filter and a "Scheme Design track only" toggle. |
| **Participants** | The roster merged with the cohort demographics: searchable, filterable, sortable table, summary charts that follow the filters, and the pre-course survey from the eCampus underneath. |
| **Resources** | The course library — standards, data, legal design, financing, administration, voice, country practice and the regional menu of cases the week travels through — with a search across everything, plus **Case law** as its own category. |
| **Collective brain** | What the room knows and what it builds with it: a knowledge map of the six subject clusters, the integrated exercise as a six-stage flow with the four Friday stress tests, and the solutions wall of what participants produced, by country. |

## Editing the content

All content lives in `data/` — nothing in `assets/` needs to be touched.

| File | Content |
| --- | --- |
| `data/course.js` | Course description, key facts, contact, the eight toolbox blocks, and the five-day programme. |
| `data/participants.js` | `PARTICIPANTS` — one object per person, any field you add becomes a table column. `SURVEY` — the pre-course survey blocks. |
| `data/resources.js` | `RESOURCES` — eight thematic link groups, each item `[title, description, url, tag]`. `CASELAW` — 88 court decisions with citation, holding and scheme-design relevance, plus the `themes` that classify them and the Compendium `feeds` they were harvested from. |
| `data/brain.js` | `clusters` (knowledge map), `exercise` (the integrated exercise and its four tests), `solutions` (the wall), `convergence` (closing lessons). |

Open `index.html` directly, or publish via GitHub Pages (Settings → Pages → deploy from branch, root folder).
Append `?now=2026-10-21T10:00:00%2B02:00` to preview the dashboard at a given moment during the week.

## The solutions wall

Written up from the individual presentations given on Friday 23 October 2026. Eleven of the twelve entries in `solutions` are complete; each card carries the country, the institutions represented, the problem framed, the solution designed, the toolbox blocks it draws on and the transferable insight. **Countries and institutions only — participant names are never stored in this repository.**

Two things a future editor should know:

- **Cambodia is still `pending: true`.** Three NSSF participants are on the roster but no presentation was submitted, so the entry renders as an awaiting-upload card rather than as invented content. To fill it, set `pending: false` and complete `title`, `problem`, `solution`, `blocks` and `insight`.
- **There is a Uganda entry that has no matching roster record.** A presentation on ride-hailing and boda-boda riders was submitted by someone outside the 34-person participant list, so the wall totals 35 presentations against a 34-person roster. Remove the entry or reconcile the roster if that is wrong.

Add more than one entry per country where several participants presented genuinely distinct solutions — `variant` is there to tell them apart, though the current cards fold each country's strands into a single entry so that the "countries and groups" count stays honest.

## A note on the case law

`CASELAW.decisions` holds **88 decisions** from two different sources, and they are read differently.

The **first seventeen** are platform-work decisions compiled for this dashboard. They are teaching material: several are under appeal or have been overtaken by legislation, and **every entry should be verified against the original judgment before it is relied on or cited**.

The **remaining 71** are the full harvest of the four ITCILO Compendium subject searches listed in `CASELAW.feeds` — subject 4 (employment relationship, 4 decisions), 22 (social security, 4), 26 (telework, 1) and 2 (dismissal, 63). One decision is indexed by the Compendium under two subjects and appears once here. Every link is the Compendium's own URL, so `cpd` at the top of the file is just that prefix kept short. These are a different kind of material: the Compendium collects decisions in which a national court actually used an international labour standard to decide the case, which is why each `cite` names the instruments relied on. Where the Compendium records no date, the entry says so rather than guessing.

The ITCILO Compendium remains the authoritative collection for all of them.

Two case law themes — `termination` and `representation` — have no accent colour in `assets/style.css` and render in the neutral chip style. Adding one line each to the `.cl-theme.t-*` block would colour them, and is the only thing in `assets/` these additions could want.

## Privacy

The roster omits e-mail addresses, telephone numbers and postal addresses from the source participant list. Participant names appear **only** in `data/participants.js`, which drives the Participants tab. The Collective brain tab is designed so that participant output is attributed to a country and an institution, never to a person — and nothing in `data/brain.js`, `data/course.js` or `data/resources.js` names a participant.
