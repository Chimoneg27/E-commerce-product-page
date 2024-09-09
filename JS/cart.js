let counter = 0;
let cart = [];
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const cartCount = document.getElementById('cartCount');
const addBtn = document.getElementById('addBtn');
const showCart = document.getElementById('cartImg');
const modal = document.getElementById('cartModal');

const addToCart = (item) => {
    cart.push(item);
}

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
    
    addBtn.addEventListener('click', () => {
        addToCart(counter);
    })
    console.log(cart);
    cartCount.innerHTML = counter;
})

showCart.addEventListener('click', () => {
    modal.style.display = 'flex';
})