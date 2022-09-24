'use strict';

const modalEl = document.querySelector('.modal');
const overlayEl = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');
const showBtns = document.querySelectorAll('.show-modal');

const hideModal = () => {
  modalEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
};

const showModal = () => {
  modalEl.classList.remove('hidden');
  overlayEl.classList.remove('hidden');
};

for (let i = 0; i < showBtns.length; i++) {
  showBtns[i].addEventListener('click', showModal);
}

closeBtn.addEventListener('click', hideModal);

overlayEl.addEventListener('click', hideModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
    hideModal();
  }
});
