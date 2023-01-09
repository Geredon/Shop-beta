import { mainUrl } from "./constants.js";

export function renderCataloc(dataCatalog) {
    let productsItem = document.querySelector(".products-item");
    productsItem.innerHTML +=
    dataCatalog.map(content => 
            `
            <li class="product">
                <a target="_blank" href="detailed-page.html?id=${content.id}"  class="product-link">
                    <div class="product-favorite">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="#none"/>
                        </svg>
                    </div>
                    <div class="product-img">
                        <div class="wrapper-img">
                            <img src="${mainUrl}${content.picture.path}" alt="${content.picture.alt}">
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
};

export function renderDetailed(dataDetailed) {
    let cardPrice = document.querySelector(".card-price");
    let detailedProduct =document.querySelector(".detailed-product");
    let detailedDescription = document.querySelector(".detailed-description");
    detailedProduct.innerHTML +=
        `
        <h3 class="detailes-name">${dataDetailed.name}</h3>
        <p>${dataDetailed.description} ${dataDetailed.info}</p>
        `
    cardPrice.innerHTML +=
        `
        <p>${dataDetailed.price.currency}${dataDetailed.price.value}</p>
        `
    detailedDescription.innerHTML +=
        `
        <h5>Details</h5>
        <p>${dataDetailed.details}</p>
        `     
};