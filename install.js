// Register install handling immediately, before licence activation loads app.js.
(() => {
  const button = document.getElementById('install');
  let promptEvent = null;
  const installed = () => window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  function update() { button.hidden = installed(); }
  update();
  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault(); promptEvent = event;
    update();
  });
  button.addEventListener('click', async () => {
    if (installed()) { button.hidden = true; return; }
    if (promptEvent) {
      const event = promptEvent; promptEvent = null;
      try { await event.prompt(); await event.userChoice; } catch (_) {}
      update();
    } else {
      alert('To install in Chrome, open the browser menu (three dots) and select Install app or Add to Home screen. If the option is missing, wait a moment, refresh the page and try again.');
    }
  });
  window.addEventListener('appinstalled', () => { promptEvent = null; button.hidden = true; });
  window.matchMedia('(display-mode: standalone)').addEventListener?.('change', update);
})();
