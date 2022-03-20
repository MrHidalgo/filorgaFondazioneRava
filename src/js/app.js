import Common from "./common/common";


// EVENT LISTENER - LOAD
// ========================================
window.addEventListener('load', (ev) => {

  // COMMON
  Common.initLoad();

  // MACROS
  /* FORM 1 INPUT
  * ============================== */
  if(document.querySelector('[contentForm1-input-js]')) {
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
  }

  if(document.querySelector('[contentForm1-btn-js]')) {
    document.querySelector('[contentForm1-btn-js]').addEventListener('click', (ev) => {

      document.querySelector('.content__wrapper-1').style.display = 'none';
      document.querySelector('.content__wrapper-2').style.display = 'block';

      document.querySelector('#welcomePart1').style.display = 'none';
      document.querySelector('#welcomePart3').style.display = 'none';
      document.querySelector('#welcomePart2').style.display = 'block';
      document.querySelector('#welcomePart4').style.display = 'block';

    }, false);
  }

  /* FORM 2 INPUT
  * ============================== */
  if(document.querySelector('[contentForm2-input1-js]')) {
    document.querySelector('[contentForm2-input1-js]').addEventListener('input', (ev) => {

      const el = ev.currentTarget;

      if(el.value.length > 2) {
        el.closest('label').classList.add('is-open');
      } else {
        el.closest('label').classList.remove('is-open');
      }

    }, false);
  }

  /* DROPDOWN LINK TOGGLE
  * ============================== */
  if(document.querySelector('.content__form-dropdown a')) {
    document.querySelectorAll('.content__form-dropdown a').forEach((val, idx) => {
      val.addEventListener('click', (ev) => {

        const el = ev.currentTarget;

        el.closest('label').classList.remove('is-open');
        document.querySelector('[contentForm2-input1-js]').value = el.innerText;
        document.querySelector('[contentForm2-input2-js]').style.display = 'flex';

      }, false);
    });
  }

  /* FORM 3 INPUT
  * ============================== */
  if(document.querySelector('[contentForm2-input2-js] input')) {
    document.querySelector('[contentForm2-input2-js] input').addEventListener('input', (ev) => {

      const el = ev.currentTarget;

      if(el.value.length > 2) {
        document.querySelector('.content__box-container').classList.add('is-show');
      } else {
        document.querySelector('.content__box-container').classList.remove('is-show');
      }

    }, false);
  }

  /* BOX TOGGLE
  * ============================== */
  document.addEventListener('click', (ev) => {
    if(ev.target.closest('.content__box')) {
      const el = ev.target.closest('.content__box');

      el.classList.toggle('is-active');

      document.querySelector('.content__box-header span').innerText = document.querySelectorAll('.content__box.is-active').length;

      if(document.querySelectorAll('.content__box.is-active').length >= 1) {
        document.querySelector('.content__wrapper-3').style.display = 'block';
      } else {
        document.querySelector('.content__wrapper-3').style.display = 'none';
      }

      ev.preventDefault();

    }
  }, false);

  if(document.querySelector('.content__box-btn a')) {
    document.querySelector('.content__box-btn a').addEventListener('click', (ev) => {
      const boxTMP = (title, desc, num) => `
      <div>
         <a class="content__box" href="#">
          <p class="content__box-title">${title}</p>
          <p class="content__box-desc">${desc}</p>
          <p class="content__box-num">${num}</p>
        </a>
      </div>`;

      const boxParentNode = document.querySelector('.content__box-wrapper');

      for(let i = 0; i < 5; i++) {
        boxParentNode.innerHTML += boxTMP('MARIONNAUD', 'C.C. ANTEGNATE VIA DEL COMMERCIO 3 ( S.S. 11 VIA PER MILANO), 13011 ANTEGNATE', '02 123456789');
      }

      ev.currentTarget.closest('.content__box-btn').style.display = 'none';

    }, false);
  }

  /* MAIN FORM */
  if(document.querySelector('.content__mail-form')) {
    document.querySelector('[email-input-js]').addEventListener('input', (ev) => {
      const btnSubmit = document.querySelector('[email-btn-js]'),
        checkbox1 = document.querySelector('[checkbox1-js]'),
        checkbox2 = document.querySelector('[checkbox2-js]');

      if(ev.currentTarget.checkValidity()) {
        if(checkbox1.checked && checkbox2.checked) {
          btnSubmit.removeAttribute('disabled');
        }
      } else {
        btnSubmit.setAttribute('disabled', true);
      }
    }, false);
    document.querySelector('.content__mail-form').addEventListener('change', (ev) => {
      const checkbox1 = document.querySelector('[checkbox1-js]'),
        checkbox2 = document.querySelector('[checkbox2-js]'),
        btnSubmit = document.querySelector('[email-btn-js]');

      if(checkbox1.checked && checkbox2.checked && ev.currentTarget.checkValidity()) {
        btnSubmit.removeAttribute('disabled');
      } else {
        btnSubmit.setAttribute('disabled', true);
      }

    });
    document.querySelector('[email-btn-js]').addEventListener('click', (ev) => {
      ev.preventDefault();
      window.location = '/thanks.html';
      return false;
    }, false);
  }

}, false);


// EVENT LISTENER - SCROLL
// ========================================
window.addEventListener('scroll', (ev) => {}, false);
