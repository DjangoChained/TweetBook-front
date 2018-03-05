import { doGet } from './api'
export default {
  search: query => doGet('friends/search?q=' + query)
}
