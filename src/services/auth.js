import { doGet, doPost } from '@/services/api'

export default {
  authenticated: false,
  login: function (email, password) {
    return doPost('user/login', {'email': email, 'password': password})
      .then(response => {
        this.authenticated = true
        return response
      })
  },
  logout: function () {
    return doGet('user/logout')
      .then(response => {
        this.authenticated = false
        return response
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
