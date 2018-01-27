import router from '../router';

export default () => [
  router.routes(),
  router.allowedMethods(),
];
