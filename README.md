# Executive Solutions to New Forms of Work 2026 — course dashboard

Static dashboard for ITCILO course **A9019238**, residential, ITCILO Campus Turin, **19–23 October 2026** (60 learning hours: 10 pre-course, 45 residential, 5 post-course).

Built in the house style of the [Impact Assessment 2026 dashboard](https://olena-vazhynska.github.io/impact_assessment_2026/) — same ITCILO palette, typography and components.

## Tabs

| Tab | What it holds |
| --- | --- |
| **Overview** | The course description from the Information Note — what it is about, what you will learn, what you will be able to do, who takes it, key facts, and the resource persons drawn from the agenda. |
| **Learning journey** | The logic of the week: eight **toolbox** blocks built in the mornings, three **Scheme Design Labs** that turn them into the participant's own solution, the three course phases, and the full day-by-day programme with a day filter and a "Scheme Design track only" toggle. |
| **Participants** | The roster merged with the cohort demographics: searchable, filterable, sortable table, summary charts that follow the filters, and the pre-course survey from the eCampus underneath. |
| **Resources** | The course library — standards, data, legal design, financing, administration, voice and country practice — with a search across everything, plus **Case law** as its own category. |
| **Collective brain** | What the room knows and what it builds with it: a knowledge map of the six subject clusters, the integrated exercise as a six-stage flow with the four Friday stress tests, and the solutions wall of what participants produced, by country. |

## Editing the content

All content lives in `data/` — nothing in `assets/` needs to be touched.

| File | Content |
| --- | --- |
| `data/course.js` | Course description, key facts, contact, the eight toolbox blocks, and the five-day programme. |
| `data/participants.js` | `PARTICIPANTS` — one object per person, any field you add becomes a table column. `SURVEY` — the pre-course survey blocks. |
| `data/resources.js` | `RESOURCES` — thematic link groups, each item `[title, description, url, tag]`. `CASELAW` — court decisions with citation, holding and scheme-design relevance. |
| `data/brain.js` | `clusters` (knowledge map), `exercise` (the integrated exercise and its four tests), `solutions` (the wall), `convergence` (closing lessons). |

Open `index.html` directly, or publish via GitHub Pages (Settings → Pages → deploy from branch, root folder).
Append `?now=2026-10-21T10:00:00%2B02:00` to preview the dashboard at a given moment during the week.

## Three things still to fill in

Each of these renders today as an explicit "awaiting" state rather than as invented content.

1. **Pre-course survey results** — the eCampus feedback activity (`mod/feedback/view.php?id=493930`) is behind the ITCILO login. Export it to Excel, then in `data/participants.js` set `SURVEY.responses`, and for each block set `pending: false` and fill `data` with `[label, count]` pairs. The response-rate meter and all bars compute themselves.
2. **Executive solutions** — the individual presentations. In `data/brain.js`, set `pending: false` on a country entry and complete `title`, `problem`, `solution`, `blocks` and `insight`. **Countries and institutions only — participant names are never stored in this repository.**
3. **ITCILO Compendium case law** — the four subject searches are listed under `CASELAW.feeds` and linked at the bottom of the Resources tab. Add their decisions to `CASELAW.decisions` in the same shape as the twelve already there.

## A note on the case law

The twelve decisions in `data/resources.js` were compiled for this dashboard and each carries its formal citation and a link. They are teaching material: several are under appeal or have been overtaken by legislation, and **every entry should be verified against the original judgment before it is relied on or cited**. The ITCILO Compendium remains the authoritative collection.

## Privacy

The roster omits e-mail addresses, telephone numbers and postal addresses from the source participant list. The Collective brain tab is designed so that participant output is attributed to a country and an institution, never to a person.
