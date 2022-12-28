import { mainUrl } from "./url.js";

export function renderCataloc(data) {
    let productsItem = document.querySelector(".products-item");
    productsItem.innerHTML +=
        data.map(content => 
            `
            <li class="product">
                <a target="_blank" href="detailed-page.html"  class="product-link">
                    <div class="product-favorite">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="#none"/>
                        </svg>
                    </div>
                    <div class="product-img">
                        <div class="wrapper-img">
                            <img src="${pathImgProducts()}" alt="product-img">
                        </div>
                    </div>
                    <p class="product-title">
                       ${content.name}
                    </p>
                    <p class="product-price">
                        ${content.price.currency} ${Math.floor(content.price.value)}
                    </p>
                </a>
            </li>
            `
        ).join(" ")
        
}

function pathImgProducts() {
    let pathUrl = mainUrl + "picture/min/:pictureld/"
    return pathUrl;
}

export function renderDetailed(data) {
    let cartPrice = document.querySelector(".cart-price");
    let detailedProduct =document.querySelector(".detailed-product");
    let detailedDescription = document.querySelector(".detailed-description");
    detailedProduct.innerHTML +=
        `
        <h3 class="detailes-name">${data.name}</h3>
        <p>${data.description} ${data.info}</p>
        `
    cartPrice.innerHTML +=
        `
        <p>${data.price.currency}${data.price.value}</p>
        `
    detailedDescription.innerHTML +=
        `
        <h5>Details</h5>
        <p>${data.details}</p>
        `     
}