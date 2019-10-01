import request from '@/utils/request';
// 留言管理
export async function queryMessage(params) {
  return request(`/api/getMessageList?${JSON.stringify(params)}`);
}

export async function delMessage(params) {
  return request('/api/delMessage', {
    method: 'POST',
    data: params,
  });
}
export async function getMessageDetail(params) {
  return request('/api/getMessageDetail', {
    method: 'POST',
    data: params,
  });
}

export async function addReplyMessage(params) {
  return request('/api/addReplyMessage', {
    method: 'POST',
    data: params,
  });
}