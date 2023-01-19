import {mainUrl} from "./constants.js";
import {showModal} from './modalWindow.js'
import axios, {AxiosError} from 'axios';

const httpClient = axios.create({
    baseURL: mainUrl
});

httpClient.interceptors.response.use(function (response) {
    return (response);
}, function (error) {
    return Promise.reject(showModal(error));
})

export async function getCatalogFetch() {
    const mainFetch = await httpClient.get( '/item/')
        .then(res => res.data);
    return mainFetch;
}

export async function getDetailedFetch(id) {
    const detailedFetch = await httpClient.get( '/item/' + id)
        .then(res => res.data)
    return detailedFetch;
};

