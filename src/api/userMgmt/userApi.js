import { createInstanceWithTokenV1, queryString } from '@/api';

const users = createInstanceWithTokenV1('users');
const GET_USER_DETAIL_API = async payload => {
  return await users.get(payload);
};

const GET_USER_LIST_API = async payload => {
  return await users.get('', queryString(payload));
};

const INSERT_USER_API = async payload => {
  return await users.post('', payload);
};

const userModifyApi = async (userKey, payload) => {
  return await users.put(userKey, payload);
};

const userPasswordUpdateApi = async (userKey, payload) => {
  return await users.put(`${userKey}/password`, payload);
};

const myPasswordUpdateApi = async payload => {
  return await users.put('password', payload);
};

const userDeleteApi = async userKey => {
  return await users.delete(userKey);
};

const selectUsersApi = async payload => {
  return await users.get('', queryString(payload));
};

export {
  GET_USER_DETAIL_API,
  GET_USER_LIST_API,
  INSERT_USER_API,
  userPasswordUpdateApi,
  myPasswordUpdateApi,
  userModifyApi,
  userDeleteApi,
  selectUsersApi,
};
