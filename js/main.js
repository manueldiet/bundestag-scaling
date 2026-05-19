/* ============================================================
   Legislator Explorer — Plotly.js
   Switches between SVD / DC-SVD / IRT estimators, with party
   filtering and 1D/2D views. University of Mannheim palette.
   ============================================================ */

(function () {
  'use strict';

  // ----- State -----
  const state = {
    method: 'dcsvd',         // 'svd' | 'dcsvd' | 'irt'
    view:   '2d',            // '2d'  | '1d'
    parties: new Set(),       // parties currently visible
    data: null,
    irt: null,
  };

  // Party colour map (must match CSS)
  const PARTY_COLORS = {
    'SPD':          '#E3000F',
    'CDU/CSU':      '#000000',
    'GRÜNE':        '#1AA037',
    'FDP':          '#FFED00',
    'AfD':          '#009EE0',
    'DIE LINKE.':   '#BE3075',
    'fraktionslos': '#888888',
  };

  // Pretty axis labels
  const METHOD_META = {
    svd:   {
      label: 'Baseline SVD',
      xKey: 'svd_dim1',   yKey: 'svd_dim2',
      xLabel: 'Dimension 1 (83.6% variance)',
      yLabel: 'Dimension 2 (10.2% variance)',
      note:  'Dim 1 is dominated by a coalition–opposition baseline effect.',
    },
    dcsvd: {
      label: 'Double-centered SVD',
      xKey: 'dcsvd_dim1', yKey: 'dcsvd_dim2',
      xLabel: 'Dimension 1, DC (60.5% variance)',
      yLabel: 'Dimension 2, DC',
      note:  'After removing baseline effects, CDU/CSU emerges as the most consistent opposition.',
    },
    irt:   {
      label: 'Bayesian 2-PL IRT',
      xKey: 'irt_mean',   yKey: null,   // IRT is 1D
      xLabel: 'Ideal point θᵢ (posterior mean)',
      yLabel: '',
      note:  'Bayesian estimate with posterior uncertainty. Status: preliminary.',
    },
  };

  // ----- Load data -----
  async function loadData() {
    const [svdRes, irtRes] = await Promise.all([
      fetch('data/svd_results.json').then(r => r.json()),
      fetch('data/irt_results.json').then(r => r.json()),
    ]);
    state.data = svdRes;
    state.irt  = irtRes;

    // Initialise visible parties (all on by default)
    const partiesInData = new Set(state.data.legislators.map(d => d.party));
    state.parties = partiesInData;

    buildPartyToggles(Array.from(partiesInData));
    drawPlot();
    updateSummary();
  }

  // ----- Party toggle chips -----
  function buildPartyToggles(parties) {
    const host = document.getElementById('party-toggles');
    host.innerHTML = '';

    // Stable order matching the CSS legend
    const order = ['SPD', 'CDU/CSU', 'GRÜNE', 'FDP', 'AfD', 'DIE LINKE.', 'fraktionslos'];
    parties.sort((a, b) => order.indexOf(a) - order.indexOf(b));

    parties.forEach(p => {
      const btn = document.createElement('button');
      btn.className = 'party-toggle';
      btn.dataset.party = p;
      btn.innerHTML = `<span class="swatch" style="background:${PARTY_COLORS[p] || '#888'}"></span>${p}`;
      btn.addEventListener('click', () => {
        btn.classList.toggle('off');
        if (state.parties.has(p)) state.parties.delete(p);
        else state.parties.add(p);
        drawPlot();
        updateSummary();
      });
      host.appendChild(btn);
    });
  }

  // ----- Build Plotly traces -----
  function buildTraces() {
    const meta = METHOD_META[state.method];
    const is1D = state.view === '1d' || meta.yKey === null;

    // Group legislators by party
    const byParty = new Map();
    state.data.legislators.forEach(mp => {
      if (!state.parties.has(mp.party)) return;
      if (!byParty.has(mp.party)) byParty.set(mp.party, []);
      byParty.get(mp.party).push(mp);
    });

    // Stable order for legend
    const order = ['SPD', 'GRÜNE', 'FDP', 'CDU/CSU', 'AfD', 'DIE LINKE.', 'fraktionslos'];
    const partyOrder = order.filter(p => byParty.has(p));

    return partyOrder.map(party => {
      const mps = byParty.get(party);
      const xs = mps.map(m => m[meta.xKey]);
      const ys = is1D
        ? mps.map(() => (Math.random() - 0.5) * 0.6 + partyOrder.indexOf(party))  // jitter per party row
        : mps.map(m => m[meta.yKey]);

      const text = mps.map(m =>
        `<b>${m.name}</b><br>` +
        `Party: ${m.party}<br>` +
        `${meta.xLabel.split(' (')[0]}: ${m[meta.xKey].toFixed(4)}` +
        (is1D ? '' : `<br>${meta.yLabel.split(' (')[0]}: ${m[meta.yKey].toFixed(4)}`)
      );

      // FDP needs a stroke because yellow on white disappears
      const needsStroke = party === 'FDP';

      return {
        type: 'scatter',
        mode: 'markers',
        name: party,
        x: xs,
        y: ys,
        text: text,
        hoverinfo: 'text',
        marker: {
          color: PARTY_COLORS[party] || '#888',
          size: 9,
          opacity: 0.78,
          line: {
            color: needsStroke ? '#1B3A4B' : 'rgba(0,0,0,0.18)',
            width: needsStroke ? 1.2 : 0.5,
          },
        },
      };
    });
  }

  // ----- Layout config -----
  function buildLayout() {
    const meta = METHOD_META[state.method];
    const is1D = state.view === '1d' || meta.yKey === null;

    const layout = {
      margin: { l: 70, r: 30, t: 30, b: 60 },
      paper_bgcolor: '#FAF8F4',
      plot_bgcolor:  '#FAF8F4',
      font: {
        family: '"Inter Tight", "Helvetica Neue", sans-serif',
        size: 12,
        color: '#14202A',
      },
      hoverlabel: {
        bgcolor: '#1B3A4B',
        bordercolor: '#7BAFD4',
        font: {
          family: '"Inter Tight", "Helvetica Neue", sans-serif',
          color: '#FAF8F4',
          size: 12,
        },
      },
      xaxis: {
        title: { text: meta.xLabel, font: { size: 13 } },
        gridcolor: 'rgba(27, 58, 75, 0.08)',
        zerolinecolor: 'rgba(27, 58, 75, 0.35)',
        zerolinewidth: 1,
        linecolor: '#1B3A4B',
        ticks: 'outside',
        ticklen: 4,
        tickcolor: '#1B3A4B',
      },
      yaxis: is1D
        ? {
            title: { text: '', font: { size: 13 } },
            showgrid: false,
            zeroline: false,
            showticklabels: false,
            range: [-0.7, (Array.from(state.parties).length) - 0.3],
          }
        : {
            title: { text: meta.yLabel, font: { size: 13 } },
            gridcolor: 'rgba(27, 58, 75, 0.08)',
            zerolinecolor: 'rgba(27, 58, 75, 0.35)',
            zerolinewidth: 1,
            linecolor: '#1B3A4B',
            ticks: 'outside',
            ticklen: 4,
            tickcolor: '#1B3A4B',
          },
      legend: {
        orientation: 'h',
        x: 0.5,
        y: -0.18,
        xanchor: 'center',
        font: { size: 11 },
        bgcolor: 'rgba(0,0,0,0)',
      },
      hovermode: 'closest',
      transition: { duration: 350, easing: 'cubic-in-out' },
    };

    return layout;
  }

  // ----- Plot it -----
  function drawPlot() {
    const traces = buildTraces();
    const layout = buildLayout();

    Plotly.react('plot', traces, layout, {
      displayModeBar: true,
      displaylogo: false,
      responsive: true,
      modeBarButtonsToRemove: [
        'lasso2d', 'select2d', 'autoScale2d',
        'toggleSpikelines', 'hoverCompareCartesian', 'hoverClosestCartesian',
      ],
      toImageButtonOptions: {
        format: 'png',
        filename: `bundestag_${state.method}_${state.view}`,
        scale: 2,
      },
    });
  }

  // ----- Summary line -----
  function updateSummary() {
    const meta = METHOD_META[state.method];
    const host = document.getElementById('plot-summary');

    const visibleMPs = state.data.legislators.filter(d => state.parties.has(d.party));
    const visibleCount = visibleMPs.length;
    const totalCount   = state.data.legislators.length;

    // Compute party means on current x-axis
    const xKey = meta.xKey;
    const byParty = new Map();
    visibleMPs.forEach(mp => {
      if (!byParty.has(mp.party)) byParty.set(mp.party, []);
      byParty.get(mp.party).push(mp[xKey]);
    });
    const partyMeans = Array.from(byParty.entries())
      .map(([p, xs]) => [p, xs.reduce((a, b) => a + b, 0) / xs.length])
      .sort((a, b) => a[1] - b[1]);

    let html = '';
    html += `<span><strong>${visibleCount}</strong> / ${totalCount} legislators shown</span>`;
    html += `<span>Estimator: <strong>${meta.label}</strong></span>`;
    if (partyMeans.length >= 2) {
      const [leftP, leftV]   = partyMeans[0];
      const [rightP, rightV] = partyMeans[partyMeans.length - 1];
      html += `<span>Leftmost mean: <strong>${leftP}</strong> (${leftV.toFixed(3)})</span>`;
      html += `<span>Rightmost mean: <strong>${rightP}</strong> (${rightV.toFixed(3)})</span>`;
    }
    html += `<span style="flex-basis:100%; font-style: italic; opacity: 0.75; padding-top: 0.4rem;">${meta.note}</span>`;

    host.innerHTML = html;
  }

  // ----- Wire up controls -----
  function bindControls() {
    document.getElementById('method-select').addEventListener('change', (e) => {
      state.method = e.target.value;
      // If switching to IRT, force 1D view
      if (state.method === 'irt') {
        state.view = '1d';
        document.getElementById('view-select').value = '1d';
      }
      drawPlot();
      updateSummary();
    });
    document.getElementById('view-select').addEventListener('change', (e) => {
      state.view = e.target.value;
      drawPlot();
      updateSummary();
    });
  }

  // ----- Inject IRT probability into prose -----
  function updateClaimProb() {
    if (!state.irt) return;
    const p = state.irt.substantive_claim.probability;
    const target = document.getElementById('claim-prob');
    if (target) target.textContent = p.toFixed(2);
  }

  // ----- ScrollSpy for TOC -----
  function setupScrollSpy() {
    const links = document.querySelectorAll('.toc a');
    const sections = Array.from(links).map(a =>
      document.querySelector(a.getAttribute('href'))
    ).filter(Boolean);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          links.forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, { rootMargin: '-30% 0px -55% 0px' });

    sections.forEach(s => observer.observe(s));
  }

  // ----- Init -----
  document.addEventListener('DOMContentLoaded', () => {
    bindControls();
    setupScrollSpy();
    loadData()
      .then(updateClaimProb)
      .catch(err => {
        const host = document.getElementById('plot');
        host.innerHTML =
          `<div class="loading" style="color:#E2001A;">
            Could not load <code>data/svd_results.json</code> or
            <code>data/irt_results.json</code>.<br>
            ${err.message}
          </div>`;
        console.error(err);
      });
  });
})();
