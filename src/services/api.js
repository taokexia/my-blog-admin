import request from '@/utils/request';

export async function queryActivities() {
  return request('/api/activities');
}