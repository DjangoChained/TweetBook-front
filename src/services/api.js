/* Contrôler le résultat d'une requête.
Si une erreur quelconque est rencontrée, renvoie directement le message d'erreur. */
export const checkError = function (json) {
  const promise = new Promise(function (resolve, reject) {
    if ((json || {}).status !== 'success') {
      reject((json || {}).message || 'Aucune donnée JSON reçue')
    } else {
      resolve(json)
    }
  })
  return promise
}

/* Afficher une erreur causée par une requête à l'utilisateur. */
export const guiError = function (app, message) {
  app.$data.modal_title = "Erreur lors d'une requête au serveur"
  app.$data.modal_content = message ? "Une erreur s'est produite lors d'une requête au serveur TweetBook : " + message : "Une erreur d'origine inconnue s'est produite lors d'une requête au serveur TweetBook. Veuillez réessayer ultérieurement. Si le problème persiste, contactez le support technique."
  app.$data.modal = true
  app.$data.loading = false
}
