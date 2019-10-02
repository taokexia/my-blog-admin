import request from '@/utils/request';
// 项目管理
export async function queryProject(params) {
  return request(`/api/getProjectList?${JSON.stringify(params)}`);
}

export async function addProject(params) {
  return request('/api/addProject', {
    method: 'POST',
    data: params,
  });
}
export async function delProject(params) {
  return request('/api/delProject', {
    method: 'POST',
    data: params,
  });
}

export async function updateProject(params) {
  return request('/api/updateProject', {
    method: 'POST',
    data: params,
  });
}

export async function getProjectDetail(params) {
  return request('/api/getProjectDetail', {
    method: 'POST',
    data: params,
  });
}