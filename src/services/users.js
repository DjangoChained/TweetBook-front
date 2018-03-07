import { doGet, doPut } from './api'
export default {
  getUserSettings: () =>
    doGet('user/settings').then(response => response.user),
  saveUserSettings: (first, last, birth, email, username, visibility) =>
    doPut('user/settings', {
      firstname: first, lastname: last, birthdate: birth, email: email, username: username, visibility: visibility
    }),
  changePassword: (currentp, newp) => doPut('user/password', { currentPassword: currentp, newPassword: newp })
}
