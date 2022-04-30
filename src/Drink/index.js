import { Layer } from '../Layer/index.js';
import './style.css';

export const Drink = (props) => {
  const { id, name, ordered, layers, image } = props;

  const drinkElm = document.createElement('div');
  drinkElm.classList.add('drink');
  drinkElm.innerHTML += `
  <div class="drink__product">
    <div class="drink__cup">
      <img
      src="${image}"
      />
    </div>
    <div class="drink__info">
      <h3>${name}</h3>
  </div>
</div>
<div class="drink__controls">
  <button class="order-btn">Objednat</button>
</div>`;

  const drinkInfo = drinkElm.querySelector('.drink__info');
  for (let i = 0; i < layers.length; i++) {
    drinkInfo.appendChild(Layer(layers[i]));
  }
  return drinkElm;
};

// Objednávání před vlastní DOM//

/*const orderBtnElm = drinkElm.querySelector('.order-btn');
let ordered = false;

const orderCoffee = () => {
  if (!ordered) {
    orderBtnElm.textContent = 'Zrušit';
    drinkElm.querySelector('.drink__cup').classList.add('drink__cup--selected');
    orderBtnElm.addEventListener('click', orderCoffee);
    ordered = true;
  } else {
    orderBtnElm.textContent = 'Objednat';
    drinkElm
      .querySelector('.drink__cup')
      .classList.remove('drink__cup--selected');
    ordered = false;
  }
}; */
