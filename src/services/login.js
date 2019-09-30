import request from '@/utils/request';
export async function fakeAccountLogin(params) {
  return request('/api/login/account', {
    method: 'POST',
    data: params,
  });
}
export async function getFakeCaptcha(mobile) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
// 管理员登录
export async function loginAdmin(params) {
  return request('/api/loginAdmin', {
    method: 'POST',
    data: params,
  });
}