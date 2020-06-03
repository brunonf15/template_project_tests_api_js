const client = require('superagent');
export default class Api {
  get request() {
    return client;
  }
}