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

// (4) Objednávání

const orderBtnElm = document.querySelector('.order-btn');
const ordered = () => {
  if (orderBtnElm.textContent === 'Objednat') {
    orderBtnElm.textContent = 'Zrušit';
  } else if (orderBtnElm.textContent === 'Zrušit') {
    orderBtnElm.textContent = 'Objednat';
  }
  document
    .querySelector('.drink__cup')
    .classList.toggle('drink__cup--selected');
};

orderBtnElm.addEventListener('click', ordered);

/*const unordered = () => {
  orderBtnElm.textContent = 'Objednat';
  document
    .querySelector('.drink__cup')
    .classList.remove('drink__cup--selected');
};

if (ordered === true) {
  orderBtnElm.addEventListener('click', unordered);
}
if (ordered === false) {
  orderBtnElm.addEventListener('click', ordered);
} */
