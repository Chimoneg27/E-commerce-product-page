let counter = 0;
let cart = [];
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');

minus.addEventListener('click', () => {
  counter--;
  document.getElementById('noItems').innerHTML = counter;
});

plus.addEventListener('click', () => {
    counter++;
    document.getElementById('noItems').innerHTML = counter;
})