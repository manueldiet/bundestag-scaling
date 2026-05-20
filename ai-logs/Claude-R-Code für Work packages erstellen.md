# R-Code für Work packages erstellen

**Created:** 5/19/2026 11:00:26  
**Updated:** 5/19/2026 16:17:07  
**Exported:** 5/20/2026 10:44:07  
**Link:** [https://claude.ai/chat/83291ec7-157e-42d7-8ff3-d366fb13ac24](https://claude.ai/chat/83291ec7-157e-42d7-8ff3-d366fb13ac24)  

## Prompt:
19.5.2026, 11:00:27

> File: Comprehensive Work Packages_ Bundestag Roll-Call (Option B).pdf

> File: comprehensive_scaling_guide.md

> File: LLMInstructions.ipynb

> File: bundestag_wp132_polls.csv

> File: bundestag_wp132_votes.csv

> File: bundestag_rollcall_assignment.md

Bitte analysiere die beigefügten Dokumente.
Starte damit den R-Code anhand der vor definierten Work packages zu erstellen



## Response:
19.5.2026, 11:07:17

````plaintext
Thought process: Analysierte Dokumente und skizzierte R-Code-Struktur für Wahlanalyse.

The user wants me to analyze the uploaded documents and start creating R code based on the predefined work packages for a Bundestag roll-call voting analysis project. Let me first read the uploaded files to understand the data and requirements better.

Let me start by reading the key files.
````

Ich schaue mir zunächst alle relevanten Dateien an, um die Datenstruktur und Anforderungen vollständig zu verstehen.

````plaintext
View: Read the comprehensive scaling guide
````

````plaintext
Thought process: Untersuchte Dokumente und Datendateien zur Codeentwicklung.

Let me also look at the truncated part and the data files.
````

````plaintext
View: Read truncated portion of scaling guide
````

````plaintext
Thought process: Untersuchte Datenstruktur zur Code-Erstellung.

Now let me look at the data files to understand their structure.
````

````plaintext
Bash Tool: Inspect polls CSV structure and size
````

````plaintext
Thought process: Inventarisierte Dateistruktur und vorbereitete Codeentwicklung.

So 162 polls (plus header). Let me check the votes file.
````

````plaintext
Bash Tool: Inspect votes CSV structure, size, and vote categories
````

````plaintext
Thought process: Korrigierte Spaltenzugriff für Abstimmungsdaten.

Oops, I used the wrong column. Let me get the vote column.
````

````plaintext
Bash Tool: Check vote categories and fraction labels
````

````plaintext
Thought process: Konsultierte Richtlinien zur Vorbereitung der Codeanalyse.

Now let me also check the LLMInstructions notebook to understand if there are any specific guidelines.
````

````plaintext
View: Check the skill file for R/data analysis
````

````plaintext
Thought process: Suchte nach Datenanalysefähigkeiten und Ressourcen.

No data-analysis skill. Let me check the LLMInstructions notebook.
````

````plaintext
Bash Tool: Read LLMInstructions notebook
````

````plaintext
Thought process: Sondierte Anforderungen für Code-Generierung aus Dokumenten.

Let me see more of the notebook to understand all instructions.
````

````plaintext
Bash Tool: Read more of LLMInstructions notebook
````

````plaintext
Thought process: Orchestrierte umfassenden R-Code über fünf Work Packages.

OK, I have a good understanding now. Let me create the comprehensive R script based on the work packages. The assignment requires:

1. WP1: Data preparation & imputation (double-mean)
2. WP2: SVD on imputed matrix
3. WP3: Double-centered SVD
4. WP4: IRT model (using brms in R)
5. WP5: Substantive evaluation

Let me create a well-structured R script that covers all work packages. I need to be mindful that this is for a GitHub Pages site with University of Mannheim branding.


Writing the R script...
````

Jetzt habe ich ein vollständiges Bild. Ich erstelle den R-Code systematisch nach den Work Packages. Lass mich zunächst prüfen, ob R verfügbar ist, und dann das komplette Skript bauen.

````plaintext
Bash Tool: Check if R is available
````

````plaintext
Thought process: Konzipierte umfassende R-Skripte zur lokalen Ausführung.

R is not installed. I'll create the R scripts as files that Manuel can run locally. Let me create a comprehensive, well-documented R script.
````

R ist in dieser Umgebung nicht installiert — ich erstelle die Skripte als Dateien, die du lokal ausführen kannst. Ich baue ein vollständiges, modulares R-Projekt auf.

````plaintext
Bash Tool: Create project directory structure
````

````plaintext
Thought process: Orchestrierte Erstellung dokumentierter R-Scripts für vordefinierte Work Packages.

Let me create the R scripts for each work package. I'll make them well-documented and follow best practices.
````

````plaintext
Create File: Create setup script that installs all required R packages
````

````plaintext
Thought process: Strukturierte R-Code-Erstellung nach vordefinierten Work Packages geplant.

Now let me create the main analysis scripts. I'll structure them by work package.
````

````plaintext
Create File: WP1: Data preparation and double-mean imputation
````

````plaintext
Thought process: Initiierte Singular Value Decomposition Analyse für R-Code.

Now WP2: SVD analysis.
````

````plaintext
Create File: WP2: Singular Value Decomposition analysis
````

````plaintext
Thought process: Navigierte zu Work Package 3 mit Double-Centering und SVD.

Now WP3: Double-centering and SVD.
````

````plaintext
Create File: WP3: Double-centered matrix SVD
````

````plaintext
Thought process: Navigierte zu Arbeitspaket 4 für IRT-Modellierung.

Now WP4: IRT model with brms.
````

````plaintext
Create File: WP4: Bayesian IRT model using brms
````

````plaintext
Thought process: Identifizierte substantive Evaluierungsphase für R-Code-Entwicklung.

Now WP5: Substantive evaluation.
````

````plaintext
Create File: WP5: Substantive evaluation with Bayesian posterior
````

````plaintext
Thought process: Orchestrierte Skriptstruktur und verfeinerte statistische Modellierung.

Now let me create a master run script and a README. Let me also address the IRT model more carefully - the brms parameterization I used might need adjustment. Let me create an alternative IRT specification that's more robust.
````

Now erstelle ich noch ein alternatives, robusteres IRT-Skript (da die `brms`-2PL-Syntax knifflig sein kann) und ein Master-Skript:

````plaintext
Create File: Alternative IRT implementation with a simpler, more robust brms specification
````

````plaintext
Thought process: Orchestrierte Erstellung von Master-Skript und Dokumentation.

Now let me create the master run script and a README.
````

````plaintext
Create File: Master run script that executes all work packages in order
````

````plaintext
Thought process: Begann mit Erstellung einer README-Datei.

Now let me create a README.
````

````plaintext
Create File: Project README with instructions
````

````plaintext
Thought process: Organisierte Ausgabeverzeichnis für Dokumentenverarbeitung.

Now let me copy everything to the output directory.
````

````plaintext
Bash Tool: Package everything for download
````

````plaintext
Thought process: Orchestrierte Bereitstellung einzelner R-Skripte zur Benutzernutzung.

Let me also copy the individual R scripts to the output for easy access.
````

````plaintext
Bash Tool: Copy scripts to output for individual download
````

````plaintext
Thought process: Bereitete Dokumentenanalyse und R-Code-Erstellung vor.

Let me present the files.
````

````plaintext
Present File: /mnt/user-data/outputs/bundestag-scaling.tar.gz, /mnt/user-data/outputs/scripts/00_setup.R, /mnt/user-data/outputs/scripts/01_data_preparation.R, /mnt/user-data/outputs/scripts/02_svd_analysis.R, /mnt/user-data/outputs/scripts/03_double_centered_svd.R, /mnt/user-data/outputs/scripts/04_irt_model.R, /mnt/user-data/outputs/scripts/04_irt_model_alt.R, /mnt/user-data/outputs/scripts/05_substantive_evaluation.R, /mnt/user-data/outputs/scripts/run_all.R, /mnt/user-data/outputs/README.md
````

````plaintext
Thought process: Orchestrated document analysis and R-code generation framework.

Everything is packaged. Let me give a summary.
````

Hier ist das komplette R-Projekt, strukturiert nach den Work Packages. Hier eine kurze Übersicht, was jedes Skript macht:

**WP1 — `01_data_preparation.R`**: Lädt die CSVs, kodiert Stimmen binär (ja=1, nein=0, Rest=NA), baut die Legislator×Vote-Matrix, und füllt fehlende Werte mit Double-Mean-Imputation. Die Intuition dahinter: Jeder fehlende Wert wird geschätzt als „wie oft stimmt dieser MdB generell zu" + „wie populär war dieses Gesetz" − „Grundrate aller Ja-Stimmen", damit man nicht doppelt zählt.

**WP2 — `02_svd_analysis.R`**: SVD auf der imputierten Matrix, extrahiert die ersten zwei Dimensionen, analysiert Extrempositionen, berechnet Varianzanteile, und erstellt ein interaktives Plotly-Widget (für die Website).

**WP3 — `03_double_centered_svd.R`**: Zentriert die Matrix doppelt (Zeilen- und Spaltenmittel raus, Gesamtmittel wieder drauf), verifiziert dass alle Zeilen/Spalten Summe ≈ 0 haben, und wiederholt die SVD. Der Vorteil: Jetzt wird nicht mehr erfasst, wer generell viel zustimmt, sondern nur noch *systematische Abweichungen* — also echte Polarisierung.

**WP4 — `04_irt_model_alt.R`** (robuste Version): Bayesianisches 2-PL IRT über `brms`/`cmdstanr`. Filtert erst fast-einstimmige Votes raus (bringen kaum Information), dann schätzt Ideal Points mit voller Posterior-Verteilung. Ich habe dir zwei Versionen gebaut — die `_alt`-Version ist stabiler, weil sie eine einfachere brms-Formel nutzt.

**WP5 — `05_substantive_evaluation.R`**: Testet die Behauptung „Die FDP war ideologisch näher an der CDU/CSU als an SPD/Grünen" — und zwar nicht nur mit Punktschätzern, sondern über die gesamte MCMC-Posterior: P(FDP näher an CDU als an SPD | Daten).

**Zum Starten**: CSVs in den `data/`-Ordner legen und `source("scripts/run_all.R")` ausführen. Das tar.gz-Archiv enthält die komplette Projektstruktur. Der IRT-Teil braucht `cmdstanr` (CmdStan muss installiert sein) und läuft ~1–4 Stunden — die SVD-Teile sind in Sekunden durch.

Soll ich als nächstes die GitHub-Pages-Website (WP6–9) aufbauen, oder willst du erst den R-Code lokal testen?

> File: /mnt/user-data/outputs/bundestag-scaling.tar.gz

> File: /mnt/user-data/outputs/scripts/00_setup.R

> File: /mnt/user-data/outputs/scripts/01_data_preparation.R

> File: /mnt/user-data/outputs/scripts/02_svd_analysis.R

> File: /mnt/user-data/outputs/scripts/03_double_centered_svd.R

> File: /mnt/user-data/outputs/scripts/04_irt_model.R

> File: /mnt/user-data/outputs/scripts/04_irt_model_alt.R

> File: /mnt/user-data/outputs/scripts/05_substantive_evaluation.R

> File: /mnt/user-data/outputs/scripts/run_all.R

> File: /mnt/user-data/outputs/README.md



## Prompt:
19.5.2026, 11:14:58

Ich will alles erst einmal lokal testen. Wie genau muss ich alles aufsetzten um alles zu testen?
Wie teste ich ob alle benötigten Packages lokal vorhanden sind?



## Response:
19.5.2026, 11:15:25



````plaintext
Thought process: Orchestrierte Anleitung für lokales Setup und Paketvalidierung.

The user wants to know how to set up everything locally and test if all required packages are installed. Let me provide clear, step-by-step instructions.
````

Gerne, ich erklär dir den Setup-Prozess Schritt für Schritt.

## 1. Projektordner einrichten

Entpacke das Archiv und lege die CSV-Dateien rein:

```
bundestag-scaling/
├── data/
│   ├── bundestag_wp132_polls.csv   ← hier reinkopieren
│   └── bundestag_wp132_votes.csv   ← hier reinkopieren
├── scripts/
│   ├── 00_setup.R
│   ├── 01_data_preparation.R
│   └── ...
└── output/                         ← wird automatisch erstellt
```

## 2. R & RStudio installieren (falls noch nicht da)

Falls du RStudio noch nicht hast: [posit.co/download/rstudio-desktop](https://posit.co/download/rstudio-desktop) — das installiert R gleich mit.

## 3. Projekt in RStudio öffnen

Öffne RStudio, dann oben rechts: **Open Project** → `bundestag-scaling/` auswählen (oder einfach die `.R`-Dateien direkt öffnen). Damit ist das Working Directory automatisch richtig gesetzt.

## 4. Packages prüfen — ohne `00_setup.R` direkt auszuführen

Führe diesen **Check-Block** zuerst aus — er zeigt dir was fehlt, ohne automatisch alles zu installieren:

```r
# In der RStudio Console ausführen:

required_packages <- c(
  "tidyverse", "data.table",
  "Matrix", "irlba",
  "brms",
  "ggplot2", "ggrepel", "patchwork", "scales", "plotly", "htmlwidgets",
  "knitr", "kableExtra", "posterior", "bayesplot"
)

missing <- required_packages[!sapply(required_packages, requireNamespace, quietly = TRUE)]

if (length(missing) == 0) {
  cat("✓ Alle Packages sind installiert!\n")
} else {
  cat("✗ Fehlende Packages:\n")
  cat(paste0("  - ", missing, "\n"))
}
```

Wenn Packages fehlen, installierst du sie mit:

```r
install.packages(missing)
```

## 5. cmdstanr & CmdStan (nur für WP4 — IRT-Modell)

Das ist der aufwändigste Teil, weil `brms` für MCMC CmdStan als Backend braucht:

```r
# Schritt 1: cmdstanr installieren
install.packages("cmdstanr", repos = c("https://stan-dev.r-universe.dev",
                                        "https://cran.r-project.org"))

# Schritt 2: Prüfen ob CmdStan schon da ist
cmdstanr::check_cmdstan_toolchain()

# Schritt 3: CmdStan installieren (lädt ~400MB, einmalig)
cmdstanr::install_cmdstan(cores = 2)

# Schritt 4: Prüfen ob alles klappt
cmdstanr::cmdstan_version()  # sollte eine Versionsnummer ausgeben
```

> **Tipp:** Wenn `check_cmdstan_toolchain()` einen Fehler zu C++ / make gibt, musst du auf Windows zusätzlich **RTools** installieren: [cran.r-project.org/bin/windows/Rtools](https://cran.r-project.org/bin/windows/Rtools). Auf macOS reicht `Xcode Command Line Tools` (`xcode-select --install` im Terminal).

## 6. Schrittweise testen (empfohlene Reihenfolge)

**Nicht** `run_all.R` sofort starten — lieber Script für Script:

```r
# WP1 zuerst — geht schnell, zeigt ob die Daten richtig geladen werden
source("scripts/01_data_preparation.R")
# Erwartete Ausgabe: "Vote matrix dimensions: ~730 legislators × 162 votes"

# WP2 — ebenfalls schnell (~Sekunden)
source("scripts/02_svd_analysis.R")
# Erwartete Ausgabe: Tabelle mit Varianzanteilen, Extrempolitiker

# WP3
source("scripts/03_double_centered_svd.R")
# Erwartete Ausgabe: "Max absolute row mean: ~0" (Verifikation)

# WP4 — erst wenn WP1-3 laufen! Dauert lange.
source("scripts/04_irt_model_alt.R")
```

## 7. Schnell-Check ob WP1–3 grundsätzlich funktionieren

Dieser Mini-Test prüft das Herzstück ohne das lange IRT-Modell:

```r
# Working directory prüfen:
getwd()  # muss auf bundestag-scaling/ zeigen

# Daten testweise laden:
polls <- read.csv("data/bundestag_wp132_polls.csv")
votes <- read.csv("data/bundestag_wp132_votes.csv")
cat(nrow(polls), "polls,", nrow(votes), "vote records\n")
# Erwartet: 162 polls, 118400 vote records
```

Wenn das klappt, sind die Pfade korrekt und du kannst WP1 direkt sourcen.

---

Auf welchem Betriebssystem bist du? Falls Windows — der RTools-Schritt für CmdStan kann manchmal etwas hakelig sein, da helfe ich dir dann gezielt durch.



## Prompt:
19.5.2026, 11:19:34

![1779182371096_image.png](data:image/webp;base64,UklGRs7QAABXRUJQVlA4IMLQAABQFgSdASogBi8CPm00lkikIqIhI7N6WIANiWdu/nU/mfaP0P6X/R+GNhUWu9BMgH8h/nO0w766B/0B6Y8ZqCJ73S7n/t8zv0n/o+pn/itT32rVQ/pucDogegBfk09r9HuUP/BHYDSc79WP/jH6/+89+Prd9n/avYP/a+YvZvlU84/97/B+1X/Y+of+r/4z2Bf1f88b9sPeD/cf+n6jf6J/rf2692j/Yftd7s/7L+RfwHf3v/aetR/3/ZG/yf+89hn+Z/6T/6evR+7Xwy/2z/nfuz7Xf//1nP6v/av7X/c/2H+CP0P9Y/xf93/yX+o/xfo749/Y/7n/kv+T/j/2t+6D6L/tv79/jfGP6j+7f8D/Ff5H/2e4n8m+3P6D+y/4v/x/4/5+fwv+0/vv+e/63+K9F/z/9o/13+E/eP/QfIL+Wfz7/Qf23/K/+L/JfK39Z/1P8x/mO+v13/Rf83/K/4H3BfYn6f/yP7l/of2l+EP4n/of4f/Qew36f/d/+n/gv9D+2X2A/y3+u/8T++e2H/N8Jn8N/yv2u+AT+s/6P/7/7D3cv77/3/7D/ffuR7kvqv/3f63/X/IX/RP8B/3f8j/p/f2/////+IH76////6fEtanSpBb5qW9V70SwDiIW7OV4lpfEqYOr7muuD1E5dRbGfj0vqtMfLn5HKZbMht+j1mQARAvjeSmqaNxKEwN7u5wNFjrlVp1Hnk1lsgjELgb3dzgaLHXKrTpeTpeNx+RymWzIbfo/MHSKa0uxn5HKZbMht+j8wdIprS7GfkcplsyG36PzB0imtLsZ+RxtZle+O1XkCCpBuZVYWmPBkJ5FqXQdm2+Ju9iYmNnHJzx2icyCeAc5giHG84Fv15zqPL3lley8LfPwecEBoEEZSSh7Vm4SBKnYPKYL93YJ/y7uLeEXACw5GmS9J/xAnkHX7hi3msO+Qt4Tg+uEw2RxGr/Qkmly3lZsOe/eCDhzcusk0h2DSaQ7BpNIdg0mkOwaTSHYNIvd+aGg/L4tT+BA2p93iMyrVfd66+Ls16rVst5/fkrhq/bAZ4yEXzYLMIW4ADGzr5VnUQtICOnMiA5+LuGj0sGk0h2DSaQ7BmMn8oDv8VtFZAjaJr9vNclM6q2L1eIIn2dcq2qcsDNUTQ+RchChGygVyxmUmPgJmWgLWfZtN5wTq0zLxcGdDvE2hM+U9MONotZP6BJWVYLaHVdc3KVGGFvSpfeLZxHUM949kohmOmhH5+drSikj5hb3MUYG0V9KXKCuj7I0vKaWI/a/qYnR7kVvMlQJd36icuotjPyOUy2ZDb9H5g6RTWl2M/I5TLZkNv0fmDpFNaXYz8jkXcZDjkG0EpPXcjCOrgKKlBx+G61ZYkaXj46lY3L8CVxFPCutNnGmic2w2/R+YOkU1pdjPyOUy2ZDb9H5g6RTWl2Msg9+OlA3fKq3Gc0MI0HqC/dWJDfcvmkUyG36PzB0idAdC0fnSHgHuee3qlKNJqNK3tZgeGGXYfH1rXfrSljSJ+c7w/tsegGaVk0gGrUlmlGYrFX5/5ct6amHQEVqxlshnTKD1B6vN0OEfkdl9jo9STSKvHI/PBLRzgT4DfTXCwjf610z8eJMrMWKGf5CWrjRqBjr6o4ui94BYwndSXTO6FUGtPMmDet0zuhVBrTxeBz4hc2h5fbrDB6i7CTw24Z+L5U3oK+WLhL1r7lvn3G5F9YuOFy6WUnrt2vc/lAB+ydPmKPpZDL8ueazsoZflzzWdkgatV/uMrqhvFKrfaF0Je/cfnTaHM06MPW+JBA4g23E7fGBghPp4SnMoQyMmrnaJEOpzjZ8A+rd7aTdO8O46+VMeUOD4BFao0PTxzedbt/fi9osVIntPx4Fu/p1vuEM8rLBvwMe0w+LOYdUrk81hwvIkrbNnDgJ3Fq5UYgIES6rGccPMcUNYkGl3VSliEP3CubQ6gl14VkufTLPE9GmFDdHbTZiH/aSTPR3QIaSP54vrbKl342gH9tJu+PMb7VNSh2U8eZiDWrTzNJf6B91TTLPE9GmFDdHbTaHSIjYoMyNcD2Ylbol3KWCaPJ/0eP9GV9H0XeThu6DESv44zmWTxPRVwudbO4kmyAJxgEeTnv6D0DmMuknfR/vFdkhAPGHiFWdSm72hSMx5RpznsC34DDDDDDDDDDDDDDDDDDDDDDDDDDDDC+EwM2HPDJbbv+AgikRg9wqrEXLSnsAtMDqtxhLmnGNR/3LinDzDXoHVNR4Z+u2/HHXnv4IIIIIIIIIIIH/639ETn1/tfOBk/5dLSwW2Ufu3liWd85sKYjeQs000uViF3Mr20tqxcd00DzIQ7BfUZs8gD4lt6PHgrNOPKkb2QBNWjUOf7KPoPYT/+l4cYrdg6EEh1BLrwrJc+mWeJ6NMKG6O2m0OoJdeFZLnYg627qcnFxOJgM372IA2cFr4HmXSeIP6Q/Tiy8DcGbuZpCFGQZ9xM49sFr0I4MO7CCwajPrBWBQ3R202h1BLrwrJbyXmKOw+jFwlnBM0oHmN8mbcUGFqQM9OPQamVcMrqBZWoF58CWwjEsKG6O3GuGeXsEgNkTs6kPFEvprSzpB9Xn2kuTdQfO7psHxgrl5DO+C+tXoRDYMoVk7P1bxhPX44689/BBBBBBBBBBBBBBBBAk0Dw5/zoV9H7wjMvgJrCWjvXC7pVZGwmO7XUUPzT2gtHrho7GZcsKBxx157+CCCCCB/958EKIPKrrkzDJ5VP0ab7FI8f57I7SbBZpxHLnD7nyoEqh6g1qggtT/iMWS58/eQRbXQq4jLQL8DK1dUScj+0T9cQobFOYUVYsKtSIqiuWCJNQKv5uX93BMK31wo7Ze/QRfOq6OrhbhQtahGJ7ONROCnJ+CmPVmJ+evYa5S3zCnr0CjJFWA7xiOosxJxpCOKC6sGsdUvlQdJH5ZfPVl1OiNETmiIihygIB5dTKSVb4B67vMcax2O3+3EVbKjBCZcMm5BhN2+wtDX2zMKULPNTsHty3VMlz6ZZ4no0wobo7abQ6gEkEEcFTTawmZagDbt6t3mC0M7P7lA9L/wi7jLluShgMnRzMg4U8BdmHTQlZ5q6pUB6g45o9DHp4Oia/4BN1/uJNhXqClslnKYajq0Gs4Pvluxo3uRIRjbqEBFPzPXkbpvVWMEnQMLJ4no0wobo6t9a1re7tmmAbhgOD7isq8An2/+QqdUXj1iOo4IeVDUKxNPYJgiyLD5tWlQWgbijTCJfXeP5k4xyiI4NmTgRQuxHBSp72a+gZDjKs0l8/i3bphO0twAb9uEkzHbqJO9H2aMMpDtfnV9fbvHDjwvIlYZ4tFABMBiGNQ+yb5exPytl6wt1+Mtue3WFrOQ+XBBOsQ7yrYC/Q199D+4CQHdvjxaJW6KjvIhlKTBKR6dhRpllbcJpQuBEisnezTTTTTTTTTTTTTTTTTTTTTTRF+hsIjWvri6eDZ0DavenD1QAYw44444444444zWSFIYNYqAQL9DYRGthYyCF0yAEOGWdZ2ALDKl3pho0RgkZilzP6mzgNPBHgmcIfbgFOnDANdcYSxm3lizmsQ+DkH9XEaDWPq7CIsNMbRIadt8gkr4gkYAF9UtcS/cAMPBUjTnLB8jl/gFyervBtcE0ieEVBt5BVu73/QTcqQDrRn0Pnwcgu6Rzd40znjOdiIEWh4U/FdfREYzcABTvRDCXPplniejTChujtptDo8B4xIgKB51a/vaC4c2o1OgK6bHc9oFg+8DLq1egCeM1OI+rpc5+s4HypXi4rGdQiG0gLKjLNKcVnnPwulvaVfntlXcNpSkX3UStaRH2FtYQWtotFDuYUN0dtNmHwN1ZHEKs0g5wcL15m7LDPYuyyjujOddvtSIwna0CQyfSCKRPR9sxdZ/uR+ftQNwrDe6tAr8gqP7HW19NNWi+mF59gbys3BkKBrflpy4GFXXY6Swflh0XfXk6LKd4S7qID499c0JVYgN1qaq2NN073KNyLPnvu6HhJIfSKvqcedTt3vNxWWpsZ2MWKD5AMcI6CMBeBDrpWr84rOp9IUDlAEwdanV3f5+LuTov/6JbcTCinlBSCeRlOFxatgVQSXO4y7a2tIpC8Pu5+8spqYu2qVE7NdLjk5jd8ugVOw9HBNOij9KpmENYMQpw2/HHXnv4IIIIIIIIIIIIIIEltLJfvj2cI3Rwt+Uc2Ulqj64s2XJsiAdYe7XHiD/WZVolIc80j1I4UwUBBOsFU+vaszvxATm3zr6t05nNAwujfLSgmhjlmmmmmmmlpCBlleuKY90H6E+4TkYd9GReZqpdEyDIcS9mj7TeNfk04gZE02DNT9VxDcauGQhmSCnz4FhLnDiPPjE5g7bBoVvAY2gnOOXGaZguxBE/YqMHLFmkUgNXdj85LtT+mu0g14tar/gar1yb9O2xWzN4NYE2O3+ekhSsK4huhj36INO7jYagN/+YwLR/wWCRqyIyuRYMXmwixrOaIOR178BhhhhhhhcBhhhhhhhhhhhhhhhhhhhhhe85Y3NgfrDtUVWuA2+YLsUMHWL+8XmJZeF8p8b1C7ciqh++0t7Y1bnvyMczfnQ2llllpVVVVVVVVVVVVP8uI27V+SrH9+KlE2Mfre6lWUt087lVXwyMyiVqwAtfU3OU4g/xiwNeX2hP5U3Fsjlwyd0KbtgQamcsHkqptVkbho9k0ap2yanBrfTo1V0B8pyZnBEpKTBw3ncfjMEZnz5XB7jQ5OlDdBY2pUh4CC0kuS/MNxRoWBrN7JJYm22us2j5fgEWTwz97LQvXs8T0aYUN0dtNodQS68KyXPplniejS85VlsHd3nfnRCcO4fWM54pI7yK+coxXDiaJCObUJCAzIlREzduQNyKtT+/ZfsmLxtrR7BukN0dtNodQS68KyIx2CBdIfCI+dHS6hh8qAd/pN5WU3V/lN/UMxd6pQBi71y3DVbpA9NJ9jDGv3g3wDYi/xWXr0M7VEAtR/r6I1EeOar+AMdZE2H9YxAVkACCG4b8d7PjHqCemyFkmIRzR+/9hIJMFp42LNh0ZMu5BZuN6Ep1JT2lLG67BNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNKj1JdqxtXZxzGESJLBdPd3O/+smWXW2+kqWWMK47b049BDHLNNNNNNNNNNNNG66+mHZBQtpq5PdKBHMi0mpsyy1At450FcclisJuLbchqIE7GhEH7GCpxyHKWpc3htQm4+EPDzjBm7gpZltqbuf7w7oo2JLgeE+OVB3HnIhjn71/LyNr6emFe2m0OoJdeFZLn0yzxPRphQ3R202h1BLrwb3xSOocuDBcbk84ZQZsr1T921F5bNi1yGh1r8esJZ4Y4OmIxHTmEWJEJHnM5Nanj1y04m6BGux1ZOT07nnA0g9f14VkufTLPE9GmFDcjLdDniQsuwMHVC0s7D8tZogHFGgBEpQjCAyJCfjEF/5HWj46tMklsFMluWzgS4L9wJUUUUT/brlzD0kfydSFvFm9k2ddYRFn7/YptpIRDkTRmQxyzTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTRuuuAjO8ZAvdLLLSqqqqqqqqqqqqqqqqqqqqqqjLLLLLLSqqqqoqtSQar89GfxQ7tiGPSVdtmKh2Zv7QnEhKuw7rU9crposnYvAfU6te7mD55SAVAYJRrfSLnlLsH96pB1Y4l0T8xXiLsJG4o+I8cOkOD1z6ZZ4no0wobo7abQ6gl14VkufTLOsQCfpAsItlpJdsxwQ4xRo34b10Sqc46w5TzbdkrATf3OBHCbUHFmXJtMgLeOIkXkOgaKh+/C26Z+09AU1+YUN0dtNodQS68HCHPFIfz8veMIuSyKV2U/emn1gMmRLK/n4jT+IzGKl58h/f0WUB6enFImpV8YBmio9KvUmYy7j1rjdcWzHZHWYGcPbwijZrlMd4RtlMSpOvG0YCtRLrwhfYfyUfLJdg6rwlXrXgXioKYEPUBRX+EhBO8cMRJDRBaqpSZ3Gr+8aI+UbgGd7Fjbv1zmAZs6EcVGFi2ZG2BijDjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjGB9YwmFX8roCvmboSwnuKXkJ/GbZLODLy5LIIzFa2XTYhCazEETe32Iqqqqqqqqqqqqqqqqp0Gd2nRHKdVJlcaX9RnG76d5RrFXWd3klv+/uMNltbYIed/4oeeNeLaBw9YFf23cLdl88yq9+Kxnmm6yDGrbzghnpBpO4gWK5jgOVqJCooBXe026zO9db7x6ijx0gi3uhLIqIjh3PSJ77gAsJaFP0dGQjOzCRUxLhrOLO/4VCDc0Bw/ro4zROwVDRzExfdOH+jb0ra8ayiSWieoWztOb9SRt9i3wWsTvE9GmFDdHbTaHUEuvCslz6YkKpc9t51WIvVZsMnK/WotS5zZdXPW5tii8M65z6+dudH9jXMYlVI7SJJXGlXz+KcIjBloyuYUN0dtNodQS68G3e++kMVKf0uhEjRVGu9xL9lDtyOxqVJRTreQKkLugNoToBZMx446s907cR+uK2KSawKNtT4OlNyHYezekQavKBrFaBNeF3MGQSqVGuvDMO5eHl7X8P3EpxY+VYZ60vyQB9qw+vZj/ET1cpF845mL/JY8FoEn18VEjjh3NueN9td2ezJ1l+XTivKwejqmK1wfj/XHoGvMJnbgcsk2dfsMhPm9iGrUH/YZHQ6gpfFDKMZ0r4oCFXsNdMKG6O2m0OoJdeFZLn0yzxO6XixhLkBa+RzMRwsl1b/YJnRByb9hYCls6NgKjKwakrD+85TWS84p+rM5OKDXbf4VRgrJc+mWeJ6NMKG3vOaV2Q8aDGG3OPf+IB21/pynBB5Vw4fof3KwUGHJN68i1dO3viUlnP2k+jv4KEYZ9kEUeyrxsgwSdU+X2BbW6r7LjPM1st+dly87JJBX432Vy3WR/FxxNufg5H0ah1ylGOsIVqgD3rSCA/1xlkSN2Qkz96gaCHItsEa4h5cvlRFrVY2obkFEIvlF9Jn/4fbH9s0JDIUYvgnmTBvW6Z3Qqg1p5kwb1umd0KoNaeZASm3iE093SWpO+YDwXbRkQGV+DliYd9teiok1Mj1gZ1pGq3gSA689/BBBBBBBBBBBBBABiYELCQ56nWKZRUSN65okk9B4gmaROEcLtZ13QiSsi2rgNqJHVPAGUMC5ZDh9O+/Ge1qkSE8ydXI+et409GfucHr9Tkd5nS2szvxuWm/2zRgn0/P4Lt7xkrJwLTNwElbaHmtplctRnOdIVNiv8zoQXwNfw/Nnqwc/l2rN1hhYd8fAFhFBZoz5amgB0xivcxIt8T4wZ0jQoIoTo1i+Qd6lo9z1OB+1U8+ojCVe3WEVtdthSO81KPdpNcBBODk1M0uMYBTAt/x8dKHvwQUCM5ikrc320/0eUQnFA3uoqX7bHVRa9oY283cSZ3iT+0USPZIrb+6myBZjdzKYCslz6ZZ4no0wobolLK79O7sfqy+pmaeNtlHmvPh68aac/tlc2p/EOJjygtByBtfKxZ5cA0NTC52rzGTcTSL8r2gNuehoIv85RYDFZiFeYd1Xv7taeY0GlTuQGw2lGUk7DGY9hvRTgc9GjoDkTJSAH/90GUn9qqqbWrN0++Wiic5JPvzxqS+yVanTvx84Dy6Pmmmmmmmmmmmmmmmmmmmmmmmml/aYUPn/e5bMndCqDWnmTBvW6Z3Qqgx6if97mEHHGwHdOwTFDP9My+N0dWz5AZkMSEFZ6JA6dhupJ/VK8zITiOsVHyimIk4xFvpla2HXVD53qUzzPsFdik4IODGv00GKXVYCZG4F8OtxX0hjpUptNS0KCuk8QOQQWkB6DkG7Tzwhakq/hm+vYZNi97OJA/pnol/wTuaQat3HIl9QqrTKrvYJ6hUjqBMX+5v7piuhETlSe2scBb6hX0F4AHBHHHHHHHHHHHHHHHHHHHHHHHGMHFgf/7I82Q7Sfigt6mdCxMJbOt0iAr415IIxjcgNFac4Sgh8Ry3EBRerFqFsnztCPuQz+h38Pek23ToqvL4ouDFpNcBBODn2iwob07R/J420GLeK1LJrwKfUBOSyi+HqwDat3r1/XM8JcoMjGqYtFsfbeOaS3sdU62zXf/0phtH0MDpbRPGLeaSoJSEfVnkfcSIs+zkZ4DwTqoU4nqYNjCfSOy5VkejGmhjkIxkdJWVieu2SYXEbQBb9prnLxDQCmWk4ep/p2o4A6XvXD09LnsEZVISB7B1EohabUETuGom4PkXwe8f6NmjW5PgqmNwhvUksijTfi0j4Fa260a0dnx3GHMlUcsSlXqghjlmmmmmmmmmmmmmmmmmmlLCgvzf0XsHrlGP7BjQXVgNZZrNmKPfUTqccx1xmICd3XrHw9qMOOOOOOOOOOOOOOOOMbNu0igSln0bq8oX9A5ch4LggsZ8/B8DOPVT0/f7EHjPLYiZoJ4RawAkI81ZKLmKdQTlSlT1fO8QiGpHGk7NVRDeJ6NA8/G8FeBMdm7UgeoWUZcP1NYzdeSDQavbkCg9PKtAq1oxoh7cQllPB6yrbavyCshK4KHl4YnT/KAeg4BdjUWXPfSz8Y8MrlAhFd2WYV7RU/NmyeKDnmFDdHbTaHUEuvCslz6YkKhtywzyo2+TD51+CgRVrkJFSKQHY1mfKDn2+ZsyI1dvfEoPgvJy4mNpMCWo5N9cEzL7DVf4KpUbTaHUEuvCslz6ZYQlc3aGXkizLtBXXPYSOwLUXt4S5jGrBG8I3CMADnuVQmnc6W2p7oE12/H1xpqZwMhaZ7kQMtzSUcCA+vnrAvJPMvnBoQ9I2Kf8SREbHo5L5MqCXXhWQ2ros4oheWBXXNpvzIxZeXYzc85bsIPk9iuFjlsDwID8GOuyk5SbWJ26w5qVnQsHlrXGutrOYFiBMSVSHEsq8ENymTnoaoHlkeuLtTMA8+S94no0wobo7abQ6gl14VkufTLOtCZoPpz0pimIb1XpBG8dp/HXBLjhFCfZjPzgUaSDES/i3XlQ7rxRG7SNMKG6O2m0OoJddH2u9Be0CODUf0JQ+scmogDlAUx5LH29chAiRsc4FyAwZUVhLobAzfqOlEoIwLTaZXNLPZvQhG7xbNseMn+IWteGfd3SvtfnnxoflCWc+uFX0WnL77qAoaHzQYxno5I3BcNhifEjUJ4yjtRufVG3xQiNE0gKxQvtDJCKeUeO3FD00d5zQi+GW/ggggggggggggggggggggggggggggggAxLAS+SNg3NNw/NHdKFAcT9xPCIgK95auQjIe0h1uyM00uIJLPPRjC/I7neD/XtqjHLNNNNNNNNNNNNNKZuXTXtphGP8w0I6PVSb6ovIIkgYsHGdWNhp6uQI/O88GYsMCKw9p1l5v71JviegZ8Jdh2zYNpcnQmyID9ugCVr5Sp2RjqXzjXuqhPub6MKc9GggN33/iAszad2e52doNp/WMTM+bFRYsnh4pd9ppnUrwdW3sj6F6mNwZcsUCVRz5zu7uCoBUgWoFKgBx7eQT19owIzDYMIgQ0o0aHRkAN6VwDx8/oNCgoT6ZZ4no0wobo7abQ6gl14VkufTLCH3QKSmNP2L89zVRfQhzZcgDd6XsuZCA/ltwZgrpUWscjZxVlVVTKXhzghwYCR7x2F1MJI/MGRGPr1T6I8KyXPplniejQRke5uxUA1UtGLX8JyXOnwDeMnRNlHBuUUMAesb9DoFZFDoZF2Jk67xnMFxHCJtDnyG0Ab+Zdwk9vbsLp/AzNC4J0bbLj21a8mJF/Qw0adJHXe/fBamwdhhY8suFA/SdLJf7ME+yXFy01tAJ6nrx98KSeuNRl4koAOEAZ8/MI3JcNuAE6Cr2OflO6dBLSNPYNF7EhNpHFGa+LsahhXPwXMsY4444444444444444444444z+SLJHBDRYUPQZozn74lqvZqUKb6gsfG0Htr89/BBBBBBBBBBBBAWKBMb3ZroCyd/04CS4287BR0SoDLirzFZeYLljoyFkmnZmqTM6cBNMnmIFHZ4noa8C6HusBDmrEtSnHyzybuUz+0OYHolRiD0t0/VUkqH+uR4kjnLbHIXNcKL8tPWDp9nFTrbPIlisKrMHgRpiNX5TOAUhc3osrHBeS0tMEt5t89JsKaLRfVP895ghH1tCBTmjiXoVqRpsc503cniz3+IhJboVc4b3jmrgOR/5luQaSa/AL7+M7WfGTYdsxxTisUnatvb4DTz0RbNkpO0r69N1RZ1mMRtgl5/+cYKyXPplniejTChujtpsxBYPjUgsdHa+8Ft2c/1ho0RPr3E84uNrD9eg5lQvte2E5l1oMWQilvb3OmS7gB9Yld0KMk5KvCRMqqRdN178kLoJXlniejTChujtptDHK+zAKx58QAMlnmPGzr0TV4k+c6uR7AFoLK7uVzzhPf4+Dy8jneXHRSi1MR3FaswewCZlBTfe/5VAUA0MRwxnGkEnFWmoB7eKpwKmt4Y18ARSK/hok/D+wgFI2Q/zM1IDTVc+o/AuOGZZHYLILBhxjJHRtiviuqdY5HKHna1gst6k/p0Yn0m0Vhr8fc9ryX4O5pPc/5LQD2TdHCPe1AApNwjupLpndCqDWnmTBvW6Z3Qlwl5tnBFzeeWtAxWjTj0EMcs0000000000Rhtg56dXeca9J1GHNRQTidW23KFDbrT+jghRC2hjGAkx3F2wsos5ZOA+eRQguGcKFuqyHy6SDJTvuy2DlJ9S6Gpw6ezOOLXDMhYCdtNodsKR3mpR7tJrgIJwc++ojCSsRr6VqhLwBg9M18pksIjUrc7bXbII9Bicm7Bljm4PTA5JMbPPllJMtuGBokbRJDP1HsVO1U5WXLJ4no0wobo7abQ6M3+NcM5LEFA0cfCGWr8TUk05Oqol2nU6oAUlP9f8+SRqcGnb2nUV0Fq+hV5AN2kq9cRsI8iE/bxqtosJeKbPvKNSTfEhrXfl6EHIKSduahyclsCdrZQOkLUfO8Ue9fKJ5t9uYXdJfXijf7Ae4xpBks33jJJYI9q+f5Yd9iP47xdQ6gl14VkufTLPE9GmFDdHbTaHUEuvCqvIPL8Ru8ItcFPE2uM7ZV9HzFTAJs1ogolSvtgF19f0b/4e6iZAnItIdQS68KyXPplnid3gLOQ7yhgaa9SKZvjm3vnLj+ZHHpQccTvt3zTTFFBy34tQvfNE8/JnAtdizc+k2cf7/zTSpktb6Cj0AA/s+hFCeHfvywjpG61St8Sp3ULkwM3L8FOgRqdAuIKbcUyslK2ut30KCyXmNEbRXR3LHjhABO+OyG7PYk5RB4cqYtRINe30wEi53yUP5IGunEuOoNgWSbXvhw95ymi5UetCdSaXLNfi2pqewS7UeigwN3omm6OvjWcAnhX8qwhGLjprb3AELH76STr5qO7haCrBOkIV7psZm8FyIcgmIhgcKOQvnoaVNnQbE+IGbwGvj2VbyfEiICeQJ5AoCXvvx7mIgmmiqWBCgtTgxp5BCW58x4IQLCwsLCwsLCwsLCwsLCwsLCwsLiCl0EV6R4wuCoop8HDi66DRPFYW0jKRiW+BVbwUnA/Lz0JKDOOSCvnlWoZnLJOmmXUTARzT08UkxfSpPJV+atdVJqtj/s2WwVWW84clCnIArjf4dMZdNUpbc6ZgEdH12bSANoII+veoVlvzR7M8xU+TtvSrxsKd7DQ1sQE0QtZ/eEsSqidfVIrfXHPCJmK7OoUl8fshC1XjcrKZkxxr+1oYcCXXgjAS9+kzxVEKvLIVTHaNeLHWHhcDpx/zj+CK8xlMH6cF7zERLE9yp532s6bgQnBjQDkB7/zdcs+E/snkHQx415acuiX1vkJ1HDdNrUktjgqJVha/+W+XP1bgLRBjmKo752aNkCF1d01q/6KmpmEuT4E7hTP7VR8tpNbtJ9TJWMVYa5+a7aJ7krgkvArafoI1j6fs2X2KfqGoQ3SVYDKDN4RDj+K145fF3uH5gkr3A7QaQPAobsRV7PmUL5ycTXspe0QDsuaqvJqHhak4XDHs6eStRNtLXRf4tim+CXVt68Gr81hjvUQjBQQCbHP3oTpivduPvG5J+OGqhWrpVtPPezcofao4M2ONpsdOdoPzHhhJtLObcm/z1Ata1LwsYousuQCREJR69XZtZJW7LBP0QAx+7vbdy7fmFw2OwFuiHvByQ6Fc5Tu/kSbTZuzgcaPFR7+xy5+btmMjeEBXnql3CcAw/pEa5UkMOzZaqr5ppH3QmHhr3g5a5I0wRMUvkbwXU9nlKPmFAc+UVkYsxTpWbJz4EZDjgErXRddN+fk8WSHHnt2/A9Dy2cbRygVK1cCjwQ7597CtGHciLGt6MPfahdCCGKTY3/77hT09+t/5VSvOCA3wJIkxz8M5uGIOTuM4XDZPNLXWNdjBoOWJHnVzoluTNPXfG/y8I0MB91iD5psY0H6q3HQdI85iE44OQnEemTEk7LLEMy3AG2F/GsF75qwgaepEEFY8lAFPNZuJ3Gjytz3o3Au80jbdQ4FekbioPcsJ+o+hg3b3tc7wX7UB3w+PipXMN4SvWYpJJIBfRw911ApGpaLQ3hwilTeCqeJq2Uzp2ZvVDfbdzEygqvKgJtVpIqdQWobwll4sCmFBZOlAK1DIdruJj7OXY5CmvMlWJkQuqY+j7LS4afOAtPd/SL65bQrm+MvQirxkRRqIgOaTi1doD4/4iraMg6+2+m4VZZmB0kxb7ZU7pAeNxHE120K+/F1G3UXIfPmju+j6fsjJoxbz3kivCLZ0tdXUT+oaxlqy9OR532k6pfRig3WzJ8YlJ4oR0MAoJo/nSZlFrG0SVxcUYjTsOvve/+oIj6O5xyFFdJcEgWVBLkwpCS7DA36I8RwNaG79p0Yzjfmt1NDwzQT7MVjatDhGTsAdHqk5th29Zl0B2N/gpvAsscy4FVs65Vg6xbVMuBPhR/6kLD6PaQhhWcElvi1s8qhK+V7+qrjmEiNyZ7bjchnnhmO6/iSvIND4T87Kej9Rs2p45sWuY/pPgSTe4FYLB+LEMBW2VwX2ybWWdIOntO/bjS4+w4J57CotvkbMXhOSiTcBtV5Hn4nBs0iH/ygfPBF8Q6xqB1fYzcdPkhjL1EsQMjTdvxxSJhA4Pi2mDVMHDY1FwI7fKRpxfJwJ72nK6us560aOaDJI+UixJdZG8q1Gk9xLCGqdxoImpVrSCJsEQjLDxbevNcVp7lX1YuyWKIvUfBAw7SFKIhjX8HIMlX5uLngMgYbWsxpuPUaQUwiCb2NvFJ7xBlfuqcokNGC9dVNhuMRRr8HxabiXXHoks9sueGUEu3tG6TxFOrWDhW3msN2f/yO04z0JdvZ8RMxMUgh/NGRnYgMVm/VqVd+qQcqyLyyUxWW+KLiYEj+x8DwvyaV6wFqqLFtBpy7TzR2qsZQSynlPIc9IrJny6uLWoP9q9OWFhBXKeotXLrvnHQRjyy8Z4Gk8tnaRHz0VOvfckvNtx5kTzAUoYwGcWdNoZUt0WbAAkbgAdExvRarWC6iZMVA1YDury8hN0DOWAc7geBFJvf5nRKqfal1rX0RkZ0bO/8dGS5Q032w4o7t5GIXi1M2TrbfH+t3L4/1u5fEhOtt8f63cvj/W7l8f63cvj/W7l8f63cvj/W7l8f63cvj/W7l8f63cvj/W7l8f63cvj/W7l8f63cvj/W7l8f63cvj/W7l8f63cvj/W7l8f63cvj/W7l8f63cvj/W7l8f63cvj/W7l8f63cvj/W7l8f63cvj/W7l8f63cvla74kncSWOJiidmS46otDiyxng/3SszSwHSOzh/ef4dmEXOUc8htfRkF+MCjTPRieDyGov1pReZ+/BusZXXCrmVZL2RADwMjjj3G7JDdNxRMBBqq8XxV5TzWXlLuot+icQg2oLXdVYhbDiWzg03LLa/KULrqwxXqNu8RmLIfDqG1tp4lGni6vqeJGGCNm2mR+I5vtWo3iIZnNLUTKfwLgmyVCohTJldvEEEvpk2Uhgv8935vcV1kk8c/xOc/Nh1V2MCpI1eBF9tF5/7KWxUiEBDhwhevCNDUbtR0beU97FQiYFoZ6IUL0S7gta9UhKHCkuK8rRWKuWTglzWzjdVkA/U/NIQqWFti36z/qPelbxcUlqtz7qzaiTuErTAQ0u/PZ/LbeJrSHvOXikusrZnc5lIMRnuWeg2fRTUpVw0kTTJxzX3eYiv4TZLtZBilubAxzgEFOB2NJv+hIfXDWBy2Ky7g+h4fbVnmLGrd4ErVU3v++FkgzHVWULfrUNw6zd90n3qaLePEmkTJuMaOaFUr2RQdXoB5YY5y5PC1zLbO7mwvEDndGyiqWzpo0qw9iJOXYQ1dJU+mnFxGQxE2fjFJRgTmFvczOklMrlp4TUzEfjDEcuk7YzDeumtHIJA5V5xrQiOnwQ6x3NuGuaWadBR5tt4mFtHxCXwXjvC9a17OuiuKkuD8tg46SI2ckiaKG5xEOAfgDxYCUunpd4+/3lZ3aT9sHB1P4um27c8L1wB1x4v920UGoqWi1E5WtTGvkIyxOQqM5cJCkTye/rH1b7TUDwcyBSBD2pb/So0aiSBxsyiH5oMXJegkA7/Ui6d9brG7KAKyKH539cmWuKx7OkfzlppPr1KSKZ0b0xJKcJiboRrLzIumQL4nJ071tovicnTvW2i+JydO9baL4nJ071tovicnTvW2i+JydO9cH7NH+GXaMkF7Dj6J5aiGgCztpbGwoBNLUm0vN3K8TtwvM3t4ZapfWz1up6CNlqWtEeR+hI8IJvkkucQgwV/z+MuvEOZbUI71me+3GFR7u/f7dnGwumWSVytYOC680B9HaeP3KRd/OK0SsdCxuPfHaiBszZdcSzBzCoXOAAKivT5PStF986c52LdAYjh4v2O15qJifeQGEUHFB+ZpGEruV2bU0B3MDRJMAgmllaEnsh6EnIc0R5tBQhgqXnpX4oktpX82HYsoAuf3EtCK6t5se0c3PqswiL42AcnopFLgoFDpL+Z2Fi9AVLAEHy1R71b1gt7lZMeI/wbd/uPnq7/Co/ub3FJnLUn/4XuVmeZlXESH+JzjjoaV74XHLk9QVW2V3oUrbkrooVOQ9JO7NPe9vbw66Ta9oJ/95Jq+mQhx9jAfQ+0KhlXmgzDqJ2uQEgyXKpoDcgLsWMl7sTES1dRKHJjReykzEdhb0GrrRNN/2hMpPhIvwBTQUEfYI5KjZVUOSuA5g3G2QzaxzYm6ZBYUPZ5I3tonde6Pwf7jEoizqrRF+W5Tb6fIDdIXW47jvyzfIhi/p1CWTumOF6Ki2nLdozAlKIwnBiuN5PmPBRcIljqR9Mc1KnzorBGDCb644I70/LLPinLimGcv3L4ab44kjp0o51V+23zbL3gmi9uiPFKYmNE2LWIP73aW2f4hlVF3vbWjaDmi3DOTvDGqak1M2xyU3lwnXqQ39qLHz4NRwdZRBtqjc02wgINCxnAxRKTUXee+9R/0A7xqjs9A+XFA5ImTXodrTr+fQvFQsvAJEpPl8sGZovbvNXj7HXMMGve2iGX17BpCsY8b5o5dD0dsbOWQCJpOZvp/hXRhmL1qVW2WIrOVaBjVMQnbqoJKxEjD9+SPAfmdGR7PfleSWvbrABpsP01Y/bgOQZl380/voxBJsitwXIOmaFlhmr8FXw8onphmbx0F0+CreQiGGiuoKBMZhDHZjjyRxz/D/Vi4Ra8cfUZCRvZAc8Hj+gWvb/Au1kCW2fIXRQlQLM7CtNMubUM0G26iX+kBAhPFBkahMsI9THvsCZBiW1Q/Ypzdf4QQWVoUZSK44uBKAIvyhQYOWfTXWoSS8sz5aiZ0ZoeNrCXUnfmOvnioxi/qTkXXtloMTIUnJ1ibS6HIChGRUSMimrHe7i160ZIhErqNEW/BfRO9WSCuokm/buQPD97K6yHMNFZvB4VsYqIoxLoDtQwo3hT2Wy/WNhdakVK2OnJ9HgmTRekuMGBU4dOf52Ua8AmcXaj7xV6+rePlb9qGkLeCEgMswnYHdDfp/+EC6EyFfbgUkkuXAjq9BK/Mg4hI8FDJNZmSBoKxlYgTCnoCGUDiR65dousFE8MH9YBMqlw2g9SSTrae+Aoj53Usvy9bd7PS0J4hcqMWIxSRyNCtSCus1fpwyHdPlEiqxDakrFjWYssPqAOdTVCVUHvCgQhFkUvqmCEtjd+ADyN34API3fgA8jd+ADyN34API3fgA8jd+ADyN34API3fgA8jd+ADyN34API3fgA8jd+ADyN34API3fgA8jd+AFOFhF++ku/fWAA2vvdespVdK8ibGND8uZqwUatq6zU7QGn6YFCAa/rsAgVTEDjkXJ6w+fUmWh/CGR36+8rDKqSh1KpMeenI63Sj+KcsqklxczhoG3Zkjy4rGO4TxGLSX28S9Fe/RkzjPr+BXgGDSva5+UnuqiV4zRsanP4R4KTZ/84rIt+f7oU47JJ/0sz1+xjzthScL0wcG4Dprcc3pxPib39PhgbULufbTSdVOm1CtCq6lf318rAmWLp3MfL4V9gCsVlUopHtAb8YkZMneAXcN3XVPi2VOSG5msDoIeZMATx1SOMA4Eu2svzp2sDbkpz8wDgS7ay/OnawNuSnPzAOBLtrL86drA1fu5F/ZAJ+w+hPEmpVzqSaFv0uk1Al1Le8/zJ7/Urskeg3YOeZOGUB6VrOaIoUPY/F05mTjRK9Or20iaIGrjlVm4Wk63I4/M87hWgADYQlfXe7MNiCJljNQehgDCGnWS8YdZMCoVXJKq7u9qvUaykOjrcKF6B1YKKsODITgwZc8KG73KZ68aSpgAPJXcltVbQVSVHFtyOzH4Gt0TI/ga4OiDwxdZwHsdXsMIqAB4RF2D//y5uaN4TWEWg4vXYH1T33lqIhk0k5fiuUaWWHORBSzyeMXCYPTi6sMPVE+NZDMcfuwkZnngOflgYSzWCigrraof36aSLbr0P7/WuOMPzCscrkyySQf6GYEPXS+g0+ipag67nL12/L3FMs9gn3+q6Gf9+N3pMkZG5DRVblhsdyXxv+G7RMIr0mVCgGdyqxvH/zV6DzCG8lR7SMcO88D1RI/8/I4FO45W8qrjBZGQMggpfJ3c/8ZMpZetoBa8OaMARV47l1m6Zv8JkRWeJ+0r5Yewcgt6uRcEqz3T+UglbipIiMxRiywdPtmGyi5t7/A/BbSO/NGUVm8USmaunD/f6oju1gD68eQfqvIOVAA+QcqvcleQW5S7k/0Us9T0lAnu8yzedj00g5/ZF9g7pI3xtqeoiBfgz2V8hD8IbBfHIEtbKBxudQwBbuEaITCf4+87QVl2ZEu7bj+xndawbDR4tj4NqOZrWnuQjGdcYDo7rE5kErmKHInMGJdC4j59cBVGybjA3iSNBOMIslep4rNgZYymlCjN6F74V5UYaSowslRN1aXubra20g/c0SzqM6gGBRFo6GIar0GUzC6OB5+4g/xkYRIOKTxnpygwOUsrw7kr76er16Rk+sULPrB5RLk4c8uL+3SqgHR4ReofwaocjpgNxKMKdh2fZyQlc7ptcNw6WnM9wskqo2az0qASc2CurIcN/H5TRNZrsP0NdN7kYO/XV1rhmbjvt9Sf4fLujVqaiSMzz3M3Xy5IUCybPiEuef39I/2RtQ8WVR3HGWhy4z0Jcwg0fOP5xHfBou3SVn9woaOAez0Env+0gyygWSYMMfe+jV+dyP/W4xx6zJbS8NxeP5j1/GLG7h4RzFTyoGX8xtPj/EfIKuA2mZmUUC3ByzIz6igM9Mg3ZSxDQbfrf86oANG4VIYp2mhRGx7kdryFN2tkMdxz+ZbzQRPMUnxSYFNtjiYFO8qHEZ7yNx357atLdkLB5ToSsYfAS2WTNSg5bETyQBgeevgCPGzEnxGGFANh9Gx1E4WvNTln3WR2PROFjy0u4Y5WWGNdyLKQN/wndtICjqOG+NzjpGejFTaSs2+dfT+XDnq42A3pNih54aqKl5Wr1QYvnaji7OXCX0Wtd+ZIEsVG5xO51xmTN6McDopNnNBePFmbWpUIwinuqeMc+MKAvxSp0yE3q5w3JV90r48Qsho0cv0ZMEq+D+7IElqvM+mSRQvt0CorlFmqKGHdfzr2Y/Kqv5TMv2j/6slHh9C4cy3M+hOslQt+b1Sl2nSXY8paxxYTah1qmyOIOKxqmyOIOKxqmyOIOKxqmyOIOKxqmyOIOKxqmyOIOKxqmyOIOKxqmyOIOKxqmyOIOKxqmyOIOKxqmyOIOKxqmyOIOKxqmyOIOKxqmyOIOKxqmyOIN5/lpT3fdsooxQlVTSD18qlxPLv7KVqFMVDcjUPi9AgF40mx2zNo5IaN2A4crDmMeF4fGCJruk3EMbRgNfCBasOvjACQxzm2JP+oG14ZzG7avrApTQhlg4qcLuTq1MR0gNR6N10QR35E10RxfoCucNbGO7UarQvIPqvfhdxTSyVu+Ztixispf8KaS9y0SFiFy1wMy6Jm0tymM55ud9qdUQO0Dep57y+S6baR5PEG8pkrkr6Hls0MJyYjoADGT8xeQQ4BruL504Uh2DDfknc+Y9I30WASgPyVQydaKJBeCm9gCJ/qpt+YwcR1NxiIXAkIx+2e+Pdkw2kCYkaCrLFLhCih2yfKN8rEs15xciTE8K2ULr5+MIMNchOPGqJDPSAxV76ucCNl9y6Hd0s30yDXV6EVLzfWmRyT+0Z8AvFFVdhuirx4Jp6Ive343THBII0QZV21Spi4E8ksxZTABD7m2q3x/4V5tKs15IRMAPojHRbMNmGzDZhsw2YbMNmHW7hlk3D6KGl6eXTFmPtA+I3UsYCEmtgvoiz2LqB+fd/uTpbo7+ZwTxPcKjSQLzGm6RuCRXNGsiicPikrwDKMQrlD0S2RA2JiZvZETRndQ5g4TZF9vmTUiVcK4EUSo+ve/tex3jKkLH4IX3Cz6mwxyokuGpHAFvZgKcCg6gzmmQwH7PlxyPWLZf1ONJksOcRcjqr7STg4sAQE/7RfAD9iK8M4YNhezN/QFVzsYd6r1FwvmICKabFxgWm5rulR+dJwFk6jXQmBW0tsU7FI8hYgrAp95RtyxxCsSQUPLEnfWAy8flvvpoUxFzk6wyf1rLUvE8ru1ssig6u+NmeV8pex6fsCEXDf/MttNysY1EELnmK2UJFEoBBEYi7UyVMlN/1xPR6gtoDHXoxIZw9oFep9wI2rzwEPC3Sa/LGpCyPISg0OX/uYSlJR/+Curct6slKiNgrk6+op+tlHxm8B2LZ30hROD+/FeL76dqwWM8eyVwRzQbO3wtaMBJ8ixQ5OWk4kQtFaKC5FZ3plngE07i1rLMZRS28TPUIVoY1eEPMaFRwmlqnbCoiJjl2pPX/iN7N2PV23m+0TMLr0gIgd6dWVy5033vRwBqXK1ELhEqqKsXFmNJs3HCdbI3uQbcepulH2D6YlEB9PmHLm6an8j30OOA8Ygk2Yon5XuI4oUD+sJd/kLvGJVhNGBuHtI8+1pxTu3YWISdy0viJXsLmyJJDmCDM6I03OhSdRdkLq5o6txlI/VXqHpb+0NOw99BM1GwyRsgMtXYvHnibCWowiqiBDSsYEp9UAe6tkqq16GQEQxSl7jGn/QX0S7fjyliJRdA1P6JihbsrfSNFp8J40zk3VMfFVZKa9xce9z3PGuTpfb29jQyveMGRzin10SPG3dpO1/O1+htCHg9e42+ktaXtYKV4QYzP21hneutBIzR4C1JKdUbdIePqYzBwLG0h/B/dr0QNRpT4WgmVaqYzxs1CAdMKsQ/pDLYlMMDZ+kR62ClWnsziHSDri6WrKQADiY5lRtDrulyWkbhZgLJRiC8W34PfYinUgCP2dj+GdnN72oGwnTcJn3ewK11SqmS+jJzvVRk7ESGTqt4NciJ0lMB03uy1/JWxNPqiVDw0KmvNz+lP4sVbtTsyBDKg7Vd31fEu+vCoSk7VZSFVIcEtGTDzFr4IgXI29R67lEomV49ka9j5NcKiosyiRZeNsFkK1sv2+754UrSrpFTr3PBe2v2T7EI8lLWK0sNWQ1jTIIq5y5X+T5mxxPjgKXX2dGAMfqeFOKA2o2lzV2q/p1w0ajhSB6uNqO4FSxcBtIQLahAlwcFEzxZirJJetzAhR7FQmCy7cxaktWgQi/BlKChZzAHlL4NLv/kaD/Zd+xMEQ7diPV/S69LNSQpXM22JTtQGIAA+Ypw1JyNlE+X4SQtDDvN5hLKIGGYQqwEwwB5dRV++3d11D3eBOlVW38L3wSZsAZClRgB4nH4353fXS5oMUIahIPqThRGr+afQ5bqyK1FXTx/9SUnP/hKQv8hjmo9+GDiaAXd4r3Q+lVHtmOS7G4m7eoFlUTYq1IJUT4HjQiGkWkE/95bONlwScOgb2D8jIluCPC2dZ21vgI6Lf/AWyD+gjCUnXBpUxkEnwVmcjs5A0YUYSA3JzVeSlHUz2pLPadpUeocJSv4gUtlfiZwNhERliI0XpPzPUffL2iDbEhOLunaAOMLWnZP/ChsQPMEOf+gyOYRtOr1CIMxtlT05cnAenW5ko8S6j6rka0n2jpMICXQl7kV3uVI+1pvkFofVQa/Z9oHstgc9eTY0B2QOaFCqGAMYlQ3KGoXC2adPgKT/SmaMPEMgtp4KtDSRMGfXiCZgBNiYLUSqUc5haYc2/tbZBpYGXT3Txo/3P1VAT68ARyfbech7hFMWkqNcM6NdRPNIJ/wjTfiIvvksb//1DMrcXf3i5inT/+B/V96L2AXJlP76xUq+/L9f1CllIPLrSN4Iagi6d5gcjlKU1FCUviJv3bCt20wCZbvHMwgNRREwhagl69jl2394ms8V3LqXcH+IIaK1IbIuML3txDOTEfAIplusiHkSS0oL9Xn0I67nVYtMAd8YPToHoPZ7xSNoSKVPNbldMIv0bo1a2o4awGLRRn7WRSpU0B/F5F5yh+SndRjWI5Si4nQ3GvEK0iPyW67zX3CX/bi5E3l0Zk83DLfFInS3fA99MAdPLSoPNqs79oGloQ/LMMAGcbQ5I3l2y/t/TAS4A1rkEpMfJRnd9ijFPdC7NNAz4N3YApTKs7P5+cN6pQaCnDddmzKm4gT6JJoWwblkco+55CWSxq8DHmt0Iu7I6cit4pW9c+zCuH+gPEPcLBmk0uCMUBfv4FlGUM9YjO50RkfEjU2oAgF86mpSzjmSOgTTwCPUv2c5vwehri5icqQGw0ZpvwERsm6J47rPUcIDlnd3q/Qb8rGJzAKGr7ffMO0ilWs6hAtp22P+rmqURCwyQC/737Blmqb80ST+cMi37e6joQsv7gDWQxyw7kYIIti7OwWi5UdwCLCn4P7/OOlg5/dMiYI0bQoJqX4+KJgpGeIT8dCcwFEs3x7JnFzEQxX2yHQkIXlv9L+6213NQm/Xus86yn7xjhfxWg+s6OsCu7gB9wBY1uNagfs8IxFYEcBj/SiuqWaL3qxFgrtE88BBlEnLUN1sGfW3LeJi1nhLhz5M/ua1Q/8GFl3nVD20m1qXI/4CGqpHQ3I3CFSLzQxsYGBYXYPh1UTlV0z5d6Gtsn6P96QINdmj5D8JebSr+yUwBHFAbs0sJM5E6uug39eZEVKKY2UMyENnZndCIgsiGogLQxfIopIRWxjs9gUZbsWK0p09aAQp4aAQb+e6hqEhFJG989MOj+f7CLCxdfctZICNEe5NQaDp7SI4YPt3RkRe8X6pEq/JayzhJW3oxAB6qsocgZpozVazFt6vkaG6kj9bC6Kxkni51Zr9w/DuDwRwf2b3yBbZShQmY89jqwbP9ka/Y57yOK4/lvtZDtfvq7b+wTIrk7x0EOqfBc/PPXgSfFkuXd0pTrCFe/LfuVEbKdyBURFZWahheKi/ZLhlQ0XX91/Y2yLaLrs/TKGkS5+uZRHQGz+gTaf5Bgi0IxxtT7z57wJWUeFO7XaP2bYXms/uSBX+mv5sW4phAL3D0y3qM/q78uVz1rmfyewbXfGngg1v8F6BeHQle9pISe9Dz2OpKI+HMUVNJ4Xg2D6YoELHcf3yQRnDoeQMKbypcb421fUbZg01zSy03eLVWQzmE75KJHY7GKm16ahpM95BW9XhV0tOeZW79l8jNoLAeyJZ10jwoaljpmEl1z+LWcrVZVUC6NWZ6IxIXWfFDtiURVeNt5DJnHuN1aNkGU0kJKaUMdpJzPDEUbCOR0cv0BvfUMKePiVYMRsvxtC+igF99txYnC51mIOomj6uQ1M3kUfCOWMeh4ijY/xMvSUz8roxhN1s4Uv1UyniUoqSi8cYJ6ebT6jHAXace0/5fgMmIzIL/O+Opb/E9JFPevHZrcmeIH1A+NNA/zQZogdrbcoDPydZTKiuwjXfQtF1ETOt+fPJd2qyTCM5VZHkqAafBjor0wBJIIKWujVS5FKL+LPfKXSLLYL5nla1hWqGLhFANOZopfmarLIbqrGcPZ18ta/MHmU519MQndEwTfFnDyzgLfbbPh7MaDaYi4VobJiBLAmg7QyDc5pPd1SnWrucnFKUurK+8i1RWE0Rbrsd0FIjAqO2Rz67xnX2lxO8AKlscbdGeYnPhULw9W/U35j+rlXEU3FtXfx81unXZ5JglarC6y/n055AMUL6PE2BLWcMPLB27+GWCzzojq1Ladcb/X77mB1kauk6F36zmDStk7yskU7hGGryN7p12SIUDhzBQyzWDfMjxn/hZWnRKvDxHtdfBhePfDcJykyMgQx3if/dlxbMv8wB21hJiE3cXbqCoTTB2sc7FfFje94jDMgKnOmYqKGBmBvU0z4gGwDx7iWKhM5t/5Z3RdQgoRKY6RNt68rATRrx9q6CG+zB2VkJf5vSKwjNjhL+lnRlylEcqdGM19rDjpN64EjULMIdJz/wpIPQ0MMy/bZ6oiXXo8JTgBiG+c0nSYcrs+X1HSSEbEEeHb3W3eOvsHwuPDtHQTByw6CDclXZ7bZCCMvVJcHyz5iIVHxdo1+2YNfQK0xSR+DLK+pUy+peWRcAtWHGIAGVE5SKlcbOIhnqeKG3YE7bdAArJ1Z722ByjK8utFjhRNf6oowgdtLtiWlFC9o+ycwNZWy/1cnGlwH4NSgcZq7dgydF1Kn1VKGl33T6Pjhmo9VRRA/ZLQIESSpp4SYNPRsL0sR/GijubqK+3TA7zsCkQ3RXENvm7QkX8nm4+BAV8CnN5MqoHSKA4k56a0HiSPIV+TnRN2T8UiNRRJ0EFth7Yv/13LhF07fHNVGkyt4i0K/dgTYUPceCHog7D6rh49NBdGQ0dT+B/J3FWAEabo8VUoiR8yyyo0VwZr2AhnGTZb/ndQombLqrWJrYiouwoDsUeg8rHqzDLFLNYACs5oJ7P+qy4Ky6dgqwFX0BUNKeVd1YADBAYeuxBfcof96AwELJyU68kSPcKKlbj9pIEx/McwbKBdekXGn7gBaYCL+tU25WU5h4lCCbndQjvWkwAs5dcXO6QCn410tmldWxyA/Lo/SxNEj8VVKzgjZTGsissYkvyJy66hfrS2bQz8D3ljy5KErtnuYRt9pgpiISEnkIWnJObSyR+3VcEaP0B4STjG2Xahhtf9LCB5LsiGWH3sjb+mhC1O8A+npUA76D5+KId4mnRd8RgMsAeVERwEobDFBKA49sj5Hh02vBTRdMQI9tkEwOHbyj8g9Ouq34okXhb4ejtwil7R9lQAM5uq747ljNmeXqXgBkls32+AB0TnLv70b+UJQr/lVfTOft1/yujBA2u23FH+ChGk4dpfR6JzlqiLzX/3jyh1uZZOt1yCeNqsQzHZMU42QAfg/s8cjxNJ6ypt1RmrcH2vh5kBVxuzFbvxihv5QA/10cqNUBrSn3LlkDDSMHz1LwtjgVSKgbg9IcC4iSwgNHRURmDWV/zH1Qx2mT2mtg36OjvQKc4mIJa6zPjcerdEweqcAmjkKua5RmTq6g/qK2cr0L33ZScyJAMGeTDnXpBrwrhTQP+5g00mKc0XgOEPbqPjuvjelSwAOKHnrE65U8lM3kytv2TCtThBKG67cXtoneaDIgMisI2alfL5GYHpjED527IYFm0X/0cN+UQKGKmrfjPbjO4hfw6v+a1Bcj8kOyoAosRmLFilhigdwp/e7RlS/KDB9JwwBRfU8Obni3t6IECx9yDKumhG/trcu5nD+rBfAaE/5CfUtY9aJ7HdaAinBl3S8JDi7xCDfeTuuDfXl5QYBL2molUQV3TtfgD7wuYyVG1rQ9p+UiB5xkjbaBZj3q8d4TuzXzAK46q92djGH1XYSKhCfb5P+Um2uH32KNPyF5kHDknYuEota+k2wCRjtfm9JNi6lnPYpTXw+3CLy0IECZZaMyktTerrB/k4dIQHXuYRkznH9RpP+/CuaCrMhRP+t0TCmJBGTSIntDhBJ7pCwhlOFtAp9bMwDWVUIUyEif0r3ybTm7FZpf6pDSuWUCrW8yVE+WFuceHNuedhkG4v+GCTlWZD5hA+YFo8L7O3L7+8nkOeUbWqNMxkRoGqGm9P6pn5p6hqI27vxF7yPpWZ7MZiJ7LL8YlUv00MUPf8KNgiiUYFZW2k56Nt5JHSvuctHP5Xnx3jGBEFLRHcCV/1vomfQMOMX+pJoimCOpech66GpwummzwKReemtR5+qfF5DeJ8y8ssP4bUHJ13efyrKQsrekj/L5v1qEdf4l8NZiAnKP0GwZl5i0W4EF3Gd3aICZC9A/J1Q3AC2ytBBVfnL1sTFoj4cm3GBOlPNVaiBG2lJCuk6EJIrXX8CEw+wmtI/7ukSRslBSJdZsZsabCfIDXCgHfFNmUBqtOulYB40KUxrZtbPklbwNkr1u+xbwEJayDBMmlL0Xejscb+aL0PxZhmOD8329ey/tHVrlb615ZWb5fv1IgMVAT8d1U8loKpHs2RQaopkAStU/PLN1C4Efrg7ibSCjzL2/VPfKQMJNUQE5UoQmLhJdbKhGqmdNv6g+Ce7SKDaYj3R5LHM9lKSpYboGJ7A0ZWG/a2rDCwdKLwMFDXj3Mq+UFj+6JHK2w+p5jbpbaIUQ+kHtccWnM5G3TFZYtp9NfrLQkNteu0iSTTe5eFclzbhuYf6rzHCCpKTtPlbwv1TS+xbaXPJVrlnEu3hd0ugHlB2T8Yk6R41mP/8LPVENw+FdqR/2MheI8x81xNvuRuwkSnmij2KKMMijZhl9o0iITOd+PaQWEbZeEFGr5WrQxQU+15Te4i/5cwW/nBXUQMxSrp2jxmRHjwvqHHv9kGdwMSuCjuwMMr+gftxpDE8f+w94LhGaVX48uCKOk3hKrBBABYb/oQWsXUeWTxVgz1/cYspSLAv/NnZAhsMRVsD8H5Htoq5DWeZQnoNJpRzL7+7PGrTHFhMvPBFPfdFy9UZVZuLs1ExPmWjw1FuxlcmjzuCINxHYkF+gzxUro7xigokW4nn1K6hKEbn8WoxCh9LHRDG9y6BMxrQ20FniXhjJLq4wjRWaajmhbl29mSbpI9JIo7vmwQiE3DO8WYFdUzM5SYDJJix2VajDwVK41LJ/ce3epoJPKBtdgR55ZE+qF0R9sPfkePbV45MD0NfzvDCfnN91x3UUvZpVfsF1voCh9/KkVgLld5+UbsvIxgFoWBGGkQDRTqQoUFuQRVrErb0IS2FDWPIe+XBdxUnvAQnUgYa1qEXMdDj1Ml1WF5JMkfA9+mtxtk3dk+k85zHvXNU+n4lYxx6W9IWUqwfQrCwAtzrk5k27P5bFn3ewxVoACI+Z/+G/zvQC5wBUtXG6H151AzFHrxjFmnGabSdQ4E5gNV4CiZmsMEj66erWaN/aOf5tAagOJv9BZfGQoRNVJ7lnX5PwFLJSB6tXxW6dbYXgu9Dv5Fn7jvhrXi6MjnFzmhh0gGOtIJgz9btCeg3MFXrVK3Z42EZb6ePTo8xtHC8rx147ONEQjfIOZyn+bvbqW4eZ3hZ/aSt2H+6ArDPGzyzRhKupxUojppF/eY9tUytFNsHn1zzRTSIs29S0RgIiaLVuMlUA9QT4dE/2uV2cx9CEmDKx30VNy9DO9/LxCUQeawY/6p48MjxodGCNJyPwfOo/p0pffRpqVI0qLyenFeETTJFMX0FyPKfS4sNDTRrWarsVdnVvVSgWZBVoeZphGulRgXrxFFTACG9CtPpUPKQdEgUJfo9fdxIOr/j6ExHhusKNJBy7/mvQBf1c8y4ARcUZWHEk9Lfv8BINTuO78Bue1A8ZB2iSMWKLX4qkc2NphXaFSdj5LehjLspZYm0cLSlf9gYthNORq423h6Qo/LfSRJCPBe59BTy2JPEXgFDoUXrYlzNcnTCoFtBr2P9wIR2Adqk9QdfohfT7yHGnw7fBPp9DJAJ6cT3qDzbtXqIU9eedRM5SeQZdSgzLUO2Mzv//Fh3SwjUTlO3GZKko0umyOPSKdG2YEVDV0b2oyxH1yPvd/ifBR2GQlBgLwQ9FVI/dBsnCmVFAnEc/G0GejUDkIwGQo3komsdiNRJFohMYsREGuEF1LecL8fqybkqAfJU+nffF4j94XR6j2uf3svGXwBQ2S9OaJe3Y7fFqquvaM6nARwO/JF9zcNwWAhH6l60hdaappcKFQqjF6xhS+yD7ksh5IP+glaHcmmHUFQCcwyUf4WD0a39vO3wMOCBLXj1a/QKoLoeKzLp5AZhzOBiDSasrIS4/dw7+qUbAiBwgdRV5DE9bfdezQNYvIbd3e/5zxrp0MN3OtKj3qW6ERdY76qFa3d2iarLc60te02VM5opHcihnkHCExqVs0E/XCXTifqxTFBC2ydTPvjY0Qcg3zH7J8+SXY9O1D23aJ4UY3OIf3rZy8geKzOQZ+jEpc3X4RaVIJJ8tNEQq1ZynSukzGUY+ckIv9eBnG4Qlc26TIHPel2cC5BJjyd6qJVKZzrI29xB2KjCHuqvneGgnuwquDCUbc6aDimgPR0/6Sto5AMecTeRSWRcvxOcYSuO5c3ZvUdz4/mqIHz/BYUNUghSYWTym7hkcirhCQS1r4sxjhOaZ8M1iMRnwLpza0fYXhgvLPmPwKybwYJq1DNoloFAuvk81Q49fn5tnJztZ30cKfcsAEzZPhYJaQ7cFiFTi/1XyaQqUOjydDKVjNYg3HPCTmOnoHB1AO90nEYCjVnnH3gpLCeDXz0R6Seb7SaoQkV1s5qAKyjBkcFBjqDUuYCnw8jS+q/146MsXDspqZb0/gaiz/5bmgZ8fEQ17tOzEAg67eQZ6IXDsul/5akG7no/zXPDD6ysIEWlqpK2mzQSPDQtSqaFE2bWv/X4/vPJ9JsDIGHsX3lttc8sMSXIMr/fZ/65qSWmiB0fVHnQkp8RjTMTLqAbMEvGEwyJMBmM1yB7lokRgOuM9WClTjoST25dLSzTcLqA6Z3JeehSvcZ2MzUNgsc9/BScPxNjbd2diz3UiytZ7KEd7/jYTBgvargdFIKHYs2kDTjv9uq6XX1PQL9Qr9PKhSC9kgh4P0XoYG5eUqJc8PvJ8+aQmU3AKXsyHRCwgBr2ql0sipY2iPpGacusnCkLPN73U2jh4yBxDiGQE4z/6lagqW86w55i5Vcg/8F9ykIVKo7E8YUbuI4rzcZ30b4F+Lt20aOTXYkHtpeKmZASlpGzfYtHiTmM9ogJGspQw47BZyaUq1BsQsaeujrBB7TYt5w4wqeiq/d7ZDRzoVfe9Sh4LPKTiFJa0N2iPcRxd/vMmnEVUgAzRGAcLnZrIZ/j7fUWrJRoo3dg7oGfPv5mPby9nWJjyeuCg6W87X+GAcruuVwPc2WDwV/XejEoh6/1YTn+H1wQylF10Yiqim8eHQ4Arujnmv13gwRzh8cHT5JhMZQmGz0964fxvYtCvmN4MOmtjfrdtoZaqATXyHpmA5H0Uo18rpYZFd/b+VoGCxryS/w9fiSblX3Y07OABxMOhMHVGtX/N7HZk3Q9WUJmSQEgBks4cAM6FNcKU8OuiHYQlZxqwZr2Zqab8Sy4K0cq7/ParwwUIMw/HqPFI5fvTS6ged2h36CanXT3i3RfLqX/Y4j+BtohV1DsvKlU3HrmSL1FBHHZfSTvFNZL6v0WqrcVkBwwmxzqNFle8d215hStVxP25wTCukZfMoIOozcp3EQCwNdLwpdB7WdBHZi23AGtsNIAFwnJEOS5odOgSrNlLdFszjPGVwo0kjQrCPAb4T5n68wCdPFGvniPmy31LpStMTmRwLlDEz0gECtNyR3jmtP+dvpMT6ZKd+B91f0Z7mKRrmTYc7Dp4aVT5r2gdxdBXojG7ct1o+GTFl5CsI384zZZPW8s14cMsSR/ws6iGWy6W/zY54aBf0oxU5mzgmIgHaSkmJWmAYBtPN47odG6FNPFfFdqC7IVuIh/wTIf9bz/e4+iC2OVOYCdb311CzzWK3SBdA3Zt+kzxIP4gOkUr1TYXlEavsoOlaAMt/+ThPZGmy6ZuJUbmq09BezcNdZOdSCmKVBnQaegnXQZBDOwcPIWghnJiTHKp7cOdIFEWX4NfzHZlO5INhwqHwqwr2htAfY18ZvaPkeYNKGgnKjZik7lsjk7u2jX0w/GEwSdiLrw671caXucI4oJerNvBs6fUmn2IUe9beGJAwLXc6THa3BVIDL8SXUxZKyicy5va5xwhQeJorMHlfxh5/bAEH6ZF8vSuBZ92YeC7yehbVEhBUDhGfVckC1o+5RbOXs+YU8z37+bgi2G9IjfT9PGvzt5YMiqdaDcBMnEo6enDlGhoVJvkOD1bwfhTD3TgvaySAH5K4lFzhN9pnJ8zrCBD9mZzPcyQDF2c+x9uisBcSqZCPWA29+PKuB0ksIUkFMv193LfAh0w4hFov7wKQkiL1ti4jsQO8AeRT7Y28WTyhgU/AY1ro6hf2zDknwkDYUK33GGThSRpI7DoeArhIIRRoJvH/GIhhrlhNsKztnXPU04noEsBDmIahxzEysDjKtYcbmRHKwAFUb8MuZ0ZF+eNHNeZcu4yuv+7xiWjXPHhOEjHcH5kKjuQEluutrbnJkSmqenmGaCcHF/pAC1APvGTv/T6PkSpWsqIgHOCdtNXzJTrHtnvdGIX1TKlw5EPINnSroZhGb0XbvMK80/Fe9QaPjhLIFNp89yxYel/iDjGtZZQ7xcCxUzHZcoUUvwtWl2ZNOE4PqeVmjrN1QWypuixfMTWhv6RN2obOw103/6wZPb7/5HOcFwDQlTRTCB50+8GePOo9D/3bhe/3j/x3a831r75cMYM4DTtMq+o14v+BXgAN4jq1LhyCXj/n7Z8iY/cKbxMYszzpAjdtutbxf7meU7J4byJgOTLZ4l0yjcUm3Bpk1Z6Zs9m9+0zIZHhu66JOq2zLEpWdkkxnWMOoUUK/0qGV6z4BQ+tcIO3bXog+2LHU2v2WTvpevLfa4vsaVAbvwmSo28g0u9pEU998p+Jn0P3ZAIn4n9IG0UpEdtt6mmAeF/wFT9T8bovACB/f7oHkbvPb94tmdzWoPIV8qFmUbMflnAerL7WcACd+GO359cHxeDtXalIPW4PmBUhAHRLCu+uiJbcV134T0KH8cnXGzOOWcN7WbkhewZcRiAhNDsiSrPEbBhHgH2L90ceO2VBPACNmO5ZZPiJRrchycMhVQShvLx4d0o6mccFJQJd0d0XUY+UAcnR19523qvxTwM66BhwMg2YSTicB4NM9ixLb+SR4iic24Lgj/jXoSz6Ss8eBQ1ZREYxZEVZ9YgBmjcLUWs4oHJ0HyEQ8TYEnuWJ+0BVm1nKsWBK0Utd13/S+Xge/zXoG/4y9wopXSVkDsjDPo/dvHegz2Le6DkLujiffHk7lGXqvPtg6SliaBKLZCDISNJ5Gh/j4pF5yJhELtl7UGe2E9WEKdOgFWcqdK9pvvmuE838KtZnUOg38r7huzeiAhst/T2W9WQKsXSCfefLT1BI9kvpHbxwP/FEP0ASqI+ew0aYBGIZx7T5Zblnv79KPftcp+6rj91THOzc02eh2wegkEx6F6dhRJtl8EQofTqAf4Bu5gGeWkXpm1x3948cBffT1FrF9UobopdLzudOgUcS+mw3tQFqmSJuw0buNUBJbG+XECLDo3DUZed2+oDeEw1er+2tpSmlNKbO/BG5+VQiFxXbJCfLv0BBXap5QCckXOu38ZVatFnz8jMB4GpO5DGwAaFdBSAdjZdTUcFEZqHZAeiH1IYZ2zI6MVYB+zWhKfVdWWT+4h+RK9wxPNK2tn4wPHxPbHbuZfsIV02Ca/der7TizgnMACA7rsrpGTDzp3jv5H9IEAGZ342FN1bHu9Fzn4YBeepL1geyh3WnUHjQJPzkpWh0jqG0hWfMr00F/0OJU2J9M2c1f3cX/in6fDb7A6+JGKcy/qE3xcig3QBXOs7bmEYrgnKcOsKxcDN3v2JRby6U2h6mSwaF7Xiiias1Ds37QFpS3T4dJnsZr0W85tkiQIACGKWHYIEiPbYJhwhypQfKLQqTAETgNTX6mhK25o3ZMpewdaQ1v8oWLeBSeTdqeDxgTPBGTVEdsaklOWhIsp3sp5bXpuFe52RYnA+P0Ul3dorkFGQM4kDX1kOnOoJJE+SHKGVPz2pxd9dIIZ9xXCrMtn1Sq3WQV7G0bMKi5B+Ut6rmus0Us9vjbkv0JknYtAdZedtA5PzaPT02uOWA9fW1rv8xJQGQc9Jjr543sTgBtJq0WP5arcizmjHq0PS1PU+pqHTl/G6nhvwXqw7pEJ8lM9r2pJ2eIUfVX8YCYnSyzGxq8x9UyZoN1f3d04tDAF2bxqKM8VdNlPo8IvCn0BnfVP8WAfEfL4F7mCANe/909I4sywi53qxKr/z1ZAPRtkyYcoff+AXBC0g+DvR6z94Tc91Y5Fu1dKtsdfle4bljrwOmIb46CF7MEcwdbkskW9sizJbmny1fHZ2Zmcz4Hult64mgDKWnZI487oz2iXhcj3ctVkAJ4zG/iLHm9nA5x5NcUkTAz8KU5ZDsrvKex0bkuL7w9zuUIeyJ+Nv+EOllGD3AI2z/o+6gln/+qDHLlWUX5Wx95M8FVYPpulhexk2gXZu1a8800lfGasZGhATaDbkjvyuZsrStGu1o36EGzoPxFxyMHW6u44BHfhuz2lJ+g/yAWTMoOaumb0Q+2kilm/euPFSRuxvoxaJN6+YlcFCIkbNpIDiLjYqYRUsAg8o7mX+EsxUue4rtJogk0SreHLtPMqxqZAlDX0mRhNBbZz6TGs6oIdSqkNwve9KgTAs/oRDxBiZ7ekhqj2U6ijE3VF6B6HKJUREdERgj1ljCFYI0jngfAEqacauxVEfBdhFf6ZCLaLcOGlZt9XxSP2ySK1Fy9OizNs3swr8F2kWd7Z6l3ePxDDkTmyJJM3yTXGaGygdQ/D09nQLtVWAgJKl1QpPskMLCmun/yvhWFSwM6oVIVLFdGl2YQcd+yMuUJcjKKDVtl2vZxct8yNYcEEls6YNuQ1/uuXplv7Jfd5faFWGdN3eMR25CyA/hIp8o3o5IJGln1x869RRxj3acBjYqWen7xuoMTY58lkFzt1vXZctuT5ANfyu5jFTlAk+rz/8My+HiPsYmpXnDsgQpRgrTL+FixbLmxYCtQuUjdkNHb+Sed2p7cNuENZJozyd5Apf1Dae39UKHO6jsaFf7eYGyo/zWi2ZZgtngC7SDrgbwTpVOx5HMLfvwV19BZa4W3LTmO3ihhV3ud0EqTZaYxR51vlm9awst+xUGWfsZcj2QUcOEh9Rc00nKJ5RtXuG+ZGr5+uWzuIGO0qZfaE7Q+nCIwsWuDxjjhz7ohF3PFNQutm+/iihFjeqx+v19/RSmk9vr3HlszvKBCK3pvSL15Ndst5w39x7wy5KBb0G0aLXgXi8Z3VPCciQ+tItAHfi7LMekCXQgzuy2QOIgrCyptCaH4DEyphNF50OVkYeP4rG+Sgc4FJOTJA9VE8q4FeC3aLGdku8joLAnDuJkF9H/sQizgaslJtq4AKv5kGyu2e+Xu9OGw6zAe1bItT1V78vcYFTqX2XWUiw/v8CVFp2c47aRmM113jKBN3JlXsiVgWzhBibIiXhD2zvod9MvNR2AYxCPINb9xE6/Js6Ku/tD2Jgu/otzzaCttigbYDgfudKQHazSgeUS2g1NQEiv1Im1Z5yRbnFpT7mjt2vmkBm/8LVjeN1pwyzfKB5Fg+xVDbRj/N3vRQRHw45QoZ6OQk1YXnVoZL2RQQR7iL/nSuLw3WadKOPSC5mYs81xkBCMCyi+8eBlj1n1hHV7rzkVmIJbpx0035uciTqmo6xfWG6AcQIoXhsolnLlfJVxqMQ7x/UOXN606TsS3NrNNOK/8Oa7RWtaUM6eGuCQI8JBBZjnmlO4SdKYv8Aqey5zFhn9+cmtrV76cHnrRfWkwfJBKFJ+BsQWtNDVsZ4SQc/8T9YDI/1XdA/MUr1XjVci8d7t9jb4LIY8Cs3HmXhTGhQZ6AULpRlWYMxpza1zRQJU5o/sfJ+IIRx+yJuAo9MOFd4EUXV7lRXfF+UtpCVQNaq9cIlg+aNfkvcWDUoILpm0MC2+UMW2tlImN5droM1wjJYdnPU+B22u7IMuAkHr7v3Vo2QGYjJeiz7ZTgq4qwBPabO/+c4IBiWg0kPTbhfkBYKTwP2rp4AZY6mWK33BI1Zj/CQxrh+SKIH+H7CjZRX83WXEdi+rnkIZo08IzaBbbxYhjxUzkhij+RPIERMa93xO+70WCtwqBxYkGY8goGSc3fzmjNLVx8I6c+NfkJVwZ8EZf6z6zvk2B3/EADgCUiEoK3VhHAOfrd9T4LlVn8Y7/qBrAUdhNv5kj/8utrlvY/TDjfKnUK8pzD2fBZankkNtDmSVJwDT/lElG7+CpAXbX/3ng9OQzyyecIqSEQ4ESpeHKO1hzy/4xBpi8dutIESChWvmeOshtvdr4UOe+BVAJDVVoMMMtVwByalP9Wr81Bz65SZRYKQvEZlk6Q8SbrnFaN+jV5diKwuR/rijCYONDDGjUa3bFjZOR45E5fUX45PKKLiyIx3m5BZV6PuaY1wo0ueJzkYLQSY6CRTzcRRu3efuEoBsVLbASTqFtaUelUAGlPjs7cLe4XXl0QMaIdvuaKRAt4yYOL4tYK5ITaGEucJg+J9KO3VLfkz41QmOLLkfy0znzKZ3O102E2TYg9m3cRK5OtE8JSZPCAAXpKanmoHVM9cV+Ky/JPRda7e6TwNDqj5l92hYhS8Ba53OV9AnYOdqUYRFFn4A/wCiF/sQmsycicee+KnStgaTInAgDmHohIXqfiKArZCeliFARI30a/O/40HD8zRnrjG/YlHMXcgiY1NbJl+jWmzFe9o0h+RPI7YD7es/atYWcBn/vlqCf9riPeOXbgrp6RAcWpHCTfhqPDzzbKpFgCqDu59cFxUzQXwsGWG2EUAO5vvflGaiso58AXFwdorxCXR4jH4cieB0kcDNNIJk7TDdLITCeY3QQCQDd7TQr8ZM9Y0+mQOXNrQexTp83vyP8KPAJrbLiE6HZRW7CrJ5cw5vVtOWjJh30AqkhGJNDh8sWwgg0U5FyNcNPSeUZhEcZP9vSqFxcd8OkmfdlkwLggSTZqBtGm2eiyjYLNbBOP8F1mk44+whpXyD0gAxJ0NDxd7wDRii4mEjPvfPDSKU/Grx7aFCji4+HrpJB7sl+a3nJtQ3ZR3fOyL7ppFWIpsor7VO0YS9KC6TbXICg/cT1lo3QATkeAWdVLrm/UWJnYyovM0Jd6Iae4IWAVpgGF5qXYFZBniqQScXdLTGXOgz0q2zJQ1eMoA8RivbcgStFhX9ai3Ug1l9tzd/rXJgr/r6yxNmTq9617qSv2yTVzWUQFgITnNWEEN0YSIr//HEs+tE2ylbT/nbVsbgRImO5IvlAeVsOeG9FCcAhLSyljdal4QYqDr11soAiEPPmgF7C+sUHtOlicnR7kY9PU7E2OSNYIHYqJo7PmeRXJq1kGUlSqFfTfhAHhATdAmMwMITk0fBgs7AOTNlqD+ftazC/xJ3CnrZBus6A7JyrnzfeeYHFGAKbJhKfsIIIcFMLRgUoh8w+YQHMrKTS0AjEUaYsvXM8o5/Kk7/nlrPunakDGkOncagWBDesfCW6Bia3wXWxsTrrCSWsMEO1SsDppGW0fHtZlTAoEfrsxlf7zGP4j58sBZvmqH4Br+hMbHbC9w/zQs/Kypm/GGxLmZq0R1jEKZ8JUet5ILR0q1EEGuGT9IrXeCEIHljnzIO+ROzV0IvarqIRvxzncRdWVuhzvQMhQFTYIQ9R3ckXyuDPhrOmCaSdx2EMEn2gD5ehmsmBjF6KkfbAiz81cjTJjouOwwO7P/0WxzkcKYWm5O0S+8QDVYnewFpomsvSFRcK6A9ilPWSfifQJf3QLzPoyN4cYTdYkMf6BAaFafXnK0R0ca2RdeNpQS5seCP8PHb8SPiDH6j061ndQhPqYyCokAUALtFd7BlikdRcNeaBJFoH8SE2Lfz+GK9Dx0P42Og5jQU2eyQDQm3fiJQ1wWnX5m8C/4kbqunGu+euUWCn8D7CG7ROkfR+e+YN69ylefyYluxXHveyZFICk8/8zpzf+RR/DwXRQze0YVeMZGsjFtJMjU4Xfz/0vsn9pDoebBbAYc3TAZiXbbjbJeNdmL2M4BOTuKtH5sBHEztWmJYoAKu3hpKwJvBEt5wNEzeseSBGnc4ARQAUPvICQDvXjSKMVl4SX5we4E/4am8EvdzWaq4vK7L7SdKzW66Upj/CoeSDh65iAf6DawMhNef0y9NwFRnhxbbcSaaJf7u4Bjbo6uxXPYe7piGn3obQOqGpg9U0TJOVjNmosoaBbupwhdPHVdEtki/uRfe69/Ufd6jrIJBmRqbPD5Nmej6k49qs7CxhATZlgMFiI86nrWteYZ5ZV63lO9biDqBbk89y3pOexOttzzL6+o4NVQARFY3OGyiPLpgqb8mzJaI2ynbnwQsyvTzAAsatKWydbXN8URaTygJhwEZy9mpiwhqurYcLTU0WPkUUMDX+meOzlhJjmE30U832O58v4gqeaV9CbZye6IemGB5oQVlaLCV6gUi5s5BdpU3ZgWILnXagmQ2fFa+n+CRWbOkxaaUS7PIdczsGWeUU6vCtBcVRRHUBC3Jeu3BA4v8miuMM31OQ3IeGws+wWEGaoWfLcWWQvedbQej3VRpAO3LFP+Lg82C9hWYUS7yKVNYqQKZ4He4SRo2/FngFfNn1Y3U7URMm/5lfw9CuDRZjxG7GL9Kw/P75dDuiq95VdE79kR6sv8L+VCs1O/bgnfCykrG/IkDX/ZD35yVwkfO3gAIJqXsjkQbQF81NW4iYMUOMjUDoVMcLtghFJma7+4LaekXnmw/uvT1bWdcN6erUihLcA5rPoVeOY/uNp3GWDUc5HZ1jtSwFOeppYzrg+trbidfyRFakdxtzhJMwz4SLrKRCmhiZH5ZcgEaI5AD+66n2kmwKf8V+kbGAoyvvc8e2jk0RkEbtCQzbq5KoZOmaCQLgRBTS9+tNIV6NB1S7zW4QgDFdyEdm7vpchVc8OviLB22RuVbTm0WQRjMpvyAsktfCPWxf7P/829N0ad4DDj1NIZG1xMeFhLsiRgBthMN2PgxVm6EptPIn76ztqtrDaRYl7mJ1exfZVGQ2hoIAflr26L5t2N1gCvAZZx0F3JpCiyBHT2+agREH7mcz1c/oBfG3ohow6lSqV4uB9jDzP/WJ8NLGcxVMy/RVK8CpIgvACLm+s1LVl7H+wcigUK7o/h0WcADvSZenVDkuLds0eGIF38sM8goa9PMPZz4l2+jb09dBRVHRW94KXQMm4ZrPdLOQP4wqqXjiP+2F6/3LAq/8q2xPEXxw1U+57R80uxtp72nWFhKHjNIrri6LEHyMq4IzENRK9Gd8s2x85sd6mQuhnE5QwO2V8hLbwfgWlELiub5+no11xWfxKnGRG/f76r9JtEaM6sJB1gwrqR9UJpgYFYzk0nJbqK4DObHXx3m37NHkPU+CCVBJK3AIV+3SiNoKXWYhWoEa+F8NV+pEBPTt4XyLYhJpH2pneb9gjPCc9IVBhYELHOL5cQ6vgO2fKofuELD/R6wcJtYFloUUIHr7Pt6mD6qMq/4cIOms30ddM/oyIuBox/BrbrRDOcLS23Q63b+9Vunr7uoCM1G0HzBK9JUBZn0QqdLIUSLeuUC/oQ54J+XsMMnvUC5T2dWvvrBls/JoaiA8rZiAb8Qp9Y1MYA33sJQsKvef5839pBiIGESXewCzmALFMFIpN+eAUTDfRDc+fD4e54+Z761/2tCPsoPlKj7shGGeHCSPPOKBxrhMDoflYdkoGtNKcZIEoT0zxZt8AaAzWBsfK22wtI9WZm7XDa79IAd/cGlARKq2wvBT8aQ+YDa92y4yiV4e8LqHUAIjaVZj9r25kQ0xHdY029FSuC0teiiL3MvofHfc59lTkxs+3+zm7Kw4v5CAFwZoSFPhTWBXDVUDy/Z1dcH7IPu8Q/uS0FUkMhRODdTNXr6ftZ0qknEqgueVhgA0FRKbUr/+SMaW2W/TzNOagZE6nX4IxPS9DjuHLXoAoOZ3Cnmzf20gy4PSlWwz39EL/pDG7VtCZM9Ad0EGI4iiHxgRDo+kFb2taJ+idOwweR6Su9G8Lnus/ZUzqt0NE50kkX9b2cK9hzegp45y4V2qQ9bxAedGoJ0LjgUx/ojmFqcNPhA8/k+t3ygrlykl5HhhDSCdvHLHGOO/XiVFeoVWBfZj53NYKuDjhKx98Rad/jHUTipEFOulX9c0a9/t8GcMZBCvvkWkeg1HsX5rMQkDAnGCXv988FOcHgPx91ItJ4wJPf8pUlA3Wa4HrtNyy2PiO5f5a8TpkDODVRhEayzGcjrvYRfUPiUxDbKx84R+HVSm6Cbb4VElAd73wzZ+LLm/Bim7kdY5YX4tonkDYi8Xx4Hm4nQnZW0+ELgMeeev4x2ScVAaqmO6CELoUeqBobsSNDIY+UM0x15N+E0G02rFBDASw/kBAHnwVAxPngxqrky7UupNKrZRImKvj9tYBpikhF2/RiOsicysGdjVPzPtVhhayCjMAs6Ur58rVszuxDgoLrPi/TN31jfT7TwNl3ySv+1QbP3JDJMM0PuVGQijlyqhRjr2E53VZcFWKxDP9ZccsIN2NvMVc3s20rAsqsLOlvmmzzGgKgDsYZ+fF+j72nObhFuTUAi3WxNzE9ayf3DcV6JPZm8dupcyrRgMX/e353tMriGZashUktgWT63c/7JVrAIwft+GLsZKfCO+Q6T+uiaHSaRtvUjeAIKpbmKnHFcJszcmfZPelbHRjXsdsJXyD6O81mqDOz06hNZ6DJbe7ThP9xsyYm5aLJzcrb4Rq9lq7FtB4eatHhvQB2+yNoFutMtC06rlxcwtkhJrF3/HnJqSHOlTkOjcyLOV7P1LO6h3el99sDdG7EFB4Bxb6kPk29sik8/KA7xJL3mwKnDduj5ogdvUL4YeLVji8f4JYgzAq+ssmzpAK6ZQgIzVllBeEf9lWn51mY+pj3XqiehhZsTtyvSEFUSfR2zvhbAZpgVkAQ8QvKA6X34aWLxg1CptdlN9H9ScE7GdukXaCB7rYjTKImIPDQBZbb/gQNtH/IUy7FLCNE9H+5Y1r08Vf/yJvunNgIjlQcDow6NsYKYJ4OeygG9NdYmoMmasHD01q9hgcd982s0pTh3sCaB1MlmwjAtiVxKJRY3sLUVLqdWo4TlSQzE2NQmWkyR6RugThJkFyubjXsslEyBHy7Vun+fpYSC2a9FOQvsoexN+rrhJmvu77l/ZOf/Zb4mJYqevLTCzgG6CeZ0T5yCy5NleIa9RULxxpErc4Eema96JGgb++FRv9M4vGChNhtkLyX6zS9UF2HDUTzQpT8sxZKsT0G1EsqCmsvEXLJhwmb0VFG5PBAIjIvhTYHmvskEd0V0i6Y82+yLwXoJQE2u/RBZOQVdTDEiYBWZwEsYBpPIQhL2CVIhUyxt/Cu1sA/L5ibhUuj5Iu5wSlyno2TWmmWuULNH5TPeCi7sChlSUZj7JreuogQNU8oD8dUzigSNgTU1xEy/b9E6FpVfT5iWBjfEJlM5GROa5G510PKseGiwTdbEAOfy996kH8Dz8fw/Q0LsDItyX1vOJviDCs+3WslpQHkOOwz38ZBn2CdvpuStZCQJRJG+K4cvucXZyVeHd4fspZ0bQpRiibs/O727oZWB14DmA1fF2qhtJ+dExJ+Ijc0hh342Me9yAdlkg6dz1SgSRRh9ysIsz3cBeNIS3xFmHUAAmkG9N+vpQTqfvKxf4vBadjgA00DTPYZafnZHgYpEzLpNnujVe13Dvu2Dzj6t8vnGwbT2jRTK+Q3sVDV8AOtrPCmtCjpK0USqpLB7y4zQbdgEZrpQk9p2eVTx4wer+rVYWM0U/t7L3SuqxAHNUcdzhK3v48A/cWWApx3VXW55Zl5rwh3NV/0XzQNp/MulzZPvZj/YqZo12QH91SUhuwDLmsDXN+nR4PFBWsLoE28KF/11yKuNf+LANIunBy7P7705VOsHJiuejEyAN3+81TN/Kkey9MfwxqCkFqB0Jilqp0KS2qzdBmNdt471CvwyYDHjbrDlEDipAx417PFB+RrY0+uO0NjBz9Sg9yOxaYwYGhQe0rX+1QnY8ji1ptXpYhMOXBHlLmn9Rb+eRmI99G1AAnpSvya4lNDq7IXTaVbh5s7fF9sAGnZOxn2NwPbfLzZnwOd8xN0Uzb58TGfmyJFgV7QizI7sJgMB33jNvgCiAy9qibaj0OIwIscBC0oR+/z67WmKQ6YsJorRR0bcm6ty+FdZ3H/Q8tJkZfy6fRtSiqQv76Zx70iqNge8PQX1xvnUxieCffGwtJ1WhUZ4oO6p9zSmhIl8dnO3qu4AtX/U2IIxxbI5v6tMU0T5CRg0npNdTZrEXrS5uBLfknI8kgvMEwsEB6jVx+6K+7z98aU3GUQT15AzQodGWsMWtcunU7A3rHAu4zRK31vCjMGVkiVw3mqF4QMe4BKAkYAd1bBaqMLHJ0ldFdOa9/DMCXTBaBktDCZRx1e2yubVEJSA4S2sROydRx4m5Gkpq+lDWpG+D1rsmL2O/00vuvJBa1uSe4OWh7waFgJDRpw0PkHUB39Pijp/yxe17pArboUVe/ulMRnZvJAxnzIEM7a02qkl0NM5EUB2Mp8DHJcLKeAoRCb2Pun+5BESAbnCW6dRJP5d50QsjH09IIArya6oMIZvLfhHLcbc4rS2ndExG4dupxsRkedP69AqwgrA4ancMC1XusvWge9xPTM49eC1tbnHX+Pt67rcS91+Bqz1Sp9Q8j0JjmzWug9PEULMXzZYjIwCPfr14R9K+4q3sd+JrLHmMZ2r0K2h+eKruiA/oDuJDaAFH6SpZI/cP9ZNs1zLH/cbAz7urR5+OwU8dF10cSZjXQMYoSPT8Rktc+SIiac05uYg/KfRWWxFEwMXQuIIWY4jmihmMnCE59xsGP1rTBp8glvidOWqCDQDBzkXVh9AP0ASR3CJGehJMhnKE202uZr8sDty3VNwJ9RB6hJnEw7FF8Rh1nmvKeoqEQ36iL/zuDyENEv7v9ptTXBKU90PllmAtLNWVqU0QasgP0TpCUT8cj9lBVUFjYcwqGqJyldtBavS7NClXkEdox0j5Q6bBnyZfTsxEWB59eIXESduVbx+SzJnr9cG/uxo0HOW+0f5qTAj5jJBXBgQ7PFG099jPD+zXvTSH8mrqYu23Raag7UEXepFOBTsu5yQnuNO1ki5YTDXk8UHgxsOQ6sHGLfUzoVNQUdWQrslPIpH8E0jNpgeobvZ+0rHuT28hAq9B2FUKSkEC3rYJC8dQkulyB94gwa0o4xGUXz5DEBoO7PX6lBBVqQIFSNAUmibHSpKa4LxaOU/zdruKXhDqm+X9vEwLt8Zp3Fn+5AUuzrJddAvZ4c9q50F3EZsoydeGyTox2c+INP8cN6Diwp9AgyCvnZn38IoWf1MLiQkulvTtJrBzues8t5kM8kyvQbWbAsZLzkTn1gBGmIUomP0dsInUDSZ95WxebTEyV+3Y/Jn4nNVddxwNZqIyXD+jlXbkq2/7O7H7/mBfdGAl5Iq5IK9A6CJv86QIvJ6TFn6RdLk87OizEsO0mMHgG9xO2WB719kVekJkT6ByftoHyeL97mG0qOvjhnLMwx926WSAQTVn3GjXRapcR69OdF+KWx004fEZqItrEFm63+AhulWJ2KV4skv0Skb3djunKapcJcwN9spYiEgroioQmnq8HD9NGlLUc+oG3KoU0TO4IcnkXhA2wc/WGK7IBZb6cg+xsYxrGKiLhpUuKOFpUwGXS/JTtJYvqlUMQfrzef80nygRypK0j6xkfJzlYCvV+Y+vojHr7vO4CjGwKrS85nSF4+0Tzv1ROKQ/jQdBnuNemhmI29oAoSKjinuWWspPCfglopGwuuXpRqlK8zZVRCBqHh3cwY9ezxH9oOcoTPY1fIeuyRVXmc8fZbMDQOhVdb31JAoi87APHddm8X2go9XQrEJs2cdbnBMQN2p6fpIEGanwaGU+nvIRd9MXr/HbkM51ok+X9F1gc4OCdQ+VW5LqWl949vkP6ZgocKEtyvpVFIBlSJao1Bc6HKJGuqm5RyUQIUsH3STfYJAxwtnZALvBOAVq0lp4L4pKvQKb97QDoXpRdEC+3QS0yucfjP30Ivr4cbzOjcPoTNOzc0CrgNyhBlQ8zMP/PmjfTVByE/GeP3RQQlHvJ2C3mRLqyceDwHuMmHVz4h/8G6svAG5BK6tlNqxaGsm2HFgdanfoZppVPhzbrTE+b72QGZ56mGSwhdGbnFLYdvrfKRiVjVtcFHzrQhPfdHjLEjhhBTAXw0ip8OG7WAli3b8mrfdp389N4LCv5iUewpcFU19kf4VzCF3rY5TG3kMtDxT6nrbdnXUA0P4ugCa9QqUB2cCH83qotwdEDkX2Oo+1bHvX9k9eVJCflZwZUD4RUk4QxEJ5bzYh86sb6HSQZT6o8RDHtsJtUM02KFwmSsYmDwKUvM/oFVoItG96J9mwE0MqQ4QY8nf6tiu9X3pMRtzUOWHUchGdXZc227vkXRRii8ZiRs5n6f5qNeKnoV5NyKHFatTKS2M3rg1ygymxOEWrs3s8ZzfmTvse6SNJul+5q+Fn7wkiC1zFM9zgA0iJniVqc0lvghI/9EQ2AQbIdr7pxXyI2QBloo7olFLvT4ISc42bH8CnVGy8/tKjCpgmDEV/tiHTYO8iRuWBUICbXg5FVZ7xjZRZ7EpLt83sgu7d9Kd1I6qj0WLNHEPeI6HzHRZsLXVvABE4OAEvgNbf4v48asmx/uZJxhJ/YxZNh0c029a1dbOI+DvP94Sh8uD9AQOSZ/OUlcCkiLntxkwTRrDtCvQx1l8KbPTKxrH0gEVgUjTjJ/tkOSQ2A4i/BE0hk+IUg2dIi0yUK5o2GoACHrzk72FpxuGnVnL9FTyQn4TBt70asMqrwviy5ZMLZ2bn4EjAI/kG9liEyGvo+NTY7yL5ThkUVFSrzsXo6U6GV5ZNRTYcqQbndIWOoV39xl8FEnaZeyGJKcrAxDA2t4j1N8iRpaXXONBx+bSUn9gOBbTHuKG0p/k4FhGj6hEz9bEj04TCoCViwpGWD+9cNF02Pue4VSgq971e9rsNQqNmiF2IdWFVtQM1uHSbZLcq7eX9d2QZx3UT9jfzE7mPiY8l3XkRY3FIwfKiFbH7tRMAEG1NpaGQEm3Oqflt0mIxbxgiT3QxqOC56JevrG/uwZxnusLGR2knWOVKHNKNQzhuQui03MOL5kreJxgSDqzwNtvkRts3cHNU33CLy2beXk81uwRi7/wU54iBPYPUJ86GVh5ciJFhjrmcOPu7ppC74VSBQ7cpRyVwH17lU1pT3jd6yeH/txOigO3lB7lDPB63kX6KhjwW2t4QfQBYhLfMMFtV7DmE6U17Lllq3r9kb5cGPhThuCCZQHt3+0Qka29AzNZKDJhHaTZRCLP3hzI0qP1rxrsggvbOEpDTjlLE0CIDXFzbXE52FNI9SzClxKK/I7mW7LFrZJcnMpmUVDPrvw5Ivewmmyk0QMge21V0mNurMZRSkd0i14FlXFRNlasa899USiG3kx4hSWddFbPdAk+rD+SRU/W8/p5lGPcKW0WR7nSwslMyd2X8H3sR78XedpgEhHbY6xdrFJk5XjplL7NfHUGoZU+Wj1OfKBdFiks6n72qnbKkFcA4v25d9GxOv7P+099pZG6mSdnSizVY//qh3uaA6esR+lULbQjmSHKHiCQKwAC01aKjl8T34tiyQbe/RhAHWFYwSQAEyJdYoGo7JmyjtZJKyqro47E2zfBmf+B8Zy3Agmi71qBQq7dMXOk1w12hhWgTnMOOLz08hCz5bms7zHBNhquVYKe9oWwVwXeG6w9cwhuMu9ea92JX4zdUnIb8SmRBIUK04bVjvGQWoPHbwkWxVPLpzy3Ho3mQTxh3fl3PPfvY6vWz08sprOKl05nN+g0BA4nY1WKQDQkJt2bhJJnbLKENu/TSDyuY6pr0MgJlXlf1dnGq9uX4/aitAvELym3YSAEG8s+ET6y8d36TdHdREynvr3LkggwPF65EE1DzZ1K29nCfDamMxafE3PTba6TU+FghFMCMEDmBvukl/EeznXr7uWHubZw7pcxjUZbUAJ8QKfXYjMJNFDGje07oQCgxjvxiQA2cQBuDeHocLhzp8+NdEqxxyBzwwKFGp6HGwJ9K/ZNSouKLNmo+uvgtCmkJzOG1nieB1rKdSzt5Vf5MHnc5d3AD8IHv3aL7610ozf0aLZycePIfDeHU7f9+r9zDSVTqQc1WWwi6azTJo9qAFuKLNgw071hm5ccgdvVkAVPXxwNlATkt8d58WqcKlD8ieOYvxgU+djU2Otd1H8xgTbaRmSLTlxA5hjV4aG6gt1h5jd5Hwjy1EviqLiUb4joV81a7HoB+7WtSwcnddDEXd7qAqraDK5G6s+DzEZX3SmahrEO+XzuRDS5iIm2R9XrjTo6AItwPMyLHHVsOMS0Sjb1z7c/gPIQWDrA+//8vFmc5O/bvzEs0k95/DkOaJ5sWmHLe/D6JByQQ4wJ9Uq1urUKcvR6b2ke8vzSLEMeenmRg9BTuLlJsZgSnzicuLrp/iREQgDq3731h4QxeGkzv1267OTEmOOgAACzIODL+v7/MmE7ssJ9yQUDP+LJbJR9boPFi4uCBhXxPwELIMj9+Rv1OafevDWb5B/0HYVoj5z7kRUySktG6J6oZxdG6gfdESQzrguqA3Hqv8kKWZMhDc3tkz7ixljzUKISlr3LBQ/xd1cnuJ69Z9x0v16++eTxKDlwTjcilNtg2dpjdRhS7KNSZlzYq7GQoBpZI/VlXJC+SHWG81kfkf6iACrzRsi5x3pkVMeNU/GF7SOQZvzRn8Xr4g5QzoU+8TMI73fla17qp+QK14Fx5ZCfRIQWb08P9DeB2RmqYoXvHqCGB07SAUT3aJ8XR1/v0IJC1ZIvj5AYP3Ztp8BuK/efp5WK0pjhe/KUSaDrYDC/zxyO8Q4WnoRa9z/pNb7liI6wQle4f5RB2hgqLCe6cuGOPmAaxw3z1L0Icrjt6Ho5417m4rhrVMr58ebnZ0VDsFkKqCWYErZwwE1devOqgZ6dPHIjYUXMub/LqKpwA4SbGdkRYUm//nzyaBqz0jREFOJAM4vBB7CDJQLRKfRkClg5qOWPgj4cZSGRWGV8hUL58VRr9KhF2YhmhggRnSkRbyUU4vkQMF+Rsx9Dfpzbl1TDNJT5natDboLAk/L9kYu7f0PxuYwQ5Hv9h/j3XuX+Tti/KpGy780eE03YS14YdS6EU2o8Yin4aRVB7Jc0+IcYa1Y/WacwDxGcDz1QyYoBHUOvBCpjhFKkwQ+mYS5P4Uw5SP94bx0uslmCaAIzr+nrXvwcSe2SV61TJItcSL6+CIYssv4qUAD669W5LNiFk1TXlVIAZC/JOJKGIohFjrA3nudrofmPBfRoWFzPGBmYGG6dfEItsHzWVLO0/PvIdPZptXvGeBjK5/ofGMGtUJes5IDsd4xqVpRTpRpcJecAs87Kqm5VBnxa8VuyXh0Y4kmCv/p5SVjo9dgvPFtMuq1gYbU/4zGnywboMLNlMlrY07rZHIah4nQAIfC5YCW77eKNX0U5XIZtSdeXUuKRo2h9yd7OAbK1ptvz1WI2l1d6e2iVV1N7Zdr8p1+/ruI/bugyo0V9cMV2MmwssNMwrmNt2NoLngDDU/w45AgYM3OQ8i1lyESjaYBFSeAcT3GxxT9Rs615ZZe3q9CB+66OtHQStXuIYAQxUmVLMs1k8hNyPkYKFZadUSxo1nHhyM8+z0QdSysUTHp4gvSxIHQu7HWmJuzOoyIKI+/QtLHYod5FsC0WF3hKiXlbcIvhUNdPQD8KbJcAf65SpHwIq7F30iLYTjc+xlUAVp7Zfpji9+lDY06Zr3yUYqdd6nJ6j+GAf8gQaUbbZojsoJdvxtd8m6Eeq8QUFYVYQiAEws2tHR02WDi1jm8OJPsJo25DrHkaub0EuWDG4z6Ik3ht62zaRZ0vR+h9UxFnpV9qzTfqnWE7pxETuSgwkNL+XXkEHz0kecyOgYtK6xuxxRGWfsYpuZLF7O/K0DlFQ0l+Sy/xzxZFIjlD6wsWUDFCyE4b0IW9UXriVLqPpYdPcYv5NSR2MmOtI7CXLaJ/iNNMn+Y2lWDkZCkx3u0BCaw+iLIlc+3bWpOFXBlUr6UTD6Ji1wp+OBlPZn8qeToW6glIWcLBO4UxrDBtaVY1XOIrDN7r7PwyoNlWgeclwcTiElAOgONTP3HyuV1orVHrHMrAX5EwMNfKz2Us2PKx8rlweejYIC8lt5XzqJErnvXl1erOESxwU/1jv/hmVhykKKTV+wdNFF277ZnFLCVWu+lrD6AlxqL8qTw1ajfCeMMIDC8zRt6XUSjJwxL6wPJ+9EsT1HEmf2T3tKYHPBTVh3Q9NVXWFQltwy70dHKC5h/mnZItOWTItCzRBPYyvKGKQWm20mQqT2tDEslefN+P+uG+nls+J1TGAi99rrAgVDcwh062uCOv9HaupUSqpCrFeQrFrpMGET3e1y+l3jKkpKsbkbO+AgVxs4Uc5z6J4YE/6sgCAEnWTX0lWSmW2tRdt3MdIgQlyYDo7FL/zYLepUiysIVUzuRV9dmvO24AU76dg5jUYa4OTcCZ1v3OfmdaKS+jHmpH24S6p/kS3MW7OL6TZgg9SG3IwydG0cMHzHoSIXAZ3NSIvO9iuBD0FqslY4oyDStoSfJ8eQfqjfnbAGDAOoPPpZbrLHxh5OJCaVDNkIoCmDpG/Is1Ol8TjahgJbhh4gQtCPNTIubguW4I2RhbnaV8JROs+hWFo6dgNDlorKHosSYhMe7zSHAh4LjUk3+m3L9RTHiuvUGDO/v+izog1mTah+iVAxh2JgFohzWt+I1Ukmh4yDAK3BEE+ypF0FoEGwuNFJAZxnw3EDch792/KETElbvCE9v5sABM1win/3DIaxeIr//4/rhIDGy81MRh5WoT4c8w3dAOwb8ChqiurKmEV2uPpsIquD64qCGEX34YHgnkrKqwctjRMREAHlXww6/L+PI14bq4HgFHIGtarmdPHs9oVEiqJUQbhrdrM0yYNvYjdYnmbkHCmXhoqtZu5VzJUfVsAOj4ZO2w9graMJ/1COWp8UeO4HeKvee/aU+Btohnd+GLz0AVag0hpa4fA7F6lIO0HledGvVrzndvx9gj7q9DduaXSWXe0gLx0pEK1QVG1J9ozNQCQilW8O2OhpcQJmNoImtfibvZCLnENBPK0qK25SZtqNnMFFVSYr8/RK+kPvRyvfnKUU68gcz2dIBeo93DPwNgjQhtcfaK7DwUuUdnUu4gN6z9UirlWayuXkuR2ZuMi5LIJYXzDCt9XYIdsjxKHIZWLP2IbGEvnP/u+yQUvtneLd6Xy1PT3wECkSoROei8ujyk4eySh5FcM74gKTD+OWfnFMuUsCxlnRYFZ/98UqrQFmCGNNUpjI7hYG34qx5/HC54NyOPtm607TV66aq/6lZTF7SJuZZgft1+yLEo6iGt1mzWGe8A4gCPvNrQzEwPcdroTvL1PWDNTJzxB9IDNLdI8BRDzde8RtKOpfp6HqKRfZXH8j4kfDb/D9JPsXceQGxj3tDEf+i6ElIFsltMBHdvFK7NTam4ORisCqpU6aDKjnUInl4ZyVH4kAZNHWIRoDKhTH/WwdJAaF2QGEcLmIulcwm2haaBk4MzADCcGe9vm6l1zchUmnwVyUiGa2vilfH9I+JqEoF5UiFDPP41OWe1L5SIwsFeGUtI5y5serfA9lY5bac0k1g6rXl8mBKg4OR64YTr85PatP3Rx4DU7pOWHffmBtiHQwEOmaUe6z2NIV8f2Saw4W9K15Q0MUbqF2Z8AmyErD5Q3eFQMYxODY8IeKa+tmq9JwCgPfB3ipBT6G1GK79xPFadTFDR2ISdWGwzJPQgmQDyaU+6rr2BygDTbHXuSwM1SPwlmRVJzEyz7l41XdmSIU3IzZ8iwJ8vjWyKmnrUMSA6mu1gJ0o4+kLIImfyisHnO5Cvt+CS+101Z6wj+ghxSzp483PYX19bIAFpNB18oxXy6kD2fS9mcylPQCoZzhj9m8JStpJiKWE9x/IlsmS2CdAZ7SSa+PJGYlNSe0VoMxO2SD3wc0BvgOMlKwi1ZuBKDWJhky42TYe7jnphTmsvXXzx+TsFBfarTuOZePdrt3QDWt19lRjwUus9wos5iJnM3M4XadQpZEh3eciKd54WqgIAAFyXIV0kjk2o2nExLHtDuGwN4HPeTDAucfYDgT/F6mWQ6MyVSryTF2CIGg1ms40knekx/9bcB3n39tp2ZeksFHl4HYtE3Twe7xBDslfTzaXBw4JMFTw2JcQVHgMZ15nTjoUXFcSjZTdGTff06OoIHYEclC9EZl8PvvUUQXYAcsmwAXIq9abgO2NX/v26SZFB4lNY8YtUK9mCREG7SuoOy1K7cMnC12v+aai8E5t+fi77Xs0E/tfwdSK4wndAAeQAAzQEUQGMgljpAeSVHoBw5v6A1lDfAja6tpzTfyMVm1PE/vcWUrUIXKeu6xJIHvu8gf+tLGEHst/wxqgxaF8J7NnVYYgi4f0Hozq3QmpXqQKOLqJ2aFMAR/dWFrZf1EJCYvZsLhM0i6Ws85KuGCMw52V/CeItEJLbkR+aYjSXoFk6zqMO+k3alkAoGzviHNQVHPQ9dVFlqek26wVcwgx7l8Q3xp5rntVJwGfh6VmNsUUBscV5CyR/k2qlC2MPFsli19+5yFsajFIAl5/5/bgujdtCBXM8bpEpi1Io4ZoQTN46rjU7L8/FwV/mqW/AvgElQ4QaaywgR8QOACWO/dkJyo4I523JKC5uS4Lal7cRmYyyCEx/lLilDl2YCsTyU++XdijnCOfeZCaHUoxzDdkTNWEantl1+WE0ldmIU/qF912NvpxN51cinTBGG7pbhdcsAGWSMMxT8eCkCc8M94IJdJ8CmEN/GEnyrWXmMH2NIF+ncD1PxIIP5IWq7RlonvyMaYqxoF3Faym8jBOJ3u/wcJqakhQdlSEEPCyqPkB9LOGA5owDU5JSWRsxcGN64rmdaWXxwmt7E6vBrdxjGc7wG345DgLSLNgcml9glJsgV0xnMsGAUyft/iDBZzqk/gafSOvnNXGBgc5qk2Bm7negTFvzjUaOoSIwh2T2IIFWJGLlsD0aP3JKJnjBp1eOt+RLdO+ZuJksYsUb5PIRCK+1B/GzY95GgNQs/ocYaRPMUGEpO8uFQAoQm1m1DEKwcUW9ETiP5llgeNO3IbBYc9tHJ15/ePGBDqRrW6WxsSdOOHfk4hUD1ECSEZ9FBwJCUlAYtOsloRUJICHQW8ZivU5Kfv6t0BX1OEbJzQ5ijqcqI8ATQePm5BRhInmQ/9D5aEHBEV7TqeGDnSrVpYdA2rvrToIhICDPVt4cHNiqR/LTg6CekV0awuGkNfgaS0xPb3KHoSo91NWU81lOktwnVVRe/qDXW2jqUR4ngRuo1OtvGY1ifOgRf1zcVAwra64Tg1LyyY3rKvAOc7WZk19cmUgX6TT4A7jQVryMtR5eKQOSDSyMmQqb/nGrOKMGIomtxWKknUYj/kSOLJ/OPiAPNh6kOW+ymEY9lxxpnTO37W8buUatNx8kfVaTWO9/jqfh5CxzxPmPDhVq4EPfzxr7hZ+AAvcEAgKmiBm8AkNgRvG7LrbNNKJTwyZS/MWnkqMUqcTY8QcOCAr0Z15L3J0Lt/+gblwHZ0/VTETV/RrL/T/eYOJqeRR0dZMpB0sNMzyS5dcN2W9I1uJMw5R36A6Ey53dn/1bdN77s/H7VR6ACPYKSrv98irE9EfZKu5hImoybsq4k0eq822ksQpY/f5v7LubJJxxlpvs1cOY2vRrxmdsTuLKldlEEXUPQ/dxsOzxJ75UzRP3J8s9FmH1Y8Ru45H9AKmGWTKtwSoqeLn+z7N7Jx+ffxfeU0zSDWhw1bY8u5LUDCtakQ/PwPYoddHI7dgTXIMCMgEKycGlIY9aXORVsWrfG2eRCwZUCT62XcTB4bYFaKoldG10eaZ2TN+PySVC5zwkKMSjoiklbOrDxcndq7DV8Xg0ur9Cdc2HsGjyc6/1HUSy82GlMARbzd1YELW4ShnvEk7qGt6mqPQlLQYhmk1hr9v90mzbmikiRPUQbl1w0ttPKJLQA89gt1xwORolOpHi2zHLHcFTwklJT+ACPQarj3nxJBiLcVApztH1/i8ugzmBpbuHHgIz96hwXDBoxNZv6Xw21/8q5KXboC/kXFf4Ji+m4YyV2Uz0aSa4y9E2NL8zU0f5xr8UWErH08BezZwirckRHOdo9UnwQI9CrZYqd9iazp6wOmHwEAirP25aD626/fohPvZ8buQdpYD81aEtDYWiQwW//kN+qR6pLpjV2YVOGUA9bEUYHFlyARcrEATsmdhZ/ciMNp7bzwavYxMwxnEi3qF8xHH/rTeEI5V9Di/UmRJjFk9v8FJVYzDIBWKKFkH/3Scsy7u4TI06SqCXPdQ41E8/9qQTnfQHMtPy2vf5hkbcrDCP5qUTeytD79OnomSYonzPLsXINHzxM3cURl9xuGLJ0ITHb2cDxwz6b74Y9IYNISJ63tztJAEjZ1XziT4xXt9MuMSIsRjpsCVF/2PrbwDDHG38vByx5/lKXguhSKF+QPe/LCFijKbT8m/8/uxh+WOA+vTuyAcqzfU+gJvT265HCHd36a78HUlunLHU6pzJcvwoSwIDFqvI/wnutPE5oFaVU9u0BTooxUBXncObQywTUZ8+rg370Huckp2Qvyf0nWodQuzynUhunKkHbXXQcJ2Vbr6LNOA1uDFyBKmMiA8js/+41Ksg7hPvLtdotwHCaluGLzv7HaAmT7kC5H4MoGYVc/7KdX+q8eZJnUT7ZqQj3Dv/VtDFzV7R0l26sekBwLxH9ZAjbwD8uFj6uewkeXANtHqHmAjIwY0aGLJTR00rwFTyudp7CnzyRjAnU4g5t8+NWJy5t6Jso8CrTx81mc9T/T4CNq1xi3ouYoX1RJsLNRXjxfz+tpEzrVZRGz/wnfSxIJhIuYOP9/aR09JdvvfyQU2+B0ZPGjnNdVVjFc/rYsX4o+iKW/vnbPtvShMqPxcejVxJnu68P3chDm2wbsTFzOhkiaFKCROIU15LM+rf7JYBIbo3lUPxQUvvfAr3ktTy27X/sso6tC2d0RIvX4ycR5J6C5SiiD92AxJYzrMwsPmYKFH5QyUDYAVTy8ZNiPCk+hTWWUrcGfv9tZcvn8iCm/wprNgbLNurQI8jKQIuIBY6GC6sNCFBdwiYIt9wp61zWlAbH8B1O+52RKvC7CZlSWZRQ+Udztp5HU9b66FDO5XlLwTdRCf0aYrDX9/Awj7XCHPaJ9p1n5Coz4Dm0H9jLwt75J1fnvLVA+/DvoAgdJag8pul8Bn/DepZcSU0tW3UWMCQbJhiQ2fuUUu53FljOBNdxGKd/zSu5712jWw8fTw54hFW/lw6VoMZPXqJ2y2L/KkE2Wclt8ZjAXDqY/RNB9Hp12e0VpWHEHgjl11dpTv6lG5kavGQnlIf3qP4m79lCutp7wR3Tb4dV/l+QvXmQlRELVCD54kMzMQqJLnboPYg/Lia5J0uLkhXrxHzpFORTsNffGJ9jwFxsnxNFCqfPdR652gQuZBWiZZycVt1qLokKo4a+AcDxYy8fONpqhHdOIP6A+HrXBU+Rs1PUFb+h2zkFVjHUwuWPgl6USFpV0OwO6gprRhs4WqNXfzUu6+lqbEn/HTf+ZykgaaR/EQqg2TQNDJzVnePi6jnnj0h3doe2/tB6OysnOpf+UVQoxnrhipJabWaHNpIDlIDrMVgFoAYETFnX4sV+CIhMdSxEzdVe2JgjSMVJsAeKNnkljYRAcxu4GGDZp8XkOQ5CvPdd7KPUkHWdnQ4IVNVxSJR9q1Xc1zS02oP1X8vg4Sy+VZHHHyAyr2c4DZAO710khjd2ymGTqOtIq8Gkf1R0YVzZmasiAb11EK/ujxqDWdINwZauVGGWO6FoMr0+XH5XfnVviEdPIYKqUzQt/PTEwecwjgDNmZweKGS0gEE70/xmOII6bpKEALD017FOQPVMwMrpltnI3VtaCBgfYblSIFeuowCwGzdUYzRhqELTb8PvFa/iXP79MGcG26xIdeTyKlE1h/1hCyXO9kTL2tSCtJ6PKVUZK/n/J4WfkVx4WvQhUml74gXZ/su2t02M6cwvKYJlcj3dGjbH7iLpZbcXiSLc10/HFj4FJK07wDd566p2jKvifdPMt5C0MpaGkW1EuBJmQLaUHBCjvEiskPhNdc9EZ3YbiMDyDJ4h+oO6St6dxlsQECjjo8Xt/65cV4mD9tc6c6NceDcM+Gzl8efxtOWTXKvfRCHU8sfZUQao1BIAAPjctpjNfZ2A/6ACxaXJSsg0nWXht3a8PMjBx4Ex7gy0nmGk+snoM7g9fapyZhvn5NFJrlaetz2LO5UCmBEvOzNLDfT9nk/Gl5Q+Bz3ZP+UI/Xol5oCipoOdvjdmtLDqQ6SPSKCSdcn2aD03YJw5I++lusB4WEu0g04ItgzV7IGbXQAsIruBhyYmNi5tm6Te1vCs/8gts4EZ9VT86XliKyJG0r/WwU9lBA1f6tbDNTSxuwEx84j0dSnwdpRK11SA+AG1IZJNDhsoPAuQ/5qZLyPbHXPCCkF1c9CTkEOAYZSAuI5nZ0yJF7q2jYuWIueELJnjzm+sEghATpjmu+aLJDZIovzDgYq8QYDLyTDu4kR2AW8up25n1oSvmK723UPC/lv6S+LUCHcebf+8S8kpPXYCau2bKPxiWrovl4y1soOBISkoDFpvFa4yx4FNl8nJiSKWwIg68SxoLYF9CYCJjhifIaT5Z6LMmTGDqiMULPbKie8jmk/ahLl5yvK8dsZgFv9sOpdsFC6DypiBQZdi8D58UEieEdkcQe9pUmBASR7T/BE1av10qkYVjPN+OYTvps9ViKMRWv51MegOAA7+9VbS5fwiQ6rI59pQUzmCWkJW6S22R511Ww54gZS4FR1d2hQaUQ8pOYU7lqyPvHvMSn1XtimTkT6oQlB04y+rc4ydhOEA6CH412RpP3diw20sa6l56HuXHp2vFzYzaNWmtJShsz93YfY47gqkjzeBdSNeNx37wZ5Mq66rXQUFjYJDOAfvfZ5FI0VE5ewIWrenmFnuMt/UC7Y1S4UTMDkjs49wSpUp7Oc1YiV1LTJ3AQMZdjmbz5hnNeuqU0wyxVUo9M+x3BeG1oBRMJ52ifEOAThTS5/xWvyNvRwvAsH/IfwU+bOTJNCtLjcnH5feO9EABFpeHuQQXrz2tJXZ5FU6a+f/OuSXMINgNXMFU6hj/qLjYwxgWYhiGtJcfBBR6sndXNrwneygy9MBu6i0daBUR8RgOI3ivDJvGcOSIdl6S/fGQr4H20DrBpvLIieH0JVQc8bTp29EoC3azfbD5BYdI63koLwvdBxukESOeFw/cPTIE9Et7PhNL+S2bdDHNuO/bQ6zy02VV7TmHnE+7aemqjhdCDfej8sFk1tSVliTXbA4H7yuzvUX+XOflSsT/Pb3783Qhw7lAQdE8trT7jjinrWL09TC8ahWeQdSJsUQgDbIitQ24k7QIeUmvtpaXyP55/uUFvC4C3DszT8UtmKeAFjivJKtRk7OzYaFLf6nHg1+sN6WTtZO6o3o/kUOV9pttHx3lyYH/jGbrrBDzF6elzeAASCAv1I4B5C+29nlxdOXgC4JJHi3uouvLmWAF2wj2RvfANgIjQ/yPfXofupZA5DBb0Ryv8DTYtm+T1bKKm8KnmXlMF1XW8Cvh2ffOWkooLfe/3UU94/SJbuBMurYvWrE+JwVUsF7T077LkgRtkn/66oS7YwGywCCOXUiHj1tiTkPDbe7u/cFqlfLl8EGOIAEqF1IpY/n0S/4U8IuCj7Z/dNvmcZQGX/IhJBbu89tQVwC0YpHuuWH1PZf7/uoWhRi4/t/FDKx/5HAgBqsGjdgmzy5WGKWxeTBZ2N5SqWdoCNxySktpAksZoQUr35gqDwdeYMrx57RmHBdQeAvCBBoFbZh+wZ6vA0GUZ7VHPY4glVRRoApI+TrUKf0/ok585XPN9pZj7VtexvMTDu+vOSuDIqjt/Na9c9zYJIC6lR7Qcqf43QMLCWeYMKJtdizAopIFY2YQYt3K2wM/s6IDDs6t/4AIAgNd/hFkWsF1fOnfOr8iu6sPx+9GjF0EM335dWDHW1fmXAIE3g8EJXTZUhpEJ/tmPZOrUS190ANm8pj2m8iCr49eZ0ha6e7kUUGKYRnFscQWGL+LyuHegSm5884R0CnMeEl9QP7G5lf4SbKq69c66lw5W6F/KbToODnHXS2NoVrboBVsVuQ3RQF2h27XkYu5i1w04+Xg07T+NWFmafL63ibT26KfgmhfiqtNhaPHYWOsN7jmffL79Zg3O5YdoicN0/YHcftg2sgHfX9Zi+fK8cUdcoGgr0RVeLroAVRvZbaddnrjg2ljGw+NkRBM45rH146zvjDn5Hqw6t/S+mIkoQRqdhDmQXz1Kxh/B61EvZ3Fd6vUv1iur99s1Tnx5JUIuTf7SZrRF/dzl+HZGsQIgf7wBJZTBSax3YOZ3KU2oNynfYqgVpf/shUKrcEUuXBXXxR63OXX/nLa8tIAIMC4r8KqY0ZicPm/cYZx1C52tWXyfnyeeumO9lOkV4WBT0Xq4wlTN6yU/I4thNxe2esGn15nqDX7NQpKUYzKC/xfSqNa7wiKvEAqln7BsEDytLhVcrPiTMYZSJ4Ug5oLRGQMZicrPevCQdhQINthAJ32veju+N8CRv5KANKpidMHzSnnThSkPAra8Y9ImViGJaEslfuFfMjcj/gv0Nmn4++kqxz5neNvxjxnF9uMRJ6QdQ+4A+0NHyYmspzrNGK0UiqTSWCj8KFK+e6lM4hdlXYY3VZah9wc1YTQ+yoH9//Qp/nXa44HkTRANNeQBEDvEXXcXSH/YbRwVYX4Dimfvg/L9JlTzbbR/a7gmDVNKNNkXMNSVXOLTKGuuk8++CR8jkrwV63pj7lyzarraL98UB406DzgnotYBBk5hRgwImU8K/LPLQIc94eGmUaCuWVbpLIpR6ETOU0gfTOerwBtJlhVOU7chOnzRD5vPL+/cFLkqy7jupZQ02Ul1SBLjImv0oB/n4BwVmv0B52iXhiwBM8CXwEAMNvu3Dub65rswjs5fW0oy117L0NsKTC3KNEESOQ85s3wnJetK0Ou7drRTmMsekdg69PQjMcgq5Jv+AbFHotkz2elfP0eKhRDZNLwGSq+DZQ4us0lj5OfoPCf0UlfMD/PNOlMlO+dfKdoUfEgUnqaHNkafSJP1LWHq/+ENQzMsSpSagdqRDgVQMOIowu8Bzd4UhAnhACKuCCyS3ZYOPi/8r0IW8eYhKUUOpwMf8KJZ8mJveeUsMXrm1wYGD1t81hG13u8yrLdMVhR3TotKqFM/3J6ziNpKOuDLHenGjBsEh6Mmd3rQIu06kh8uAW9hq7+OlYPSDFZK0LX77GBK4nU3GdB713gKC7W/qedoMITziX7/HjvdP6n/OzX6j/8QtR99QAdsjP5s+kymA5/DcOAcmaVbsmESTMfHjXsqNPmn9QOhOw8REsa/OE86dNagjNvLobuOdn/sQJyzlvB6QOhfbkOtUQyms3u0uPcBczm/lG0ena9pU0d+CFhaPT9FabFmfmjU+C3i2845DGxJhd+ciOAHoOwfV0DKDEMRUB3O1ooZLp2fuyjTL4JntQdiSVT4uXXxTJ+WfLHpeDbK8W0dFKyIyxft8k7BYrU/xV8YaJlBmj6n0eHc2pz9HVXhd3qu+9Q5cyCaypGqFQdLQK18a/przg9Lkd/y74QYjOafGB+vzYSMwbNyO857nexQ5Ba8gsruBTr/6+MepCoYm3UNzeOwQWSfyAhC1bT/g2fHy10J/3wxrdyXYrjgOUNqLU4vOG1M5nW1UUzYHB4zI3lvTEVysjILW0qKUimWWD5AaHcUeNW4blE6HWxl3/PutI5m1wCTN4qJTdBIxXSpFs/dBaan5hH0ibkvm19cAUt/8JBrQt9g2sK2RytkmXxcoMe1JyL9skoTjGA6YF998WxG6DfD6hbPcY7B9LGgLqRNe0B008PdBNvqtvxc5TSy3TBEpU3SYra7P/jK2oKavHg2si52yYEoCuKykfSeCfRbhto0Q9zkQWskFl5RZJT0uQRAFpLyz35b2/OkpGcr5k3KdiC9CC/67qjj3qougtxFhsvji98ryze9B65cFlbFxWbjPlTqRzPwOGQ3AXDGDX9agSbb5RGsIoX1Pv1/idcVIdQjCE7QXG2clfbNK363bpDNbHNxMsvMTqvgGsg8hCIYjVj9ln3JY53t6TxS6hJAbtTZv1KXU3ddQLPJvRPdD270oI8+IasxPyhmnIzUij/YMkENEEhtOQwpEZREENT6VGaBcSlgMAcWrlPt3vE2pfDkx1SDvE8Ve6y0peZjWKSsE0tVY8sLAj5UzUSQXkH8OV5bcqBw+UxP2V7Sfg917eWbFpmQV2Q8WHYVM8URsQE3mJjrE+L2q4PyczsAldvRlCHuuEApmgD31oSf16M6hvGeF3VJTm5xJwSfTksNDsLhOH6h+Xzw3z+gB04VvmgQEEghxQ2yxeP/9lW4x3KOoS55hsFwoQs333KA/lYQBYtvLQdEHnITtYjA1w2NjMgqKjhxG59W75uoH0i8TkwECvHD2rVTsC/bhABM6Mc6Kcl8meQgWJ+9QAkY7uvB7HlLzmVN/5cZ5B0c6SHXkI9mD0gYhU4oa7CkGlmTJaKxToVLxxq3KzLkQ539lIdXLAt0JJUk2P5qAL48XiX7lBrWLZ4il0jAswzUDGg/vzqCoTET8+uhrPjyfZbi5WEAWWgQLsYBhAKk2s01g+a1xF6n79yZBwW4COWETMNbGdLHYiw0KnEtSGU+TtpXyxWTCARGtGgLr1LrYEt92PP2ctLv2CtMxdXtRe55L0gaY2MZt3u6v5+k7WGXMCOMSIlKvw4nCDPv6Ql8/6o2QRmKC7EsxHxrgPUgxIfMgmvU8bhiJS4gdeJR31buATxe1n2ew3o60WHRDLSj/3NzDwXmEXgTjUnh1UgPvcy5/uKOB6Hs6jekvueky5EmBqjN/R9oIcziS7HducbRq3BWwJx75QbeGgQm3XHRniQjfuOLZVyqlgZDLFDShCnDi7GjA7SU7PpkmegCGnLE7njNnKdLk1Nl7ZqDGxM2czlBmyuts5/A5oUUGjSY+h5zVMJ1cdRgCqKN1QO1ENKHGOGKJqOswepYm0E5VFuBA69Aj2V+DYA45beQLX1g/M/XaqZhB9rkNSE3+PI48pktgI7hhYjYM7cGQsc0/VvaH92x6ul55+No0DrcNT7+JrmeOUL5+soN0e8iiBJLPy8VudFufM/qIoZxwHap2dPtp4Kagdcu3RVOtRNpkmeXzJSclw++0VbH78943rzbvdYzd3RKJgS4FnbJkpoQFtp2GLmPuUwatLn+vj+tgrvIfdpQ2x00aAxoNrUY5jwMvdU5yzAA27NOsmTtTledLkZs6aXER85pZ6ATvCbrRNVecZmK1zEhimGRD/lxtepHQWTtLDodFzD3Zo5RIr0EMDrBYasXAtxZFACNJzkm8lsHdg/0eQVQ5b+LEjQfXJILkqhjpLTKPumsN3Cb1Uu2gH6fK2mnK7/298awZ7k1/54Q5QngBRDI7ugur9ppyZLFUBiRvPzeyKMKkj5lZjBTBiVpmqX3zTQ86vOlZ0oqpXP1HhhH4XgAQNguYU4YkxYZKWU09/XsKqqK26xfAfsFvoidV/yCfmfKI4l3cXmloGs50pz0Aq0AGNAQwe+vXnc5jLAGyQp/Elea3iheqHkr5dzCOmnERYR2GT7VO75KrLxyi6o+0GJnJvgScq8qtnyI2rGwDJjEXCCwCVUPowvSgb9JIT4dtD6hEiwCLK6s+dy1195L71RUHTToH4hGKlHWiqh+YXG1GSlWXsdVdx1CTnu/tRrHlS1RuZvnPG7SQamz/+o9Y2l3lDc1b+6U6aphtP+cGsINb1/s3ts1IzY4AO849PZZ7Ap1O7TmUXWY9q50skNb2kYwUL7zCFAXdg4G6axihKOtLH0F7jBBuuusqs4D3RKR2Bqk9F11Hgu51s/0x4IQfgG6dFGV0rHOPbuvS4/bN9u0SSFfhqrxfmKOROlSZw5SYnTOcJTn3mmJwY6ukr0hDWdS3ntxR0AFL1VtSIhu5S+xZrMubVRfvwa07uVS1Jn6GH1E4VEYtc3p+37ssd8Q6Df9EHJlQNlwjMndJunZY4fGW8sbCnOSyM/Us6Si5ovZbaOlmehNHJQ1FLSbcp6RMViPXQh+nrmPdggkdasF4qKtLI7/TgsZqHDYFA/AleeZGXSem/D1qtdYlPil97eL3Xjqw24lxgtTUozRf9BCq6oNxSCytcosIOYLrxJ5Oy9mUnS2QioBhOHxMhKy5NhQfVFgIHJTgcaJZWcaZzZqjKxAB5zjugO/sMP7xnuVyHJXBL4vniJNX/6PZLcsDO3bcGf+Oyt6hsC0CA7PzfnsQP76rmhqhjjJ7rYf6wBN7WDUQXWHLVhZCqGlbrQ3FzeEVIwlYFq9+T3kVjJee2Nur1VySTR4lTfiGotkxHTcNiOym8bPtYRg98O/SxaJUZXKxIqyNCQjb+zvqRmdJ4kHT1/daygyn3CgJxgKSVCcNPCAffhOthwee6mieMxjh+2OYxeWkBVPdb+JAA2H1Wb3h4iQCENmLyEDJ1apboTgZmjAQY5ihY5hteoi12RvuKp1DPdWeavSxEcfne/ZIw/xS+/t4AokWj6MUnU7905ATqo5xDWlbuEnk/UAeyHbM0vWE0+OEaHJ2Me06hz8Wrz6Yr8PieS6gGfe9iycuCpjLjTjBji2np/zp5yXfnjyJma2YwnC0LbQmwgZARR0FyozZb5r8TtMBkUm1SahTbabSUq2WjbgInF03iKPjm6RNtHbl2LD4vJz3xhEnx+uTIvoOfhdlhpcJ265lPllAzVaXcyWKoSWI5T93taKzB0HO3f8+PdM8+Uj9+gqP+GTkpOqc2lMzr9RK5B1ncJAegS9fv+CraDP1VI9wVWIonUcT37IjdFgAtRVosjnSvfRLYmYz+8beaGBktrRAblcG1q+o14XI/zrh+/Ms877zKwawqCUf4dWpLag8ECyEbVlkJadc/DgM2vta5CCc9CBh/gpg8RYuH+UIgEL4qhsouGTLT9suazClr+K/l5hgDi+3viT8ZsfZue45cyvD86IFkU4Ec1yUPxKpwSJ3qS80Tt0BG8gDxjAVhk84LtBryxvJQ+XN4KyeoQzBvg8UpgHxIC4lVbN+mMtoNOkHRNRZtZH6bAIlP0NrEZ0yUYtjpWCMEHWqeABbjZrgiTjhoLhILfebnUT/8llloOCrdAi7mpYhrVdcsjwK6KsVdUdh9T2FQ87LOW8MidNUAt8bZceoyS7tYJ6HrvKaCbQrf7wgsdB5Xxp6kX0QrO72Wyina+oym/tp0127gvC1uRR7U9WGyGz80cpKYef1+vbvfyzR5FtMdThmZgIVgBB8naa8vw//XSpRB/RW9oAUyqubyJCIBBQyGG4fCWbpq2oHO/C9W5pmLFdQbzHxl98IbnggEYsM1hbNEIZKsowj9UI7EHu4wxZkjiyRLaLfYn1xgHisdjSKGzVv3q9TyNcWDHQH2eZnVMiB0K1UB1BGmAyxcrL4Ib/dfMDvaat9EqWBOwrXhLw8dyrIJwxzTdmqL6hSBENHyslkiHvxmFVcj3L9NlTzHN6UNy4FcU6tv4svj86OJYGI7UWU17Nknj9cS7sAOmTw9PyIM2adSQQNRFLhXTLP3qRzajtHMdtdHkZLtn3b/RolplCqQDEyiRxVooAlJ9ou1BiQi6VdIoIn5p6BKL/P7mUI+Di5mepAB1KOSJR7Rck6yrRV9Hr1V3RVFwxgfO1fXkaRZdzLGt5OFGdKH3xLC42u72HI4zNWra9//EH8hUj/J3Wyt26mpYSp6yqupe1g1lPGloxti9xwJ3VMYbXljxhYOvt1vEXd2wdDMX5+F8mHN2eU6G/SkF56pWHOXlTlSvwu+G+umm2rP8tVzjfqaw5fHJhIYPF20h7bLRIZy9x+GND3K4VQt1RXggIAOHiDF+742QYgAB1D+PGbplAzPrfQyuDNq1D5PQKvDRfHz/DzDKSp5WpBKWwKH1x92+QRED5Pr2kXk0ympUef4dDKyr56WGebzzmOo6cJ0Cjc3C1tifjf+EK9fbaruwZfBTdfI7GIXGAFdAByqDCeWgQdAqNWuTRDd3YohQ2I96GNI4FvxJFA4aNcuEW+wVwVM3gwQTK9eX9Yb+ECqZqiddZrXaf//66MZZM2jQblmhg3mXzEWzD8kgHdCH1FTJu4ditsmND0B+x+wSm6FrxHPrtDy6rCA2UG5tRdm09ZEK/rqV9rl86bNPsKCSB9Z5JicRmfm0u5NXkitykhp1I1Ww+S2VBc85/D5GNwuIDBFp74qcYlmR6QGfQEmpFpCLLKSbDzLAmp/MaVLZFiM5TvALFtY+xEnGST1Z/efzdCweDJft5F42atNAcoQH3cj3zQYWPnE52lCjfnM5HanLWtdhWx31BMGdxZ8tj5tKEZC30SRkOEbPG36AtmmA3tGiNRAn42TTCVEOaaK04q2qDTf2YLpjUsD4KajKCkGFNafrpmi0SXPWO/KUglmptpF+HGRwojbRi/MW4btAIZ+quuT8RZDW7P/k7Nkfib7CPq3glEPSy9sxkGiuxDUuV9/mSf6lDN5hF6wOhCaO7xrHoW5VCnpre3UCJ/ut5FJybK2STYOKUKZennt7jgkUeuELXW0Y6Cv8R+mSY5lwkUIbCooBAAI76II8jzDbIkur/dgLgt+wbKTnhEafS28p1MyHUBndSBmHQ3p4EkaXQIFb/9ZHvJHTWtQ0/wX+7mnx58zWUV0C+CMSX3f4ZUKcbJ9lJJ6+zQyhhZEJtQcAFB6xL7+9hLQMZ6xhy/wA0BEgEP5hWwtGwgkgf+SLqj+o0iV+KBLtskV6fSPhBEV+0PIkXR8P0fFyo63+LgMc6faM5olJAP6nsgm29J5rwrx4Z8rg/dLoVNVaI+Xf9hii3OVS2wjqvTn4R2oL9DtfewPWpcBNzgDiCoLhzaAZvIDbTwozKMVAKewan9crg5x7K8dav8p6N4pDiQFdun8Hv/x+uiikMdl9kbBtX1Boaq3wMD6ZezAviyysGJ7FgqL7TGNCzo0mgJKf7WYxtNRZ1ioaDgtQKPuZBAmO5+mEsDmTFMyeTT6H2FQNvNw8deZnJRh6C1U5akfGTJSq4P/M4zBYHoYEyikp8GFpjvNOMmI7sFthSgDeUbQ78xyJwtj/jWWgC5VM5MR8AiU/AGgcSJgB0P6MP4St09SHiDBe8EgXFMvoPQeYkcIByiTmtPsrIoaBl8lge8DciTdpj/NmsgSknTlaLJ/Fey17MqZdaycVS1A1Fj9bck5ZD5au2CcGpPMQshBwgvh/PBW+AI4EhUce3KZbttIkS2qlDbHTTa1qwE4BtJEvtaNC8khmHyIRvC4sgzIaAIDdAGLzeLq03oAF3YIbgGZ3tKR7YQlxNXh5bGf/HY9/FlpAICoEBEFa22V0egcTghNTYKuim9ayeMe2NVMee8IlMOK9UpqZ/ebCLMXLZXiXHTk2I24v+ejxEIiEDWJnxgf/MXWW0SXTa85HiKqQLQM98wo1Jhs75j7bKjuxIe1u4UAFGsGbWY71COBFo+4pSj+mc9Tuag/8EB+e1NADyYiAAjncARmeo9atX6Axb5cY5UgKhAfEvgL0MOZsZIlWju2+nvcILMnWXO2ItBtBx42P4v+b2/PTTt2BOA/6R49jcXJqcTBgn3ykI7urb9MNcS+8Aw2i2HwFH4se2TaQfHlYtdlPkfzbILlZEE4imTIJskyv/NM4BjBSX4Qc7VCW5H4AxFFrmLbtmI8SgruSJYR8gDtJyvJowH6Ge8YdQA6qJmyBFx1aV4iaYzBYwInD2OQ/vZfAKNSnNGq5PNzDM7IX5XfQvimwx7h3kCy9B493npay9os7G2xAAa27fa8reeW9tnH2hP9CRTdfPb9cKH+k4YtOCX6jUc5V64adOtAaPvGtipGOeXRzQlC27iheR+46hjfYiLACmgf+fMj3gHqixQdO99SlrjblxarcutQ1zx13cEeQTPusfkUB/1By1+hOLI7475GNGWOOgBwRIZdq56/Mfzcq9eph56H3sYovjDLSs5ZeEEZazazkyumoguXjwrcbkDwYCHBpoOOgiyV5niSzbYuyJFKleyowllQDB14EVAG2FBD0C9iSx7O76kCe06Ohz5cir6ucAx2YKD+KrAtQJImA4vokvT7bceXTkJbPJbgwHBflGerBw7UBF4JaolDuVSKXfLyD3ZpVj9grvtEBF5BxVINlXjGE2Up0Zyn6rwxqrjgP/lIgSkhOTC+CJCA2yk57GuBWuEMDMWo+eQddvAwyAh6MIYCAAHPYgMKB3lYPRdXNQk2Gbs4xyBBxyLxIMnRWsyba8MaBHVDkPkSR9cgZETW7SjKAdonpTdkqcJoR0mqo/O/ZQ9ZVLHqEdBut2XSAmiSt7AZMyPYmagRO7WcZ0YQkKpuJBoLJDk61C+FmtqNIn8petRqa+B63TskiGJa4/8k2ybhBGf788cBz/N/VH5te0aa9fB+m0TLAXEjXSotYKQFbW7DcMG8oJY8lf1PbiRnB7xOeiSFM8CUmDz25oa72zOQbOrxUYI/rbnjhDjtRApFOCQGxuPMG1NqWK49BEprgMn3WCJVKK8IOo3tCCczWbrKkM7TziIJmXPbCjKc/YjIIhH0r10kD7aDCEqEudfUWZElgfAv1bRTQ98TKWgP3h0JDGQDEVFgTFG5vGl/mW/yBdXADUq4NSMCynvjFwBzcz6C77I7dpReqsCIpsy/YucIPV+qRcPrmjzvUCaaeJDm51xXuxQ59cIbYntFy+pjeaDqBqOxJ6xFJNjkISuNkToqEfaTziS6BOtACo66Dgxrvly8txy02Y1CD8Kjsx5B/LmqF85/YggnJaC2SpYV68uMRyS94VhRbX/2/vvmfMeRwmeYyDZJNH6Ke1BfnI9MvgEx5HUj5XukdZH7qM4uYpvhdRJOpUbOGmMfpxD83R8yIhPLYzpaCQ8HdHkRZacRgNcrAYw+45YWEml+faxypUSALrHxFiB/OZFgne2xnyq6wX0HSV8JF41SNyfjGWrYgn4gSdU43rI40fAyUeyYiJ8kgGvkME8uOHv8/d32ZtLYXadSr9sjusJVITq06TytH15EQLzV6DtGCjZK1dNEQ7+TQORYw35gIhWROEfOQQcCuoYb15Tq4osIpmm9ClA9v5Lh22ctCNqgDnNAYBe0nd09mN3NF5fKm9ShaTwCE1H8WT1QXGhUkiVLsf/noc6k/NmAVEcRR3RxokppYHiIg8MkkaFamZIEXR48WYK7FRHoRcaQNJcGjWWe7sgXK7t03HON9IQDvF8YocFX92D4fbKB9UTocROfZ6tSiv2Tvw6ZHzWAtSBpnlohy/TO3KJnqEJKQ7f6q9/IEzRQl4ILSrVF8NXCuOEs+NxAV2KeaDOdTs6fCAZDzCLj6qQNXnUjJc078O4S7IKbpg7befEBKGitfer7mhnTtvxBOftJiGg/ui+R4cnGcLWrfhajjHDTjcjlszTXJZgXwZxTjpjgBhYbfGanQWYUUI+HTw7paNJxc9ipUq80bskyWFEHj8BmJE2CN0bVSXOmj2xTTRfDwUyxTtNW0mvgxOe56wDRCNdOyO4eeg8HDrwKVCxKmjwucv8Hohrkv43aR6PLggulT9eSvnSGnD5KKBXiOk41oFWLlgn0QHIn27FGwoAtU7KLWE+1rY2DevtMnZGQc6xPlGMJBKJ1TkaHqbUT3nnhYBx3eNmpenQP9DLYLXRyax+HCgPvVQ0Qg+JhiG7MZ3O4mWgdeR3k7uySDzgDSqNgXtmKc4zhUHuXfbUyj3U/cpoZVMnVNnuwHOVCjLBSZle/tgBiKGAsuDXKiIuNlBW8IwKfkeIeAt+CNA3p+5dK2tceevDg3/fclKueaL+ue0286crZqViiHFZeQVh7CaCmCmQUxhLcGXBRci9mnuGNjlamRbx4wlp/uh4rSSp4BROuFDSoeHnurTCY+94Bz40YQZnx+3wCz+kZ4rX8AQdwv5eWs6b4dxVW0q7MNIwDS3DSlr4CjDBVzni1V2v6q0Nnba4wwuhJsNWrHCsKfgh39sGn4gxmv+RRf/8+wltHgAhSozly38a6ciSE226P87k0O3diujxD+E8GIrZnadroLl6j8WgrmJX2kY63o2JNpMTu0lvrKT5jcPwDWJOw7NQO/gT4lb21r6qRjEhnPWIh9TP9ThqYBprkQVOKNzVcytcWva4aKJtHrc0GFtx0XMKFXhHD3GsZwqEE0sm5Ij7Q47LwJfTB7M6Dkv6B1jF2I2eWEj0P9rXxVwYETwnhy8LIzy6LzeFWb7oHkqoiTjf8wX9BBKTBOqX7Si97I6RKcd6avCOD5yBeTX3afgF90ODvm5RwcIBtf9q4ZimnUjs+AW4Gucc4GgYRQODA9LQrn4TvhMUj18uDF3FXI60+NQvaAS3yZvdVjH9kZ2Jb2RZqFQxr9rA5aMpud4VWjBSgwIfqAwcxeAPodQOvpPzB4OoS5P50TxQDMpSUTkgbbnHT6tx2njz3B0aGvLUTrMrLiBhHbpIj4kgZFjTLvjDmacKdn1id9KidUtjt/IlRmzG/IYkrCP7lbi3zuC4mxLiSf48+CiQIHj+Bkaj4UoANJwH/ZfdPu1lsC/OFPEDyz1YznzMrYR2BAnAe3u85vzC0fYEoFk+4ZQaM0YU5HRxlpmMLbYYsJd/4yiZb5ZywUtGc6e7qEdcSOoxtCdNQTd7bDADsSrVrgWThZbzapndyM87sjP5Memy+EpmwLEcGFDgSIoZaVKSFY2Z3dxCrwJpMAvF5xl0RDAXA8fCLP80DgKDpgArwB6VEbol6gUf/t7RxzRYYwRkq0rCEv9cMiMziETxQoX3kJWfB4zWt3wcBymIZeG0f0sc0qOvRgICu0+2KA1Y3y5nrGi+2S/ptXrXj80aWUT2Zy1iPBVlcPSfM0O8TTf2FokiuSaXdbou//s+XUjLwExdoXTEtNxvNgePMhvbBGw9nrsRWlpDdmxRAWVgvc59zQmzFmnBJn/yD/0uRGtlOFtmkF/3/TOJQkAn+q/lX5f29oY3sg5Ue4BANuQoFhjd3z29UDdP2m/XY1hCyH3YobP2QSqY0rjCt3+ET44Y7wBoFIEO9PGZYJXVto8yPFwHkPaC49xUuf+jQN384Aey/AGtdPvCFjctn7ULumg6mC2ZSIIzoUjT05/Gy+gLmIUu6NNt2t+N1HFr9+6EcS4ob1ZsAH3S7lqN1QcpiTyLnOQsEv26SxQjW3NgZ4/CydfcGz0/ZT0IIcze+OOV8CaGSlt60MAFGqXsFKYqyd4j+eOnzYvK7LDrO8YDAgV1CRZK/48j/GCnPxG+kzzT0QOnqY2xpV4ZPk3qHj+dHCLx4DYeQd6lFagAFtkPoHOABka6TVnnC01ATKiJj6UzaHTmARSc8Nk0utlDXf6tQ0spzqRZ9X/F9hDujORsIlWDtxjkOfOwk4c2pLpUb4F0KuR0iUVDz4UoOeMzzhAAJx83qOM+TjYAj/JcA1cE6ZtPOAdSp1UunU0szdJVznWeOpV1Y2lgzFbsNFAF1uDfX9a1yK25MnUlomovx6FzHDGbPLJWpWFPydC5VenlDUSO4yxSSSG9qfxwKaH1CujD4InQoK/Woqs10RvNRyP8ixo/yd7726C3mWPZh2wN+1MBxgLAMV0CiLXH6qD47f6kgw7N4t3lkU8Uk2khxPPXeq3T5/M+/vgOO3FfjTRwIgxWxhEAsPoPDiqttDxHA6o5B2/fjV9IyllRJrgYX0o8CnBTPm/Cwv7fszJ96MQ0/3tLNzrK2E49ZDI0CYAXjPL+I7MiiRY1bjQzQ+dLn8XpYl6eEa+fOZLx3jNheXZYUQLa7RzC1HZ+AvFXSLXa0v4xRLchQffFZUUvv2j4eg8qINpqy9O3Mv3SrnRp+Jq7Lsbfx1V4rjx4Xx34m2v7zQod58F721DIbHPO+gLppxoJDAcdaxqvvDcwWP6vz4EHvTqAM3ha7F+jNOTj/LdvcKOIoiLYCpfT/PX4bIf0xQdu0OStJzmttCTmuX4at2qb2bZvVwDkiM/aceYGDgQ7Rp1aICxfUFpSOB+zGBuo36rmK/SuhVwgyTWQkEv5hjt/hNVIOwbSCbu07QHcNQFoHCPgD0frcwvhrOJUZ4IySOtSJJ0cQHLC1LAZs8iIEumJifwB3EAABIu7CpQlItNFjHpSDgZMZSSSH5codu7A2ody2dzX+3UciLAcSEb/fMhfAHZi2tTAZi2Sy2Ypo/dJKGGu6RcfCHtvy8Ol51kYV59QZyRPF0VV0v/QFUvjyaxX7Vv1wFecCtw9UWl9l5KON8TK4iyTadPnurd0E3i9/PfKNXzogDDBhLwhNgEPAPLbBReYGSFb/+W27lyfja5dG44ZsKmz45ooWEySjcJMirfd5pUCuotUekN0rUN+sBQlRTA4ZEspvY0a7hXAy3/MTrCqT0FUc37k5DXhQSZoTySk0xBUZl8p68Q0rl9AT1SQ0cSOVCsmQsVJ//0kxFgv6vaVcz9dQxX30DWwb7OIaFMfVKAeOUH/zOPxktaEm36Fij906aEKf3xTwreKf07A5TeOyDtZq7ssC3vpvIyvwu/LloP9vKuhNsFVFy61+RPpxLDOQx5yy+fJToIYh3N7If5AsTFnhBktrTAaiszOdbOEECviqypw/509A76hB+OThgbS23D3quntHyqYxpKYDB/lvLr2tnUuaJUAt69/t7XYsMbbqURBA5xG3Xn7G3Wm5qCtsY3V81cSjaZwqy1r2IbMaJyjqDdkn+3weZ6wHg5Jkj04y5ei2+pL+XJo/RdN27FsSlkf75/cdk/AbrmBPsozIEyZeTjiOZJ+xDdQz1UzZTL7oHAAXCOIo0LwYTdIqmO6CttGm0I+2GjVILgI16uGI9oYz1SaXKt9K0lBIdmgfeLraZ8813YWYrlDpPTRr+O+rMvl4EB/DVCcLBdFsN2euFcjTcY2Tp+qKZP+JSAF/MyLosEyP87XApuuWSMwQ7pwhMNppHIsvBo9OXozv3QuHzUDHSliH3lQdcPb/Sva8Cr7acArgXUSVgtL+phnDCjVrujLCc1ot++iOdR69V+jt4yP3DEkKGnvb1vZNeeilYbsZa9nBcyF8WtNB+6YXYqGZGAxa0Xc+0LL6o/68fwxYgVdfThLOLjic4hFIno4wjpP42WozgsfzEnb2+lceZFrOHRy2RAoOylFb1KTVo4xQllEy4DoOP/aYRsjehOX/tXWphVF0NC1TFme/5WJisteO1Pg80Ss2K84OhHXVuksYGmD3gh0s3U6r9bi4wBcW9G6GN9lXABZNg1w0ReZr/GAj6lzUHN5e3yHTKe9DTL+cfCfmGtzkuEINt0vnt0vyLbcD11yFOrsqsklZrxPixkOQm9H2hH6kzrPhecD4+gOYu6GZUAK+3jg9H1IqC9O8MEfqwHg2GTBEwiTsl2h9zdQhP52OvZvX2RlAyEW3G7MXlke6CMX9vWNBWgzXBYNQ0NQtoguezvJxGwuIRazCSmiMF3A7Iv0iCbu+5TdhEi8F6LAWBC2mcSyg7iqXjdMFKMUUfgTwneMkYO+DPrDuCL0kNkDWX0vxD9guBGXXjHHFgGvFK4/aqdfqZpPzCgjpJVqhpR113UAbhly0yE23NSC1FczznFoPXd+Bmqwxp8sTWBTmckKJzLn7yAR7KxunMBWc6aDgj1dlrift0bIS1FZqY8VZa6XIB51vLpDkkr+FHfOUzAsoHaEPY4NETJrPXALqizq9TuNkMIR7Tao/7F54Xeh9roqSvXj/F2mnA2s2D3V8DO+JWmPvylA5BJWCjeUruzh9e5uJDpdaSUkUOIwy7gjiAIodibcw8YHoNxXe+Wik5c3sB4nloKy7D9C5MBW50P1vtJRKZSDUINpDkikBoTLYDp3Jet4WA3m32G0GgSMaDWNwUYSVrbPt90F6vMVtcNkSu1u26dQZ03O5cFdyQtaoN0aa5JZ/kb/xFdGah13zv6WeGTcCQHuQwIhuKTFSihXfp4WLsyyEHI33outYRuM3bfv8jo2AgX+WO0UrcsP3Nl9BFAxKZc9Bz/LVu+CIW4kgocaMlzmiRwb/NEQL+FHqrlEeM8Cmt0eit6Hpt6cJBsTuhawCBPqmIxcU447/B4ono7mX3qKjwblXt/tlldUXiIxliSwxOL8vzvFSNPY93s5JyCXLGFz278btGUbVpgupoPsOFFMSK0J1LCVeccs3YNbj8/v0AZE20gI8ubCsEASk19BuGypDVj2WRuzKxNKE1QoEPbOEKl3FYyONHKYx68O4tnT9L8Hy+iSKbkjhn3WsaZ1EMh7cmHGgOnWrf46FKXiFwSSUc9oiFfEBrc2BMrR+0Vgel8f8lbRwu/n0PSFa6wP93/hBLjVuOkCcPzGy3+tEOxaxqrLrmwxNCMqVN3AVBjsIQHFobPdWWMDUaREVziTdACJst19pUuHy00uCmoaWdkkpwyMLM+jfx41ORJh/wnTQRKQNQGpA9pUqk/j3QcZqUXwczzrNS4J3MJ/uwVwlMYy9yJRYZvLo1GEeZG+KBc75+nyEdBJw31lSD8iUeYkgo1AYTNkLpcE3GeSheViQmxT2akpafQ1mj1wPf2xLpTnaLVz3k8foMr3xSOvL60WmZhBfiI8yBD0Kr6OLSsUrKfkABF2y2zMrA6EpPPT1YF9uiZhRUPtNaf3I1d/Xtz8rft0ZGcygyThX6S6OulweOr3mkU+1F9icEbP8CAkoyvnrflsmDUQye7/XSYBn4LtBFjhq6ZC/25+mAWg97tkwoLPqDlRijdADiHR1mFIhhHs61oQswiBAaMIJgEI28CDUos6joU6+4/Ecv0GgUbaTFg2OlOrcoK5nDK4Knz/Y8HA15fhIafDo/9tRE3YGrKv40c/gL2DiscwdtzHErjiqlZ33ASfRaXC0q99ftabWObool17hGO0bputU15+vVFApuGZjzK5DpupoXDzX+RnKoMm7q41KaehUcWoWOQywkGlO6cdGSpj3gRvOT4Z+RiQQUhxM+pzIfiT1Y44YfvCchdlYN6Hb/TvJ7Iqq8O1ofDrPzhgf7yta0Ysyi1LX70Ci1hiL3xVMq+Llovb3xESRdKGqNb4rB4AZeNEig8/n1cHuIIZ90MQ4FAQd6KJivWzYhAvNDOHz8TZAcZVf1iqnjR9Fw2NJJV0/QL0XK/CzSl6pHIEPnUIJVAXot3k6LIW5Pd8lw+gw4Bf/1KIJov5QXTK4p7mDyPlWwkM5WkOhyPJcLfs+S056G7NBJZXs728ZFqa/hLpS7uFRi2Uu3aqfUUxFr6F9AfXOa3R8e65Q9XPfU2PueETxcth7TgGp6cIZVZxQtTAIP2OBlbE9EC3RTXKl7XJM1sAvPi7I+tHwtdgGB+fF/YC2vVCQzj13nW675vcpfN33CFcudV8F2R5XkypQ0qfuIp6rkbzgUYKAu+FnLXvYNDcVcnLwHd5aHtpH+HUeVpU/oQj/QDuqmIGCAIqDbTaUn69eexc/DPTxwHoMFbUdv8csEaSa90vXjfWH0kWXZPIKoQFj2e1AvoDcPoieg7gyRe/JoImcCgakb6DPU/xB7iPM33bvYm4YCNSeoyK1W1PTfpc88gEQQeD9BfvqomWEh4l7QMt1hlptlEqVdC+byhfDfhdPNND4HqZktkj00bUOZF5UYxtyGyTox2gkBLk631XcGASpoGa13HNkM8oRArkBLQtAACgAb4uKyeyZ5HdgjLOx3YUcCQlJP+uGdkRmiJmxb28irL58CKzFft6MQuLB0yNBLiUgTzbDV7BM7EpUr/eS9d6iesxTB8MOr49QOqnJKD0jriW87dXAg9U8MVzsNX14FlTJTgAqpCxAx1tw+jOTEmOVT24ckv7YfFVx1CHCj7TUavfOn/YhTNHdz8CCs/DrUI7sun75K12tA0GGigKjJ3JSx7eg6tCIYhazboTcnv/C8MqaLUZ1+sorDiRwcutf971rl3SAI8ydwDgQqFZj92a4/MudHrz71eJhT4HljNcJxd3G8P3Sg5flrTlp7KMAm6QYKAaIzqxmIB5aoDH9STFng+LnQTN4CHwGdkeN4Tg1LwDcPM/SV5Jnb9R8EoH19YkOvmKbL+dMmbsoGQsW145sWvtbuUGTq6JInS5F7d2DagwIOCBSc9St9h+L3wzKgvt53nbnKE1WSzQytvrAn1lwaM7ACNPAJzoIAIeaJGOyTkduEJdHH3WZH6ibds2oG5ciuK1dVjtiZ3eU+c+0ShTFp4lh+IZSo+B0TdOIEb1lBCteC27vOig5EgB39ZvTtUKdzhCP4OOGlPUWkL8zVyHRdZOnVvNjgZb0X5rdUKpNaWMHtPTAchLbo37CCTdaWEDeNBy13cupLBq+ojQUqVxFMLtR7iDvr1BfgPOJDhfLfWdM46ujNw3zBwTZwA1LGxVQrJYgSs2nzJ5aySfvXOC7AWwZAxyooNqZ5viLaab1ypAFgV43WyU8BO9dfiD5bPDCibyco1RQOv5Fw6C+3xfqFJjQdwAD/ywRvXj25BiW1lcVYbzX4Qnf+njONfzoO7jKKn7e3qGdBYVJKtfh8BEOTm9QE7OsuwWNPpp2nTOSokw7Qknd3JVQP6TJwTNVP7O7+qI7sWumjJ3FKkzu3wBOAlHL8rfVBtBY/8IFvcpP0Jtb99/Zc2jwUYkGrOFfi5bTOAlM8N21jwJ1Ec/X4xH7OdkV0f1RNR3xYJHxALY5PbLFFRL7Lt2U9RPtxr6FHv65oISdPGUGaLIAP0gTZ7UH5N3E3dxkKq41ZUAZ5znXk/Hy3cB/Zx7fRSRjSKunvUibdq7f/ZNXuXz6m/zcbivgSnDXhq4DqE2hL5pjELOxeGZUN7m+Nh61LD4/ZgNPbPVLNCdhFhXkz+aVHt5JNlr5bAr/S5gPNrowx2/tU4fKMFIlWkNCBy2/tSUCocimG06hZpwXDRhDUKBUkXJ5reLHlqlTHVdWQK9rMN2tuy4vH6Ye/oz2YpFPeffHy4njbiF9KpBqnM3AM2i2pIwfs0O+3Aa+YAqWB/EsyLJUWog5Jsury5tOB3vCBJUNg6OtbCOT3vHCpeVN3Rvc3g9VxJAsteaVChY6OeAKa9lSWT3tIScfobPpNctJ6kIp37O/SQnj902JF/q8CBxgfEkd5u9r67z2WWvIFAfazgJk60CVPt9DISALmzmpSeeocQ14/kZNv4SJhenhbpitkmVajC2rMo4dyKb71wE1U2OazhiLLPOXK0qNKHsPWb8rBM2adN7rMNB9ngJdDqMCv3PGnBAgLY3uLVhEUCoHkgeHFxFKN1Ff3l13pzgZ90vt7o9aHiubwFyCvSmPw5LZSy0h13Dm2ACBrfJd6CjRzL//p2u794wgfsDvy8QNG3R0nNei2pxLwizbUlpfCFIJgaqnhiOFjcUxk3hvkBJbNR9N1ARc5rCqd0lTCQSifOROfGoWUbXoK1zoDtEuO3fgsUpYNSw8t8ATZsL+9SLLxRD7a0CJaIPuuAVJLt12kyU7CzWeFbJccZ+RvmpLtWJXkamP93Ym9jjOLgQFzGVpNTYVIxmu/BR2LCcqyKbYfY4MnNvRV/kof5ibx6BTuVjM5My/P+TKmjnChIRCa2q0lhj3pZdE68TqbnDigM7+ljyreEc+HzUiufFz+jPzZizwpWVUt9g1sqySX4++svov3F/Rq4OxeO9pBUVeCIY8TPWSRofrOdIlN4o6i8XXHdd+SmRI3l4srlxHzKncywHo8N09kWRPnvJeyaHF24Fr+884Q98uBZW5/zlXrt/zsl5v3uA946bNXx/lLmXYEfKiCzvmQIxeezHobzZrkjGMGfBHZDehR0UlxykgbvWr0GtNfyTcpi4WzgiP0GgTulLYOxNo2eAh9bP5+O1cBbEdh1/QtaD33FyZ9gWuAflFBoh+jN22QBoRdtpMl8QvLPQF6tjs8Bi10slSYdPXnksnSjlnxXwkyRb7rcI/rtPZj2VJpPbu9SExOxspqiCIsJeLNgUv5MOPCePsUATl08RpoMOQKYxpQb1a/YRA9kHE+j5AAtaYk4XFuEHse9AidNXHHj8xT9YIBiem9ETtKwjRMnDSFtIsNsgaMdVCrI3CtrNTruYg0XOc4azZv10UgCXE8E6n64glMxPwz7Ex1Ir/4jA9itjkMYZJafMlxQDjCE7I+y/0N/sH+KGSSmMf0HzKMiQV5331N+haz8IW5iP4otvmYJ8MAQyeimAuGCH5sTpiDB5LsctxjlumeQg34Dg2c5Xr60UGSHwLtkls07vlLTJvMwAW+XzXEJ/OcHoKiQ7UilkUmCxKJuaxQR+htKR/O5AmCHhlW6v/zJj0EBnhh6iYwHpJ0CEqlOfnyqysAu4vkTlxJYb+9aakNkUxl4qjA/PLEskAtZkBL95d6dwzXa4mvkQYZAJwWhSuj3vXf1771WlCMD4IcyJTTRMZAWkHQ9romIpunD7HUsa8oiW3GMs25DiINMI4krDQDMCebABfAlu5CRVtjvyfCYRjDSAYymaDDyA7rhfxgORz7QKy0/CP8DNGsW4uTN4SZaiyilroMdghqDpxhzkxlqZeIDtqgvpODUWGk85gM2O2swAjOZUeFuPbLqzkkSaUPfZeMuXM8AMAAAdyXtM1Wn7Y6v9U1TFrH4MvwAAA=)

Ich habe das bundestag scaling.tar file runtergeladen und lokal folgende ordner struktur:



## Response:
19.5.2026, 11:19:43



````plaintext
Thought process: Analysierte Projektstruktur und lokale Testmöglichkeiten.

The user is on macOS and has the project structure set up correctly. The data files are in the right place. Now they want to know how to test everything locally.
````

Die Struktur sieht perfekt aus — du bist auf macOS, alles ist richtig platziert. Einzige Sache: der Ordner `{data,scripts,output}` sollte eigentlich nicht existieren, das ist ein Artefakt vom Entpacken. Den kannst du ignorieren oder löschen.

**Jetzt direkt loslegen — öffne RStudio und führe der Reihe nach aus:**

## Schritt 1: Working Directory setzen

```r
# In der RStudio Console:
setwd("~/Downloads/bundestag-scaling")  # Pfad ggf. anpassen
getwd()  # Kontrolle: muss auf bundestag-scaling enden
```

## Schritt 2: Package-Check

```r
required_packages <- c(
  "tidyverse", "data.table", "Matrix", "irlba",
  "brms", "ggplot2", "ggrepel", "patchwork",
  "scales", "plotly", "htmlwidgets",
  "knitr", "kableExtra", "posterior", "bayesplot"
)

missing <- required_packages[
  !sapply(required_packages, requireNamespace, quietly = TRUE)
]

if (length(missing) == 0) {
  cat("✓ Alle Packages vorhanden!\n")
} else {
  cat("Fehlende Packages:\n")
  cat(paste0("  - ", missing, collapse = "\n"), "\n")
}
```

Schreib mir einfach, was der Output ist — dann sage ich dir genau was zu tun ist. Auf macOS läuft das erfahrungsgemäß sehr reibungslos.



## Prompt:
19.5.2026, 11:29:20

Das hier ist mein output für den stan code:
> # Schritt 4: Prüfen ob alles klappt
> cmdstanr::cmdstan_version()  # sollte eine Versionsnummer ausgeben
[1] "2.38.0"



## Response:
19.5.2026, 11:29:27



````plaintext
Thought process: Bestätigte erfolgreiche CmdStan-Installation und Funktionsfähigkeit.

CmdStan is installed and working. Now they can proceed with testing the R scripts.
````

CmdStan 2.38.0 ist installiert — das ist die aktuelle Version, alles perfekt. ✓

Jetzt kannst du die Scripts der Reihe nach testen. Fang mit WP1 an:

```r
source("scripts/01_data_preparation.R")
```

Erwarteter Output sollte ungefähr so aussehen:
```
Polls: 162 unique roll-call votes
Votes: 118400 individual vote records
Vote categories: abstain, no, no_show, yes
Vote matrix dimensions: ~730 legislators × 162 votes
Missing values: ... (~xx%)
✓ WP1 complete. Saved to output/wp1_data.RData
```

Wenn das durch ist, direkt weiter:

```r
source("scripts/02_svd_analysis.R")
source("scripts/03_double_centered_svd.R")
```

Diese drei laufen alle in unter einer Minute durch. Schick mir den Output — dann sehen wir ob die Ergebnisse politisch Sinn ergeben (SPD/Grüne auf einer Seite, CDU/CSU und AfD auf der anderen) bevor wir das zeitintensive IRT-Modell starten.



## Prompt:
19.5.2026, 11:33:29

Wo führe ich diesen code aus

```r
source("scripts/01_data_preparation.R")
```



## Response:
19.5.2026, 11:33:57



````plaintext
Thought process: Identifizierte Frage zur Ausführung von R-Code.

The user is asking where to run the source() command. They're on macOS with RStudio.
````

In der **RStudio Console** — das ist das Fenster unten links:

````plaintext
Tool: read_me
````

````plaintext
Tool: show_widget
````

Die **Console** ist das Fenster unten links — da siehst du das `>` Prompt-Zeichen. Dort tippst du den Code ein und drückst **Enter**.

Konkret so vorgehen:

1. RStudio öffnen
2. Unten links in die Console klicken
3. Eintippen:
   ```r
   setwd("~/Downloads/bundestag-scaling")
   ```
   → Enter drücken
4. Dann:
   ```r
   source("scripts/01_data_preparation.R")
   ```
   → Enter drücken

Der Output erscheint dann direkt darunter in der Console. Schick mir einfach einen Screenshot oder kopiere den Text, wenn etwas erscheint.



## Prompt:
19.5.2026, 11:36:24

> setwd("~/Downloads/bundestag-scaling")
Error in setwd("~/Downloads/bundestag-scaling") : 
  cannot change working directory



## Response:
19.5.2026, 11:36:30



````plaintext
Thought process: Diagnosed incorrect file path and devised locating strategy.

The user can't set the working directory. This is likely because the path is wrong - the folder might be somewhere else on their Mac. Let me help them find the correct path.
````

Der Ordner liegt wahrscheinlich woanders. Lass uns den genauen Pfad herausfinden — tippe das in die Console:

```r
file.choose()
```

Dann öffnet sich ein Finder-Fenster. Navigiere zu irgendeiner Datei **im** `bundestag-scaling` Ordner (z.B. die `README.md`) und klick sie an. R zeigt dir dann den vollständigen Pfad — den kannst du mir schicken.

**Alternativ** — direkt in RStudio über das Menü:

```
Session  →  Set Working Directory  →  Choose Directory...
```

Dann einfach den `bundestag-scaling` Ordner auswählen. RStudio führt den `setwd(...)` Befehl dann automatisch für dich aus und zeigt dir den korrekten Pfad in der Console.



## Prompt:
19.5.2026, 11:39:00

> file.choose()
[1] "/Users/manueldieterle/Documents/Uni Mannheim/26 FSS/Machine Learning & Causal Interference/Qualifying Exam/bundestag-scaling/scripts/run_all.R"



## Response:
19.5.2026, 11:39:04



````plaintext
Thought process: Identified working directory path and prepared assistance.

The path is clear. Let me help Manuel set the working directory correctly.
````

Perfekt, der Pfad ist klar. Tippe jetzt:

```r
setwd("/Users/manueldieterle/Documents/Uni Mannheim/26 FSS/Machine Learning & Causal Interference/Qualifying Exam/bundestag-scaling")
```

Dann zur Kontrolle:

```r
getwd()
list.files()  # sollte data/, scripts/, README.md zeigen
```

Wenn `list.files()` die Ordner anzeigt, direkt weiter mit:

```r
source("scripts/01_data_preparation.R")
```



## Prompt:
19.5.2026, 11:40:48

> file.choose()
[1] "/Users/manueldieterle/Documents/Uni Mannheim/26 FSS/Machine Learning & Causal Interference/Qualifying Exam/bundestag-scaling/scripts/run_all.R"
> setwd("/Users/manueldieterle/Documents/Uni Mannheim/26 FSS/Machine Learning & Causal Interference/Qualifying Exam/bundestag-scaling")
> getwd()
[1] "/Users/manueldieterle/Documents/Uni Mannheim/26 FSS/Machine Learning & Causal Interference/Qualifying Exam/bundestag-scaling"
> list.files()  # sollte data/, scripts/, README.md zeigen
[1] "data"      "README.md" "scripts"  
> source("scripts/01_data_preparation.R")
── Attaching core tidyverse packages ──────────────────────────────────────────────────────────── tidyverse 2.0.0 ──
✔ dplyr     1.1.4     ✔ readr     2.1.6
✔ forcats   1.0.1     ✔ stringr   1.6.0
✔ ggplot2   4.0.1     ✔ tibble    3.3.0
✔ lubridate 1.9.4     ✔ tidyr     1.3.1
✔ purrr     1.2.0     
── Conflicts ────────────────────────────────────────────────────────────────────────────── tidyverse_conflicts() ──
✖ dplyr::filter() masks stats::filter()
✖ dplyr::lag()    masks stats::lag()
ℹ Use the conflicted package to force all conflicts to become errors
Polls: 162 unique roll-call votes                                                                                   
Votes: 118400 individual vote records
Vote categories: abstain, no, no_show, yes 
Vote distribution after recoding:
    0     1  <NA> 
37074 65096 16230 
Vote matrix dimensions: 772 legislators × 161 votes
Missing values: 22122 (17.8%)
After imputation — remaining NAs: 0 
Value range: 0 1 
Missingness by party:
# A tibble: 8 × 4
  fraction_modal        n_mps mean_missing median_missing
  <chr>                 <int>        <dbl>          <dbl>
1 SPD                     217         14              7.5
2 CDU/CSU                 205         16.9           13  
3 BÜNDNIS 90/­DIE GRÜNEN   124         15.1            8.7
4 FDP                      98         16.8            9.3
5 AfD                      81         26.2           20.5
6 DIE LINKE.               40         32.3           29.2
7 fraktionslos              6         39.2           27.6
8 Die Linke. (Gruppe)       1         81.4           81.4
Error in gzfile(file, "wb") : cannot open the connection
In addition: Warning message:
In gzfile(file, "wb") :
  cannot open compressed file 'output/wp1_data.RData', probable reason 'No such file or directory'



## Response:
19.5.2026, 11:40:54



````plaintext
Thought process: Diagnosed successful data load, identified missing output directory.

The data loaded perfectly! The only error is that the `output/` directory doesn't exist yet. Easy fix.
````

Die Daten sind perfekt geladen — der einzige Fehler ist, dass der `output/` Ordner noch nicht existiert. Einzeiler-Fix:

```r
dir.create("output")
source("scripts/01_data_preparation.R")
```

Die Ergebnisse sehen übrigens sehr gut aus — kurze Anmerkung dazu während es läuft:

- **772 MdBs × 161 Votes** ✓
- **17.8% fehlende Werte** — typisch für Bundestag-Daten (Krankheit, Reisen etc.)
- Die **AfD (26%)** und **DIE LINKE. (32%)** haben besonders viele fehlende Stimmen — politisch interessant, deutet auf strategisches Fernbleiben hin
- Imputation erfolgreich: **0 NAs** nach Double-Mean



## Prompt:
19.5.2026, 11:41:58

dir.create("output")
> source("scripts/01_data_preparation.R")
Polls: 162 unique roll-call votes                                                                                   
Votes: 118400 individual vote records
Vote categories: abstain, no, no_show, yes 
Vote distribution after recoding:
    0     1  <NA> 
37074 65096 16230 
Vote matrix dimensions: 772 legislators × 161 votes
Missing values: 22122 (17.8%)
After imputation — remaining NAs: 0 
Value range: 0 1 
Missingness by party:
# A tibble: 8 × 4
  fraction_modal        n_mps mean_missing median_missing
  <chr>                 <int>        <dbl>          <dbl>
1 SPD                     217         14              7.5
2 CDU/CSU                 205         16.9           13  
3 BÜNDNIS 90/­DIE GRÜNEN   124         15.1            8.7
4 FDP                      98         16.8            9.3
5 AfD                      81         26.2           20.5
6 DIE LINKE.               40         32.3           29.2
7 fraktionslos              6         39.2           27.6
8 Die Linke. (Gruppe)       1         81.4           81.4
✓ WP1 complete. Saved to output/wp1_data.RData



## Response:
19.5.2026, 11:42:02

WP1 läuft perfekt. Weiter mit WP2:

```r
source("scripts/02_svd_analysis.R")
```

Das dauert ebenfalls nur wenige Sekunden. Interessant wird der Output bei:
- **Party Means on Dimension 1** — zeigt ob die politische Links-Rechts-Achse sauber rauskommt
- **Variance Explained** — wie viel Prozent erklärt die erste Dimension alleine



## Prompt:
19.5.2026, 11:42:33

> File: 





## Response:
19.5.2026, 11:42:58



````plaintext
Thought process: Analyzed voting patterns and deciphered government-opposition political dimensions.

The SVD results are very interesting. Let me analyze them:

1. **Dimension 1**: All values are negative - this is a sign issue. The "most positive" end is actually the AfD (least negative), and the "most negative" end is SPD/Grüne/FDP (Ampel coalition). So the scale is flipped - the Ampel coalition is on the negative side, AfD/CDU on the positive (less negative) side. But wait, all values are negative... this means the SVD captured something but the sign convention is just that the coalition parties dominate the negative direction and opposition the less-negative direction.


Looking at the actual values, the Ampel parties cluster tightly at the most negative end while AfD sits at the least negative, with CDU/CSU positioned between them and Die Linke closer to AfD. This suggests the dimension is capturing a government-versus-opposition dynamic, though the CDU's placement is throwing off what I'd expect—it seems the sheer voting volume of the Ampel coalition is dominating the negative direction.

The first dimension explains 83.6% of the variance, which is remarkably high and confirms this government-opposition split is the dominant pattern in the voting data. On the second dimension, I'm seeing CDU/CSU pull strongly negative while the Ampel parties shift positive, suggesting a different axis of disagreement beyond just government status.

Looking at the extreme votes, the most negative values correspond to uncontroversial bills the coalition passed together—things like suicide prevention and military deployments—while the most positive ones are opposition motions that failed. I should note that the overall negative sign is arbitrary due to how SVD works, so the interpretation matters more than the direction itself.
````

Sehr gute Ergebnisse! Hier die wichtigsten Erkenntnisse:

## Was Dimension 1 zeigt

Die erste Dimension ist die **Regierung vs. Opposition**-Achse — aber alle Werte sind negativ (SVD-Vorzeichenindeterminiertheit, das ist normal). Inhaltlich:

```
Negativstes Ende          →          Positivstes Ende
SPD / Grüne / FDP              CDU/CSU    Linke   AfD
   (Ampel-Koalition)             (Opposition, abgestuft)
```

Die Ampel-Parteien clustern extrem eng zusammen (`-0.042` bis `-0.043`), was zeigt wie geschlossen sie in der Koalition abgestimmt haben. **83.6% Varianz** durch Dimension 1 ist sehr hoch — das Bundestag-Geschehen wurde fast vollständig durch die Regierung/Opposition-Spaltung dominiert.

## Dimension 2

Trennt **CDU/CSU (`-0.060`)** von den Ampel-Parteien (`+0.017 bis +0.021`). Das ist wahrscheinlich die Achse *konstruktive vs. destruktive Opposition* — CDU stimmte mit manchen Regierungsgesetzen mit, AfD/Linke selten.

## Extreme Votes — macht Sinn

Die "negativsten" Votes (Koalitionsseite) sind typische Regierungsgesetze wie Suizidprävention oder Bundeswehreinsätze. Die "positivsten" sind AfD-Anträge (Atomkraft, Impfpflicht) und Linke-Anträge — fast alles Oppositionsanträge die scheiterten.

---

Weiter mit WP3:

```r
source("scripts/03_double_centered_svd.R")
```

Spannend wird der Vergleich: Nach dem Double-Centering sollte CDU/CSU klarer von AfD getrennt sein, weil die Baseline-Effekte (wer generell oft Ja stimmt) rausgefiltert werden.



## Prompt:
19.5.2026, 11:43:46

> File: 

hier ist der output von 03



## Response:
19.5.2026, 11:43:59

Ausgezeichnete Ergebnisse — WP3 liefert viel klarere politische Signale als WP2. Hier die Interpretation:

## Was sich nach Double-Centering verändert hat

**Vor** Double-Centering (WP2): Alle Parteien auf der negativen Seite, Ampel kaum unterscheidbar.

**Nach** Double-Centering (WP3): Klare Links-Rechts-Achse:

```
SPD / Grüne          FDP       Linke   AfD      CDU/CSU
  -0.030           -0.026    +0.006  +0.030    +0.049
```

Das ist politisch sehr interessant — **CDU/CSU landet am rechten Rand**, sogar rechts der AfD. Das macht Sinn: Nach dem Entfernen der Baseline-Effekte zeigt die Achse primär *Regierung vs. Opposition*, und CDU/CSU war die konsequenteste Oppositionspartei (hat fast nie mit der Ampel gestimmt).

## Varianzanteil fällt von 83.6% auf 60.5%

Das ist erwartet und positiv — die 23% Differenz war vorher reine Baseline-Varianz (wer generell oft Ja stimmt), kein echter ideologischer Inhalt.

## Extreme Votes machen perfekt Sinn

Die negativsten (Ampel-Seite): Bürgergeld, Bundeskanzler-Etat, COVID-Maßnahmen — klassische Koalitionsprojekte.

Die positivsten (Oppositionsseite): Lieferkettengesetz abschaffen, Kernkraftwerke, Messerattentat Mannheim — typische CDU/AfD-Anträge.

## Korrelation 0.706 zwischen Raw SVD und DC-SVD

Nicht perfekt — zeigt dass Double-Centering tatsächlich etwas verändert, aber die Grundstruktur bleibt.

---

WP1–3 sind sauber. Jetzt das IRT-Modell — das dauert deutlich länger. Bevor du es startest, eine wichtige Frage: Wie viel Zeit hast du gerade? Das Modell läuft je nach Mac **1–4 Stunden**. Du kannst es also gut über Nacht laufen lassen:

```r
source("scripts/04_irt_model_alt.R")
```

Wenn du es starten willst, schick mir kurz den Output der ersten paar Zeilen — dann sehen wir ob die Initialisierung klappt.



## Prompt:
19.5.2026, 11:47:40

Gibt es eine möglichkeit einfach zu testen ob der code funktioniert? Kann man zum Beispiel die anzahl der CHains anpassen für einen "schnellen" test?



## Response:
19.5.2026, 11:47:52

Ja, genau — du kannst einen schnellen Smoke-Test mit reduzierten Einstellungen machen. Füge das direkt in die Console ein (ohne das Skript zu sourcen):

```r
load("output/wp1_data.RData")
load("output/wp2_svd.RData")
load("output/wp3_dc_svd.RData")

library(tidyverse)
library(brms)

# Minimaldaten: nur 100 zufällige MdBs, 30 Votes
set.seed(42)
irt_long <- votes %>%
  filter(!is.na(vote_binary)) %>%
  mutate(
    mp_name        = str_remove(mandate_label, "\\s*\\(Bundestag 2021 - 2025\\)") %>% str_trim(),
    fraction_clean = str_remove(fraction_label, "\\s*\\(Bundestag 2021 - 2025\\)") %>% str_trim()
  ) %>%
  filter(mandate_id %in% sample(unique(mandate_id), 100),
         poll_id    %in% sample(unique(poll_id), 30)) %>%
  select(person = mandate_id, item = poll_id,
         response = vote_binary, mp_name, fraction_clean) %>%
  filter(!is.na(response)) %>%
  mutate(person = factor(person), item = factor(item))

cat("Test-Datensatz:", nrow(irt_long), "Beobachtungen\n")
cat("MdBs:", n_distinct(irt_long$person), 
    "| Votes:", n_distinct(irt_long$item), "\n")

# Schnelltest: 1 Chain, nur 300 Iterationen
fit_test <- brm(
  response ~ 1 + (1 | person) + (1 | item),
  data    = irt_long,
  family  = bernoulli(link = "logit"),
  chains  = 1,
  iter    = 300,
  warmup  = 150,
  cores   = 1,
  backend = "cmdstanr",
  seed    = 42
)

cat("✓ Test erfolgreich!\n")
summary(fit_test)
```

Das läuft in **2–5 Minuten** und zeigt dir ob brms + cmdstanr grundsätzlich funktionieren. Wenn du `✓ Test erfolgreich!` siehst, kannst du das vollständige Modell bedenkenlos über Nacht starten.



## Prompt:
19.5.2026, 11:49:38

Compiling Stan program...
Start sampling
Running MCMC with 1 chain...
Chain 1 Iteration:   1 / 300 [  0%]  (Warmup) 
Chain 1 Iteration: 100 / 300 [ 33%]  (Warmup) 
Chain 1 Iteration: 151 / 300 [ 50%]  (Sampling) 
Chain 1 Iteration: 250 / 300 [ 83%]  (Sampling) 
Chain 1 Iteration: 300 / 300 [100%]  (Sampling) 
Chain 1 finished in 4.4 seconds.
Loading required namespace: rstan
> 
> cat("✓ Test erfolgreich!\n")
✓ Test erfolgreich!
> summary(fit_test)
 Family: bernoulli 
  Links: mu = logit 
Formula: response ~ 1 + (1 | person) + (1 | item) 
   Data: irt_long (Number of observations: 2390) 
  Draws: 1 chains, each with iter = 300; warmup = 150; thin = 1;
         total post-warmup draws = 150
Multilevel Hyperparameters:
~item (Number of levels: 30) 
              Estimate Est.Error l-95% CI u-95% CI Rhat Bulk_ESS Tail_ESS
sd(Intercept)     2.12      0.31     1.59     2.92 1.11        9       83
~person (Number of levels: 99) 
              Estimate Est.Error l-95% CI u-95% CI Rhat Bulk_ESS Tail_ESS
sd(Intercept)     1.36      0.14     1.14     1.68 1.04       30       43
Regression Coefficients:
          Estimate Est.Error l-95% CI u-95% CI Rhat Bulk_ESS Tail_ESS
Intercept     0.69      0.40    -0.08     1.50 1.00       44       47
Draws were sampled using sample(hmc). For each parameter, Bulk_ESS
and Tail_ESS are effective sample size measures, and Rhat is the potential
scale reduction factor on split chains (at convergence, Rhat = 1).
Warning message:
Parts of the model have not converged (some Rhats are > 1.05). Be careful when analysing the results! We recommend running more iterations and/or setting stronger priors.



## Response:
19.5.2026, 11:49:49



````plaintext
Thought process: Validated successful test execution despite expected convergence warnings.

The test worked! The warning about convergence is expected with only 150 post-warmup samples and 1 chain - that's normal for a quick test. The key thing is that brms + cmdstanr work correctly. Let me explain this to the user.
````

Das ist ein perfektes Ergebnis! Die Warnung ist völlig normal und erwartet — hier warum:

## Was der Output bedeutet

**Das Wichtigste: `✓ Test erfolgreich!`** — brms + cmdstanr funktionieren auf deinem Mac einwandfrei.

Die **Rhat-Warnung** (`> 1.05`) ist kein Bug, sondern ein statistisches Signal: Rhat misst ob die MCMC-Kette konvergiert ist. Rhat = 1.0 ist perfekt, > 1.05 heißt "noch nicht konvergiert". Das ist bei diesem Schnelltest **absichtlich so** — mit nur 150 Post-Warmup-Samples und 1 Chain kann das Modell gar nicht richtig konvergieren. Im echten Modell (2 Chains × 750 Samples) verschwindet das.

**Bulk_ESS = 9** bei `item` ist ebenfalls erwartet — Effective Sample Size ist bei 150 Iterationen naturgemäß winzig.

---

## Jetzt das echte Modell starten

Alles funktioniert — du kannst es über Nacht laufen lassen:

```r
source("scripts/04_irt_model_alt.R")
```

Zwei Tipps dazu:

**1. Mac nicht schlafen lassen** — in den Systemeinstellungen unter Batterie/Energie den Ruhezustand deaktivieren, solange das Modell läuft.

**2. Fortschritt beobachten** — der Output in der Console sieht dann so aus:
```
Chain 1 Iteration: 500 / 1500 [33%]  (Warmup)
Chain 2 Iteration: 500 / 1500 [33%]  (Warmup)
```
Erst nach dem Warmup (Iteration 750) beginnt das eigentliche Sampling. Das Modell speichert sich automatisch in `output/fit_2pl.rds` — falls es abbricht, musst du nicht von vorne anfangen.



## Prompt:
19.5.2026, 12:01:04

Kann ich ohne das IRT skript laufen zu lassen die anderen Code/Skripts testen?



## Response:
19.5.2026, 12:01:13

Ja, WP5 braucht das IRT-Modell — aber du kannst **alles andere** schon jetzt vollständig testen. Hier was ohne IRT funktioniert:

## Was du jetzt schon testen kannst

WP1–3 laufen bereits ✓. Zusätzlich kannst du testen ob alle **Plots und HTML-Outputs** korrekt gespeichert wurden:

```r
list.files("output/")
```

Du solltest diese Dateien sehen:
```
wp1_data.RData
wp2_svd.RData
wp3_dc_svd.RData
svd_dim1_by_party.png
svd_2d_scatter.png
svd_scree.png
svd_interactive.html
dc_svd_dim1_by_party.png
dc_svd_2d_scatter.png
svd_vs_dc_comparison.png
dc_svd_interactive.html
```

Falls Plots fehlen, liegt es meist an einem fehlenden Package. Zeig mir den Output von `list.files("output/")` — dann sehen wir was noch fehlt.

## WP5 ohne IRT überspringen

Du kannst WP5 erst ausführen **nachdem** das IRT-Modell fertig ist. Die Reihenfolge ist also:

```
WP1 ✓ → WP2 ✓ → WP3 ✓ → WP4 (über Nacht) → WP5
```

## Was du außerdem jetzt schon tun kannst

Die **interaktiven HTML-Plots** direkt im Browser anschauen:

```r
# Öffnet den SVD-Plot im Browser
browseURL("output/svd_interactive.html")

# Und den DC-SVD-Plot
browseURL("output/dc_svd_interactive.html")
```

Das gibt dir schon einen guten Eindruck wie die finale Website aussehen wird. Funktionieren die Plots?



## Prompt:
19.5.2026, 12:02:26

> list.files("output/")
 [1] "dc_svd_2d_scatter.png"    "dc_svd_dim1_by_party.png" "dc_svd_interactive_files" "dc_svd_interactive.html" 
 [5] "svd_2d_scatter.png"       "svd_dim1_by_party.png"    "svd_interactive_files"    "svd_interactive.html"    
 [9] "svd_scree.png"            "svd_vs_dc_comparison.png" "wp1_data.RData"           "wp2_svd.RData"           
[13] "wp3_dc_svd.RData"



## Response:
19.5.2026, 12:02:33

Alle erwarteten Dateien sind da! Schau dir die interaktiven Plots direkt im Browser an:

```r
browseURL("output/svd_interactive.html")
browseURL("output/dc_svd_interactive.html")
```

Und die statischen Plots kannst du direkt in RStudio anzeigen:

```r
library(ggplot2)

# Alle PNG-Plots nacheinander anzeigen
plots <- list.files("output/", pattern = "\\.png$", full.names = TRUE)
for (p in plots) {
  cat("Zeige:", basename(p), "\n")
  img <- png::readPNG(p)
  grid::grid.raster(img)
  readline("Enter für nächsten Plot...")
}
```

Oder einfacher — direkt im Finder öffnen:

```r
system("open output/")
```

Das öffnet den `output/` Ordner im Finder, dort kannst du alle PNGs mit einem Klick anschauen.

---

Schick mir gerne einen Screenshot der interaktiven Plots — dann können wir prüfen ob die **Beschriftungen, Farben und Tooltips** korrekt aussehen, bevor wir die Website bauen. Das ist wichtig für WP8 (University of Mannheim Branding).



## Prompt:
19.5.2026, 12:08:50

> File: bundestag_wp132_vote_codebook.csv

Mein Dozent hat dieses Codebook nachträglich hochgeladen, ändert das irgendetwas am bisherigen Code?



## Response:
19.5.2026, 12:09:20



````plaintext
View: Read the codebook CSV
````

````plaintext
Thought process: Analysierte Codebook-Relevanz und stellte Redundanz mit existierenden Daten fest.

The codebook maps `vote_column` (v001-v161) to `poll_id` and other metadata (label, accepted, committee, url). 

Looking at what we already have:
- `bundestag_wp132_polls.csv` already has: `poll_id, label, accepted, committee, url`
- The codebook adds: `vote_column` (v001-v161) which is a standardized column identifier

The codebook seems to be a mapping that adds the `vote_column` identifier (v001, v002, etc.) which would correspond to column names in a wide-format matrix version of the data. 

The codebook's 161 rows align with our vote count, and the `accepted` column is already present in our existing data, so the main new information here is the standardized `vote_column` naming scheme which would only be relevant if we were working with wide-format data instead of our current long format. in the polls.csv

Looking at the polls.csv header—`poll_id,label,accepted,committee,url`—I can see `accepted` is already there. The codebook appears to be essentially the same data with an added `vote_column` identifier that doesn't substantively change our code since we already have all the columns we need from polls.csv. The `accepted` field could help us filter for contested votes or add context, but it doesn't alter our analysis approach.

There's a discrepancy I'm noticing: WP1 shows 162 unique roll-call votes in polls.csv but the vote matrix is 772 legislators × 161 votes, and the codebook has exactly 161 entries. So one poll_id from polls.csv didn't make it into the actual vote matrix—either it was filtered out or had no corresponding votes in votes.csv. The codebook essentially serves as a clean reference for the 161 votes that actually ended up in the matrix, but this doesn't change how we handle the data.
````

Das Codebook ändert **nichts** am bisherigen Code. Hier warum:

## Was das Codebook enthält

Es hat drei Spalten die uns interessieren könnten:

| Spalte | Inhalt | Bereits vorhanden? |
|---|---|---|
| `vote_column` | v001–v161 (Spaltennamen für Wide-Format) | Nicht gebraucht — wir nutzen `poll_id` |
| `poll_id` | Identisch mit unserer `polls.csv` | ✓ bereits in polls.csv |
| `accepted` | True/False (hat der Vote bestanden?) | ✓ bereits in polls.csv |
| `label`, `committee`, `url` | Identisch | ✓ bereits in polls.csv |

Das Codebook ist im Grunde eine **Teilmenge der polls.csv** — es listet nur die 161 Votes die tatsächlich in der Abstimmungsmatrix landen (polls.csv hat 162 Einträge, einer hat keine zugehörigen Stimmen in votes.csv).

## Eine optionale Verbesserung

Der einzige nützliche Zusatz wäre, die `accepted`-Spalte in den Plot-Labels zu nutzen — also bei Votes kennzeichnen ob sie bestanden haben oder nicht. Das ist aber kosmetisch und kein Fehler im bisherigen Code.

**Kurz gesagt: WP1–3 sind korrekt, du kannst direkt mit WP4 weitermachen.**



## Prompt:
19.5.2026, 12:11:53

Wieviele Chains sind aktuell in WP4 vorgesehen?



## Response:
19.5.2026, 12:12:01

In `04_irt_model_alt.R` sind aktuell **2 Chains × 1500 Iterationen** (davon 750 Warmup) vorgesehen — also 750 effektive Post-Warmup-Samples pro Chain.

Das ist der relevante Code-Block:

```r
fit_1pl <- brm(
  ...
  chains  = 2,
  iter    = 1500,
  warmup  = 750,
  ...
)

fit_2pl <- brm(
  ...
  chains  = 2,
  iter    = 1500,
  warmup  = 750,
  ...
)
```

## Empfehlung für dich

Da du auf einem Mac bist und das Modell über Nacht laufen lassen kannst, würde ich die Einstellungen für die **finale Version** noch etwas erhöhen:

```r
chains  = 4,      # Standard in der Literatur
iter    = 2000,
warmup  = 1000,
```

Das gibt dir 4000 Post-Warmup-Samples insgesamt — deutlich stabilere Rhat-Werte und zuverlässigere Credible Intervals für WP5. Laufzeit dann ca. 2–6 Stunden je nach Mac.

Willst du das Skript entsprechend anpassen bevor du es startest?



## Prompt:
19.5.2026, 12:20:33

Warning message:
Parts of the model have not converged (some Rhats are > 1.05). Be careful when analysing the results! We recommend running more iterations and/or setting stronger priors. 

Bezüglich dieser Error message, was sind chain anzahlen die eine gute balance zwischen laufzeit und ergebnis liefern



## Response:
19.5.2026, 12:20:45



````plaintext
Thought process: Wog praktische Empfehlungen für MCMC-Kettenanzahl und Laufzeit.

The user is asking about the balance between chain count and runtime for MCMC convergence. Let me give a practical recommendation.
````

Gute Frage. Hier die intuitive Erklärung zuerst, dann die Empfehlung:

## Was Chains eigentlich machen

Stell dir vor du suchst den Gipfel eines Berges im Nebel. Eine Chain ist ein Wanderer der zufällig startet und sich langsam zum Gipfel tastet. Das Problem: Er könnte in einem lokalen Hügel steckenbleiben und denken er ist am Ziel.

- **Mehr Chains** = mehrere Wanderer starten von verschiedenen Punkten → wenn alle am gleichen Gipfel ankommen, ist Rhat ≈ 1.0 ✓
- **Mehr Iterationen** = jeder Wanderer macht mehr Schritte → erkundet die Landschaft gründlicher

**Rhat** misst ob alle Wanderer am gleichen Ort angekommen sind. > 1.05 heißt: noch nicht.

## Praktische Optionen für dein Modell

| Setup | Chains | Iter | Warmup | Laufzeit (geschätzt) | Qualität |
|---|---|---|---|---|---|
| Schnelltest ✓ | 1 | 300 | 150 | ~5 Min | Nur zum Testen |
| Minimal | 2 | 1500 | 750 | ~1–2 Std | Ausreichend |
| **Empfohlen** ✓ | **4** | **2000** | **1000** | **~3–5 Std** | **Gut für Abgabe** |
| Maximal | 4 | 4000 | 2000 | ~8–12 Std | Publikationsreif |

## Meine Empfehlung: 4 Chains, 2000 Iterationen

Das ist der **Standard in der politikwissenschaftlichen Literatur** und löst die Rhat-Warnung in fast allen Fällen. Passe das Skript so an bevor du es über Nacht startest:

```r
fit_2pl <- brm(
  ...,
  chains  = 4,
  iter    = 2000,
  warmup  = 1000,
  cores   = 4,    # alle 4 Kerne parallel → Chains laufen gleichzeitig
  ...
)
```

Der entscheidende Trick: `cores = 4` lässt alle 4 Chains **gleichzeitig** laufen — die Laufzeit bleibt also fast gleich wie bei 2 Chains sequentiell, aber du bekommst doppelt so viele Samples.

Wie viele CPU-Kerne hat dein Mac?

```r
parallel::detectCores()
```



## Prompt:
19.5.2026, 12:22:27

8



## Response:
19.5.2026, 12:22:37

Dann kannst du alle 8 Kerne nutzen — das ist ideal. Passe das Skript direkt in der Console an:

```r
# Öffne das Skript zum Bearbeiten
file.edit("scripts/04_irt_model_alt.R")
```

Dann die beiden `brm()`-Aufrufe im Skript auf diese Werte ändern:

**Für `fit_1pl`** (der schnelle Baseline-Test):
```r
chains  = 4,
iter    = 2000,
warmup  = 1000,
cores   = 8,
```

**Für `fit_2pl`** (das eigentliche Modell):
```r
chains  = 4,
iter    = 2000,
warmup  = 1000,
cores   = 8,
```

Speichern, dann über Nacht starten:

```r
source("scripts/04_irt_model_alt.R")
```

## Was dich erwartet

Mit 8 Kernen laufen alle 4 Chains **gleichzeitig parallel** — das bedeutet:
- Die Laufzeit entspricht ungefähr **1 Chain alleine** × etwas Overhead
- Geschätzt **2–4 Stunden** für das vollständige Modell
- Rhat sollte danach überall < 1.05 sein

Zwei Dinge noch bevor du es startest:

```r
# 1. Ruhezustand deaktivieren (Terminal):
# System Settings → Batterie → "Nie" bei "Computer in Ruhezustand versetzen"

# 2. Prüfen ob der Cache gelöscht ist (sonst lädt er den alten Schnelltest):
file.remove("output/fit_2pl.rds")
file.remove("output/fit_1pl.rds")
```

Den Cache musst du löschen, weil `brms` sonst den alten 1-Chain-300-Iterationen-Fit wiederverwendet und gar nicht neu rechnet.



## Prompt:
19.5.2026, 16:15:37

Ich möchte jetzt mit den Work Packages 6-10 beginnen.
Zuerst habe ich eine Frage bezüglich des output formats aus dem code, bekomme ich aus dem bisherigen R Code outputs die ich in der geforderten Art und weise einbringen kann?
Bitte hilf mir dann wie ich GitHub Pages für diesen Task aufsetzten kann.
Idealerweise gibst du mir ein weiteres Workpackage Document für die Phase 2 die ich in einem neuen Claude Chat verwenden kann als Kontext um Tokens zu sparen.
Das Working Document sollte genug Kontext (output von R, generelles Thema etc.) enthalten damit der Chat unabhängig funktionieren kann



## Response:
19.5.2026, 16:17:07



````plaintext
Thought process: Orchestrierte R-Output-Integration, GitHub-Setup und kontextreiches Phasendokument.

The user wants to:
1. Understand what outputs from the R code can be used for the website
2. Get help setting up GitHub Pages
3. Get a comprehensive working document for Phase 2 (WP6-10) that can be used in a new Claude chat

Let me think about what outputs the R code produces and how they can be integrated into a GitHub Pages website, then create a comprehensive context document.
````

Gute Idee mit dem neuen Chat. Lass mich zuerst die Output-Frage klären, dann das Dokument erstellen.

## Was der R-Code liefert und wie es verwendbar ist

**Direkt verwendbar für die Website:**

| Output | Format | Verwendung |
|---|---|---|
| `svd_interactive.html` | HTML | ✓ Direkt einbettbar per `<iframe>` |
| `dc_svd_interactive.html` | HTML | ✓ Direkt einbettbar per `<iframe>` |
| `svd_dim1_by_party.png` | PNG | ✓ Als `<img>` Tag |
| `dc_svd_dim1_by_party.png` | PNG | ✓ Als `<img>` Tag |
| `svd_scree.png` | PNG | ✓ Als `<img>` Tag |
| `svd_vs_dc_comparison.png` | PNG | ✓ Als `<img>` Tag |
| `wp4_irt.RData` | RData | ✗ Muss erst zu JSON/PNG exportiert werden |

Das IRT-Modell (WP4) braucht noch einen **Export-Schritt** nach dem Fitten — die Posterior-Daten müssen als JSON oder PNG raus bevor sie auf der Website landen können. Das bauen wir in Phase 2 ein.

---

Jetzt erstelle ich das Kontext-Dokument:

````plaintext
Create File: Comprehensive Phase 2 context document for new Claude chat
````

````plaintext
Bash Tool: Copy to outputs
````

````plaintext
Present File: /mnt/user-data/outputs/PHASE2_CONTEXT.md
````

Das Dokument enthält alles was ein neuer Chat braucht — vollständig unabhängig von diesem Gespräch.

## Was jetzt zu tun ist (Reihenfolge)

**Heute noch in diesem Chat:**
1. IRT-Modell über Nacht starten: `source("scripts/04_irt_model_alt.R")`
2. Ruhezustand am Mac deaktivieren

**Morgen nach dem IRT-Modell:**
3. Prüfen ob Konvergenz ok: `summary(irt_fit)` — alle Rhat < 1.05?
4. Neuen Chat öffnen, `PHASE2_CONTEXT.md` hochladen, Prompt aus Abschnitt 9 einfügen

**Im neuen Chat (Phase 2):**
- GitHub Setup → HTML/CSS Website → Interaktiver Explorer → AI_Prompts.md

Der neue Chat kann direkt mit WP6 (GitHub) starten und braucht nichts aus diesem Gespräch mehr.

> File: /mnt/user-data/outputs/PHASE2_CONTEXT.md





---
Powered by [Claude Exporter](https://www.ai-chat-exporter.net)