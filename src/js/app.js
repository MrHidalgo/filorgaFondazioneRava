import Common from "./common/common";


// EVENT LISTENER - LOAD
// ========================================
window.addEventListener('load', (ev) => {

  // COMMON
  Common.initLoad();

  // MACROS
  /* FORM 1 INPUT
  * ============================== */
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
  document.querySelector('[contentForm1-btn-js]').addEventListener('click', (ev) => {
    document.querySelector('.content__wrapper-1').style.display = 'none';
    document.querySelectorAll('.content__wrapper-2').forEach((val, idx) => {
      val.style.display = 'block';
    })
  }, false);

  /* FORM 2 INPUT
  * ============================== */
  document.querySelector('[contentForm2-input1-js]').addEventListener('input', (ev) => {

    const el = ev.currentTarget;

    if(el.value.length > 2) {
      el.closest('label').classList.add('is-open');
    } else {
      el.closest('label').classList.remove('is-open');
    }

  }, false);

  /* DROPDOWN LINK TOGGLE
  * ============================== */
  document.querySelectorAll('.content__form-dropdown a').forEach((val, idx) => {
    val.addEventListener('click', (ev) => {

      const el = ev.currentTarget;

      el.closest('label').classList.remove('is-open');
      document.querySelector('[contentForm2-input1-js]').value = el.innerText;
      document.querySelector('[contentForm2-input2-js]').style.display = 'flex';

    }, false);
  });

  /* FORM 3 INPUT
  * ============================== */
  document.querySelector('[contentForm2-input2-js] input').addEventListener('input', (ev) => {

    const el = ev.currentTarget;

    if(el.value.length > 2) {
      document.querySelector('.content__box-container').classList.add('is-show');
    } else {
      document.querySelector('.content__box-container').classList.remove('is-show');
    }

  }, false);

  /* BOX TOGGLE
  * ============================== */
  document.querySelectorAll('.content__box').forEach((val, idx) => {
    val.addEventListener('click', (ev) => {

      const el = ev.currentTarget;

      el.classList.toggle('is-active');

      document.querySelector('.content__box-header span').innerText = document.querySelectorAll('.content__box.is-active').length;

    }, false);
  });

}, false);


// EVENT LISTENER - SCROLL
// ========================================
window.addEventListener('scroll', (ev) => {}, false);
