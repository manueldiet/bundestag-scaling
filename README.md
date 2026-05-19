# Scaling the 20th Bundestag

**Ideal-Point Estimation of the 20th German Bundestag**
SDS 100 Qualifying Exam · University of Mannheim · Manuel Dieterle

📊 **Live site:** [https://USERNAME.github.io/bundestag-scaling/](https://USERNAME.github.io/bundestag-scaling/)

---

## What this is

Three estimators applied to 161 roll-call votes of the Ampel coalition (Sep 2021 – Mar 2025):

1. **Baseline SVD** — singular value decomposition of the imputed vote matrix
2. **Double-centered SVD** — same, after subtracting row, column, and grand means
3. **Bayesian 2-PL IRT** — two-parameter logistic item-response model, fitted in Stan via `brms`

The substantive question: *Was the FDP ideologically closer to the CDU/CSU than to its coalition partners?* Preliminary answer: no — roll-call evidence places the probability at roughly 0.11.

---

## Repository layout

```
bundestag-scaling/
├── index.html                  # Main website page
├── css/style.css               # Uni Mannheim editorial style
├── js/main.js                  # Interactive Plotly explorer
├── data/
│   ├── svd_results.json        # Legislator coordinates (SVD + DC-SVD)
│   └── irt_results.json        # IRT posterior summary
├── img/                        # Static plots (PNG)
├── output/                     # Pre-rendered Plotly HTMLs (iframes)
├── scripts/
│   ├── 01_data_preparation.R
│   ├── 02_svd_analysis.R
│   ├── 03_dc_svd_analysis.R
│   ├── 04_irt_model.R
│   ├── 05_results_summary.R
│   └── 06_export_for_web.R     # Builds the JSON files in data/
├── AI_Prompts.md               # AI usage documentation
└── README.md
```

---

## How to reproduce

1. Clone:
   ```bash
   git clone https://github.com/USERNAME/bundestag-scaling.git
   cd bundestag-scaling
   ```

2. Run the R pipeline (R ≥ 4.0, requires `tidyverse`, `brms`, `cmdstanr`, `jsonlite`):
   ```bash
   Rscript scripts/01_data_preparation.R
   Rscript scripts/02_svd_analysis.R
   Rscript scripts/03_dc_svd_analysis.R
   Rscript scripts/04_irt_model.R              # this one takes ~30 min
   Rscript scripts/06_export_for_web.R         # writes data/*.json
   ```

3. Preview the site locally:
   ```bash
   python3 -m http.server 8000
   # Open http://localhost:8000
   ```

4. Push to deploy via GitHub Pages.

---

## Deployment (GitHub Pages)

1. Push the repo to GitHub.
2. **Settings → Pages → Branch: `main`, folder: `/ (root)`**, click Save.
3. After ~1 min the site is live at `https://USERNAME.github.io/bundestag-scaling/`.

---

## Stack

- Static HTML/CSS/JS — no server, no build step.
- **Plotly.js** loaded from CDN for the interactive component.
- **Fraunces** + **Source Serif 4** typography (Google Fonts).
- R for all statistical estimation.

---

## License

Code: MIT. Prose and figures: CC-BY 4.0 unless noted otherwise.
Bundestag roll-call data is in the public domain.

---

## Acknowledgements

Built as the Option B Qualifying Exam for SDS 100, University of Mannheim. AI assistance from Anthropic Claude was used during code generation and prose drafting; see [`AI_Prompts.md`](AI_Prompts.md) for full disclosure.
