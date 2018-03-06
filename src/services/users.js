import { doGet, doPut } from './api'
export default {
  getUserRealName: id =>
    doGet('user?id=' + id).then(response => {
      return response.user.firstName + ' ' + response.user.lastName
    }, message => {
      return null
    }),
  getUserSettings: () =>
    doGet('user/settings').then(response => response.user),
  saveUserSettings: (first, last, birth, email, visibility) =>
    doPut('user/settings', {
      firstname: first, lastname: last, birthdate: birth, email: email, visibility: visibility
    }),
  changePassword: (currentp, newp) => doPut('user/password', { currentPassword: currentp, newPassword: newp })
}
