# ============================================================
# 06_export_for_web.R
# ------------------------------------------------------------
# Exports SVD, DC-SVD, and IRT results to JSON files that the
# GitHub Pages website (js/main.js) consumes.
#
# Run AFTER:
#   - 02_svd_analysis.R     → output/wp2_svd.RData
#   - 03_dc_svd_analysis.R  → output/wp3_dc_svd.RData
#   - 04_irt_model.R        → output/wp4_irt.RData  (optional)
#
# Produces:
#   - data/svd_results.json   (legislators + variance shares)
#   - data/irt_results.json   (posterior summary + claim test)
# ============================================================

suppressPackageStartupMessages({
  library(tidyverse)
  library(jsonlite)
})

# --- Locate project root (run from project root or scripts/) ---
project_root <- if (basename(getwd()) == "scripts") ".." else "."
out_dir      <- file.path(project_root, "output")
web_dir      <- file.path(project_root, "data")
dir.create(web_dir, showWarnings = FALSE, recursive = TRUE)

cat("→ Project root:", normalizePath(project_root), "\n")
cat("→ Output dir:  ", normalizePath(out_dir), "\n")
cat("→ Web data dir:", normalizePath(web_dir), "\n\n")

# --- Party color map (must match css/style.css) ---
party_colors <- c(
  "SPD"                       = "#E3000F",
  "CDU/CSU"                   = "#000000",
  "BÜNDNIS 90/\u00adDIE GRÜNEN" = "#1AA037",   # soft-hyphen in raw data
  "GRÜNE"                     = "#1AA037",
  "FDP"                       = "#FFED00",
  "AfD"                       = "#009EE0",
  "DIE LINKE."                = "#BE3075",
  "fraktionslos"              = "#888888"
)

# Normalize the soft-hyphen Greens party label
normalize_party <- function(p) {
  p <- gsub("\u00ad", "", p, fixed = TRUE)              # strip soft hyphen
  p <- gsub("BÜNDNIS 90/DIE GRÜNEN", "GRÜNE", p, fixed = TRUE)
  p
}

# ============================================================
# 1. Load WP2 (SVD) and WP3 (DC-SVD) results
# ============================================================
cat("Loading SVD results...\n")
load(file.path(out_dir, "wp2_svd.RData"))       # expects: svd_fit, mp_meta, var_explained
load(file.path(out_dir, "wp3_dc_svd.RData"))    # expects: dc_svd_fit, var_explained_dc

# Adapt these names to whatever your scripts actually save.
# The expected variables here are illustrative — adjust to match.

# Legislator coordinates
svd_coords <- svd_fit$u %*% diag(svd_fit$d)
dc_coords  <- dc_svd_fit$u %*% diag(dc_svd_fit$d)

# Assemble legislators data frame
legislators <- mp_meta %>%
  mutate(
    party     = normalize_party(party),
    color     = party_colors[party] %>% replace_na("#888888"),
    svd_dim1  = round(svd_coords[, 1], 5),
    svd_dim2  = round(svd_coords[, 2], 5),
    dcsvd_dim1 = round(dc_coords[, 1], 5),
    dcsvd_dim2 = round(dc_coords[, 2], 5),
    id        = sprintf("mp_%04d", row_number())
  ) %>%
  select(id, name, party, color,
         svd_dim1, svd_dim2,
         dcsvd_dim1, dcsvd_dim2)

