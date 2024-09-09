let counter = 0
let cart = []
const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const cartCount = document.getElementById("cartCount")
const addBtn = document.getElementById("addBtn")
const showCart = document.getElementById("cartImg")
const modal = document.getElementById("cartModal")
const purchased = document.getElementById("purchased")
const empty = document.getElementById("empty")
const chckbtn = document.getElementById("chckbtn")
const itemParagraph = document.querySelector('#item p');

const addToCart = () => {
  minus.addEventListener("click", () => {
    counter--

    if (counter === -1) {
      counter = 0
    }
    document.getElementById("noItems").innerHTML = counter
    cartCount.innerHTML = counter
  })

  plus.addEventListener("click", () => {
    counter++
    document.getElementById("noItems").innerHTML = counter
    cartCount.innerHTML = counter
  })

  addBtn.addEventListener("click", () => {
    cart.push(counter)
    if(cart.length > 1) {
      cart.shift()
    }

    if(counter > 0) {
      cartCount.style.display = "flex"
    }

    if(cart.length > 0) {
      empty.style.display = "none"
      purchased.style.display = "flex"
      chckbtn.style.display = "block"
    }
    console.log(cart)
    itemParagraph.textContent = `${cart[0]} x $125.00`;})
  }

  showCart.addEventListener("click", () => {
    modal.style.display = "flex"
  })
addToCart()