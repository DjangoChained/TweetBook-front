import { doGet, doPost, doDelete } from './api'
export const sendText = content => doPost('wall', {'type': 'text', 'content': content})
export const sendLink = (content, url, title) =>
  doPost('wall', {'type': 'link', 'content': content, 'url': url, 'title': title})
export const getWall = () => doGet('wall')
export const getFeed = () => doGet('feed')
export const get = id => doGet('post?id=' + id)
export const sendReaction = (id, type) => doPost('reaction', {'reaction': type, 'id_post': id})
export const removeReaction = id => doDelete('reaction', {'id_post': id})
