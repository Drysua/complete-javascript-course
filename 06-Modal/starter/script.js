'use strict';


const buttonArray = document.querySelectorAll('.show-modal');
const closeBtn = document.querySelector('.close-modal')
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

function showModal() {
    if (modal.classList.contains('hidden')) modal.classList.remove('hidden');
    if (overlay.classList.contains('hidden')) overlay.classList.remove('hidden');
}

function closeModal() {
    if (!modal.classList.contains('hidden')) modal.classList.add('hidden');
    if (!overlay.classList.contains('hidden')) overlay.classList.add('hidden');
}

for(let i = 0; i < buttonArray.length; i++) {
    buttonArray[i].addEventListener('click', showModal);
}

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
    if (event.key == 'Escape') closeModal();
});
