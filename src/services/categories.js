import request from '@/utils/request';
// 分类管理
export async function queryCategory(params) {
  return request(`/api/getCategoryList?${JSON.stringify(params)}`);
}

export async function addCategory(params) {
  return request('/api/addCategory', {
    method: 'POST',
    body: params,
  });
}
export async function updateCategory(params) {
  return request('/api/updateCategory', {
    method: 'POST',
    body: params,
  });
}

export async function delCategory(params) {
  return request('/api/delCategory', {
    method: 'POST',
    body: params,
  });
}