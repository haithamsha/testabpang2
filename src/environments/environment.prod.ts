import { Environment } from '@abp/ng.core';

const baseUrl = 'https://abpngtest-079dcadea84b.herokuapp.com';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'Wajba',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://wajbaapi-08765bdfe115.herokuapp.com/',
    redirectUri: baseUrl,
    clientId: 'Wajba_App',
    responseType: 'code',
    scope: 'offline_access Wajba',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://wajbaapi-08765bdfe115.herokuapp.com',
      rootNamespace: 'Wajba',
    },
  },
} as Environment;
