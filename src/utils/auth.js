import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'
const UserIdKey = 'userId'

export function getToken() {
  return Cookies.get(TokenKey)
}
// 取id
export function getUserId() {
  return Cookies.get(UserIdKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}
// 存id
export function setUserId(userId) {
  return Cookies.set(UserIdKey, userId)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
// 删除id
export function removeUserId() {
  return Cookies.remove(UserIdKey)
}
