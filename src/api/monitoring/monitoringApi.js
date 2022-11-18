import { createInstanceWithTokenV1, queryString } from '@/api';

const API = createInstanceWithTokenV1('monitoring');
const GET_LIST_API = async payload => {
  return await API.get('', queryString(payload));
};
export { GET_LIST_API };
