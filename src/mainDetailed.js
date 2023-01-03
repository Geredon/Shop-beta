import { getDetailedFetch } from "./api.js";
import { renderDetailed } from "./render-pages.js";
import './css/detailed.css'

let url = new URL(location.href);

async function initDetailed() {
    const response = await getDetailedFetch(url.searchParams.get("id"));
    let dataDetailed = response.content;
    renderDetailed(dataDetailed);
}

initDetailed()