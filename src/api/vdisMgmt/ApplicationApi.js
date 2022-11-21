import { createInstanceWithTokenV1, queryString } from '@/api';
const app = createInstanceWithTokenV1('app-mgmt');

const GET_APP_LIST_API = payload => app.post(``, payload);
const GET_APP_DETAIL_API = payload => app.post(``, payload);
const APP_CANCEL_API = payload => app.post(``, payload);
