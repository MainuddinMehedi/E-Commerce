import {
    allProductsData
} from "./data.js";

// Hambarger Menu | Toggle Nav Menu
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add('active')
    })
}

if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove('active')
    })
}

// End

// Set data | in each product container of different pages
const proCardsContainer = document.querySelectorAll(".pro-container")

proCardsContainer.forEach(eachContainer => {
    // allProductsData data is imported on the top
    allProductsData.forEach(eachCardData => {
        createCard(eachCardData);
    })

    function createCard(eachCard) {
        const card = `<div class="pro">
                        <img src="${eachCard.imageUrl}"> 

                        <div class="des">
                            <span>${eachCard.brand}</span>
                            <h5>${eachCard.title}</h5>
                            <div class="star">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <h4>$${eachCard.price}</h4>
                        </div>
                        <a href="#"><i class="fal fa-shopping-cart"></i></a>
                    </div>`;
        return eachContainer.innerHTML += card;
    }
})

// End


const productCards = document.querySelectorAll(".pro")

productCards.forEach((item, index) => item.addEventListener("click", () => {
    window.location.href = `/sproduct.html?productId=${index}`
}))

// productCards.addEventListener("click", () => {
//     console.log("clicked")
// })