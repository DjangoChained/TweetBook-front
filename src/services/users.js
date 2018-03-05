import { doGet } from './api'
export default {
  getUserRealName: id =>
    doGet('user?id=' + id).then(response => {
      return response.user.firstName + ' ' + response.user.lastName
    }, message => {
      return null
    })
}
