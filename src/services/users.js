import App from '@/App'
import { checkError } from './api'
export default {
  getUserRealName: function (id) {
    return App.$http.get('user?id=' + id).then(checkError).then(response => {
      return response.user.firstName + ' ' + response.user.lastName
    }, message => {
      return null
    })
  }
}
