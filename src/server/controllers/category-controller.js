export function* getCategories() {
  this.status = 200;
  this.body = {
    statusCode: 200,
    msg: 'Success',
    values: [],
  };
}

export function* getCategory() {
  const { categoryId } = this.params;

  this.status = 200;
  this.body = {
    statusCode: 200,
    msg: 'Success',
    values: { categoryId },
  };
}
