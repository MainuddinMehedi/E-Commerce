import {
    allProductsData
} from "./data.js";

const proDetails = document.getElementById("prodetails")

const url = new URL(window.location.href)
const proId = url.search.split("=");
const itemIndex = proId[1];

// console.log(proId[1])

// console.log(proId.slice(-1))

// const extractId = proId.split("=");
// console.log(extractId[1]);


const clickedItem = allProductsData.at(itemIndex)

proDetailsImg(clickedItem)

function proDetailsImg(item) {
    const createProDetails = ` 
            <div class="single-pro-image">
                <img src="${item.imageUrl}" width="100%" id="mainImg" alt="">

                <div class="small-img-group">
                    <div class="small-img-col">
                        <img src="img/products/f1.jpg" width="100%" class="small-img" alt="">
                    </div>
                    <div class="small-img-col">
                        <img src="img/products/f2.jpg" width="100%" class="small-img" alt="">
                    </div>
                    <div class="small-img-col">
                        <img src="img/products/f3.jpg" width="100%" class="small-img" alt="">
                    </div>
                    <div class="small-img-col">
                        <img src="img/products/f4.jpg" width="100%" class="small-img" alt="">
                    </div>
                </div>
            </div>
            <div class="single-pro-details">
                <h6><a href="index.html">Home</a> / <a href="shop.html">Shop</a> / T-Shirt</h6>
                 <h4>Men's Fashion T Shirt</h4>
                <h2>$139.00</h2>
                <select>
                    <option>Select Size</option>
                    <option>XL</option>
                    <option>XXL</option>
                    <option>Small</option>
                    <option>Large</option>
                </select>
                <input type="number" value="1">
                <button class="normal">Add To Cart</button>
                <h4>product details</h4>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatem ullam labore expedita quasi quod velit soluta saepe. Amet, quam minus quibusdam quisquam ex ad temporibus numquam facere ducimus autem hic vitae. Id voluptatibus, soluta reprehenderit in sapiente neque, laudantium, hic temporibus sint quibusdam ea nulla assumenda nihil quia architecto!</span>
            </div>`

    proDetails.innerHTML = createProDetails;
}

//  script for image change on click
var mainImg = document.getElementById("mainImg");
var smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function () {
    mainImg.src = smallImg[0].src;
}
smallImg[1].onclick = function () {
    mainImg.src = smallImg[1].src;
}
smallImg[2].onclick = function () {
    mainImg.src = smallImg[2].src;
}
smallImg[3].onclick = function () {
    mainImg.src = smallImg[3].src;
}

// Featured products on the bottom
const proContainer = document.querySelector(".pro-container")
// console.log(proContainer)
const limitedCards = 4;

allProductsData.forEach((eachCardData, index) => {
    console.log(typeof index)
    if (index < limitedCards) {
        createCard(eachCardData);
    }
    // console.log(eachCardData)
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
    return proContainer.innerHTML += card;
}

// Click product card and show info
const productCards = document.querySelectorAll(".pro")
productCards.forEach((item, index) => item.addEventListener("click", () => {
    window.location.href = `/sproduct.html?productId=${index}`
}))