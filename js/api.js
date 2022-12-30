import { mainUrl } from "./constants.js";

export async function  getCatalogFetch() {
    const mainFetch = await fetch(mainUrl + '/item')
    .then(response => response.json())
    return mainFetch;
};
    
export async function getDetailedFetch(id) {
    const detailedFetch = await fetch(mainUrl + '/item/' + id)
    .then(response => response.json())
    return detailedFetch;
};