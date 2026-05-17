import {addToCart} from "./storage.js"

export function renderProducts(products,ul_name_class){

    const list = document.querySelector(ul_name_class);

    

    products.forEach(product => {
        const li = document.createElement("li");
        li.classList.add("card")
        li.innerHTML += createProductCard(product)

        const button = li.querySelector("button")

        button.addEventListener("click",() => {
            addToCart(product)
        })

        list.appendChild(li)
    });

    console.log("Renderizado de productos completo")
}

export function createProductCard(product){
    return `
        <img src="${product.thumbnail}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>$${product.price}</p>
        <p>⭐ ${product.rating}</p>
        <button class="btn-add-cart">Add</button>
        `
}





