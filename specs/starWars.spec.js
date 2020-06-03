import {
  assert
} from 'chai';

import delivery from '../models/starWarsPeople.api';

describe('Star Wars API - People Tests:', () => {

  it('Test if we have a 200 status', async () => {
    const response = await delivery.getAll();
    assert.equal(response.status, 200);
  });

  it('Test Luke Skywalker is the number one', async () => {
    const response = await delivery.getPeople('1');
    assert.equal(response.body.name, 'Luke Skywalker');
  });

  it('If a request is made with: incorrect people the service should respond with 404', async () => {
    const response = await delivery.getPeople('Harry Potter');
    assert.equal(response.status, 404);
  });

});