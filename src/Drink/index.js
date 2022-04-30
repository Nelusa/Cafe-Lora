import { Layer } from '../Layer/index.js';
import './style.css';

export const Drink = (props) => {
  let { id, name, ordered, layers, image } = props;

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

</div>`;

  // Objednávání přes vlastní DOM element

  //vytvoření order btn
  const orderButton = document.createElement('button');
  orderButton.classList.add('order-btn');
  orderButton.textContent += 'Objednat';

  drinkElm.querySelector('.drink__controls').appendChild(orderButton);

  // Objednávání
  ordered = false;
  const orderBtnElm = drinkElm.querySelector('.order-btn');
  orderBtnElm.addEventListener('click', () => {
    const drinkCupElm = drinkElm.querySelector('.drink__cup');
    if (!ordered) {
      orderBtnElm.textContent = 'Zrušit';
      drinkCupElm.classList.add('drink__cup--selected');
      ordered = true;
    } else {
      orderBtnElm.textContent = 'Objednat';
      drinkCupElm.classList.remove('drink__cup--selected');
      ordered = false;
    }
  });

  console.log(orderBtnElm);

  const drinkInfo = drinkElm.querySelector('.drink__info');
  for (let i = 0; i < layers.length; i++) {
    drinkInfo.appendChild(Layer(layers[i]));
  }

  return drinkElm;
};
