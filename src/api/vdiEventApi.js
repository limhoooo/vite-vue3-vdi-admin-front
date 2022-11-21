import { createInstanceWithTokenV1, queryString } from '@/api';

const vdiEvent = createInstanceWithTokenV1('vdi-mgmt-event');
const vdiEventDetailApi = async id => {
  return await vdiEvent.get(id);
};
const vdiEventLoginApi = async id => {
  return await vdiEvent.get(`${id}/login`);
};
const vdiEventRestartApi = async id => {
  return await vdiEvent.get(`${id}/restart`);
};
const vdiEventShutdownApi = async id => {
  return await vdiEvent.get(`${id}/shutdown`);
};
const vdiEventStartApi = async id => {
  return await vdiEvent.get(`${id}/start`);
};
export {
  vdiEventDetailApi,
  vdiEventLoginApi,
  vdiEventRestartApi,
  vdiEventShutdownApi,
  vdiEventStartApi,
};
