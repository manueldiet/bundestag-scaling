# Posterior Verteilungen interaktiv visualisieren

**Created:** 5/20/2026 8:21:41  
**Updated:** 5/20/2026 9:38:56  
**Exported:** 5/20/2026 10:45:33  
**Link:** [https://claude.ai/chat/17195319-f783-453f-8d12-172e491972ae](https://claude.ai/chat/17195319-f783-453f-8d12-172e491972ae)  

## Prompt:
20.5.2026, 08:21:42

> File: 1779239887392_wp4_irt.RData

> File: 1779239887393_wp5_substantive.RData

> File: 1779239935350_index.html

> File: 

Bitte schau dir die Daten aus R an und den HTML Index. Ich möchte wenn möglich die Posterior verteilungen etwas expliziter in dem File erwähnt haben. Außerdem wäre es spannend die Posterior Distributions in einer interaktiven grafik zu haben mit der möglichkeit einzelne parteien ein- und auszublenden



## Response:
20.5.2026, 08:28:18

````plaintext
Thought process: Analysierte Daten und konzipierte interaktive Visualisierung für Posterior-Verteilungen.

The user wants me to:
1. Look at the R data files and HTML index
2. Add more explicit mention of posterior distributions in the HTML file
3. Create an interactive graphic showing posterior distributions with the ability to toggle parties on/off

Let me start by examining the uploaded files.
````

Lass mich zuerst die Dateien anschauen.

````plaintext
View: Check uploaded files
````

````plaintext
Thought process: Analysierte Daten und HTML-Datei zur Visualisierung.

Let me look at the HTML file first, then the RData files.
````

````plaintext
View: Read the HTML index file
````

````plaintext
Thought process: Analysierte HTML-Datei und R-Daten zur Visualisierung.

Let me see the truncated middle part of the HTML file.
````

````plaintext
View: See truncated middle section
````

````plaintext
Thought process: Sichtete HTML-Inhalte zur Umsetzung der Anforderungen.

Let me see more of the HTML content sections.
````

````plaintext
View: See article content sections
````

````plaintext
Thought process: Orchestrierte Anforderungen für Datenvisualisierung und interaktive Grafiken.

Let me see the rest of the content.
````

````plaintext
View: See remaining article content
````

````plaintext
Thought process: Untersuchte relevante Codeabschnitte zur Datenanalyse.

Now let me also see the truncated section around lines 890-925.
````

````plaintext
View: See remaining truncated section
````

````plaintext
Thought process: Plante, R-Daten zu laden und Posteriorverteilungen zu analysieren.

Now let me extract the data from the RData files. I need to load them in R to understand what posterior data is available.
````

Gut, jetzt lass mich die RData-Dateien laden, um die Posterior-Daten zu extrahieren.

````plaintext
Bash Tool: Load and inspect wp4_irt.RData
````

````plaintext
Thought process: Orchestrierte Datenimport-Strategie ohne R-Installation.

No R installed. Let me use Python with pyreadr to load RData files.
````

````plaintext
Bash Tool: Load RData with pyreadr
````

````plaintext
Thought process

The RData format might be too new or complex. Let me try rpy2 or just try reading wp5_substantive.RData first, which is smaller.
````

````plaintext
Bash Tool: Install rpy2
````

````plaintext
Thought process: Sondierte alternative Ansätze zur Datenverarbeitung.

rpy2 probably can't install without R. Let me try a different approach - maybe I can use a basic R binary or try loading the file differently.
````

````plaintext
Bash Tool: Check R availability and try to read RData header
````

````plaintext
Thought process: Identifizierte Datenformat und initiierte Installationsprozess.

It's RDX3 format. Let me try to install R.
````

````plaintext
Bash Tool: Install R
````

````plaintext
Thought process: Umging Konfigurationsproblem und suchte alternative Lösungsweg.

That's a problem with the repo configuration. Let me try another way.
````

````plaintext
Bash Tool: Try installing R ignoring errors
````

````plaintext
Thought process: Vorbereitet, um Daten zu laden und zu analysieren.

R is now installed. Let me load the RData files.
````

````plaintext
Bash Tool: Load and inspect wp5_substantive.RData
````

````plaintext
Thought process: Analysierte Datenstrukturen für interaktive Posteriorvisualisierung.

`party_draws_df` has 4000 x 3, which probably contains the posterior draws for party means. And `theta_df` is 200 x 8, probably the individual draws. Let me explore these.
````

````plaintext
Bash Tool: Inspect party_draws_df and theta_df
````

````plaintext
Thought process: Organisierte Posterior-Draws und plante Datenanalyse.

Now I have `party_draws_df` with 800 draws × 5 parties = 4000 rows. This has the posterior draws for party means. Let me also check the wp4_irt.RData for the full posterior.
````

````plaintext
Bash Tool: Check party composition of draws
````

````plaintext
Thought process: Lokalisierte zusätzliche Dateiressourcen für detaillierte Analysen.

Now I have the data I need. Let me also check wp4_irt.RData for the full posterior distributions (individual level).
````

````plaintext
Bash Tool: Load and inspect wp4_irt.RData
````

````plaintext
Thought process: Untersuchte Posterior-Verteilungen und interaktive Visualisierungsmöglichkeiten.

Let me explore the party_irt and the theta_posterior (which might be inside the irt_fit object).
````

````plaintext
Bash Tool: Inspect party_irt, theta_df, cross_compare
````

````plaintext
Thought process: Orchestrierte Datenexport und interaktive Visualisierung mit Parteien-Filter.

Now I have all the data I need. Let me now:

1. Export the posterior draws data (party_draws_df from wp5) as JSON for the interactive chart
2. Export the individual theta data for extra detail
3. Modify the HTML to add more explicit posterior discussion and embed an interactive chart

Let me create the JSON data and then build the interactive visualization and updated HTML.

The plan:
1. Export party_draws_df as JSON  
2. Build an interactive React/HTML chart showing posterior density curves for each party, with toggleable parties
3. Update the HTML sections to be more explicit about posteriors


4. Export the data files...
````

````plaintext
Bash Tool: Export posterior data as JSON
````

````plaintext
Thought process: Entschied sich für manuelle Datenexportierung ohne jsonlite-Bibliothek.

No jsonlite. Let me export manually.
````

````plaintext
Bash Tool: Export posterior draws as CSV
````

````plaintext
Thought process: Überwand Kodierungsproblem durch alternative Herangehensweise.

Encoding issue. Let me handle this differently.
````

````plaintext
Bash Tool: Export data as CSV with encoding fix
````

````plaintext
Thought process: Daten analysiert und JSON-Konvertierung geplant.

Now I have the data. Let me convert the CSV to JSON using Python.
````

````plaintext
Bash Tool: Convert draws to KDE JSON data
````

````plaintext
Thought process: Orchestrierte Datenintegration und plante interaktive Visualisierung der Posteriorverteilungen.

Now I have all the data. Let me also check if there are parties missing from the individual data that should be in the posterior distributions. Looking at it, wp5 has 5 parties in party_draws, but theta_df has 8 fractions: SPD, CDU/CSU, FDP, AfD, Gruene, BSW, DIE LINKE, fraktionslos. The party_draws only has the 5 main ones.

Let me also export the DIE LINKE and BSW individual thetas so we can add them as individual points (they don't have enough members for a meaningful posterior density of the party mean). 

I'm realizing I should compute party-level posteriors from the individual draws for all parties in theta_df, but looking at party_draws_df, it only contains the 5 main parties since the others have too few members for meaningful density estimation. I'll create the visualization with those 5 main parties plus DIE LINKE, and overlay the individual legislator data from theta_individual.json as scatter points. Now I need to plan the HTML modifications to incorporate all this data.

For the structure, I'm deciding between embedding the interactive chart directly in the HTML or creating a separate file with an iframe like the existing pattern. I think embedding everything in a single updated HTML file will be cleaner—I'll put the posterior data and interactive chart directly inline. Let me start by reviewing the frontend design approach and then building out the updated HTML.
````

````plaintext
View: Read frontend-design skill for guidance
````

````plaintext
Thought process: Architektierte interaktive Posterior-Visualisierung mit Partei-Toggle-Funktionalität.

Now I have all I need. Let me build the approach:

1. Create a standalone interactive HTML file for the posterior distributions that will be embedded via iframe (like the existing SVD interactives)
2. Update the main index.html with more explicit posterior language

Let me first create the interactive posterior visualization, then modify the HTML.

For the visualization I'll create a beautiful HTML with:
- D3.js or Chart.js for the KDE curves
- Toggle buttons per party
- Party colors matching the existing scheme
- Shows density curves of posterior party means
- Shows the 95% credible intervals
- Hover info showing exact values

Let me embed the KDE data directly in the HTML file.


Loading the KDE data...
````

````plaintext
Bash Tool: Check KDE data summary
````

````plaintext
Thought process: Konzipierte interaktive Posterior-Visualisierung mit Partei-Toggle-Funktionalität.

Now I need to:

1. Create the interactive posterior visualization HTML (standalone, embeddable via iframe)
2. Modify the index.html to:
   - Add more explicit posterior discussion in the IRT and Substantive sections
   - Embed the new interactive visualization

Let me note the sign convention: looking at the data, the IRT θ values are:
- SPD: mean ≈ +0.55 (positive = coalition/left side)
- Grüne: mean ≈ +0.40
- FDP: mean ≈ +0.14
- CDU/CSU: mean ≈ -0.60


- AfD: mean ≈ -1.19

But I'm noticing the HTML Table 7 has the opposite sign convention—SPD shows as −0.551 and CDU/CSU as +0.604—which means the paper anchored AfD as the positive end while my raw draws have SPD positive. I need to reconcile this sign flip when embedding the visualization. θ̄ = +0.604

And from the data:
- SPD mean: +0.5512
- FDP mean: +0.1411
- CDU/CSU mean: -0.6039

So the sign is flipped. The paper uses the convention where AfD/CDU are positive, Ampel is negative. The raw posterior draws have the opposite sign. I need to flip the sign when displaying.

Actually wait, looking at the R output more carefully:

From the console log:
`​`​`
Point estimate (IRT means):
  FDP mean θ:     -0.141
  SPD mean θ:     -0.551
  CDU/CSU mean θ: 0.604
`​`​`

But from party_draws_df:
`​`​`
SPD : mean= 0.5512
FDP : mean= 0.1411
CDU/CSU : mean= -0.6039
`​`​`

So the sign is indeed flipped in the draws compared to the paper. The paper applies a post-hoc sign flip to anchor AfD positive, so I'll need to flip all x-values in the visualization to match that convention. Now I'm building an interactive HTML visualization with KDE curves for each party, toggle buttons, confidence interval shading, and styling that aligns with the paper's design.

Building the visualization...
````

````plaintext
Bash Tool: Flip signs to match paper convention
````

````plaintext
Thought process: Konzipierte interaktive HTML-Visualisierung für Posterior-Verteilungen mit Filteroptionen.

Now let me build the interactive HTML file for the posterior visualization. I'll embed the KDE data directly in the HTML.
````

````plaintext
Bash Tool: Check JSON size for embedding
````

````plaintext
Thought process: Konzipierte interaktive Visualisierung für Posterior-Verteilungen mit Filteroptionen.

~17KB of JSON data is fine for embedding. Now let me create the interactive HTML file. I'll create it as a standalone file that can be iframed.
````

Now let me build the interactive posterior visualization and the updated HTML.

````plaintext
Bash Tool: Prepare inline data
````

````plaintext
Thought process: Orchestrierte interaktive Visualisierung mit Posterior-Verteilungen und Filteroptionen.

Let me now create the standalone interactive posterior distribution HTML file, and then the updated index.html.
````

````plaintext
Bash Tool: Create interactive posterior visualization HTML
````

````plaintext
Thought process: Orchestrierte HTML-Anpassungen für explizitere Posterior-Darstellungen und interaktive Visualisierungen.

Now I need to update the index.html. Let me plan the changes:

1. In the IRT section (section v, around line 927), after the existing Figure 8, add more explicit posterior language and embed the interactive posterior chart.

2. In the Substantive section (section vi, around line 1011), enhance the posterior discussion.

Let me make the edits to the HTML file. First I'll copy it to the working directory.
````

````plaintext
Bash Tool: Copy HTML to working directory
````

````plaintext
Thought process: Orchestrierte HTML-Edits für explizitere Posterior-Verteilungen und interaktive Grafiken.

Now I'll make the edits to the HTML file. Let me plan the changes precisely:

1. After Figure 8 (line 1008), before `</section>` for IRT section (line 1009), insert the interactive embed and additional posterior text.

2. In the Substantive section, expand the posterior discussion around lines 1033-1069.

Let me do the edits.
````

````plaintext
Edit: Add interactive posterior visualization and expanded posterior discussion after Figure 8 in IRT section
````

````plaintext
Thought process: Lokalisierte Posteriorverteilungen zur expliziten Darstellung.

Now let me expand the posterior discussion in the Substantive section. Let me find the right section.
````

````plaintext
Edit: Expand the Bayesian posterior discussion in Section vi with more explicit detail about the posterior mechanics
````

````plaintext
Thought process: Verfeinerte Textgenauigkeit und konzipierte interaktive Visualisierungen.

Now let me also update the "In zero out of thousands" sentence to be more precise, and enhance the individual vs group uncertainty section.
````

````plaintext
Edit: Expand the discussion after the posterior probability table
````

````plaintext
Thought process: Aktualisierte Inhaltsverzeichnis und überprüfte Dateizustand.

Now let me also update the TOC. Let me check if there's a TOC entry to update, and also see the final state of the file.
````

````plaintext
View: Check TOC section
````

````plaintext
Thought process: Validierte HTML-Datei und bereitete Ausgabeverzeichnis vor.

The TOC looks fine. Now let me verify the HTML file is correct by checking the key sections and then copy both files to the output directory.
````

````plaintext
Bash Tool: Verify the interactive embed is in the HTML
````

````plaintext
Thought process: Bereitete Dateien für Ausgabe vor und organisierte Präsentation.

Good. Let me now copy both files to the outputs directory and present them.
````

````plaintext
Bash Tool: Copy files to outputs
````

````plaintext
Thought process

Let me verify the files are there and present them.
````

````plaintext
Present File: /mnt/user-data/outputs/index.html, /mnt/user-data/outputs/posterior_interactive.html
````

````plaintext
Thought process: Orchestrierte Datenvisualisierung mit interaktiven Posterior-Verteilungen.

Done. Let me summarize what I changed.
````

Hier sind die beiden Dateien. Hier ist, was ich geändert habe:

**Neue Datei: `posterior_interactive.html`**
Interaktive Visualisierung der Posterior-Verteilungen aller fünf Hauptparteien mit:
- KDE-Dichtekurven aus den 800 MCMC-Draws
- Toggle-Buttons zum Ein-/Ausblenden einzelner Parteien
- 95%-Kredibilitätsintervalle als schattierte Bereiche
- Gestrichelte Linien an den Posterior-Means
- Tooltip mit Dichtewerten beim Hovern
- Stat-Cards mit θ̄, 95% CI und SD pro Partei

**Änderungen an `index.html`**

1. **IRT-Sektion (v.)** — nach Figure 8 eingefügt:
   - Das interaktive Posterior-Widget als iframe-Embed (wie die bestehenden SVD-Widgets)
   - Neuer Abschnitt *"What the posteriors tell us"* mit drei Absätzen, die explizit erklären: warum die FDP-Posterior so schmal ist (Kohäsion, nicht Stichprobengröße), warum die AfD-Posterior so breit ist, und warum die Separation zwischen Partei-Posteriors scharfe Inferenz ermöglicht

2. **Substantive Evaluation (vi.)** — Posterior-Diskussion erweitert:
   - Der Abschnitt "Full Bayesian posterior" erklärt jetzt explizit, was ein MCMC-Draw ist und wie die Posterior-Wahrscheinlichkeit berechnet wird
   - Neuer Absatz nach dem Code-Block, der die Schlüsselzeile `mean(dist_fdp_cdu < dist_fdp_spd)` interpretiert
   - "Zero out of thousands" → präziser "zero out of 800" mit Verweis auf die interaktive Grafik
   - Der Abschnitt zur individuellen vs. Gruppen-Unsicherheit erklärt jetzt den CLT-Mechanismus (σ/√N) und warum die Partei-SD so viel kleiner ist als die individuelle SD

> File: /mnt/user-data/outputs/index.html

> File: /mnt/user-data/outputs/posterior_interactive.html



## Prompt:
20.5.2026, 09:36:25

![1779262574396_image.png](data:image/webp;base64,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)

Wieso sieht es so aus als wären die zwei posterior graphen gespiegelt?



## Response:
20.5.2026, 09:38:56



````plaintext
Thought process: Identifizierte versehentliche Vorzeichenumkehrung in interaktivem Diagramm.

The user is pointing out that the two posterior distribution plots appear mirrored. Let me look at the data carefully.

In Image 2 (the original R-generated plot from the paper):
- AfD is on the far LEFT (negative, around -2)
- CDU/CSU is around -1
- FDP is around 0 (narrow spike, positive side)
- Grüne and SPD are on the RIGHT (positive, around 0.5-1)

In Image 1 (my interactive plot):
- SPD is on the LEFT (negative, around -0.55)


- Grüne is slightly right of SPD
- FDP is narrow spike around -0.14
- CDU/CSU is around +0.60
- AfD is on the far RIGHT (around +1.19)

So I flipped the signs when I created the `party_kde_flipped.json` file, thinking I was matching the paper's convention where AfD represents the opposition side. But the original R plot actually has the opposite orientation — AfD is negative and SPD is positive. The raw data confirms this: SPD has a mean of 0.55 while AfD has a mean of -1.19, and the R plot displays them exactly as those values suggest.

Now I'm realizing there's a sign-flip happening somewhere in the paper's substantive evaluation section. The text reports "FDP mean θ: -0.141, SPD mean θ: -0.551, CDU/CSU mean θ: 0.604" which matches my flipped version, but Figure 8 clearly shows the original orientation with AfD on the left and SPD on the right. So the IRT model was fitted with SPD positive and AfD negative, but then the signs were flipped for consistency with the SVD convention in the text. My interactive widget has the opposite orientation from the static figure.

The solution is to remove the sign-flip from the interactive widget so it matches Figure 8's original IRT model output.
````

Guter Catch! Das Problem liegt an einem Vorzeichenfehler in meinem Code. Im originalen IRT-Modell (Figure 8) ist die **AfD negativ** und **SPD positiv** — ich habe die Achse aber gespiegelt, weil ich dachte das IRT-Modell nutzt die SVD-Konvention (AfD positiv). Lass mich das fixen:

````plaintext
Bash Tool: Check original KDE orientation
````

````plaintext
Bash Tool: Rebuild interactive plot without sign flip, matching Figure 8 orientation
````

Jetzt muss ich auch den Text im `index.html` anpassen, der die Orientierung beschreibt (ich hatte dort falsche Konvention-Beschreibungen):

````plaintext
Edit: Fix axis orientation description in the note about posteriors
````

````plaintext
Bash Tool: Find the text to fix
````

The note text only lives in `posterior_interactive.html` (already fixed). Now I also need to fix the text in `index.html` that describes the axis orientation in the expanded posterior section:

````plaintext
Bash Tool: Find orientation-related text in index.html
````

````plaintext
Edit: Fix orientation references in "What the posteriors tell us" section
````

````plaintext
Edit: Fix sign values in the posterior overlap paragraph
````

````plaintext
Edit: Fix the FDP/CDU overlap description in the zero draws paragraph
````

````plaintext
Bash Tool: Copy to outputs
````

````plaintext
Present File: /mnt/user-data/outputs/posterior_interactive.html, /mnt/user-data/outputs/index.html
````

Das war ein klassischer Vorzeichenfehler. Was passiert ist:

**Das Problem:** In meinem ersten Schritt hatte ich die θ-Werte gespiegelt, weil ich die SVD-Konvention übernehmen wollte (AfD positiv = rechts). Aber das IRT-Modell hat eine eigene Orientierung, und Figure 8 wurde direkt aus den Rohdaten geplottet — dort ist **AfD negativ (links)** und **SPD positiv (rechts)**.

**Die Ursache der Verwirrung:** Im Text der *substantive evaluation* wird die Vorzeichenkonvention aus der Ausgabe verwendet (`FDP mean = −0.141`), die aber nach einer separaten Sign-Flipping-Routine entstand. Das statische Figure 8 zeigt die ursprüngliche IRT-Orientierung.

**Jetzt gefixt:**
- Die interaktive Grafik zeigt dieselbe Orientierung wie Figure 8 (AfD links/negativ, SPD rechts/positiv)
- Die Achsenbeschriftung ist entsprechend angepasst: *← Opposition (AfD, CDU/CSU) … Coalition (SPD, Grüne, FDP) →*
- Im Fließtext in `index.html` sind alle Vorzeichenangaben korrigiert, und es gibt jetzt einen erklärenden Hinweis, dass das IRT-Modell die entgegengesetzte Konvention zum SVD-Teil verwendet

> File: /mnt/user-data/outputs/posterior_interactive.html

> File: /mnt/user-data/outputs/index.html





---
Powered by [Claude Exporter](https://www.ai-chat-exporter.net)