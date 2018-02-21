import App from '@/App'
export default {
  getUserRealName: function (id) {
    return App.$http.get('user?id=' + id).then(response => {
      if (response.body.status !== 'success') {
        return 'Erreur'
      }
      return response.user.firstName + ' ' + response.user.lastName
    })
  }
}
