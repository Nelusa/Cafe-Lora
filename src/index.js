import './style.css';
import './Layer/style.css';

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
const orderCoffee = () => {
  if (orderBtnElm.textContent === 'Objednat') {
    orderBtnElm.textContent = 'Zrušit';
  } else if (orderBtnElm.textContent === 'Zrušit') {
    orderBtnElm.textContent = 'Objednat';
  }
  document
    .querySelector('.drink__cup')
    .classList.toggle('drink__cup--selected');
};

orderBtnElm.addEventListener('click', orderCoffee);

// (5) Komponenty

// (a) základní verze
/*const layer1 = {
  color: '#feeeca',
  label: 'mléčná pěna',
};
const layer2 = {
  color: '#fed7b0',
  label: 'teplé mléko',
};
const layer3 = {
  color: '#613916',
  label: 'espresso',
};

const Layer = (props) => {
  const { color, label } = props;

  return `
<div class="layer">
<div class="layer__color" style="background-color: ${color}"></div>
<div class="layer__label">${label}</div>
</div>
`;
}; 

const layerElm = document.querySelector('.drink__info');
layerElm.innerHTML += Layer(layer1);
layerElm.innerHTML += Layer(layer2);
layerElm.innerHTML += Layer(layer3); */

// (b) druhá fáze
import { Layer } from './Layer/index.js';

const layers = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  },
];

const layerElm = document.querySelector('.drink__info');
for (let i = 0; i < layers.length; i++) {
  layerElm.innerHTML += Layer(layers[i]);
}
