# Qualifying Question

## Assignment and Task
In this assignment, you will be scaling roll-call vote data from the Bundestag.
A good reference exists in the notion page, here: **Multi-dimensional Scaling and IRT Models with code examples**.

## Data and setting
The data consist of every recorded roll-call vote (*namentliche Abstimmung*) of the 20th German Bundestag — Wahlperiode 20, 2021-09-29 to 2025-03-24, the Ampel coalition period. For each vote, every Bundestag member is recorded as voting *ja*, *nein*, *Enthaltung* (abstain), or *nicht abgegeben* (not cast). We will adopt the notation "ja"=1, "nein"=0, and anything els is missing = "NA."

The data is available in the teaching dataset google drive, named `bundestag_rollcall.zip`. It contains two files:

1. `bundestag_wp132_polls.csv` — one row per recorded vote: id, label, committee, URL. (The in the filename is the Abgeordnetenwatch *parliament-period* id; the parliament itself is the 20th Bundestag.)
2. `bundestag_wp132_votes.csv` — long form: one row per (mandate × poll), with the cast vote and the MP's fraction at that vote.

## Task
A binary vote matrix is a standard input for ideal-point estimation. It is normally a combination of 1's, 0's, and NA's or equivalent for missing votes. Every legislator is placed at a point on a latent scale, and the votes reveal where legislators tend to fall on that scale.

## The Analysis
For this assignment, you will scale the roll-call matrix three ways.

### i. Data Preparation & Imputation
The matrix methods require a complete rectangular matrix (the *brms* method does not, though ignoring missingness can always induce biases!). Arrange the data into a form with legislators in rows and votes in columns. The missing data need to be filled in with something. The quickest approach that is reasonable is double-mean imputation: fill in each missing value with the mean of the observed values in its row + the mean of the observed values in its column - the overall mean of the observed data.

### ii. Singular Value Decomposition (SVD)
Generate the SVD of this matrix. Look along the first column of latent scalings for the legislators.
* **a)** Who falls on one side? The other? Does the ordering make sense, given your knowledge of German politics?
* **b)** Look at the most/least extreme votes. Do these make sense? What dimension is being pulled out?
* **c)** Look at the second dimension of legislators. Does it look like a meaningful dimension, or noise?
* **d)** What proportion of the variance is explained by the first dimension? For dimension 1, this is:
  $$var_1 = rac{d_1^2}{\sum_j d_j^2}$$
  where the $d$ comes from the D component of the SVD decomposition.

### iii. Double-Centered Matrix SVD
We are now going to do the same for the double-centered matrix. To double-center the matrix, start with the original data, then for each element of the matrix calculate:
$$	ilde{X}_{ij} = X_{ij} - ar{X}_{i\cdot} - ar{X}_{\cdot j} + ar{X}_{\cdot\cdot}$$
Confirm that the double-centered matrix does have mean zero for all rows and columns, then repeat teh analysis in (ii).

### iv. Item Response Theory (IRT) Model
Next, scale the roll call votes using *brms* or an equivalent method in Python. Fit a one-dimensional 2-PL IRT model. Specify what priors were used for each set of parameters (you can use the defaults), and compare the posterior distirbution of the ideal points to what you recovered in part (i)-(iii). Do the results agree/correlate?

### v. Substantive Evaluation & Uncertainty
Choose one substantive claim about the first dimension in the 20th Bundestag from the IRT model and use your scaling results to evaluate it. A strong answer uses the Bayesian posterior as a distribution, not just as another point estimate. It distinguishes what the posterior directly shows from what you infer, and it distinguishes uncertainty about one MP's ideal point from uncertainty about the ordering of two MPs, parties, or groups. (Note that uncertainty estimates are a major advantage of the IRT model over the SVD approach.)

## Permitted resources
This assignment will split into two. You can do this in pairs, and may speak with members of other groups but not look at/share code.

### Option A: Coding with minimal/no AI
For those coding themselves, with no or minimal AI (only for checking and verification), please submit a pdf with answers to the questions above, and code at the end. Please keep it to 3-4 pages for the forward-facing document, including figures, with annotated and readable code at the end.

### Option B: Automated Coding via AI
For those automating coding through AI, please place the code, response, and full replication package in a publicly available git repo (github, gitlab, etc.). This should include a file with prompts and the history of your chat interactions (in any form, this can be long). The simplest way to do this is with Github pages. There are other options for serving static pages such as Netlify etc. but Github pages is probably easiest. The submission should be well-formatted and clean, use University colours, and take me through your analyses and results in 1-4, combining code snippets with results. There should be at least one interactive component on the page, that I can adjust and work with while looking at your results. Be sure that figures and plots are labelled informative, for example using the legislator's name properly written, and not how it is stored in the dataset.
