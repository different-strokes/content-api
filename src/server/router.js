import koaRouter from 'koa-router';
import restrictedEndpoint from './utils/restricted-endpoint';
import * as articleController from './controllers/article-controller';
import * as tagController from './controllers/tag-controller';
import * as pageController from './controllers/page-controller';
import * as categoryController from './controllers/category-controller';

const router = koaRouter();

router.get('/', function* indexAction() {
  this.status = 200;
  this.set('Content-Type', 'text/plain');
  this.body = 'Welcome to the Content API';
});

router.get('/status', function* healthCheck() {
  this.status = 200;
  this.set('Content-Type', 'text/plain');
  this.set('Cache-Control', 'no-cache');
  this.body = 'OK';
});

// Article endpoints
router.get('/articles', restrictedEndpoint, articleController.getArticles);
router.get('/articles/:articleId', restrictedEndpoint, articleController.getArticle);

// Page endpoints
router.get('/pages', restrictedEndpoint, pageController.getPages);
router.get('/pages/:pageId', restrictedEndpoint, pageController.getPage);

// Tag endpoints
router.get('/tags', restrictedEndpoint, tagController.getTags);
router.get('/tags/:tagId', restrictedEndpoint, tagController.getTag);

// Category endpoints
router.get('/categories', restrictedEndpoint, categoryController.getCategories);
router.get('/categories/:categoryId', restrictedEndpoint, categoryController.getCategory);

export default router;
