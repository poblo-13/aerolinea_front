
const baseApi = import.meta.env.BASE_URL

export const API_ENDPOINTS = {
    destinos: `${baseApi}api/destinos`,
    graphql: `${baseApi}graphql`,
    worker: `${baseApi}mockServiceWorker.js`,
}
