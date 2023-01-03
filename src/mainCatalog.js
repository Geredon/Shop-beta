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
    onchange =  debounce(search, 2000)
    let inputSearch = document.querySelector(".input-search").addEventListener('keyup', onchange )

    function search(e) {
        let productsItem = document.querySelectorAll(".products-item li")
        let val = e.target.value;
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

const debounce = ( fn, ms ) => {     
    let timeout;
    return function() {
       const fnCall = () => {fn.apply(this, arguments)}
        clearTimeout(timeout);
        timeout = setTimeout(fnCall, ms)
    }
}
