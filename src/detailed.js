import { getDetailedFetch } from "./api.js";
import './css/detailed.css';


let url = new URL(location.href);

async function initDetailed() {
    const response = await getDetailedFetch(url.searchParams.get("id"));
    let dataDetailed = response.content;
    renderDetailed(dataDetailed);
}

initDetailed()
function renderDetailed(dataDetailed) {
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