# ============================================================
# 2. (Optional) Merge IRT posterior means
# ============================================================
irt_file <- file.path(out_dir, "wp4_irt.RData")
if (file.exists(irt_file)) {
  cat("Loading IRT results...\n")
  load(irt_file)   # expects: fit_2pl (brmsfit), theta_summary

  # Expected theta_summary structure:
  #   data frame with columns: mp_id, mean, lower (q025), upper (q975)
  legislators <- legislators %>%
    left_join(
      theta_summary %>%
        rename(irt_mean = mean, irt_lower = lower, irt_upper = upper),
      by = c("id" = "mp_id")
    )

  # Substantive claim: P(|FDP − CDU| < |FDP − SPD|)
  posterior <- posterior::as_draws_df(fit_2pl)
  # Adjust column accessor to your model's actual posterior layout
  theta_by_party <- legislators %>%
    group_by(party) %>%
    summarise(theta_mean = mean(irt_mean, na.rm = TRUE), .groups = "drop")

  # For a proper test, you'd compute posterior draws of party means;
  # here we sketch it:
  fdp_draws <- rowMeans(posterior[, grep("r_mp_id\\[.*FDP", colnames(posterior))])
  spd_draws <- rowMeans(posterior[, grep("r_mp_id\\[.*SPD", colnames(posterior))])
  cdu_draws <- rowMeans(posterior[, grep("r_mp_id\\[.*CDU", colnames(posterior))])

  p_claim <- mean(abs(fdp_draws - cdu_draws) < abs(fdp_draws - spd_draws))

  irt_out <- list(
    metadata = list(
      model        = "2-PL IRT via brms + cmdstanr",
      chains       = 4L,
      iterations   = 2000L,
      warmup       = 1000L,
      priors       = list(
        theta_i     = "N(0, 1)",
        beta_j      = "N(0, 2)",
        log_alpha_j = "N(0, 0.5)"
      ),
      status       = "Complete"
    ),
    substantive_claim = list(
      statement     = "FDP was ideologically closer to CDU/CSU than to SPD/Greens during the Ampel coalition",
      probability   = round(p_claim, 4),
      n_posterior_samples = length(fdp_draws),
      interpretation = "Posterior probability that |theta_FDP - theta_CDU| < |theta_FDP - theta_SPD|."
    ),
    party_distributions = list(
      FDP = list(mean = mean(fdp_draws), samples = round(sample(fdp_draws, 500), 4)),
      SPD = list(mean = mean(spd_draws), samples = round(sample(spd_draws, 500), 4)),
      `CDU/CSU` = list(mean = mean(cdu_draws), samples = round(sample(cdu_draws, 500), 4))
    )
  )
} else {
  cat("⚠ IRT results not yet available — writing placeholder JSON.\n")
  legislators$irt_mean  <- NA_real_
  legislators$irt_lower <- NA_real_
  legislators$irt_upper <- NA_real_
  irt_out <- list(
    metadata = list(status = "Not yet run — placeholder."),
    substantive_claim = list(
      statement = "Pending IRT model fit",
      probability = NA
    )
  )
}

# ============================================================
# 3. Build SVD JSON output
# ============================================================
svd_out <- list(
  metadata = list(
    n_legislators   = nrow(legislators),
    n_votes         = 161L,
    period          = "Wahlperiode 20 (29.09.2021 – 24.03.2025)",
    imputation      = "Double-Mean (17.8% missing)",
    variance_explained = list(
      svd    = list(dim1 = unname(var_explained[1]),
                    dim2 = unname(var_explained[2]),
                    dim3 = unname(var_explained[3])),
      dc_svd = list(dim1 = unname(var_explained_dc[1]),
                    dim2 = unname(var_explained_dc[2]),
                    dim3 = unname(var_explained_dc[3]))
    ),
    correlation_raw_vs_dc = round(
      cor(svd_coords[, 1], dc_coords[, 1]), 3
    )
  ),
  legislators = legislators
)

# ============================================================
# 4. Write JSON
# ============================================================
write_json(
  svd_out,
  path        = file.path(web_dir, "svd_results.json"),
  pretty      = TRUE,
  auto_unbox  = TRUE,
  null        = "null",
  na          = "null"
)
write_json(
  irt_out,
  path        = file.path(web_dir, "irt_results.json"),
  pretty      = TRUE,
  auto_unbox  = TRUE,
  null        = "null",
  na          = "null"
)

cat("\n✓ Wrote", file.path(web_dir, "svd_results.json"), "\n")
cat("✓ Wrote", file.path(web_dir, "irt_results.json"), "\n")
cat("\nDone. Commit the new files in data/ to deploy.\n")
