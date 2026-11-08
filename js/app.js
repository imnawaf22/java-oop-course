/* =========================================================
   Java OOP — موقع تعليمي
   يشتغل مباشرة من الملف (file://) بدون سيرفر أو مكتبات.
   ========================================================= */
(function () {
  'use strict';

  var LESSONS = (window.LESSONS || []).slice().sort(function (a, b) { return a.id - b.id; });
  var STORE_KEY = 'oop-quiz-v1';
  var THEME_KEY = 'oop-theme';

  /* ---------- أدوات صغيرة ---------- */
  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  // تنسيق بسيط للنصوص: `كود` و **عريض** وسطر جديد
  function inline(s) {
    var out = esc(s);
    out = out.replace(/`([^`]+)`/g, function (_, c) { return '<code>' + c + '</code>'; });
    out = out.replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>');
    out = out.replace(/\n/g, '<br>');
    return out;
  }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function getLesson(id) {
    for (var i = 0; i < LESSONS.length; i++) if (LESSONS[i].id === id) return LESSONS[i];
    return null;
  }

  /* ---------- التخزين (مع try/catch) ---------- */
  function loadStore() {
    try {
      var raw = window.localStorage.getItem(STORE_KEY);
      var obj = raw ? JSON.parse(raw) : {};
      return (obj && typeof obj === 'object') ? obj : {};
    } catch (e) { return {}; }
  }
  function saveResult(lessonId, score, total) {
    try {
      var s = loadStore();
      var prev = getResult(lessonId) || {};
      s[lessonId] = {
        last: score,
        best: Math.max(score, prev.best || 0),
        total: total,
        attempts: (prev.attempts || 0) + 1,
        date: new Date().toISOString()
      };
      window.localStorage.setItem(STORE_KEY, JSON.stringify(s));
      return s[lessonId];
    } catch (e) {
      return { last: score, best: score, total: total, attempts: 1 };
    }
  }
  // نتأكد إن القيم المحفوظة أرقام صحيحة قبل ما نعرضها (ما نثق بأي شي مخزن)
  function getResult(lessonId) {
    var r = loadStore()[lessonId];
    if (!r || typeof r !== 'object') return null;
    function num(v, max) {
      v = Math.floor(Number(v));
      return isFinite(v) && v >= 0 ? Math.min(v, max) : 0;
    }
    var total = num(r.total, 1000) || 15;
    return { last: num(r.last, total), best: num(r.best, total), total: total, attempts: num(r.attempts, 100000) || 1 };
  }

  /* ---------- الوضع الليلي ---------- */
  function currentTheme() { return document.documentElement.getAttribute('data-theme') || 'light'; }
  function setTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    try { window.localStorage.setItem(THEME_KEY, t); } catch (e) {}
    var b = $('#themeBtn');
    if (b) {
      b.textContent = t === 'dark' ? '☀' : '☾';
      b.setAttribute('aria-label', t === 'dark' ? 'الوضع النهاري' : 'الوضع الليلي');
      b.title = b.getAttribute('aria-label');
    }
  }

  /* ---------- تلوين Java ---------- */
  var KW = ('abstract assert boolean break byte case catch char class const continue default do double else enum ' +
    'extends final finally float for goto if implements import instanceof int interface long native new package ' +
    'private protected public return short static strictfp super switch synchronized this throw throws transient ' +
    'try void volatile while var true false null record').split(' ');
  var KWSET = {};
  KW.forEach(function (k) { KWSET[k] = true; });
  var TOKEN = /(\/\/[^\n]*)|(\/\*[\s\S]*?\*\/)|("(?:\\.|[^"\\\n])*")|('(?:\\.|[^'\\\n])+')|(@[A-Za-z_]\w*)|(\b\d[\d_]*(?:\.\d+)?[fFdDlL]?\b)|([A-Za-z_$][\w$]*)/g;

  function highlightJava(code) {
    var out = '', last = 0, m;
    TOKEN.lastIndex = 0;
    while ((m = TOKEN.exec(code)) !== null) {
      out += esc(code.slice(last, m.index));
      var t = m[0], cls = null;
      if (m[1] || m[2]) cls = 'tk-com';
      else if (m[3] || m[4]) cls = 'tk-str';
      else if (m[5]) cls = 'tk-ann';
      else if (m[6]) cls = 'tk-num';
      else if (m[7]) {
        if (KWSET[t]) cls = 'tk-kw';
        else if (/^[A-Z]/.test(t)) cls = /^[A-Z0-9_]+$/.test(t) && t.length > 1 ? 'tk-num' : 'tk-type';
        else if (/^\s*\(/.test(code.slice(TOKEN.lastIndex))) cls = 'tk-fn';
      }
      out += cls ? '<span class="' + cls + '">' + esc(t) + '</span>' : esc(t);
      last = TOKEN.lastIndex;
    }
    out += esc(code.slice(last));
    return out;
  }
  // يلف كل سطر بـ span عشان ترقيم الأسطر (بدون ما نكسر الـ spans)
  function wrapLines(html) {
    var lines = html.split('\n'), open = [], res = [];
    lines.forEach(function (line) {
      var prefix = open.join('');
      var re = /<span class="[^"]+">|<\/span>/g, mm;
      while ((mm = re.exec(line)) !== null) {
        if (mm[0] === '</span>') open.pop(); else open.push(mm[0]);
      }
      var suffix = open.map(function () { return '</span>'; }).join('');
      res.push('<span class="line">' + prefix + line + suffix + '</span>');
    });
    return res.join('\n');
  }

  function normalizeCode(code) {
    return String(code).replace(/\r\n/g, '\n').replace(/^\n+/, '').replace(/\s+$/, '');
  }

  function codeBlock(code, opts) {
    opts = opts || {};
    var clean = normalizeCode(code);
    var wrap = el('div', 'code-block' + (opts.output ? ' output-block' : ''));
    var bar = el('div', 'code-bar');
    bar.appendChild(el('span', 'lang', opts.output ? 'Output' : (opts.label || 'Java')));
    var labels = opts.en ? COPY_EN : COPY_AR;
    var btn = el('button', 'copy-btn' + (opts.en ? ' en' : ''), labels.copy);
    btn.type = 'button';
    btn.setAttribute('aria-label', labels.aria);
    btn.addEventListener('click', function () { copyText(clean, btn, labels); });
    bar.appendChild(btn);
    wrap.appendChild(bar);
    var pre = el('pre', 'code' + (opts.numbered ? ' numbered' : ''));
    pre.setAttribute('dir', 'ltr');
    var inner = opts.output ? esc(clean) : highlightJava(clean);
    if (opts.numbered) inner = wrapLines(inner);
    pre.appendChild(el('code', null, inner));
    wrap.appendChild(pre);
    return wrap;
  }

  var COPY_AR = { copy: 'نسخ', done: 'تم النسخ ✓', fail: 'تعذر النسخ', aria: 'نسخ الكود' };
  var COPY_EN = { copy: 'Copy', done: 'Copied ✓', fail: 'Copy failed', aria: 'Copy code' };

  function copyText(text, btn, labels) {
    labels = labels || COPY_AR;
    function done(ok) {
      btn.textContent = ok ? labels.done : labels.fail;
      btn.classList.toggle('copied', ok);
      setTimeout(function () { btn.textContent = labels.copy; btn.classList.remove('copied'); }, 1600);
    }
    function fallback() {
      try {
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.setAttribute('readonly', '');
        ta.style.position = 'fixed'; ta.style.top = '-1000px';
        document.body.appendChild(ta);
        ta.select();
        var ok = document.execCommand('copy');
        document.body.removeChild(ta);
        done(ok);
      } catch (e) { done(false); }
    }
    try {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(function () { done(true); }, fallback);
      } else fallback();
    } catch (e) { fallback(); }
  }

  /* ---------- الهيكل المشترك (الشريط العلوي) ---------- */
  function buildTopbar(activeId) {
    var bar = $('#topbar');
    if (!bar) return;
    var links = LESSONS.map(function (l) {
      return '<a href="lesson.html?l=' + l.id + '"' + (l.id === activeId ? ' class="active"' : '') +
        ' title="' + esc(l.title) + '">الدرس ' + l.id + '</a>';
    }).join('');
    var isLesson = typeof activeId === 'number' && activeId > 0;
    bar.innerHTML =
      (isLesson ? '<button class="icon-btn menu-btn" id="menuBtn" type="button" aria-label="القائمة">☰</button>' : '') +
      '<a class="brand" href="index.html"><span class="brand-logo">{ }</span><span class="brand-text">Java OOP</span></a>' +
      '<nav class="topnav" aria-label="الدروس"><a href="index.html"' + (activeId === 'home' ? ' class="active"' : '') + '>الرئيسية</a>' + links +
      '<a href="bank.html"' + (activeId === 'bank' ? ' class="active"' : '') + '>بنك الأسئلة</a></nav>' +
      (activeId === 'bank' ? '' : '<a class="icon-btn bank-btn" href="bank.html" title="بنك الأسئلة" aria-label="بنك الأسئلة">?</a>') +
      '<span class="spacer"></span>' +
      '<button class="icon-btn" id="themeBtn" type="button"></button>';
    setTheme(currentTheme());
    $('#themeBtn').addEventListener('click', function () {
      setTheme(currentTheme() === 'dark' ? 'light' : 'dark');
    });
    var mb = $('#menuBtn');
    if (mb) mb.addEventListener('click', function () { document.body.classList.toggle('nav-open'); });
  }

  /* ---------- الصفحة الرئيسية ---------- */
  function statusBadge(lessonId, total) {
    var r = getResult(lessonId);
    if (!r) return '<span class="badge">الكويز: ما بدأ</span>';
    var t = r.total || total;
    var ratio = r.best / t;
    var cls = ratio >= 0.8 ? 'done' : (ratio >= 0.5 ? 'mid' : 'low');
    return '<span class="badge ' + cls + '">آخر درجة <span class="ltr">' + r.last + '/' + t + '</span> · الأعلى <span class="ltr">' + r.best + '/' + t + '</span></span>';
  }

  function renderHome() {
    buildTopbar('home');
    var grid = $('#cards');
    if (!grid) return;
    var html = LESSONS.map(function (l) {
      return '<a class="card" href="lesson.html?l=' + l.id + '">' +
        '<div class="card-num">' + l.id + '</div>' +
        '<h2>' + inline(l.title) + '</h2>' +
        '<p>' + inline(l.description) + '</p>' +
        '<div class="card-foot">' + statusBadge(l.id, (l.quiz || []).length) +
        '<span class="card-go">ابدأ الدرس ←</span></div></a>';
    }).join('');
    html += '<a class="card card-bank" href="bank.html">' +
      '<div class="card-num">?</div>' +
      '<h2>بنك الأسئلة (محلول)</h2>' +
      '<p>أسئلة اختيار من متعدد بالإنجليزي على كل المادة، مقسمة على ثلاث مجموعات، ولكل سؤال شرح بالعربي. تقدر تختبر نفسك أو تعرض الحلول مباشرة.</p>' +
      '<div class="card-foot"><span class="badge">3 مجموعات</span><span class="card-go">افتح البنك ←</span></div></a>';
    grid.innerHTML = html;
  }

  /* ---------- صفحة الدرس ---------- */
  function renderBlock(b, n) {
    var type = b[0];
    switch (type) {
      case 'p': return el('p', null, inline(b[1]));
      case 'h': return el('h3', null, inline(b[1]));
      case 'lec': return el('h3', null, '<span class="tag lecture">مثال المحاضرة</span>' + inline(b[1] || ''));
      case 'ex': return el('h3', null, '<span class="tag extra">مثال إضافي ' + b[1] + '</span>' + inline(b[2] || ''));
      case 'qz': return el('h3', null, '<span class="tag quizt">' + inline(b[1]) + '</span>' + inline(b[2] || ''));
      case 'code': return codeBlock(b[1], { label: b[2] });
      case 'out': return codeBlock(b[1], { output: true });
      case 'analogy': return el('div', 'callout analogy', '<span class="c-title">تشبيه:</span>' + inline(b[1]));
      case 'explain': return el('div', 'callout explain', '<span class="c-title">' + inline(b[2] || 'الشرح:') + '</span>' + inline(b[1]));
      case 'rule': return el('div', 'callout rule', '<span class="c-title">' + inline(b[2] || 'قاعدة:') + '</span>' + inline(b[1]));
      case 'note': return el('div', 'callout note', '<span class="c-title">' + inline(b[2] || 'ملاحظة:') + '</span>' + inline(b[1]));
      case 'danger': return el('div', 'callout danger', '<span class="c-title">' + inline(b[2] || 'انتبه:') + '</span>' + inline(b[1]));
      case 'ul':
      case 'ol': {
        var list = el(type);
        b[1].forEach(function (it) { list.appendChild(el('li', null, inline(it))); });
        return list;
      }
      case 'table': {
        var wrap = el('div', 'table-wrap');
        var html = '<table><thead><tr>' + b[1].map(function (h) { return '<th>' + inline(h) + '</th>'; }).join('') + '</tr></thead><tbody>';
        b[2].forEach(function (row) {
          html += '<tr>' + row.map(function (c) {
            var cls = /^✔/.test(c) ? ' class="yes"' : (/^✘/.test(c) ? ' class="no"' : '');
            return '<td' + cls + '>' + inline(c) + '</td>';
          }).join('') + '</tr>';
        });
        wrap.innerHTML = html + '</tbody></table>';
        return wrap;
      }
      default: return el('p', null, inline(String(b[1] || '')));
    }
  }

  function renderLesson() {
    var params = new URLSearchParams(window.location.search);
    var id = parseInt(params.get('l'), 10) || 1;
    var lesson = getLesson(id) || LESSONS[0];
    if (!lesson) return;
    id = lesson.id;
    document.title = 'الدرس ' + id + ': ' + lesson.title + ' — Java OOP';
    buildTopbar(id);

    // القائمة الجانبية
    var side = $('#sidebar');
    var sideHtml = '<div class="side-title">الدروس</div><ul class="side-lessons">' +
      LESSONS.map(function (l) {
        return '<li><a href="lesson.html?l=' + l.id + '"' + (l.id === id ? ' class="active"' : '') + '><span class="num">' + l.id + '.</span> ' + inline(l.title) + '</a></li>';
      }).join('') + '</ul>';
    sideHtml += '<div class="side-title">محتوى الدرس</div><ul class="toc" id="toc">';
    sideHtml += '<li><a href="#summary">الملخص</a></li>';
    lesson.sections.forEach(function (s) {
      sideHtml += '<li><a href="#' + s.id + '">' + inline(s.title) + '</a></li>';
    });
    sideHtml += '<li class="toc-quiz"><a href="#quiz">✎ الكويز (' + lesson.quiz.length + ' سؤال)</a></li></ul>';
    side.innerHTML = sideHtml;
    side.addEventListener('click', function (e) {
      if (e.target.closest('a')) document.body.classList.remove('nav-open');
    });
    var scrim = $('#scrim');
    if (scrim) scrim.addEventListener('click', function () { document.body.classList.remove('nav-open'); });

    // المحتوى
    var main = $('#content');
    var head = el('header', 'lesson-head');
    head.innerHTML = '<div class="lesson-kicker">الدرس ' + id + ' من ' + LESSONS.length + '</div>' +
      '<h1>' + inline(lesson.title) + '</h1><p>' + inline(lesson.intro) + '</p>';
    main.appendChild(head);

    var sum = el('section', 'summary');
    sum.id = 'summary';
    sum.innerHTML = '<h2>الملخص</h2><ul>' + lesson.summary.map(function (s) { return '<li>' + inline(s) + '</li>'; }).join('') + '</ul>';
    main.appendChild(sum);

    lesson.sections.forEach(function (s) {
      var sec = el('section', 'section');
      sec.id = s.id;
      sec.appendChild(el('h2', null, inline(s.title)));
      s.blocks.forEach(function (b) { sec.appendChild(renderBlock(b)); });
      main.appendChild(sec);
    });

    var quizSec = el('section', 'quiz');
    quizSec.id = 'quiz';
    main.appendChild(quizSec);
    Quiz(quizSec, lesson);

    // التنقل بين الدروس
    var prev = getLesson(id - 1), next = getLesson(id + 1);
    var pager = el('nav', 'pager');
    pager.innerHTML =
      (prev ? '<a class="prev" href="lesson.html?l=' + prev.id + '"><small>→ الدرس السابق</small>' + inline(prev.title) + '</a>' : '<span></span>') +
      (next ? '<a class="next" href="lesson.html?l=' + next.id + '"><small>الدرس التالي ←</small>' + inline(next.title) + '</a>' : '<a class="next" href="index.html"><small>خلصت الدروس ←</small>الرجوع للرئيسية</a>');
    main.appendChild(pager);

    scrollSpy();

    // الروابط اللي فيها #قسم: المحتوى ينبني بعد التحميل، فنروح للقسم بأنفسنا
    if (window.location.hash) {
      var target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
      if (target) setTimeout(function () { target.scrollIntoView({ behavior: 'auto' }); }, 0);
    }
  }

  function scrollSpy() {
    if (!('IntersectionObserver' in window)) return;
    var links = {};
    Array.prototype.forEach.call(document.querySelectorAll('#toc a'), function (a) {
      links[a.getAttribute('href').slice(1)] = a;
    });
    var visible = {};
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { visible[en.target.id] = en.isIntersecting; });
      var firstId = null;
      Array.prototype.some.call(document.querySelectorAll('#summary, .section, #quiz'), function (s) {
        if (visible[s.id]) { firstId = s.id; return true; }
        return false;
      });
      if (!firstId) return;
      Object.keys(links).forEach(function (k) { links[k].classList.toggle('current', k === firstId); });
    }, { rootMargin: '-70px 0px -55% 0px' });
    Array.prototype.forEach.call(document.querySelectorAll('#summary, .section, #quiz'), function (s) { obs.observe(s); });
  }

  /* ---------- الكويز (واجهته بالإنجليزي) ---------- */
  var LETTERS = ['A', 'B', 'C', 'D'];
  var TYPE_LABEL = { concept: 'Concept', output: 'What\'s the output?', error: 'Find the bug' };

  function Quiz(root, lesson) {
    var questions = lesson.quiz;
    var state = null;
    root.setAttribute('dir', 'ltr');
    root.setAttribute('lang', 'en');

    function optionHtml(q, text) {
      if (q.type === 'output') return '<span class="opt-mono">' + esc(text) + '</span>';
      return inline(text);
    }
    function code(q) {
      return codeBlock(q.code, { numbered: q.type === 'error' || q.lines, en: true });
    }

    function start(shuffleQuestions) {
      var order = questions.map(function (_, i) { return i; });
      if (shuffleQuestions) order = shuffle(order);
      state = {
        order: order,
        idx: 0,
        score: 0,
        wrong: [],
        opts: order.map(function (qi) {
          var q = questions[qi];
          return shuffle([{ t: q.answer, ok: true }].concat(q.wrong.map(function (w) { return { t: w, ok: false }; })));
        })
      };
      showQuestion();
    }

    function intro() {
      var r = getResult(lesson.id);
      var total = questions.length;
      root.innerHTML =
        '<h2>Test yourself: Lesson ' + lesson.id + ' Quiz</h2>' +
        '<p class="quiz-sub">' + total + ' multiple-choice questions (concepts, code output, and finding bugs), ordered from easy to hard. After each answer you see whether you were right, plus a short explanation.</p>' +
        '<div class="quiz-stats">' + (r
          ? '<span class="badge">Last score: ' + r.last + '/' + (r.total || total) + '</span><span class="badge done">Best score: ' + r.best + '/' + (r.total || total) + '</span><span class="badge">Attempts: ' + (r.attempts || 1) + '</span>'
          : '<span class="badge">Not started yet</span>') + '</div>' +
        '<div class="btn-row"><button class="btn" type="button" id="qStart">' + (r ? 'Start a new attempt' : 'Start the quiz') + '</button></div>';
      $('#qStart', root).addEventListener('click', function () { start(!!r); scrollToQuiz(); });
    }

    function scrollToQuiz() {
      var top = root.getBoundingClientRect().top + window.pageYOffset - 70;
      if (root.getBoundingClientRect().top < 0 || root.getBoundingClientRect().top > window.innerHeight * 0.5) {
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    }

    function showQuestion() {
      var qi = state.order[state.idx];
      var q = questions[qi];
      var opts = state.opts[state.idx];
      var total = questions.length;
      root.innerHTML = '';
      root.appendChild(el('h2', null, 'Lesson ' + lesson.id + ' Quiz'));
      var prog = el('div', 'progress', '<div></div>');
      root.appendChild(prog);
      setTimeout(function () { prog.firstChild.style.width = (state.idx / total * 100) + '%'; }, 10);
      root.appendChild(el('div', 'q-meta',
        '<span>Question ' + (state.idx + 1) + ' of ' + total + '</span>' +
        '<span class="q-type ' + q.type + '">' + TYPE_LABEL[q.type] + '</span>' +
        '<span>Score: ' + state.score + '</span>'));
      root.appendChild(el('div', 'q-text', inline(q.q)));
      if (q.code) root.appendChild(code(q));

      var list = el('div', 'options');
      var buttons = [];
      opts.forEach(function (o, i) {
        var b = el('button', 'opt', '<span class="letter">' + LETTERS[i] + '</span><span class="opt-body">' + optionHtml(q, o.t) + '</span>');
        b.type = 'button';
        b.addEventListener('click', function () { choose(i); });
        buttons.push(b);
        list.appendChild(b);
      });
      root.appendChild(list);
      var fb = el('div');
      root.appendChild(fb);

      function choose(i) {
        var chosen = opts[i];
        buttons.forEach(function (b, j) {
          b.disabled = true;
          if (opts[j].ok) b.classList.add('correct');
          else if (j === i) b.classList.add('wrong');
          else b.classList.add('dim');
        });
        if (chosen.ok) state.score++;
        else state.wrong.push({ qi: qi, chosen: chosen.t });
        var rightIdx = 0;
        opts.forEach(function (o, k) { if (o.ok) rightIdx = k; });
        fb.className = 'feedback ' + (chosen.ok ? 'ok' : 'bad');
        fb.innerHTML = '<div class="f-title">' + (chosen.ok ? '✓ Correct' : '✗ Incorrect') + '</div>' +
          (chosen.ok ? '' : '<p>Correct answer: <b>' + LETTERS[rightIdx] + '</b></p>') +
          '<p>' + inline(q.explain) + '</p>';
        var row = el('div', 'btn-row');
        var last = state.idx === total - 1;
        var nb = el('button', 'btn', last ? 'See results' : 'Next question →');
        nb.type = 'button';
        nb.addEventListener('click', function () {
          if (last) showResult(); else { state.idx++; showQuestion(); }
          scrollToQuiz();
        });
        row.appendChild(nb);
        root.appendChild(row);
        nb.focus({ preventScroll: true });
      }
    }

    function showResult() {
      var total = questions.length;
      var rec = saveResult(lesson.id, state.score, total);
      var pct = state.score / total;
      var msg = pct === 1 ? 'Excellent! A perfect score 🎉' : pct >= 0.8 ? 'Great work, you are almost there.' : pct >= 0.5 ? 'Good. Review the incorrect answers below and try again.' : 'Go back to the lesson, review the parts you missed, then try again.';
      root.innerHTML = '';
      root.appendChild(el('h2', null, 'Lesson ' + lesson.id + ' Quiz Results'));
      var prog = el('div', 'progress', '<div class="full"></div>');
      root.appendChild(prog);
      root.appendChild(el('div', 'result-score',
        '<div class="big">' + state.score + '/' + total + '</div>' +
        '<div class="msg">' + msg + '</div>' +
        '<div class="quiz-stats center"><span class="badge done">Best score: ' + rec.best + '/' + total + '</span><span class="badge">Attempts: ' + rec.attempts + '</span></div>'));
      var row = el('div', 'btn-row center');
      var again = el('button', 'btn', '↻ Try again');
      again.type = 'button';
      again.addEventListener('click', function () { start(true); scrollToQuiz(); });
      row.appendChild(again);
      root.appendChild(row);

      if (state.wrong.length) {
        root.appendChild(el('h3', null, 'Review your incorrect answers (' + state.wrong.length + ')'));
        state.wrong.forEach(function (w) {
          var q = questions[w.qi];
          var item = el('div', 'review-item');
          item.appendChild(el('div', 'q-text', inline(q.q)));
          if (q.code) item.appendChild(code(q));
          item.appendChild(el('div', 'review-line', '<span class="lbl you">Your answer</span><span class="opt-body">' + optionHtml(q, w.chosen) + '</span>'));
          item.appendChild(el('div', 'review-line', '<span class="lbl right">Correct</span><span class="opt-body">' + optionHtml(q, q.answer) + '</span>'));
          item.appendChild(el('div', 'callout explain', '<span class="c-title">Explanation:</span>' + inline(q.explain)));
          root.appendChild(item);
        });
      } else {
        root.appendChild(el('div', 'all-right', 'You got every question right!'));
      }
    }

    intro();
  }

  /* ---------- تشغيل ---------- */
  // أدوات مشتركة تستخدمها صفحة بنك الأسئلة (js/bank.js)
  window.OOPSite = { esc: esc, inline: inline, el: el, shuffle: shuffle, codeBlock: codeBlock };

  document.addEventListener('DOMContentLoaded', function () {
    var page = document.body.getAttribute('data-page');
    if (page === 'lesson') renderLesson();
    else if (page === 'home') renderHome();
    else buildTopbar(page);
  });
})();
