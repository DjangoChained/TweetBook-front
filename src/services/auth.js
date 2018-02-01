export default {
  authenticated: false,
  login: function (username, password) {
    this.authenticated = true
    return this.authenticated
  },
  logout: function () {
    this.authenticated = false
    return true
  }
}
