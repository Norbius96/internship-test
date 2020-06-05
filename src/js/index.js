/* Here goes your JS code */

const clickMe = document.getElementById('show-popup-form');
const popup = document.querySelector('#popup');



clickMe.addEventListener('click', () => showPopup());

const showPopup = () => {
    clickMe.style.display = 'none';
    popup.style.display = 'inline';
}


const close = document.querySelector('#close');

close.addEventListener('click', () => {
    popup.style.display = 'none';
    clickMe.style.display = 'inline';
});



const form = document.querySelector('form');
const popupContainer = document.querySelector('.popup-container');
const mail = document.querySelector('#mail');
const password = document.querySelector('#password');
const checkbox = document.querySelector('#terms');
const submitButton = document.querySelector('#submit');

form.addEventListener('submit', (e) => validationForm(e));

const validationForm = (e) => {
    e.preventDefault();
    if (mail.value === '' || password.value === '' || checkbox.checked === false) {
        popupContainer.classList.add('shake');
        setTimeout(() => {
            popupContainer.classList.remove('shake');
        }, 1000);
    } else {
        setTimeout(() => {
            mail.value = "";
            password.value = "";
            checkbox.checked = false;
            popup.style.display = 'none';
            clickMe.innerHTML = 'Thank you!';
            clickMe.style.display = 'inline';
        }, 3000)
    }

}


