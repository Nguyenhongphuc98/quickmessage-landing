// Language switching for the static Support / Privacy pages.
// Shares the preference key with the landing page (qm_landing_lang).
(function () {
  var KEY = 'qm_landing_lang';
  var root = document.documentElement;

  function pickLanguage() {
    var fromQuery = new URLSearchParams(location.search).get('lang');
    var stored = null;
    try { stored = localStorage.getItem(KEY); } catch (e) { /* storage may be blocked */ }
    var guess = (navigator.language || 'en').toLowerCase().indexOf('vi') === 0 ? 'vi' : 'en';
    var lang = fromQuery || stored || guess;
    return lang === 'vi' ? 'vi' : 'en';
  }

  function setLanguage(lang, persist) {
    root.dataset.lang = lang;
    root.lang = lang;
    if (persist) {
      try { localStorage.setItem(KEY, lang); } catch (e) { /* ignore */ }
    }
  }

  setLanguage(pickLanguage(), false);
  document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
    btn.addEventListener('click', function () { setLanguage(btn.dataset.setLang, true); });
  });
})();
