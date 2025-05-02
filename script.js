const container = document.querySelector('.container');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.loginBtn');
const closeIcon = document.querySelector('.iconClose');


registerLink.addEventListener('click', () => {
    container.classList.add('active');
});

loginLink.addEventListener('click', () => {
    container.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    container.classList.add('active-popup');
});

closeIcon.addEventListener('click', () => {
    container.classList.remove('active-popup');
});