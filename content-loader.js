// ============================================================
// ТЕХНИЧЕСКИЙ ФАЙЛ — не редактировать вручную.
// Применяет тексты из content.js к странице.
// Логика: находит на странице все элементы с атрибутом data-content="путь.к.полю"
// и подставляет туда значение из window.MONO_CONTENT по этому пути.
// Должен подключаться ДО основного inline-скрипта сайта (языки/переводы),
// чтобы немецкий текст по умолчанию совпадал с content.js.
// ============================================================
(function () {
  var DATA = window.MONO_CONTENT || {};

  function getByPath(obj, path) {
    return path.split('.').reduce(function (acc, key) {
      return acc && acc[key] !== undefined ? acc[key] : undefined;
    }, obj);
  }

  document.querySelectorAll('[data-content]').forEach(function (el) {
    var path = el.getAttribute('data-content');
    var value = getByPath(DATA, path);
    if (value !== undefined) {
      el.innerHTML = value;
    }
  });

  // Instagram-ссылка: текст и href обновляются вместе, чтобы не рассинхронизировались
  document.querySelectorAll('[data-content-href]').forEach(function (el) {
    var path = el.getAttribute('data-content-href');
    var value = getByPath(DATA, path);
    if (value !== undefined) {
      el.setAttribute('href', value);
    }
  });
})();
