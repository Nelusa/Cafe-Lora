import './style.css';

console.log('funguju!');

// (3) Zprovoznění navigace
const navBtnElm = document.querySelector('#nav-btn');
navBtnElm.addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('nav-closed');
});

const selectSection = () => {
  document.querySelector('nav').classList.toggle('nav-closed');
};
const sections = document.querySelectorAll('.nav-closed a');
for (let i = 0; i < sections.length; i++) {
  sections[i].addEventListener('click', selectSection);
}
