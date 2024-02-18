const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
// this is use for button
const btnPopup = document.querySelector('.btnLogin-popup');
// this is use for close icon
const iconClose= document.querySelector('.icon-close');
// this part is manage the layout place registerlink and login link
registerLink.addEventListener('click', () => {
  wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
  wrapper.classList.remove('active');
});
// this part is manage the button 

btnPopup.addEventListener('click', () => {
  wrapper.classList.add('active-popup');
});

// this manage the close icon
iconClose.addEventListener('click', () => {
  wrapper.classList.remove('active-popup');
});
