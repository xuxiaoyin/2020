import request from '@/utils/request'

export function queryClientList(data) {
  return request({
    url: '/api/message/user/queryUserList',
    method: 'post',
    data
  })
}