import { mainUrl } from "./constants.js";
import { startModale } from './modalWindow.js'
import axios, { AxiosError } from 'axios';

export async function getCatalogFetch() {
    const mainFetch = await axios.get(mainUrl + '/item')
        .then(res => {
            if(res.status === 200) {
                return res.data;
            }  else {
                throw new Error("Произошла ошибка!")
            }
        })
        .catch((err) => startModale(err));
    return mainFetch;
}

export async function getDetailedFetch(id) {
    const detailedFetch = await axios.get(mainUrl + '/item/' + id)
        .then(res => {
            if(res.status === 200) {
                return res.data;
            }  else {
                throw new Error("Произошла ошибка!")
            }
        })
        .catch((err) => startModale(err));
    return detailedFetch;
};

