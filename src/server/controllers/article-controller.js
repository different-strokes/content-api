import buildLinks from '../utils/build-links';

export function* getArticles() {
  let { limit, offset } = this.query;
  const total = 30;

  limit = parseInt(limit) || 10;
  offset = parseInt(offset) || 0;

  this.status = 200;
  this.body = {
    meta: { total, limit, offset },
    data: [
      {
        type: 'article',
        id: '',
        attributes: {
          articleId: '',
          title: {},
          excerpt: {},
          preamble: {},
          content: [],
          plugins: [],
          created: {},
          updated: {},
          published: {},
        }
      }
    ],
    links: buildLinks('articles', limit, offset, total),
  };
}

export function* getArticle() {
  const { articleId } = this.params;

  this.status = 200;
  this.body = {
    meta: {
      created: '',
      published: '',
      updated: '',
      copyright: '',
      version: '',
      format: '',
    },
    data: {
      type: 'article',
      id: articleId,
      attributes: {
        articleId,
        title: {},
        excerpt: {},
        preamble: {},
        content: [],
        plugins: [],
        created: '',
        updated: '',
        published: '',
      },
      releationships: {
        author: {
          data: { type: 'person', id: '' },
        },
      }
    },
  };
}
