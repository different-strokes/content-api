export function* getPages() {
  this.status = 200;
  this.body = {
    statusCode: 200,
    msg: 'Success',
    values: [],
  };
}

export function* getPage() {
  const { pageId } = this.params;

  this.status = 200;
  this.body = {
    statusCode: 200,
    msg: 'Success',
    values: { pageId },
  };
}

