import Vue from 'vue'

/* Contrôler le résultat d'une requête.
Si une erreur quelconque est rencontrée, renvoie directement le message d'erreur. */
export const checkError = promise =>
  promise
    .catch(response => Promise.reject(new Error(response.status > 100
      ? 'Une erreur de type ' + response.status + ' ' + response.statusText + " s'est produite."
      : "Une erreur réseau s'est produite. Réessayez ultérieurement."))
    )
    .then(response => response.json())
    .then(response => {
      if (response.status !== 'success') {
        return Promise.reject(new Error(response.message))
      } else return response
    })

export const doGet = (url, params) => checkError(Vue.http.get(url, { body: params }))
export const doPost = (url, params) => checkError(Vue.http.post(url, params))
export const doPut = (url, params) => checkError(Vue.http.put(url, params))
export const doDelete = (url, params) => checkError(Vue.http.delete(url, { body: params }))
