import axios from 'axios';
import { setInterceptors } from '@/api/common/interceptors';
axios.defaults.timeout = 30000;

const queryString = payload => {
  return {
    params: payload,
  };
};

const createInstanceV1 = url => {
  const _instance = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_BASE_URL}/${url}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return setInterceptors(_instance, false);
};

const createInstanceWithTokenV1 = url => {
  const _instance = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_BASE_URL}/${url}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return setInterceptors(_instance, true);
};
const errorProcess = error => {
  const _errorResponse = error.response;
  if (typeof _errorResponse === 'object') {
    alert(_errorResponse.data.message);
  } else {
    console.log(error);
    alert('서버 호출중 에러발생');
  }
};

export { createInstanceV1, createInstanceWithTokenV1, queryString, errorProcess };
