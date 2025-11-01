let closeCart = document.querySelector(".close-cart");
let ShoppingCart = document.getElementById("Shopping-cart");
let cartOpen = document.querySelector(".cart");

cartOpen.onclick = () => {
  ShoppingCart.classList.add("open");
};

closeCart.onclick = () => {
  ShoppingCart.classList.remove("open");
};
