let counter = 0;
let cart = [];
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const cartCount = document.getElementById('cartCount');

minus.addEventListener('click', () => {
  counter--;

  if(counter === -1) {
    counter = 0;
  }
  document.getElementById('noItems').innerHTML = counter;
  cartCount.innerHTML = counter;
});

plus.addEventListener('click', () => {
    counter++;
    document.getElementById('noItems').innerHTML = counter;
    cartCount.innerHTML = counter;
})