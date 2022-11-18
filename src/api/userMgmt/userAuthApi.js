import { createInstanceWithTokenV1, queryString } from '@/api';

const preFix = createInstanceWithTokenV1('users/auth');
const GET_USER_LIST_API = async payload => {
  return await preFix.get('', queryString(payload));
};
const GET_USER_DETAIL_API = async payload => {
  return await preFix.get(payload);
};

const CREATE_USER_AUTH_API = async payload => {
  return await preFix.post('', payload);
};

const MODIFY_USER_AUTH_API = async (id, payload) => {
  return await preFix.put(id, payload);
};

export { GET_USER_LIST_API, GET_USER_DETAIL_API, CREATE_USER_AUTH_API, MODIFY_USER_AUTH_API };
