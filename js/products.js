import { renderProducts } from "./app.js";

async function getProducts() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log(data.products)
    return data.products;
}


window.addEventListener("DOMContentLoaded",async () => {
    const products = await getProducts();
    renderProducts(products,".products-list");
})