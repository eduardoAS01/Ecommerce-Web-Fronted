import {renderProducts} from "./app.js"

let cart = JSON.parse(localStorage.getItem("cart") || "[]")

window.addEventListener("DOMContentLoaded",() => {
    renderProducts(cart,".cart-list");
})


