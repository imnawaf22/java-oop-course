/* يشتغل في <head> قبل رسم الصفحة:
   1) يطبق الوضع الليلي/النهاري المحفوظ بدون وميض.
   2) حماية من تضمين الموقع داخل iframe في موقع ثاني (clickjacking). */
(function () {
  'use strict';
  var t = null;
  try { t = window.localStorage.getItem('oop-theme'); } catch (e) {}
  if (t !== 'dark' && t !== 'light') {
    t = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
  }
  document.documentElement.setAttribute('data-theme', t);

  if (window.self !== window.top) {
    document.documentElement.style.display = 'none';
    try { window.top.location.replace(window.self.location.href); } catch (e) {}
  }
})();
