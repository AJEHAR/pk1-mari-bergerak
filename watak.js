/*
  Watak beranimasi untuk "Mari Bergerak". Dilukis sendiri (SVG + CSS), tiada gambar luar.
  Guna: Watak.svg('angguk')  → rentetan SVG yang bergerak mengikut pergerakan itu.
*/
(function () {
  var KULIT = '#f6c7a1', KULIT_G = '#e3a77f', RAMBUT = '#3b2a20', BAJU = '#ffffff', GARIS = '#c9d1e0', SELUAR = '#2f3e74', MATA = '#2b2742', PIPI = '#ff9aa2', PANAH = '#e03131';
  var nombor = 0;

  var CSS = [
    '.watak{width:100%;height:100%;display:block;overflow:visible}',
    '.watak .kepala,.watak .muka,.watak .lengan{transform-box:view-box}',
    '.watak.depan .kepala{transform-origin:100px 92px}',
    '.watak.sisi .kepala{transform-origin:102px 92px}',
    '.watak .lengan.kiri{transform-origin:70px 106px}',
    '.watak .lengan.kanan{transform-origin:130px 106px}',
    '.watak .ap{display:none}',
    '@keyframes wk-kelip{from{opacity:.35}to{opacity:1}}',
    // kepala
    '.gerak-dongak .kepala{animation:wk-dongak 3.2s ease-in-out infinite}',
    '@keyframes wk-dongak{0%,10%{transform:rotate(0)}30%,72%{transform:rotate(-30deg)}92%,100%{transform:rotate(0)}}',
    '.gerak-tunduk .kepala{animation:wk-tunduk 3.2s ease-in-out infinite}',
    '@keyframes wk-tunduk{0%,10%{transform:rotate(0)}30%,72%{transform:rotate(30deg)}92%,100%{transform:rotate(0)}}',
    '.gerak-angguk .kepala{animation:wk-angguk 1.4s ease-in-out infinite}',
    '@keyframes wk-angguk{0%,50%,100%{transform:rotate(0)}25%,75%{transform:rotate(20deg)}}',
    '.gerak-toleh .muka{animation:wk-toleh 4.4s ease-in-out infinite}',
    '@keyframes wk-toleh{0%,8%{transform:translateX(0)}20%,40%{transform:translateX(-13px)}52%,56%{transform:translateX(0)}68%,88%{transform:translateX(13px)}100%{transform:translateX(0)}}',
    '.gerak-geleng .muka{animation:wk-geleng .7s ease-in-out infinite}',
    '@keyframes wk-geleng{0%,100%{transform:translateX(0)}25%{transform:translateX(-10px)}75%{transform:translateX(10px)}}',
    '.gerak-geleng .kepala{animation:wk-gelengk .7s ease-in-out infinite}',
    '@keyframes wk-gelengk{0%,100%{transform:rotate(0)}25%{transform:rotate(-3deg)}75%{transform:rotate(3deg)}}',
    // tangan
    '.gerak-regang .lengan.kiri{animation:wk-regang-ki 3.2s ease-in-out infinite}',
    '.gerak-regang .lengan.kanan{animation:wk-regang-ka 3.2s ease-in-out infinite}',
    '@keyframes wk-regang-ki{0%,8%{transform:rotate(0)}45%,55%{transform:rotate(165deg)}92%,100%{transform:rotate(0)}}',
    '@keyframes wk-regang-ka{0%,8%{transform:rotate(0)}45%,55%{transform:rotate(-165deg)}92%,100%{transform:rotate(0)}}',
    '.gerak-pusing .lengan.kiri{animation:wk-pusing-ki 1.1s linear infinite}',
    '.gerak-pusing .lengan.kanan{animation:wk-pusing-ka 1.1s linear infinite}',
    '@keyframes wk-pusing-ki{0%,100%{transform:rotate(78deg) scaleY(1)}25%{transform:rotate(90deg) scaleY(1.09)}50%{transform:rotate(102deg) scaleY(1)}75%{transform:rotate(90deg) scaleY(.91)}}',
    '@keyframes wk-pusing-ka{0%,100%{transform:rotate(-78deg) scaleY(1)}25%{transform:rotate(-90deg) scaleY(1.09)}50%{transform:rotate(-102deg) scaleY(1)}75%{transform:rotate(-90deg) scaleY(.91)}}',
    '.gerak-tarik .lengan.kiri{animation:wk-tarik-ki 2.4s ease-in-out infinite}',
    '.gerak-tarik .lengan.kanan{animation:wk-tarik-ka 2.4s ease-in-out infinite}',
    '@keyframes wk-tarik-ki{0%,100%{transform:rotate(-16deg)}40%,60%{transform:rotate(-30deg)}}',
    '@keyframes wk-tarik-ka{0%,100%{transform:rotate(16deg)}40%,60%{transform:rotate(30deg)}}',
    // anak panah
    '.gerak-dongak .ap-dongak,.gerak-tunduk .ap-tunduk,.gerak-angguk .ap-angguk,.gerak-toleh .ap-toleh,.gerak-geleng .ap-geleng,.gerak-regang .ap-regang,.gerak-pusing .ap-pusing,.gerak-tarik .ap-tarik{display:inline;animation:wk-kelip .9s ease-in-out infinite alternate}',
    '.watak.diam *{animation-play-state:paused!important}'
  ].join('\n');
  var s = document.createElement('style'); s.textContent = CSS; document.head.appendChild(s);

  function lengan(sisi) {
    var x = sisi === 'kiri' ? 62 : 123;
    return '<g class="lengan ' + sisi + '">' +
      '<rect x="' + x + '" y="102" width="15" height="34" rx="7" fill="' + BAJU + '" stroke="' + GARIS + '" stroke-width="2.5"/>' +
      '<rect x="' + (x + 2) + '" y="128" width="11" height="30" rx="5.5" fill="' + KULIT + '"/>' +
      '<circle cx="' + (x + 7.5) + '" cy="161" r="7.5" fill="' + KULIT + '"/></g>';
  }
  function panah(id) {
    var m = 'url(#ph' + id + ')', a = ' fill="none" stroke="' + PANAH + '" stroke-width="4" stroke-linecap="round" ';
    return '<g class="ap ap-dongak"><path d="M140 82 q24 -24 6 -54"' + a + 'marker-end="' + m + '"/></g>' +
      '<g class="ap ap-tunduk"><path d="M144 26 q24 24 4 56"' + a + 'marker-end="' + m + '"/></g>' +
      '<g class="ap ap-angguk"><path d="M144 28 q24 26 2 56"' + a + 'marker-start="' + m + '" marker-end="' + m + '"/></g>' +
      '<g class="ap ap-toleh"><path d="M56 16 h88"' + a + 'marker-start="' + m + '" marker-end="' + m + '"/></g>' +
      '<g class="ap ap-geleng"><path d="M62 16 q9 -9 19 0 t19 0 t19 0 t19 0"' + a + 'marker-start="' + m + '" marker-end="' + m + '"/></g>' +
      '<g class="ap ap-regang"><path d="M40 168 q-34 -72 14 -150"' + a + 'marker-end="' + m + '"/><path d="M160 168 q34 -72 -14 -150"' + a + 'marker-end="' + m + '"/></g>' +
      '<g class="ap ap-pusing"><path d="M14 84 a20 20 0 1 1 -2 0"' + a + 'marker-end="' + m + '"/><path d="M186 84 a20 20 0 1 0 2 0"' + a + 'marker-end="' + m + '"/></g>' +
      '<g class="ap ap-tarik"><path d="M66 192 h68"' + a + 'marker-start="' + m + '" marker-end="' + m + '"/></g>';
  }
  function depan() {
    return '<ellipse cx="100" cy="242" rx="50" ry="6" fill="#000" opacity=".08"/>' +
      '<rect x="80" y="166" width="17" height="68" rx="7" fill="' + SELUAR + '"/><rect x="103" y="166" width="17" height="68" rx="7" fill="' + SELUAR + '"/>' +
      '<ellipse cx="86" cy="236" rx="13" ry="6" fill="#fff" stroke="' + GARIS + '" stroke-width="2"/><ellipse cx="114" cy="236" rx="13" ry="6" fill="#fff" stroke="' + GARIS + '" stroke-width="2"/>' +
      '<rect x="93" y="82" width="14" height="18" rx="4" fill="' + KULIT_G + '"/>' +
      '<path d="M72 110 q0 -12 12 -14 h32 q12 2 12 14 v58 h-56z" fill="' + BAJU + '" stroke="' + GARIS + '" stroke-width="2.5"/>' +
      '<path d="M88 96 l12 12 l12 -12" fill="none" stroke="' + GARIS + '" stroke-width="2.5" stroke-linejoin="round"/>' +
      '<rect x="111" y="116" width="9" height="11" rx="2" fill="#4263eb"/>' +
      '<rect x="72" y="158" width="56" height="12" rx="3" fill="' + SELUAR + '"/>' +
      lengan('kiri') + lengan('kanan') +
      '<g class="kepala">' +
        '<circle cx="69" cy="64" r="7" fill="' + KULIT + '"/><circle cx="131" cy="64" r="7" fill="' + KULIT + '"/>' +
        '<circle cx="100" cy="62" r="31" fill="' + KULIT + '"/>' +
        '<g class="muka">' +
          '<circle cx="89" cy="64" r="3.8" fill="' + MATA + '"/><circle cx="111" cy="64" r="3.8" fill="' + MATA + '"/>' +
          '<circle cx="90.2" cy="62.6" r="1.2" fill="#fff"/><circle cx="112.2" cy="62.6" r="1.2" fill="#fff"/>' +
          '<ellipse cx="82" cy="73" rx="5" ry="3" fill="' + PIPI + '" opacity=".55"/><ellipse cx="118" cy="73" rx="5" ry="3" fill="' + PIPI + '" opacity=".55"/>' +
          '<path d="M98 70 q2 3 4 0" fill="none" stroke="' + KULIT_G + '" stroke-width="2" stroke-linecap="round"/>' +
          '<path d="M92 77 q8 7 16 0" fill="none" stroke="' + MATA + '" stroke-width="2.6" stroke-linecap="round"/>' +
        '</g>' +
        '<path d="M68 60 q1 -34 32 -35 q31 1 32 35 q-7 -15 -32 -16 q-25 1 -32 16z" fill="' + RAMBUT + '"/>' +
      '</g>';
  }
  function sisi() {
    return '<ellipse cx="104" cy="242" rx="40" ry="6" fill="#000" opacity=".08"/>' +
      '<rect x="88" y="166" width="17" height="68" rx="7" fill="#26335f"/><rect x="96" y="166" width="17" height="68" rx="7" fill="' + SELUAR + '"/>' +
      '<ellipse cx="112" cy="236" rx="16" ry="6" fill="#fff" stroke="' + GARIS + '" stroke-width="2"/>' +
      '<rect x="95" y="82" width="14" height="18" rx="4" fill="' + KULIT_G + '"/>' +
      '<path d="M84 110 q0 -14 14 -14 h8 q14 0 14 14 v58 h-36z" fill="' + BAJU + '" stroke="' + GARIS + '" stroke-width="2.5"/>' +
      '<rect x="84" y="158" width="36" height="12" rx="3" fill="' + SELUAR + '"/>' +
      '<g class="lengan-sisi"><rect x="94" y="102" width="15" height="34" rx="7" fill="' + BAJU + '" stroke="' + GARIS + '" stroke-width="2.5"/>' +
        '<rect x="96" y="128" width="11" height="30" rx="5.5" fill="' + KULIT + '"/><circle cx="101.5" cy="161" r="7.5" fill="' + KULIT + '"/></g>' +
      '<g class="kepala">' +
        '<circle cx="102" cy="62" r="30" fill="' + KULIT + '"/>' +
        '<path d="M130 56 q9 5 1 11" fill="' + KULIT + '"/>' +
        '<path d="M72 70 q-6 -42 32 -43 q24 1 28 22 q-14 -8 -30 -5 q-4 14 -12 28 q-9 3 -18 -2z" fill="' + RAMBUT + '"/>' +
        '<ellipse cx="96" cy="66" rx="5" ry="7" fill="' + KULIT + '" stroke="' + KULIT_G + '" stroke-width="2"/>' +
        '<circle cx="118" cy="58" r="3.6" fill="' + MATA + '"/><circle cx="119.2" cy="56.8" r="1.1" fill="#fff"/>' +
        '<ellipse cx="116" cy="70" rx="4.5" ry="2.8" fill="' + PIPI + '" opacity=".55"/>' +
        '<path d="M119 77 q6 3 11 -2" fill="none" stroke="' + MATA + '" stroke-width="2.6" stroke-linecap="round"/>' +
      '</g>';
  }
  window.Watak = {
    svg: function (id, pandangan) {
      var n = ++nombor;
      var p = pandangan || ((window.GERAK || []).filter(function (g) { return g.id === id; })[0] || {}).pandangan || 'depan';
      return '<svg class="watak ' + p + ' gerak-' + id + '" viewBox="-10 0 220 250" role="img" aria-label="Pergerakan ' + id + '">' +
        '<defs><marker id="ph' + n + '" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">' +
        '<path d="M0 0 L10 5 L0 10z" fill="' + PANAH + '"/></marker></defs>' +
        (p === 'sisi' ? sisi() : depan()) + panah(n) + '</svg>';
    }
  };
})();
