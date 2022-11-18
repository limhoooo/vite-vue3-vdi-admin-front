import { createInstanceWithTokenV1, queryString } from '@/api';

const menus = createInstanceWithTokenV1('menu');
const menusApi = async () => {
  return await menus.get('/role');
};
const hasMenuApi = async url => {
  return await menus.get('/has', queryString(url));
};
const cacheMenuDeleteApi = async () => {
  return await menus.delete('/cache');
};
export { menusApi, hasMenuApi, cacheMenuDeleteApi };
