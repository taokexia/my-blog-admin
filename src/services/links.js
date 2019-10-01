import request from '@/utils/request';
// 链接管理
export async function queryLink(params) {
  return request(`/api/getLinkList?${JSON.stringify(params)}`);
}

export async function addLink(params) {
  return request('/api/addLink', {
    method: 'POST',
    data: params,
  });
}
export async function updateLink(params) {
  return request('/api/updateLink', {
    method: 'POST',
    data: params,
  });
}

export async function delLink(params) {
  return request('/api/delLink', {
    method: 'POST',
    data: params,
  });
}