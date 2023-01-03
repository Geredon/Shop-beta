import { getCatalogFetch } from "./api.js";
import { renderCataloc } from "./render-pages.js";
import './css/catalog.css';

async function initCatalog() {
    const res = await getCatalogFetch();
    let dataCatalog = res.content;
    renderCataloc(dataCatalog);
    createSearch(dataCatalog);
};

initCatalog();

function createSearch() {
    let inputSearch = document.querySelector(".input-search").oninput = function () {
        let val = this.value.trim();
        let productsItem = document.querySelectorAll(".products-item li")
        
        if(val !== '') {
            productsItem.forEach(function(elem) {
                if(elem.innerText.search((RegExp("\^"+ val,"i"))) === -1) {
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