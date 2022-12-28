
export async function  getCatalogFetch() {
    const mainFetch = await fetch('http://127.0.0.1:3006/item')
    .then(response => response.json())
    return mainFetch;
};

export async function getDetailedFetch() {
    const detailedFetch = await fetch('http://127.0.0.1:3006/item/:itemld')
    .then(response => response.json())
    return detailedFetch;
};