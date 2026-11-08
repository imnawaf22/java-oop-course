/* صفحة الإدارة: روابط مباشرة لتعديل ملفات الموقع على GitHub.
   الحماية الحقيقية من GitHub نفسه: ما أحد يقدر يحفظ تعديل على المستودع إلا صاحبه
   (أو اللي يعطيهم صلاحية). أي شخص ثاني يضغط "تعديل" يطلب منه GitHub يسوي fork بس. */
(function () {
  'use strict';
  var cfg = window.SITE_CONFIG || {};
  var repo = String(cfg.repo || '');
  var branch = String(cfg.branch || 'main');
  var valid = /^[A-Za-z0-9-]+\/[A-Za-z0-9._-]+$/.test(repo) && repo.indexOf('OWNER/') !== 0;
  var base = 'https://github.com/' + repo;

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function link(href, text, cls) {
    return '<a class="' + (cls || 'admin-link') + '" href="' + esc(href) + '" target="_blank" rel="noopener noreferrer">' + text + '</a>';
  }

  var lessons = (window.LESSONS || []).slice().sort(function (a, b) { return a.id - b.id; });
  var files = lessons.map(function (l) {
    return { path: 'data/lesson' + l.id + '.js', title: 'الدرس ' + l.id + ': ' + l.title, note: 'الشرح + ' + (l.quiz || []).length + ' سؤال كويز' };
  }).concat([
    { path: 'index.html', title: 'الصفحة الرئيسية', note: 'العنوان والوصف' },
    { path: 'css/style.css', title: 'التصميم والألوان', note: 'CSS' },
    { path: 'js/app.js', title: 'كود الموقع والكويز', note: 'JavaScript' }
  ]);

  document.addEventListener('DOMContentLoaded', function () {
    var root = document.getElementById('admin');
    if (!valid) {
      root.innerHTML = '<div class="callout danger"><span class="c-title">الإعداد ناقص:</span>اكتب اسم المستودع في <code>js/config.js</code> بالشكل <code>username/repo</code>.</div>';
      return;
    }
    var rows = files.map(function (f) {
      return '<tr><td>' + esc(f.title) + '<br><small class="muted">' + esc(f.note) + ' · <code>' + esc(f.path) + '</code></small></td>' +
        '<td class="admin-actions">' + link(base + '/edit/' + branch + '/' + f.path, '✎ تعديل', 'btn small') + ' ' +
        link(base + '/commits/' + branch + '/' + f.path, 'السجل', 'btn ghost small') + '</td></tr>';
    }).join('');

    root.innerHTML =
      '<div class="callout rule"><span class="c-title">كيف تشتغل الإدارة؟</span>الموقع ملفات ثابتة على GitHub Pages، والتحكم فيه عن طريق حسابك في GitHub. اضغط «تعديل» عند أي ملف، عدّل، واضغط <b>Commit changes</b>. بعد دقيقة أو دقيقتين يتحدث الموقع تلقائياً. ما أحد غيرك يقدر يحفظ تعديل، لأن المستودع باسمك.</div>' +
      '<h2>ملفات المحتوى</h2>' +
      '<div class="table-wrap"><table><thead><tr><th>الملف</th><th>إجراء</th></tr></thead><tbody>' + rows + '</tbody></table></div>' +
      '<h2>روابط سريعة</h2>' +
      '<div class="admin-grid">' +
        link(base, '📁 المستودع') +
        link(base + '/commits/' + branch, '🕘 كل التعديلات (وتقدر ترجع لأي نسخة)') +
        link(base + '/actions', '🚀 حالة النشر (Actions)') +
        link(base + '/settings/pages', '⚙ إعدادات GitHub Pages') +
        link(base + '/settings/access', '👥 مين عنده صلاحية') +
        link(base + '/settings/branches', '🛡 حماية الفرع (Branch protection)') +
        link('https://github.com/settings/security', '🔐 أمان حسابك (2FA)') +
      '</div>' +
      '<h2>قبل ما تعدّل</h2>' +
      '<ul>' +
        '<li>طريقة كتابة الشرح والأسئلة مكتوبة في أول ملف <code>data/lesson1.js</code>.</li>' +
        '<li>انتبه للفواصل <code>,</code> والأقواس، أي خطأ فيها يوقف الدرس كله. لو صار شي، افتح «السجل» وارجع للنسخة اللي قبل.</li>' +
        '<li>أسئلة «What\'s the output?»: تأكد من المخرج بتشغيل الكود قبل ما تحفظ.</li>' +
      '</ul>';
  });
})();
