import request from '@/utils/request'

// 登录接口
// http://120.48.48.64:8089/api/user/login
export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data,
  })
}
// 获取token   id
export function getInfo(userId) {
  return request({
    url: 'user/getInfo',
    method: 'get',
    params: { userId },
  })
}
// 获取投诉数据
// http://120.48.48.64:8089/api/sysNotice/list
export function getnoticelist(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data,
  })
}

// export function logout() {
//   return request({
//     url: '/vue-admin-template/user/logout',
//     method: 'post',
//   })
// }
