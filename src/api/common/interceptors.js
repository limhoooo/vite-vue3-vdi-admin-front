import { getReTokenFromCookie, getTokenFromCookie } from '@/utils/cookies';
import { useLoadingStore } from '@/stores/loading';
import router from '@/router';

import { useUserStore } from '@/stores/usersMgmt/userStore';
// import { refreshTokenApi } from '@/api/authApi';

export const setInterceptors = (instance, isToken) => {
  // Add a request interceptor
  instance.interceptors.request.use(
    function (config) {
      // request 보내기전 공통 설정
      useLoadingStore().setLoading(true);
      if (isToken === true) {
        // const token = getTokenFromCookie();
        config.headers.Authorization = `${useUserStore().user.accessToken}`;
      }
      return config;
    },

    function (error) {
      useLoadingStore().setLoading(false);
      // Do something with request error
      return Promise.reject(error);
    },
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    function (response) {
      // response 직후 공통 설정
      useLoadingStore().setLoading(false);
      return response;
    },
    async function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      useLoadingStore().setLoading(false);

      if (error.response.status === 401) {
        /* 토큰만로 후 토큰 갱신 로직 */
        if (useUserStore().user.refreshAccessToken === '') {
          return router.push({ name: 'Login' });
        }
        //await refreshTokenApi();
      }

      return Promise.reject(error);
    },
  );
  return instance;
};
