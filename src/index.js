import './style.css';
import './Layer/style.css';
import './Drink/style.css';

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

// Moje verze
/*const orderBtnElm = document.querySelector('.order-btn');
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

orderBtnElm.addEventListener('click', orderCoffee); */

// "Správná" verze (s proměnnou ordered pro pozdější použití v komponentách)

/*const orderBtnElm = document.querySelector('.order-btn');
let ordered = false;

const orderCoffee = () => {
  if (!ordered) {
    orderBtnElm.textContent = 'Zrušit';
    document.querySelector('.drink__cup').classList.add('drink__cup--selected');
    orderBtnElm.addEventListener('click', orderCoffee);
    ordered = true;
  } else {
    orderBtnElm.textContent = 'Objednat';
    document
      .querySelector('.drink__cup')
      .classList.remove('drink__cup--selected');
    ordered = false;
  }
}; */
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
/*import { Layer } from './Layer/index.js';

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



// (c) Třetí fáze

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

//appendChild

//for cyklus
const drinkInfoElm = document.querySelector('.drink__info');
for (let i = 0; i < layers.length; i++) {
  drinkInfoElm.appendChild(layerElm[i]);
} 

//forEach
const drinkInfoElm = document.querySelector(".drink__info")
layers.forEach((layer) => {
  drinkInfoElm.appendChild(Layer(layer))
})
*/

// (d) Čtvrtá fáze

import { Drink } from './Drink/index.js';

const drinks = [
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    ordered: false,
    layers: [
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
    ],
    image: 'https://apps.kodim.cz/daweb/cafelora/assets/cups/cappuccino.png',
  },
  {
    id: 'romano',
    name: 'Romano',
    ordered: false,
    layers: [
      {
        color: '#fbdf5b',
        label: 'citrón',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
    image: 'https://apps.kodim.cz/daweb/cafelora/assets/cups/romano.png',
  },
];
const drinksList = document.querySelector('.drinks-list');
for (let i = 0; i < drinks.length; i++) {
  drinksList.appendChild(Drink(drinks[i]));
}
