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
        Vue.http.headers.common['X-Session'] = response.sessionid
        return true
      })
  },
  logout: function () {
    return Vue.http.get('user/logout')
      .catch(response => Promise.reject(new Error(response.status > 100
        ? 'Une erreur de type ' + response.status + ' ' + response.statusText + " s'est produite."
        : "Une erreur réseau s'est produite. Réessayez ultérieurement."))
      )
      .then(response => response.json())
      .then(response => {
        if (response.status !== 'success') {
          return Promise.reject(new Error(response.message))
        }
        this.authenticated = false
        Vue.http.headers.common['X-Session'] = null
        return true
      })
  },
  register: function (firstname, lastname, birthdate, username, email, password) {
    return Vue.http.post('user/register', {
      'firstname': firstname,
      'lastname': lastname,
      'birthdate': birthdate,
      'username': username,
      'email': email,
      'password': password
    })
      .catch(response => Promise.reject(new Error(response.status > 100
        ? 'Une erreur de type ' + response.status + ' ' + response.statusText + " s'est produite."
        : "Une erreur réseau s'est produite. Réessayez ultérieurement."))
      )
      .then(response => response.json())
      .then(response => {
        if (response.status !== 'success') {
          return Promise.reject(new Error(response.message))
        }
        return true
      })
  }
}
