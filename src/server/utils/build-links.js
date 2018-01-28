import { baseUri } from 'config';

export default function buildLinks(endpoint, limit, offset, total) {
  return {
    self: `${baseUri}/${endpoint}?limit=${limit}&offset=${offset}`,
    first: `${baseUri}/${endpoint}?limit=${limit}&offset=0`,
    prev: offset > 0 ? `${baseUri}/${endpoint}?limit=${limit}&offset=${offset - limit}` : false,
    next: offset + limit <= total ? `${baseUri}/${endpoint}?limit=${limit}&offset=${offset + limit}` : false,
    last: `${baseUri}/${endpoint}?limit=${limit}&offset=${total}`,
  };
}
