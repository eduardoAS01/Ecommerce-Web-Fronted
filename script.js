
async function getProducts() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log(data.products)
    return data.products;
}

function renderProducts(products){

    const list = document.querySelector(".products-list");

    products.forEach(product => {
        const li = document.createElement("li");
        li.classList.add("card")
        li.innerHTML += createProductCard(product)
        list.appendChild(li)
    });
}

function createProductCard(product){
    return `
        <img src="${product.thumbnail}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>$${product.price}</p>
        <p>⭐ ${product.rating}</p>
        <button class="btn-add-cart">Add</button>
        `
}

window.addEventListener("DOMContentLoaded",async () => {
    const products = await getProducts();
    renderProducts(products);
})

