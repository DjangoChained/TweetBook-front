import Vue from 'vue'
import { doGet, doPost } from '@/services/api'

export default {
  authenticated: false,
  login: function (email, password) {
    return doPost('user/login', {'email': email, 'password': password})
      .then(response => {
        this.authenticated = true
        Vue.http.headers.common['X-Session'] = response.sessionid
        return true
      })
  },
  logout: function () {
    return doGet('user/logout')
      .then(response => {
        this.authenticated = false
        Vue.http.headers.common['X-Session'] = null
        return true
      })
  },
  register: function (firstname, lastname, birthdate, username, email, password) {
    return doPost('user/register', {
      'firstname': firstname,
      'lastname': lastname,
      'birthdate': birthdate,
      'username': username,
      'email': email,
      'password': password
    }).then(response => true)
  }
}
