# AI Prompt History

In line with the Option B exam guidelines, this document records the use of AI assistance (Anthropic Claude) during the construction of this project. The substantive analysis, methodological choices, and interpretation of results are mine; AI was used as a coding and drafting assistant.

---

## Phase 1 — Statistical Analysis (R)

### Session 1 · Data preparation and SVD setup
**Date:** 2025-XX-XX
**Topic:** Building the 772 × 161 voting matrix, double-mean imputation, baseline SVD.

Representative prompts:

> "I have roll-call vote data from the 20th Bundestag with party affiliations as a separate metadata table. Help me write an R script that reshapes the votes into a wide MP × vote matrix, codes yes = 1 / no = 0 / everything else NA, and reports the share of missing cells."

> "Implement double-mean imputation in R: replace each missing cell X[i,j] with row_mean[i] + col_mean[j] − grand_mean. Vectorise where possible."

> "Run SVD on the imputed matrix and produce a table of party means on Dimension 1 and 2, plus a scree plot for the first ten singular values."

### Session 2 · Double-centered SVD
**Topic:** Justifying the double-centering step, comparing to the raw SVD.

> "Explain in plain English why double-centering a roll-call matrix before SVD changes the substantive interpretation of Dimension 1. Then write the R code."

> "Compute the correlation between legislator coordinates from raw SVD and DC-SVD on Dim 1. Produce a side-by-side scatter for the report."

### Session 3 · Bayesian 2-PL IRT
**Topic:** Setting up `brms` + `cmdstanr` for the IRT model.

> "I want to fit a two-parameter logistic IRT model in brms where each MP has an ideal point θ_i and each vote has difficulty β_j and discrimination α_j. Show me the brms formula and a sensible weakly-informative prior set. Use cmdstanr backend."

> "After fitting, I want to compute P(|theta_FDP - theta_CDU| < |theta_FDP - theta_SPD|) directly from the posterior. Sketch the code."

---

## Phase 2 — Website (HTML / CSS / JS)

### Session 4 · Website scaffolding
**Date:** 2025-XX-XX
**Topic:** Initial HTML/CSS structure, University of Mannheim branding, Plotly explorer.

Representative prompts:

> "I'm building a GitHub Pages site to present my qualifying exam project. I want an editorial / academic-journal feel — think Foreign Affairs or The Economist — using University of Mannheim colours (#1B3A4B navy, #006EB8 blue, #7BAFD4 ice blue). English text. Please draft the index.html with sections for introduction, data, SVD, DC-SVD, IRT, an interactive component, and findings."

> "Style it with Fraunces for display headings and Source Serif 4 for body text. Drop-caps on first paragraphs of each section. Sticky table-of-contents on the left."

> "Build a Plotly.js legislator explorer with a method dropdown (SVD / DC-SVD / IRT), party-filter chips, and 1D / 2D view toggle. Hovering should show MP name, party, exact coordinate."

### Session 5 · R → JSON export script
**Topic:** Writing `06_export_for_web.R` to feed the website.

> "Write an R script that loads my saved RData files (wp2_svd, wp3_dc_svd, wp4_irt), combines them into two JSON files (svd_results.json and irt_results.json) with the exact structure my JavaScript expects, and writes them to data/."

---

## What was AI-generated vs. mine

| Component | Author |
|-----------|--------|
| Statistical methodology choices | Manuel Dieterle |
| Interpretation of findings | Manuel Dieterle |
| R code for analysis pipeline | AI-assisted, reviewed and adapted |
| HTML / CSS / JS for website | AI-generated, reviewed |
| Prose on the website | AI-drafted, revised by Manuel Dieterle |
| Mock data (placeholder JSON) | AI-generated, will be replaced by real outputs |
| AI_Prompts.md content | This file: written by Manuel Dieterle |

---

## Disclosure

All AI-generated code was read, understood, and tested before being committed. All AI-drafted prose was revised for accuracy, tone, and consistency with my own analysis. Where the AI's first attempt produced results I disagreed with — for example, an initial over-confidence about the FDP claim — those passages were rewritten to reflect my own reading of the evidence.

The AI assistant used: Anthropic Claude (claude.ai web interface).

---

*Last updated: 2025-XX-XX*
