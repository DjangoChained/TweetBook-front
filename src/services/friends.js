import { doGet, doPost, doDelete } from './api'
export default {
  get: () => doGet('friends'),
  search: query => doGet('friends/search?q=' + query),
  add: id => doPost('friends', { 'id_friend': id }),
  remove: id => doDelete('friends', { 'id_friend': id })
}
