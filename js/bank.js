/* =========================================================
   صفحة بنك الأسئلة (bank.html)
   البيانات في data/bank.js (window.QUESTION_BANK).
   - وضعين: «اختبر نفسك» (الحل يطلع بعد ما تختار) و «عرض الحلول».
   - إجاباتك تنحفظ في المتصفح (localStorage) لكل مجموعة.
   ========================================================= */
(function () {
  'use strict';
  var S = window.OOPSite;
  var BANK = window.QUESTION_BANK;
  var KEY = 'oop-bank-v1';
  var LETTERS = ['A', 'B', 'C', 'D'];

  function load() {
    try {
      var o = JSON.parse(window.localStorage.getItem(KEY) || '{}');
      return (o && typeof o === 'object') ? o : {};
    } catch (e) { return {}; }
  }
  function save(o) {
    try { window.localStorage.setItem(KEY, JSON.stringify(o)); } catch (e) {}
  }
  function chosenFor(store, id) {
    var v = store[id];
    return (typeof v === 'number' && v >= 0 && v <= 3) ? v : null;
  }
  // الخيارات اللي شكلها كود تنعرض بخط الكود
  function looksLikeCode(t) {
    return /[;{}()=<>&|@]/.test(t) || /^[a-z][\w.]*$/.test(t);
  }

  var state = { section: null, mode: 'test', order: null };
  var root, store;

  function sectionById(id) {
    for (var i = 0; i < BANK.sections.length; i++) if (BANK.sections[i].id === id) return BANK.sections[i];
    return BANK.sections[0];
  }

  function stats(sec) {
    var answered = 0, correct = 0;
    sec.questions.forEach(function (q) {
      var c = chosenFor(store, q.id);
      if (c !== null) { answered++; if (c === q.answer) correct++; }
    });
    return { answered: answered, correct: correct, total: sec.questions.length };
  }

  function renderTabs() {
    var tabs = document.getElementById('bankTabs');
    tabs.innerHTML = '';
    BANK.sections.forEach(function (sec) {
      var st = stats(sec);
      var b = S.el('button', 'tab-btn' + (sec.id === state.section ? ' active' : ''),
        '<span class="tab-title">' + S.esc(sec.title) + '</span>' +
        '<span class="tab-meta">' + sec.questions.length + ' سؤال' + (st.answered ? ' · حليت ' + st.answered : '') + '</span>');
      b.type = 'button';
      b.addEventListener('click', function () {
        state.section = sec.id;
        state.order = null;
        history.replaceState(null, '', '#' + sec.id);
        render();
        window.scrollTo({ top: 0, behavior: 'auto' });
      });
      tabs.appendChild(b);
    });
  }

  function renderStats(sec) {
    var st = stats(sec);
    var box = document.getElementById('bankStats');
    var pct = st.answered ? Math.round(st.correct / st.answered * 100) : 0;
    box.innerHTML =
      '<span class="badge">حليت <span class="ltr">' + st.answered + '/' + st.total + '</span></span>' +
      '<span class="badge done">صح <span class="ltr">' + st.correct + '</span></span>' +
      '<span class="badge low">غلط <span class="ltr">' + (st.answered - st.correct) + '</span></span>' +
      (st.answered ? '<span class="badge">النسبة <span class="ltr">' + pct + '%</span></span>' : '');
    var bar = document.getElementById('bankProgress');
    bar.firstChild.style.width = (st.answered / st.total * 100) + '%';
  }

  function questionCard(q, sec) {
    var chosen = chosenFor(store, q.id);
    var reveal = state.mode === 'answers' || chosen !== null;
    var card = S.el('article', 'q-card');
    card.id = 'q-' + q.id;

    var head = S.el('div', 'q-head');
    head.setAttribute('dir', 'ltr');
    head.innerHTML = '<span class="q-num">Q' + S.esc(q.number) + '</span><span class="q-id">' + S.esc(q.id) + '</span>' +
      (q.code ? '<span class="q-type output">Code</span>' : '') +
      (reveal && chosen !== null ? (chosen === q.answer ? '<span class="q-res ok">✓ Correct</span>' : '<span class="q-res bad">✗ Incorrect</span>') : '');
    card.appendChild(head);

    var body = S.el('div', 'q-body');
    body.setAttribute('dir', 'ltr');
    body.setAttribute('lang', 'en');
    body.appendChild(S.el('div', 'q-text', S.inline(q.question)));
    if (q.code) body.appendChild(S.codeBlock(q.code, { en: true }));

    var list = S.el('div', 'options');
    q.options.forEach(function (opt, i) {
      var cls = 'opt';
      if (reveal) {
        if (i === q.answer) cls += ' correct';
        else if (i === chosen) cls += ' wrong';
        else cls += ' dim';
      }
      var text = looksLikeCode(opt) ? '<span class="opt-mono">' + S.esc(opt) + '</span>' : S.esc(opt);
      var b = S.el('button', cls, '<span class="letter">' + LETTERS[i] + '</span><span class="opt-body">' + text + '</span>');
      b.type = 'button';
      if (reveal) b.disabled = true;
      else b.addEventListener('click', function () {
        store[q.id] = i;
        save(store);
        card.replaceWith(questionCard(q, sec));
        renderStats(sec);
        renderTabs();
      });
      list.appendChild(b);
    });
    body.appendChild(list);
    card.appendChild(body);

    if (reveal) {
      var ex = S.el('div', 'callout explain');
      ex.setAttribute('dir', 'rtl');
      ex.innerHTML = '<span class="c-title">الحل: ' + LETTERS[q.answer] + '</span>' + S.esc(q.explanation);
      card.appendChild(ex);
      if (q.note) {
        var nt = S.el('div', 'callout note');
        nt.setAttribute('dir', 'rtl');
        nt.innerHTML = '<span class="c-title">ملاحظة:</span>' + S.esc(q.note);
        card.appendChild(nt);
      }
    }
    return card;
  }

  function render() {
    store = load();
    var sec = sectionById(state.section);
    state.section = sec.id;
    renderTabs();
    renderStats(sec);
    document.getElementById('modeTest').classList.toggle('active', state.mode === 'test');
    document.getElementById('modeAnswers').classList.toggle('active', state.mode === 'answers');

    var qs = sec.questions.slice();
    if (state.order) qs = state.order.map(function (i) { return sec.questions[i]; });
    var list = document.getElementById('bankList');
    list.innerHTML = '';
    list.appendChild(S.el('h2', 'bank-sec-title', S.esc(sec.title)));
    qs.forEach(function (q) { list.appendChild(questionCard(q, sec)); });
  }

  document.addEventListener('DOMContentLoaded', function () {
    root = document.getElementById('bank');
    if (!S || !BANK || !BANK.sections || !BANK.sections.length) {
      root.innerHTML = '<div class="callout danger"><span class="c-title">تعذر تحميل البنك:</span>تأكد إن ملف <code>data/bank.js</code> موجود وسليم.</div>';
      return;
    }
    var total = BANK.sections.reduce(function (n, s) { return n + s.questions.length; }, 0);
    document.getElementById('bankCount').textContent = total + ' سؤال في ' + BANK.sections.length + ' مجموعات، كلها محلولة مع الشرح.';

    var hash = (window.location.hash || '').slice(1);
    state.section = sectionById(hash).id;

    document.getElementById('modeTest').addEventListener('click', function () { state.mode = 'test'; render(); });
    document.getElementById('modeAnswers').addEventListener('click', function () { state.mode = 'answers'; render(); });
    document.getElementById('bankShuffle').addEventListener('click', function () {
      var sec = sectionById(state.section);
      state.order = S.shuffle(sec.questions.map(function (_, i) { return i; }));
      render();
    });
    document.getElementById('bankReset').addEventListener('click', function () {
      var sec = sectionById(state.section);
      if (!window.confirm('تمسح إجاباتك في «' + sec.title + '» وتبدأ من جديد؟')) return;
      sec.questions.forEach(function (q) { delete store[q.id]; });
      save(store);
      state.order = null;
      render();
    });
    window.addEventListener('hashchange', function () {
      var id = sectionById((window.location.hash || '').slice(1)).id;
      if (id !== state.section) { state.section = id; state.order = null; render(); }
    });
    render();
  });
})();
