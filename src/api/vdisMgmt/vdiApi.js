import { createInstanceWithTokenV1, queryString } from '@/api';

const API = createInstanceWithTokenV1('vdi-mgmt');
const vdisApi = payload => API.get('', queryString(payload));
const vdiApi = payload => API.get(payload);
const vdiModifyApi = (id, payload) => API.put(id, payload);
const vdiDeleteApi = id => API.delete(id);
const myVdiApi = () => API.get('/my');

const registerVdiApi = async payload => API.post('', payload);
// VDIS LIST 호출
const GET_VDIS_LIST_API = payload => API.get(`url/${payload}`);
// VDIS DETAIL 호출
const GET_VDIS_DETAIL_API = payload => API.post(`url/`, payload);
// MEMBER LIST 호출
const GET_MEMBER_LIST_API = payload => API.post(``, payload);
// VDI 삭제
const DELETE_VDI_API = payload => API.delete(``, payload);
// VDI 등록
const CREATE_VDI_API = payload => API.post(``, payload);

export {
  vdisApi,
  vdiApi,
  vdiModifyApi,
  vdiDeleteApi,
  myVdiApi,
  registerVdiApi,
  GET_MEMBER_LIST_API,
  GET_VDIS_LIST_API,
  GET_VDIS_DETAIL_API,
  CREATE_VDI_API,
  DELETE_VDI_API,
};
