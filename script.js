function addToCart(name, price){

let cart = JSON.parse(localStorage.getItem("cart")) || [];


cart.push({

name:name,
price:Number(price.replace("$",""))

});


localStorage.setItem("cart", JSON.stringify(cart));


alert(name + " added to cart 🛒");

}