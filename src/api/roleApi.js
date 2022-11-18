import { createInstanceWithTokenV1, queryString } from '@/api';

const roles = createInstanceWithTokenV1('roles');
const roleCodeApi = async () => {
  return await roles.get('/used');
};

export { roleCodeApi };
