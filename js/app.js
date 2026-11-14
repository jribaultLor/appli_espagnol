(function () {
  'use strict';

  var COURSE = window.COURSE;
  var CONJ = window.CONJ || [];
  var KEY = 'espagnol-v1';
  var SKILLS = [['lire', 'Lire'], ['ecouter', 'Écouter'], ['ecrire', 'Écrire'], ['parler', 'Parler']];
  var INTERVALS = [1, 3, 7, 14, 30]; // jours avant la prochaine révision, selon la boîte
  var app = document.getElementById('app');

  // ---------- État et sauvegarde ----------
  function blankSkills() { return { lire: [0, 0], ecouter: [0, 0], ecrire: [0, 0], parler: [0, 0] }; }
  function load() {
    try {
      var s = JSON.parse(localStorage.getItem(KEY));
      if (s && s.v === 1) return s;
    } catch (e) { /* stockage indisponible : on repart d'un état vide */ }
    return { v: 1, lessons: {}, items: {}, skills: blankSkills(), settings: {}, conj: {} };
  }
  var state = load();
  if (!state.settings) state.settings = {};
  if (!state.conj) state.conj = {};
  var storageOk = true;
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { storageOk = false; }
  }
  function today() {
    var d = new Date();
    return Math.floor((d.getTime() - d.getTimezoneOffset() * 60000) / 86400000);
  }

  // ---------- Petits outils d'affichage ----------
  function el(tag, props, kids) {
    var e = document.createElement(tag), k;
    if (props) for (k in props) {
      if (props[k] == null || props[k] === false) continue;
      if (k === 'class') e.className = props[k];
      else if (k === 'html') e.innerHTML = props[k];
      else if (k === 'text') e.textContent = props[k];
      else if (k.slice(0, 2) === 'on') e.addEventListener(k.slice(2), props[k]);
      else e.setAttribute(k, props[k] === true ? '' : props[k]);
    }
    (kids || []).forEach(function (c) {
      if (c == null || c === false) return;
      e.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    });
    return e;
  }
  function show(nodes) {
    app.innerHTML = '';
    nodes.forEach(function (n) { if (n) app.appendChild(n); });
    window.scrollTo(0, 0);
  }
  function meter(ratio) {
    var i = el('i'); i.style.width = Math.round(Math.max(0, Math.min(1, ratio)) * 100) + '%';
    return el('div', { class: 'meter' }, [i]);
  }

  // ---------- Voix ----------
  var synth = window.speechSynthesis || null;
  var voice = null;
  function pickVoice() {
    if (!synth) return;
    var vs = synth.getVoices().filter(function (v) { return /^es([-_]|$)/i.test(v.lang); });
    voice = vs.filter(function (v) { return /es[-_]ES/i.test(v.lang); })[0] || vs[0] || null;
  }
  if (synth) {
    pickVoice();
    if ('onvoiceschanged' in synth) synth.onvoiceschanged = pickVoice;
  }
  function speak(text, rate) {
    if (!synth) return;
    synth.cancel();
    var u = new SpeechSynthesisUtterance(text);
    u.lang = 'es-ES';
    u.rate = rate || 0.9;
    if (voice) u.voice = voice;
    synth.speak(u);
  }
  function listenBtn(text, label, rate, cls) {
    if (!synth) return null;
    return el('button', { class: cls || 'ghost small', type: 'button', onclick: function () { speak(text, rate); } }, [label || 'Écouter']);
  }
  var Rec = window.SpeechRecognition || window.webkitSpeechRecognition || null;

  // ---------- Correction ----------
  function norm(s) {
    return String(s).toLowerCase()
      .replace(/[’`´]/g, "'")
      .replace(/[¿?¡!.,;:«»"()…—–-]/g, ' ')
      .replace(/\s+/g, ' ').trim();
  }
  // Retire les accents mais garde le ñ, qui est une lettre à part entière.
  function strip(s) {
    return s.replace(/ñ/g, '\u0001').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\u0001/g, 'ñ');
  }
  function lev(a, b) {
    var i, j, prev = [], cur;
    for (j = 0; j <= b.length; j++) prev[j] = j;
    for (i = 1; i <= a.length; i++) {
      cur = [i];
      for (j = 1; j <= b.length; j++) {
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      }
      prev = cur;
    }
    return prev[b.length];
  }
  // 0 = identique, 1 = faute de frappe tolérée, 2 = différent.
  // Une faute dans les deux dernières lettres n'est jamais tolérée : en espagnol,
  // c'est là que se jouent la personne, le temps et le genre (hablo / habla / hablé).
  function wordGap(u, m) {
    if (u === m) return 0;
    if (m.length >= 5 && u.slice(-2) === m.slice(-2) && lev(u, m) <= 1) return 1;
    return 2;
  }
  function judge(input, answers) {
    var ni = norm(input), si = strip(ni), i, j;
    if (!ni) return { v: 'ko', model: answers[0] };
    for (i = 0; i < answers.length; i++) if (ni === norm(answers[i])) return { v: 'ok', model: answers[i] };
    for (i = 0; i < answers.length; i++) if (si === strip(norm(answers[i]))) return { v: 'almost', note: 'accent', model: answers[i] };
    var wu = si.split(' ');
    for (i = 0; i < answers.length; i++) {
      var wm = strip(norm(answers[i])).split(' ');
      if (wm.length !== wu.length) continue;
      var typos = 0, bad = false;
      for (j = 0; j < wm.length; j++) {
        var g = wordGap(wu[j], wm[j]);
        if (g === 2) { bad = true; break; }
        typos += g;
      }
      if (!bad && typos === 1) return { v: 'almost', note: 'frappe', model: answers[i] };
    }
    var best = answers[0], bestD = Infinity;
    for (i = 0; i < answers.length; i++) {
      var d = lev(si, strip(norm(answers[i])));
      if (d < bestD) { bestD = d; best = answers[i]; }
    }
    return { v: 'ko', model: best };
  }
  // Affiche la réponse modèle en surlignant les mots qui diffèrent de la saisie.
  function modelNode(model, input) {
    var uw = norm(input || '').split(' ');
    var node = el('div', { class: 'model es', lang: 'es' });
    var k = 0;
    model.split(' ').forEach(function (w, i) {
      if (i) node.appendChild(document.createTextNode(' '));
      var nw = norm(w);
      if (!nw) { node.appendChild(document.createTextNode(w)); return; }
      if (input != null && uw[k] !== nw) node.appendChild(el('mark', { text: w }));
      else node.appendChild(document.createTextNode(w));
      k++;
    });
    return node;
  }

  // ---------- Éléments à réviser (répétition espacée) ----------
  var ITEMS = {};
  function withoutArticle(es) { return es.replace(/^(el|la|los|las|un|una) /i, ''); }
  COURSE.lessons.forEach(function (L) {
    if (L.soon) return;
    L.words.forEach(function (w) {
      var answers = [w.es];
      if (withoutArticle(w.es) !== w.es) answers.push(withoutArticle(w.es));
      ITEMS[w.id] = { id: w.id, fr: w.fr, answers: answers, lesson: L.id };
    });
    L.expressions.forEach(function (w) { ITEMS[w.id] = { id: w.id, fr: w.fr, answers: [w.es], lesson: L.id }; });
    L.writing.forEach(function (x) { ITEMS[x.id] = { id: x.id, fr: x.fr, answers: x.es, hint: x.hint, lesson: L.id }; });
  });
  function introduce(id) {
    if (!state.items[id]) state.items[id] = { box: 0, due: today() + 1 };
  }
  function recordItem(id, ok) {
    var it = state.items[id] || (state.items[id] = { box: 0, due: 0 });
    if (ok) { it.box = Math.min(it.box + 1, INTERVALS.length); it.due = today() + INTERVALS[it.box - 1]; }
    else { it.box = 0; it.due = today() + 1; }
  }
  function dueItems() {
    var t = today();
    return Object.keys(state.items).filter(function (id) { return ITEMS[id] && state.items[id].due <= t; })
      .sort(function (a, b) { return state.items[a].due - state.items[b].due || (a < b ? -1 : 1); })
      .map(function (id) { return ITEMS[id]; });
  }
  function recordSkill(skill, ok, run) {
    if (!skill) return;
    state.skills[skill][1]++; if (ok) state.skills[skill][0]++;
    if (run) { run[skill][1]++; if (ok) run[skill][0]++; }
  }

  // ---------- Briques d'exercice ----------
  function accentBar(input) {
    var bar = el('div', { class: 'accents', 'aria-label': 'Caractères espagnols' });
    'á é í ó ú ñ ü ¿ ¡'.split(' ').forEach(function (ch) {
      bar.appendChild(el('button', {
        type: 'button', 'aria-label': 'Insérer ' + ch,
        onmousedown: function (e) { e.preventDefault(); },
        onclick: function () {
          var s = input.selectionStart == null ? input.value.length : input.selectionStart;
          var e2 = input.selectionEnd == null ? input.value.length : input.selectionEnd;
          input.value = input.value.slice(0, s) + ch + input.value.slice(e2);
          input.focus();
          input.setSelectionRange(s + 1, s + 1);
        }
      }, [ch]));
    });
    return bar;
  }
  function textInput(lang, placeholder) {
    return el('input', {
      type: 'text', lang: lang, placeholder: placeholder, autocomplete: 'off', autocapitalize: 'off',
      autocorrect: 'off', spellcheck: 'false', enterkeyhint: 'done'
    });
  }
  function feedback(kind, title, kids) {
    return el('div', { class: 'fb ' + kind, role: 'status' }, [el('div', { class: 'v', text: title })].concat(kids || []));
  }
  function continueBtn(label, fn) {
    var b = el('button', { class: 'wide', type: 'button', onclick: fn }, [label || 'Continuer']);
    setTimeout(function () { b.focus(); }, 0);
    return b;
  }

  // Français vers espagnol, au clavier. done(ok) est appelé une fois le verdict accepté.
  function writeExercise(box, o, done) {
    var input = textInput('es', 'Votre réponse en espagnol');
    var zone = el('div', { class: 'stack' });
    var check = el('button', { class: 'wide', type: 'button' }, ['Vérifier']);
    var form = el('div', { class: 'stack' }, [input, accentBar(input), check]);
    function verify() {
      if (!input.value.trim()) { input.focus(); return; }
      var r = judge(input.value, o.answers), ok = r.v !== 'ko';
      input.disabled = true; form.removeChild(check);
      var fb;
      if (r.v === 'ok') fb = feedback('ok', 'Juste', [modelNode(r.model, null)]);
      else if (r.v === 'almost') fb = feedback('almost', r.note === 'accent' ? 'Presque : attention aux accents' : 'Presque : une faute de frappe', [modelNode(r.model, input.value)]);
      else fb = feedback('ko', 'À revoir', [modelNode(r.model, input.value), el('div', { class: 'yours', text: 'Votre réponse : ' + input.value })]);
      zone.appendChild(fb);
      var row = el('div', { class: 'row' }, [listenBtn(r.model)]);
      if (!ok) row.appendChild(el('button', {
        class: 'quiet small', type: 'button',
        onclick: function () { ok = true; fb.className = 'fb info'; fb.firstChild.textContent = 'Compté comme juste'; row.removeChild(this); }
      }, ['Ma réponse était bonne']));
      zone.appendChild(row);
      zone.appendChild(continueBtn('Continuer', function () { done(ok); }));
    }
    check.addEventListener('click', verify);
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter' && !input.disabled) verify(); });
    box.appendChild(el('div', { class: 'stack' }, [
      el('div', { class: 'eyebrow', text: o.label || 'Traduisez en espagnol' }),
      el('div', { class: 'prompt', text: o.fr }),
      o.hint ? el('div', { class: 'muted', text: 'Indice : ' + o.hint }) : null
    ]));
    box.appendChild(form); box.appendChild(zone);
    setTimeout(function () { input.focus(); }, 0);
  }

  // Espagnol entendu vers français. La machine ne juge « faux » que si l'utilisateur le confirme.
  function listenExercise(box, o, done) {
    var input = textInput('fr', 'Votre traduction en français');
    var zone = el('div', { class: 'stack' });
    var check = el('button', { class: 'wide', type: 'button' }, ['Vérifier']);
    var form = el('div', { class: 'stack' }, [input, check]);
    function verify() {
      if (!input.value.trim()) { input.focus(); return; }
      var r = judge(input.value, o.fr);
      input.disabled = true; form.removeChild(check);
      var spanish = el('div', { class: 'es', lang: 'es', text: o.es });
      if (r.v !== 'ko') {
        zone.appendChild(feedback('ok', 'Juste', [spanish, el('div', { class: 'model', text: r.model })]));
        zone.appendChild(continueBtn('Continuer', function () { done(true); }));
      } else {
        zone.appendChild(feedback('info', 'Comparez avec la traduction', [spanish, el('div', { class: 'model', text: o.fr[0] }), el('div', { class: 'yours', text: 'Votre réponse : ' + input.value })]));
        zone.appendChild(el('p', { text: 'Votre traduction avait-elle le même sens ?' }));
        zone.appendChild(el('div', { class: 'row' }, [
          el('button', { type: 'button', onclick: function () { done(true); } }, ['Oui, même sens']),
          el('button', { class: 'ghost', type: 'button', onclick: function () { done(false); } }, ['Non, à revoir'])
        ]));
      }
    }
    check.addEventListener('click', verify);
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter' && !input.disabled) verify(); });
    box.appendChild(el('div', { class: 'stack' }, [
      el('div', { class: 'eyebrow', text: 'Écoutez et traduisez en français' }),
      synth
        ? el('div', { class: 'row' }, [listenBtn(o.es, 'Écouter', 0.9, ''), listenBtn(o.es, 'Plus lentement', 0.65, 'ghost')])
        : el('div', { class: 'stack' }, [el('div', { class: 'muted', text: 'La voix n\'est pas disponible sur cet appareil. Lisez la phrase :' }), el('div', { class: 'prompt es', lang: 'es', text: o.es })])
    ]));
    box.appendChild(form); box.appendChild(zone);
    speak(o.es);
  }

  // Français vers espagnol, à voix haute. done(null) = passé sans être noté.
  function speakExercise(box, o, done) {
    var zone = el('div', { class: 'stack' });
    var tries = 0;
    function selfEval(heard) {
      zone.innerHTML = '';
      zone.appendChild(feedback('info', heard ? 'J\'ai entendu autre chose' : 'La réponse', [
        heard ? el('div', { class: 'yours es', lang: 'es', text: 'Entendu : « ' + heard + ' »' }) : null,
        el('div', { class: 'model es', lang: 'es', text: o.es[0] })
      ]));
      zone.appendChild(el('div', { class: 'row' }, [listenBtn(o.es[0], 'Écouter la réponse')]));
      zone.appendChild(el('p', { text: 'Comparez avec ce que vous avez dit :' }));
      var row = el('div', { class: 'row' }, [
        el('button', { type: 'button', onclick: function () { done(true); } }, ['Je l\'ai bien dit']),
        el('button', { class: 'ghost', type: 'button', onclick: function () { done(false); } }, ['À retravailler'])
      ]);
      if (heard && Rec && tries < 3) row.appendChild(el('button', { class: 'quiet', type: 'button', onclick: start }, ['Réessayer']));
      zone.appendChild(row);
    }
    function start() {
      var r, got = false;
      tries++;
      zone.innerHTML = '';
      zone.appendChild(el('p', { class: 'muted', text: 'Je vous écoute…' }));
      try {
        r = new Rec(); r.lang = 'es-ES'; r.interimResults = false; r.maxAlternatives = 3;
        r.onresult = function (e) {
          got = true;
          var alts = [], i;
          for (i = 0; i < e.results[0].length; i++) alts.push(e.results[0][i].transcript);
          var hit = alts.some(function (t) {
            return o.es.some(function (a) { return strip(norm(t)) === strip(norm(a)); });
          });
          if (hit) {
            zone.innerHTML = '';
            zone.appendChild(feedback('ok', 'Juste', [el('div', { class: 'model es', lang: 'es', text: o.es[0] })]));
            zone.appendChild(continueBtn('Continuer', function () { done(true); }));
          } else selfEval(alts[0]);
        };
        r.onerror = function () { got = true; fallback('Le micro n\'a pas fonctionné cette fois.'); };
        r.onend = function () { if (!got) fallback('Je n\'ai rien entendu.'); };
        r.start();
      } catch (err) { fallback('Le micro n\'est pas disponible.'); }
    }
    function fallback(msg) {
      zone.innerHTML = '';
      if (msg) zone.appendChild(el('p', { class: 'muted', text: msg }));
      var row = el('div', { class: 'row' });
      if (Rec && tries < 3) row.appendChild(el('button', { type: 'button', onclick: start }, [tries ? 'Réessayer' : 'Parler']));
      row.appendChild(el('button', { class: Rec && tries < 3 ? 'ghost' : '', type: 'button', onclick: function () { selfEval(null); } }, [Rec ? 'Voir la réponse' : 'Je l\'ai dit, voir la réponse']));
      row.appendChild(el('button', { class: 'quiet', type: 'button', onclick: function () { done(null); } }, ['Pas maintenant']));
      zone.appendChild(row);
    }
    box.appendChild(el('div', { class: 'stack' }, [
      el('div', { class: 'eyebrow', text: 'Dites-le en espagnol, à voix haute' }),
      el('div', { class: 'prompt', text: o.fr })
    ]));
    box.appendChild(zone);
    fallback(null);
  }

  // ---------- Conjugaison : répétition espacée par élément « verbe × temps » ----------
  var PERSONS = ['yo', 'tú', 'él, ella', 'nosotros', 'vosotros', 'ellos, ellas'];
  var TENSES = [['present', 'Présent'], ['futur', 'Futur proche'], ['passe', 'Passé composé']];
  var CONJ_NEW_PER_DAY = 3;
  function lessonDone(id) { return !!(state.lessons[id] && state.lessons[id].done); }
  function conjAvailable() { return CONJ.filter(function (u) { return lessonDone(u.lesson); }); }
  function conjNewLeft() {
    var n = state.conjNew && state.conjNew.day === today() ? state.conjNew.count : 0;
    return Math.max(0, CONJ_NEW_PER_DAY - n);
  }
  // Éléments à revoir aujourd'hui : ceux qui sont dus, puis quelques nouveautés par jour.
  function conjDue() {
    var t = today(), due = [], fresh = [];
    conjAvailable().forEach(function (u) {
      var st = state.conj[u.id];
      if (!st) fresh.push(u); else if (st.due <= t) due.push(u);
    });
    due.sort(function (a, b) { return state.conj[a.id].due - state.conj[b.id].due; });
    return due.concat(fresh.slice(0, conjNewLeft()));
  }
  // La phrase ratée revient en priorité ; sinon on fait tourner les personnes.
  function conjPick(u) {
    var st = state.conj[u.id];
    if (st && st.miss != null) return st.miss;
    return (st ? st.n : 0) % u.cards.length;
  }
  function recordConj(u, idx, res) {
    var t = today(), st = state.conj[u.id];
    if (!st) {
      st = state.conj[u.id] = { box: 0, due: 0, n: 0, miss: null };
      state.conjNew = { day: t, count: (state.conjNew && state.conjNew.day === t ? state.conjNew.count : 0) + 1 };
    }
    var wasDue = st.due <= t;
    st.n = idx + 1;
    if (res === 'ok') {
      st.miss = null;
      if (wasDue) { st.box = Math.min(st.box + 1, INTERVALS.length); st.due = t + INTERVALS[st.box - 1]; }
    } else if (res === 'almost') {
      // Accent oublié : l'élément ne recule pas, mais n'avance pas non plus.
      st.miss = idx;
      if (wasDue) st.due = t + (st.box ? INTERVALS[st.box - 1] : 1);
    } else {
      st.miss = idx; st.box = 0; st.due = t + 1;
    }
  }
  function conjAnswers(card) { return typeof card.a === 'string' ? [card.a] : card.a; }
  function judgeConj(input, card) {
    var ni = norm(input), answers = conjAnswers(card), i;
    for (i = 0; i < answers.length; i++) if (ni === norm(answers[i])) return 'ok';
    for (i = 0; i < answers.length; i++) if (strip(ni) === strip(norm(answers[i]))) return 'almost';
    return 'ko';
  }
  // Phrase complète : trou rempli, indications de personne retirées, majuscule rétablie.
  function conjFull(card) {
    var t = card.es.replace('___', conjAnswers(card)[0]).replace(/\((yo|tú|nosotros|vosotros)\)\s*/g, '').replace(/\s+([?.!,:])/g, '$1').replace(/\s+/g, ' ').trim();
    var i = /^[¿¡]/.test(t) ? 1 : 0;
    return t.slice(0, i) + t.charAt(i).toUpperCase() + t.slice(i + 1);
  }
  function conjSentence(card, filled) {
    var parts = card.es.split('___');
    return el('div', { class: 'prompt es', lang: 'es' }, [
      parts[0], el('span', { class: filled ? 'filled' : 'blank', text: filled ? conjAnswers(card)[0] : ' ' }), parts[1] || ''
    ]);
  }
  function paradigm(card) {
    if (!card.forms) return null;
    return el('div', { class: 'paradigm' }, card.forms.map(function (f, i) {
      return el('span', { class: i === card.p ? 'hit' : '' }, [el('small', { text: PERSONS[i] + ' ' }), el('b', { class: 'es', lang: 'es', text: f })]);
    }));
  }
  // done(res) avec res = 'ok', 'almost' (accent oublié) ou 'ko'.
  function conjExercise(box, u, idx, done) {
    var card = u.cards[idx];
    var input = textInput('es', 'Le verbe conjugué');
    var zone = el('div', { class: 'stack' });
    var check = el('button', { class: 'wide', type: 'button' }, ['Vérifier']);
    var form = el('div', { class: 'stack' }, [input, accentBar(input), check]);
    function verify() {
      if (!input.value.trim()) { input.focus(); return; }
      var res = judgeConj(input.value, card);
      input.disabled = true; form.removeChild(check);
      var full = el('div', { class: 'model es', lang: 'es', text: conjFull(card) });
      var rule = el('div', { class: 'yours', text: u.rule + (card.note ? ' ' + card.note : '') });
      if (res === 'ok') {
        zone.appendChild(feedback('ok', 'Juste', [full]));
        zone.appendChild(el('div', { class: 'row' }, [listenBtn(conjFull(card))]));
        zone.appendChild(continueBtn('Continuer', function () { done('ok'); }));
        return;
      }
      if (res === 'almost') {
        zone.appendChild(feedback('almost', 'Presque : attention à l\'accent', [
          el('div', { class: 'model es', lang: 'es', text: conjAnswers(card)[0] }), full, paradigm(card),
          el('div', { class: 'yours', text: 'En conjugaison, l\'accent fait partie de la forme. Vous reverrez cette phrase.' })
        ]));
        zone.appendChild(el('div', { class: 'row' }, [listenBtn(conjFull(card))]));
        zone.appendChild(continueBtn('Continuer', function () { done('almost'); }));
        return;
      }
      var fb = feedback('ko', 'À revoir', [
        el('div', { class: 'model es', lang: 'es', text: conjAnswers(card)[0] }), full, paradigm(card), rule,
        el('div', { class: 'yours', text: 'Votre réponse : ' + input.value })
      ]);
      zone.appendChild(fb);
      var again = textInput('es', 'Retapez la forme correcte');
      var go = el('button', { class: 'wide', type: 'button', disabled: true, onclick: function () { done(res); } }, ['Continuer']);
      function unlock() { go.disabled = false; }
      again.addEventListener('input', function () { if (judgeConj(again.value, card) !== 'ko') { again.disabled = true; unlock(); go.focus(); } });
      var row = el('div', { class: 'row' }, [listenBtn(conjFull(card)), el('button', {
        class: 'quiet small', type: 'button',
        onclick: function () { res = 'ok'; fb.className = 'fb info'; fb.firstChild.textContent = 'Compté comme juste'; again.disabled = true; unlock(); row.removeChild(this); }
      }, ['Ma réponse était bonne'])]);
      zone.appendChild(el('div', { class: 'stack' }, [again, accentBar(again)]));
      zone.appendChild(row);
      zone.appendChild(go);
      setTimeout(function () { again.focus(); }, 0);
    }
    check.addEventListener('click', verify);
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter' && !input.disabled) verify(); });
    box.appendChild(el('div', { class: 'stack' }, [
      el('div', { class: 'eyebrow', text: 'Conjuguez : ' + card.inf + (u.tense === 'passe' ? ' · passé composé' : '') }),
      conjSentence(card, false),
      el('div', { class: 'muted', text: card.fr })
    ]));
    box.appendChild(form); box.appendChild(zone);
    setTimeout(function () { input.focus(); }, 0);
  }

  // ---------- Écrans d'une leçon ----------
  function vocabList(list) {
    return el('ul', { class: 'vocab' }, list.map(function (w) {
      return el('li', null, [
        el('div', { class: 'w' }, [
          el('div', null, [el('span', { class: 'term es', lang: 'es', text: w.es }), ' ', el('span', { class: 'muted', text: '· ' + w.fr })]),
          el('div', { class: 'ex' }, [el('span', { class: 'es', lang: 'es', text: w.exEs }), ' ', el('span', { text: '(' + w.exFr + ')' })])
        ]),
        listenBtn(w.es + '. ' + w.exEs)
      ]);
    }));
  }
  function buildScreens(L, index, run) {
    var S = [];
    function add(section, render) { S.push({ section: section, render: render }); }

    // Révision des leçons précédentes : les éléments les moins bien sus d'abord.
    var prev = [];
    COURSE.lessons.slice(0, index).forEach(function (P) {
      if (!P.soon) P.words.concat(P.expressions).forEach(function (w) { prev.push(ITEMS[w.id]); });
    });
    prev.sort(function (a, b) {
      var ba = (state.items[a.id] || { box: 0 }).box, bb = (state.items[b.id] || { box: 0 }).box;
      return ba - bb || (a.id < b.id ? -1 : 1);
    });
    prev.slice(0, 5).forEach(function (it) {
      add('Révision', function (box, next) {
        writeExercise(box, { fr: it.fr, answers: it.answers, label: 'Révision : comment dit-on…' }, function (ok) { recordItem(it.id, ok); next(); });
      });
    });

    // Les mots sont présentés par groupes de 5 pour ne pas noyer l'écran.
    var groups = Math.ceil(L.words.length / 5);
    L.words.forEach(function (w, i) {
      if (i % 5) return;
      var chunk = L.words.slice(i, i + 5), g = i / 5 + 1;
      add('Vocabulaire', function (box, next) {
        chunk.forEach(function (w2) { introduce(w2.id); });
        box.appendChild(el('div', { class: 'stack' }, [
          el('div', { class: 'eyebrow', text: 'Les ' + L.words.length + ' mots de la leçon' + (groups > 1 ? ' · ' + g + ' sur ' + groups : '') }),
          el('p', { class: 'muted', text: 'Écoutez chaque mot et répétez-le à voix haute.' })
        ]));
        box.appendChild(el('div', { class: 'card' }, [vocabList(chunk)]));
        box.appendChild(continueBtn('Continuer', next));
      });
    });

    add('Expressions', function (box, next) {
      L.expressions.forEach(function (w) { introduce(w.id); });
      box.appendChild(el('div', { class: 'eyebrow', text: 'Expressions et adverbes' }));
      box.appendChild(el('div', { class: 'card' }, [vocabList(L.expressions)]));
      box.appendChild(el('div', { class: 'stack' }, [
        el('div', { class: 'eyebrow', text: 'Mots transparents' }),
        el('p', { class: 'muted', text: 'Rien à apprendre : vous les reconnaîtrez dans le texte.' }),
        el('div', { class: 'chips' }, L.passive.map(function (p) {
          return el('span', { class: 'chip' }, [el('b', { class: 'es', lang: 'es', text: p[0] }), p[0].replace(/^(el|la) /, '') === p[1].replace(/^(le|la|l') ?/, '') ? '' : ' · ' + p[1]]);
        }))
      ]));
      box.appendChild(continueBtn('Continuer', next));
    });

    add('Lecture', function (box, next) {
      var R = L.reading, answered = 0;
      var go = el('button', { class: 'wide', type: 'button', disabled: true, onclick: next }, ['Continuer']);
      box.appendChild(el('div', { class: 'spread' }, [el('h2', { class: 'es', lang: 'es', text: R.title }), listenBtn(R.text, 'Écouter le texte')]));
      box.appendChild(el('div', { class: 'card reading es', lang: 'es', text: R.text }));
      if (R.source) box.appendChild(el('p', { class: 'muted', style: 'font-size:.85rem', text: 'Chiffres réels. Sources : ' + R.source }));
      box.appendChild(el('details', null, [
        el('summary', { text: 'Aide au vocabulaire' }),
        el('div', { class: 'chips', style: 'margin-top:8px' }, R.help.map(function (p) {
          return el('span', { class: 'chip' }, [el('b', { class: 'es', lang: 'es', text: p[0] }), ' · ' + p[1]]);
        }))
      ]));
      R.questions.forEach(function (Q) {
        var why = el('div', { class: 'muted', hidden: true, text: Q.why });
        var btns = Q.choices.map(function (c, i) {
          return el('button', {
            type: 'button', onclick: function () {
              var ok = i === Q.answer;
              btns.forEach(function (b, j) { b.disabled = true; if (j === Q.answer) b.className = 'right'; });
              if (!ok) this.className = 'wrong';
              why.hidden = false;
              recordSkill('lire', ok, run); save();
              if (++answered === R.questions.length) go.disabled = false;
            }
          }, [c]);
        });
        box.appendChild(el('div', { class: 'stack' }, [el('div', { class: 'prompt', style: 'font-size:1.05rem', text: Q.q }), el('div', { class: 'choices' }, btns), why]));
      });
      box.appendChild(go);
    });

    add('Grammaire', function (box, next) {
      box.appendChild(el('div', { class: 'stack' }, [el('div', { class: 'eyebrow', text: 'Le point de grammaire' }), el('h2', { text: L.grammarTitle })]));
      box.appendChild(el('div', { class: 'card', html: L.grammar }));
      box.appendChild(continueBtn('Continuer', next));
    });

    L.listening.forEach(function (o) {
      add('Écoute', function (box, next) {
        listenExercise(box, o, function (ok) { recordSkill('ecouter', ok, run); next(); });
      });
    });
    L.writing.forEach(function (x) {
      add('Écriture', function (box, next) {
        writeExercise(box, { fr: x.fr, answers: x.es, hint: x.hint }, function (ok) { recordSkill('ecrire', ok, run); recordItem(x.id, ok); next(); });
      });
    });
    if (!state.settings.noSpeak) L.speaking.forEach(function (p) {
      add('Oral', function (box, next) {
        speakExercise(box, p, function (ok) { if (ok !== null) recordSkill('parler', ok, run); next(); });
      });
    });
    return S;
  }

  function startLesson(index) {
    var L = COURSE.lessons[index];
    var ls = state.lessons[L.id];
    if (!ls || ls.pos == null) {
      ls = state.lessons[L.id] = { pos: 0, run: blankSkills(), done: ls ? ls.done : null };
      save();
    }
    var screens = buildScreens(L, index, ls.run);
    function render() {
      if (synth) synth.cancel();
      if (ls.pos >= screens.length) return bilan(L, index, ls);
      var sc = screens[ls.pos];
      var box = el('div', { class: 'screen' });
      show([
        el('div', { class: 'topbar' }, [
          el('button', { class: 'quiet small', type: 'button', 'aria-label': 'Quitter la leçon', onclick: home }, ['Quitter']),
          meter(ls.pos / screens.length),
          el('span', { class: 'muted', style: 'font-size:.85rem', text: sc.section })
        ]),
        box
      ]);
      sc.render(box, function () { ls.pos++; save(); render(); });
    }
    render();
  }

  function bilan(L, index, ls) {
    ls.done = today(); ls.pos = null;
    var run = ls.run; save();
    var nextL = COURSE.lessons[index + 1];
    show([
      el('div', { class: 'stack' }, [el('div', { class: 'eyebrow', text: 'Leçon ' + (index + 1) + ' terminée' }), el('h1', { text: 'Bilan' })]),
      el('div', { class: 'results' }, SKILLS.map(function (s) {
        var r = run[s[0]];
        return el('div', { class: 'card' }, [el('div', { class: 'muted', text: s[1] }), el('div', { class: 'big', text: r[1] ? r[0] + ' / ' + r[1] : 'non fait' })]);
      })),
      el('div', { class: 'card stack' }, [
        el('div', { class: 'eyebrow', text: 'À vous de juger' }),
        el('p', { text: L.canDo }),
        el('p', { class: 'muted', text: 'Si ce n\'est pas encore le cas, refaites la leçon : elle reste disponible.' })
      ]),
      el('div', { class: 'card stack' }, [
        el('div', { class: 'eyebrow', text: 'La suite' }),
        el('p', { text: 'Demain : une révision de 3 minutes des mots, des phrases et de la conjugaison d\'aujourd\'hui.' }),
        el('p', { text: nextL && !nextL.soon ? 'Après-demain : leçon ' + (index + 2) + ', « ' + nextL.title + ' ».' : (nextL ? 'La leçon suivante arrive bientôt.' : 'Vous avez terminé le cycle 1. Continuez les révisions du jour : ce sont elles qui fixent ce que vous avez appris.') })
      ]),
      el('button', { class: 'wide', type: 'button', onclick: home }, ['Retour à l\'accueil'])
    ]);
  }

  // ---------- Révision du jour ----------
  // 8 éléments au plus : jusqu'à 3 de conjugaison, puis du vocabulaire et des phrases.
  function reviewQueue() {
    var conj = conjDue().slice(0, 3).map(function (u) { return { kind: 'conj', id: u.id, unit: u, idx: conjPick(u) }; });
    var due = dueItems();
    function isSentence(it) { return /-x\d+$/.test(it.id); }
    var vocab = due.filter(function (it) { return !isSentence(it); });
    var sent = due.filter(isSentence);
    var room = 8 - conj.length;
    var pickV = vocab.splice(0, 3), pickS = sent.splice(0, 2);
    var rest = vocab.concat(sent);
    while (pickV.length + pickS.length < room && rest.length) pickV.push(rest.shift());
    var others = [], i;
    for (i = 0; i < Math.max(pickV.length, pickS.length); i++) {
      if (pickV[i]) others.push({ kind: 'item', id: pickV[i].id, it: pickV[i] });
      if (pickS[i]) others.push({ kind: 'item', id: pickS[i].id, it: pickS[i] });
    }
    others = others.slice(0, room);
    // On alterne pour ne pas enchaîner trois conjugaisons.
    var out = [];
    while (others.length || conj.length) {
      if (others.length) out.push(others.shift());
      if (conj.length) out.push(conj.shift());
      if (others.length) out.push(others.shift());
    }
    return out;
  }
  function runSession(queue, label, endText) {
    var total = queue.length, done = 0, good = 0, retried = {};
    function render() {
      if (!queue.length) {
        return show([
          el('div', { class: 'stack' }, [el('div', { class: 'eyebrow', text: label + ' terminée' }), el('h1', { text: good + ' sur ' + total + ' du premier coup' })]),
          el('p', { class: 'muted', text: endText }),
          el('button', { class: 'wide', type: 'button', onclick: home }, ['Retour à l\'accueil'])
        ]);
      }
      var q = queue.shift(), box = el('div', { class: 'screen' });
      show([
        el('div', { class: 'topbar' }, [
          el('button', { class: 'quiet small', type: 'button', onclick: home }, ['Quitter']),
          meter(done / total), el('span', { class: 'muted', style: 'font-size:.85rem', text: label })
        ]),
        box
      ]);
      function after(ok, record) {
        if (!retried[q.id]) {
          record(); done++;
          if (ok) good++; else { retried[q.id] = true; queue.push(q); }
          save();
        }
        render();
      }
      if (q.kind === 'conj') {
        conjExercise(box, q.unit, q.idx, function (res) {
          after(res === 'ok', function () { if (!q.extra) recordConj(q.unit, q.idx, res); });
        });
      } else {
        writeExercise(box, { fr: q.it.fr, answers: q.it.answers, hint: retried[q.id] ? q.it.hint : null, label: 'Comment dit-on…' }, function (ok) {
          after(ok, function () { recordItem(q.id, ok); });
        });
      }
    }
    render();
  }
  function startReview() {
    runSession(reviewQueue(), 'Révision', 'Les éléments réussis reviendront plus tard, les autres dès demain.');
  }

  // ---------- Conjugaison à la demande ----------
  function conjState(u) {
    var st = state.conj[u.id];
    if (!st) return ['todo', 'à découvrir'];
    return st.box >= 3 ? ['done', 'acquis'] : ['doing', 'en cours'];
  }
  function startConj(tense) {
    var t = today();
    var pool = conjAvailable().filter(function (u) { return !tense || u.tense === tense || u.tense === 'mix'; });
    function rank(u) { var st = state.conj[u.id]; return !st ? 1 : st.due <= t ? 0 : 2 + st.box; }
    pool.sort(function (a, b) { return rank(a) - rank(b); });
    var queue = pool.slice(0, 10).map(function (u) { return { kind: 'conj', id: u.id, unit: u, idx: conjPick(u) }; });
    // Moins de 10 éléments disponibles : un second passage sur une autre phrase, non compté.
    pool.slice(0, 10 - queue.length).forEach(function (u) {
      queue.push({ kind: 'conj', id: u.id + '#2', unit: u, idx: (conjPick(u) + 1) % u.cards.length, extra: true });
    });
    runSession(queue, 'Conjugaison', 'Les formes réussies reviendront plus tard, les autres dès demain.');
  }
  function conjHome() {
    if (synth) synth.cancel();
    var avail = conjAvailable();
    var nodes = [
      el('div', { class: 'topbar' }, [el('button', { class: 'quiet small', type: 'button', onclick: home }, ['‹ Accueil'])]),
      el('div', { class: 'stack', style: 'gap:2px' }, [el('div', { class: 'eyebrow', text: 'À la demande' }), el('h1', { text: 'Conjugaison' })])
    ];
    if (!avail.length) {
      nodes.push(el('p', { class: 'muted', text: 'Terminez une leçon pour débloquer ses exercices de conjugaison.' }));
    } else {
      var filters = TENSES.filter(function (T) { return avail.some(function (u) { return u.tense === T[0]; }); });
      nodes.push(el('div', { class: 'card stack' }, [
        el('p', { text: 'Dix phrases à trou : vous tapez seulement le verbe.' }),
        el('button', { class: 'wide', type: 'button', onclick: function () { startConj(null); } }, ['Séance recommandée']),
        filters.length > 1 ? el('div', { class: 'row' }, [el('span', { class: 'muted', text: 'Ou un seul temps :' })].concat(filters.map(function (T) {
          return el('button', { class: 'ghost small', type: 'button', onclick: function () { startConj(T[0]); } }, [T[1]]);
        }))) : null
      ]));
    }
    COURSE.lessons.forEach(function (L, idx) {
      var units = CONJ.filter(function (u) { return u.lesson === L.id; });
      if (!units.length) return;
      var open = lessonDone(L.id);
      nodes.push(el('div', { class: 'card stack' + (open ? '' : ' locked') }, [
        el('div', { class: 'eyebrow', text: 'Leçon ' + (idx + 1) + (open ? '' : ' · après la leçon') }),
        el('ul', { class: 'units' }, units.map(function (u) {
          var cs = open ? conjState(u) : ['todo', 'à découvrir'];
          return el('li', null, [el('span', { text: u.title }), el('span', { class: 'state ' + cs[0], text: cs[1] })]);
        }))
      ]));
    });
    nodes.push(el('p', { class: 'muted', text: 'Une notion est acquise après trois réussites à plusieurs jours d\'écart.' }));
    show(nodes);
  }

  // ---------- Fiches à relire : vocabulaire et grammaire d'une leçon ----------
  function fiche(index, tab) {
    if (synth) synth.cancel();
    var L = COURSE.lessons[index];
    function tabBtn(key, label) {
      return el('button', { class: tab === key ? 'small' : 'ghost small', type: 'button', 'aria-pressed': tab === key ? 'true' : 'false', onclick: function () { fiche(index, key); } }, [label]);
    }
    var content;
    if (tab === 'gram') {
      content = [el('h2', { text: L.grammarTitle }), el('div', { class: 'card', html: L.grammar })];
    } else {
      content = [
        el('div', { class: 'eyebrow', text: 'Les ' + L.words.length + ' mots de la leçon' }),
        el('div', { class: 'card' }, [vocabList(L.words)]),
        el('div', { class: 'eyebrow', text: 'Expressions et adverbes' }),
        el('div', { class: 'card' }, [vocabList(L.expressions)]),
        el('div', { class: 'eyebrow', text: 'Mots transparents' }),
        el('div', { class: 'chips' }, L.passive.map(function (p) {
          return el('span', { class: 'chip' }, [el('b', { class: 'es', lang: 'es', text: p[0] }), ' · ' + p[1]]);
        }))
      ];
    }
    show([
      el('div', { class: 'topbar' }, [el('button', { class: 'quiet small', type: 'button', onclick: home }, ['‹ Accueil'])]),
      el('div', { class: 'stack', style: 'gap:2px' }, [el('div', { class: 'eyebrow', text: 'Leçon ' + (index + 1) }), el('h1', { text: L.title })]),
      el('div', { class: 'row' }, [tabBtn('vocab', 'Vocabulaire'), tabBtn('gram', 'Grammaire')])
    ].concat(content).concat([
      el('div', { class: 'row' }, [
        index > 0 ? el('button', { class: 'ghost small', type: 'button', onclick: function () { fiche(index - 1, tab); } }, ['‹ Leçon ' + index]) : null,
        index < COURSE.lessons.length - 1 && !COURSE.lessons[index + 1].soon ? el('button', { class: 'ghost small', type: 'button', onclick: function () { fiche(index + 1, tab); } }, ['Leçon ' + (index + 2) + ' ›']) : null
      ])
    ]));
  }

  // ---------- Accueil ----------
  function home() {
    if (synth) synth.cancel();
    var due = reviewQueue().length;
    var nextIndex = -1, i;
    for (i = 0; i < COURSE.lessons.length; i++) {
      var L = COURSE.lessons[i], ls = state.lessons[L.id];
      if (!L.soon && !(ls && ls.done && ls.pos == null)) { nextIndex = i; break; }
    }
    var lastDone = 0;
    Object.keys(state.lessons).forEach(function (k) { if (state.lessons[k].done) lastDone = Math.max(lastDone, state.lessons[k].done); });
    var inProgress = nextIndex >= 0 && state.lessons[COURSE.lessons[nextIndex].id] && state.lessons[COURSE.lessons[nextIndex].id].pos != null;

    var todayCard = el('div', { class: 'card today stack' }, [el('div', { class: 'eyebrow', text: 'Aujourd\'hui' })]);
    if (due > 0) {
      todayCard.appendChild(el('h2', { text: 'Révision du jour : ' + due + (due > 1 ? ' éléments' : ' élément') }));
      todayCard.appendChild(el('p', { class: 'muted', text: 'Environ 3 minutes : vocabulaire, phrases et conjugaison.' }));
      todayCard.appendChild(el('button', { type: 'button', onclick: startReview }, ['Réviser maintenant']));
    }
    if (nextIndex >= 0) {
      var NL = COURSE.lessons[nextIndex];
      var early = !inProgress && lastDone && today() - lastDone < 2;
      if (!due) todayCard.appendChild(el('h2', { text: 'Leçon ' + (nextIndex + 1) + ' : ' + NL.title }));
      if (early) todayCard.appendChild(el('p', { class: 'muted', text: 'Rythme conseillé : une leçon tous les deux jours. La leçon ' + (nextIndex + 1) + ' peut attendre ' + (today() - lastDone === 0 ? 'après-demain' : 'demain') + '.' }));
      else if (!due) todayCard.appendChild(el('p', { class: 'muted', text: 'Environ 12 minutes. Vous pouvez interrompre et reprendre.' }));
      todayCard.appendChild(el('button', { class: due ? 'ghost' : '', type: 'button', onclick: function () { startLesson(nextIndex); } },
        [(inProgress ? 'Reprendre la leçon ' : 'Commencer la leçon ') + (nextIndex + 1)]));
    } else if (!due) {
      todayCard.appendChild(el('h2', { text: 'Tout est à jour' }));
      todayCard.appendChild(el('p', { class: 'muted', text: 'Vous avez terminé toutes les leçons disponibles. Revenez demain pour la révision.' }));
    }

    var solid = 0, seen = 0;
    Object.keys(state.items).forEach(function (id) { if (ITEMS[id]) { seen++; if (state.items[id].box >= 3) solid++; } });

    var confirmZone = el('span');
    var conjDone = 0, conjSeen = 0;
    CONJ.forEach(function (u) { var st = state.conj[u.id]; if (st) { conjSeen++; if (st.box >= 3) conjDone++; } });
    var noSpeak = el('input', { type: 'checkbox', id: 'opt-nospeak' });
    noSpeak.checked = !!state.settings.noSpeak;
    noSpeak.addEventListener('change', function () { state.settings.noSpeak = noSpeak.checked; save(); });
    show([
      el('header', { class: 'stack', style: 'gap:2px' }, [el('div', { class: 'eyebrow', text: COURSE.title + ' · 7 leçons en 2 semaines' }), el('h1', { text: 'Espagnol au quotidien' })]),
      storageOk ? null : el('div', { class: 'fb ko' }, [el('div', { class: 'v', text: 'La progression ne peut pas être enregistrée sur ce navigateur (navigation privée ?).' })]),
      todayCard,
      el('label', { class: 'card option', for: 'opt-nospeak' }, [
        noSpeak,
        el('span', null, [el('b', { text: 'Je ne peux pas parler' }), el('br'), el('span', { class: 'muted', text: 'Dans les transports par exemple : les exercices d\'oral des leçons sont passés.' })])
      ]),
      el('div', { class: 'card stack' }, [
        el('div', { class: 'spread' }, [
          el('div', null, [el('div', { class: 'eyebrow', text: 'Conjugaison' }), el('div', { class: 'muted', text: conjSeen ? conjDone + ' notions acquises sur ' + CONJ.length : 'Des phrases à trou, à la demande.' })]),
          el('button', { class: 'ghost small', type: 'button', onclick: conjHome }, ['Ouvrir'])
        ])
      ]),
      el('div', { class: 'card stack' }, [
        el('div', { class: 'eyebrow', text: 'Programme' }),
        el('ol', { class: 'lessons' }, COURSE.lessons.map(function (L, idx) {
          var ls = state.lessons[L.id], isDone = ls && ls.done;
          return el('li', { class: L.soon ? 'soon' : (isDone ? 'done' : '') }, [
            el('span', { class: 'num', text: String(idx + 1) }),
            el('div', { class: 'body' }, [
              el('div', { class: 't', text: L.title }),
              el('div', { class: 'g', text: L.grammarTitle + (L.soon ? ' · bientôt' : isDone ? ' · terminée' : '') }),
              L.soon ? null : el('div', { class: 'refs' }, [
                el('button', { class: 'link', type: 'button', onclick: function () { fiche(idx, 'vocab'); } }, ['Vocabulaire']),
                el('button', { class: 'link', type: 'button', onclick: function () { fiche(idx, 'gram'); } }, ['Grammaire'])
              ])
            ]),
            L.soon ? null : el('button', { class: 'ghost small', type: 'button', onclick: function () { startLesson(idx); } }, [ls && ls.pos != null ? 'Reprendre' : isDone ? 'Refaire' : 'Ouvrir'])
          ]);
        }))
      ]),
      el('div', { class: 'card stack' }, [
        el('div', { class: 'eyebrow', text: 'Ma progression' }),
        el('div', { class: 'skills' }, SKILLS.map(function (s) {
          var r = state.skills[s[0]];
          return el('div', { class: 'skill' }, [
            el('div', { class: 'lbl' }, [el('span', { text: s[1] }), el('span', { class: 'muted', text: r[1] ? Math.round(100 * r[0] / r[1]) + ' %' : 'pas encore' })]),
            meter(r[1] ? r[0] / r[1] : 0)
          ]);
        })),
        el('p', { class: 'muted', text: seen ? solid + ' mots ou phrases solides sur ' + seen + ' rencontrés. Un élément devient solide après trois révisions réussies à plusieurs jours d\'écart.' : 'Vos mots et phrases appris apparaîtront ici.' })
      ]),
      el('footer', { class: 'links' }, [
        el('a', { href: 'test.html', text: 'Tester la voix et le micro' }),
        el('button', {
          class: 'quiet small', type: 'button', onclick: function () {
            confirmZone.innerHTML = '';
            confirmZone.appendChild(el('span', { class: 'row' }, [
              el('span', { text: 'Tout effacer ?' }),
              el('button', { class: 'small', type: 'button', onclick: function () { state = { v: 1, lessons: {}, items: {}, skills: blankSkills(), settings: {}, conj: {} }; save(); home(); } }, ['Oui, effacer']),
              el('button', { class: 'ghost small', type: 'button', onclick: function () { confirmZone.innerHTML = ''; } }, ['Annuler'])
            ]));
          }
        }, ['Effacer ma progression']),
        confirmZone
      ])
    ]);
  }

  // Exposé pour les tests automatiques.
  window.__espagnol = { judge: judge, norm: norm, strip: strip, judgeConj: judgeConj, conjFull: conjFull };
  home();
})();
