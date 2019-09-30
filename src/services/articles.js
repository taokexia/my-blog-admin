import request from '@/utils/request';
// 文章管理
export async function queryArticle(params) {
  return request(`/api/getArticleListAdmin?${JSON.stringify(params)}`);
}

export async function addArticle(params) {
  return request('/api/addArticle', {
    method: 'POST',
    data: params,
  });
}
export async function delArticle(params) {
  return request('/api/delArticle', {
    method: 'POST',
    data: params,
  });
}

export async function updateArticle(params) {
  return request('/api/updateArticle', {
    method: 'POST',
    data: params,
  });
}

export async function getArticleDetail(params) {
  return request('/api/getArticleDetail', {
    method: 'POST',
    data: params,
  });
}
