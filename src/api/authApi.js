import { createInstanceV1 } from '@/api';
import { useUserStore } from '@/stores/usersMgmt/userStore';

const authApi = createInstanceV1('admin-portal/common');
const loginApi = async payload => {
  return await authApi.post('', payload);
};
const passwordResetApi = async payload => {
  return await authApi.put('password-reset', payload);
};

const idCheckApi = async payload => {
  return await authApi.post('validate-login-id', payload);
};
const refreshTokenApi = async () => {
  return await authApi.put('refresh', '', {
    headers: {
      Authorization: useUserStore().user.refreshAccessToken,
    },
  });
};

export { loginApi, passwordResetApi, idCheckApi, refreshTokenApi };
