export function* getTags() {
  this.status = 200;
  this.body = {
    statusCode: 200,
    msg: 'Success',
    values: [],
  };
}

export function* getTag() {
  const { tagId } = this.params;

  this.status = 200;
  this.body = {
    statusCode: 200,
    msg: 'Success',
    values: { tagId },
  };
}
