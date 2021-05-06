import {environment} from '../../environments/environment';

const SERVICE_API = environment.GATEWAY_URL;

export const FILE_SERVICE = {
  FILE_UPLOAD: SERVICE_API + '/upload',
  FILE_LIST: SERVICE_API + '/list'
};
