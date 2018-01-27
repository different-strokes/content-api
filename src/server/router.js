import koaRouter from 'koa-router';

const router = koaRouter();

router.get('/status', function* healthCheck() {
  this.status = 200;
  this.set('Content-Type', 'text/plain');
  this.set('Cache-Control', 'no-cache');
  this.body = 'OK';
});

export default router;
