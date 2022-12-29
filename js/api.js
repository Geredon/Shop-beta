import { mainUrl } from "./url.js";

export async function  getCatalogFetch() {
    const mainFetch = await fetch('http://127.0.0.1:3006/item')
    .then(response => response.json())
    return mainFetch;
};
    
export async function getDetailedFetch(id) {
    const detailedFetch = await fetch(mainUrl + '/item/' + id)
    .then(response => response.json())
    return detailedFetch;
};