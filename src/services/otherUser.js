import request from '@/utils/request';
// 其他用户
export async function queryUser(params) {
  return request(`/api/getUserList?${JSON.stringify(params)}`);
}

export async function addUser(params) {
  return request('/api/addUser', {
    method: 'POST',
    data: params,
  });
}
export async function updateUser(params) {
  return request('/api/updateUser', {
    method: 'POST',
    data: params,
  });
}

export async function delUser(params) {
  return request('/api/delUser', {
    method: 'POST',
    data: params,
  });
}