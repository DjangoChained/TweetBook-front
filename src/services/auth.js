import Vue from 'vue'

export default {
  authenticated: false,
  login: function (email, password) {
    return Vue.http.post('user/login', {'email': email, 'password': password})
      .catch(response => Promise.reject(new Error(response.status > 100
        ? 'Une erreur de type ' + response.status + ' ' + response.statusText + " s'est produite."
        : "Une erreur réseau s'est produite. Réessayez ultérieurement."))
      )
      .then(response => response.json())
      .then(response => {
        if (response.status !== 'success') {
          return Promise.reject(new Error(response.message))
        }
        this.authenticated = true
        return true
      })
  },
  logout: function () {
    return Vue.http.post('user/logout')
      .catch(response => Promise.reject(new Error(response.status > 100
        ? 'Une erreur de type ' + response.status + ' ' + response.statusText + " s'est produite."
        : "Une erreur réseau s'est produite. Réessayez ultérieurement."))
      )
      .then(response => response.json())
      .then(response => {
        if (response.status !== 'success') {
          return Promise.reject(response.data.message)
        }
        this.authenticated = false
        return true
      })
  }
}
