import Common from "./common/common";


// EVENT LISTENER - LOAD
// ========================================
window.addEventListener('load', (ev) => {

  // COMMON
  Common.initLoad();

  // MACROS
  /* FORM 1 INPUT */
  document.querySelector('[contentForm1-input-js]').addEventListener('input', (ev) => {

    const el = ev.currentTarget;

    if(el.value.length >= 8) {
      el.nextElementSibling.style.opacity = '1';
      document.querySelector('[contentForm1-btn-js]').classList.add('is-active');
    } else {
      el.nextElementSibling.style.opacity = '0';
      document.querySelector('[contentForm1-btn-js]').classList.remove('is-active');
    }

  }, false);

}, false);


// EVENT LISTENER - SCROLL
// ========================================
window.addEventListener('scroll', (ev) => {}, false);
