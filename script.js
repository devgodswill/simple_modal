'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const btnShow = document.querySelectorAll('.show-modal');
for (let i = 0; i < btnShow.length; i++)
    btnShow[i].addEventListener('click', function () {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });

btnClose.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});

overlay.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        if (!modal.classList.contains('hidden') && !overlay.classList.contains('hidden')) {
            modal.classList.add('hidden');
            overlay.classList.add('hidden');
        }
    }
});