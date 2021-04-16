// TODO link para documentação do URL resolver com docs e exemplos
export const APP_ROUTES_DEV = {
  '_defaults': {
    'host': 'http://ec2-18-231-113-162.sa-east-1.compute.amazonaws.com/pesquisa/quiz_ws/web/app.php/api',
    'variables': {
      'mock': 'http://ec2-18-231-113-162.sa-east-1.compute.amazonaws.com/pesquisa/quiz_ws/web/app.php/api'
    }
  },
  'quiz': {
    'url': '{mock}/quiz'
  },
  'pesquisador-codigo': {
    'url': '{mock}/pesquisador/key/{key}'
  },
  'google': {

    'url': 'https://api.opencagedata.com/geocode/v1/json?q={latlng}&key=ad3d91912fc04caf8a912af30e99ae04'
  }
};
export const AppConfig = {
  preloadModules: true,
  authentication: {
    http: {
      url: 'login',
      paramNameIdentity: 'cpf',
      paramNameCredential: 'senha',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      }
    }
  },
  urlResolver: {
    dev: APP_ROUTES_DEV
  },
  http: {
    defaultOptions: {
      timeout: 2000
    }
  }
};
