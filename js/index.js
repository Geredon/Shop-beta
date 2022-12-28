import { getCatalogFetch, getDetailedFetch } from "./api.js";
import { renderCataloc,renderDetailed } from "./render-pages.js";

let currentURL = location.pathname.split('/').pop();

let data;
async function init() {
    switch(currentURL) {
        case 'index.html':
            let res = await getCatalogFetch();
            data = res.content;
            renderCataloc(data);
            createSearch(data);
            break;
        case 'detailed-page.html' :
            let response = await getDetailedFetch();
            data = response.content;
            renderDetailed(data);
            break;
    }      
};

init();

function createSearch() {
    let inputSearch = document.querySelector(".input-search").oninput = function () {
        let val = this.value.trim();
        let productsItem = document.querySelectorAll(".products-item li")
        
        if(val != '') {
            productsItem.forEach(function(elem) {
                if(elem.innerText.search((RegExp("\^"+ val,"i"))) == -1) {
                    elem.classList.add("hide")
                }
                else {
                    elem.classList.remove("hide")
                }
            });
        }
        else {
            productsItem.forEach(function(elem) {
                elem.classList.remove("hide")
            });
        }
    }
};
