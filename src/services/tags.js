import request from '@/utils/request';
// 标签管理
export async function queryTag(params) {
  return request(`/api/getTagList?${JSON.stringify(params)}`);
}

export async function addTag(params) {
  return request('/api/addTag', {
    method: 'POST',
    body: params,
  });
}

export async function delTag(params) {
  return request('/api/delTag', {
    method: 'POST',
    body: params,
  });
}
