const chai = require('chai');
const supertest = require('supertest');
const constants = require('../utils/constants');

const expect = chai.expect;
const app =
  process.env.NODE_ENV == 'production'
    ? require('../../tools/serverProduction')
    : require('../../tools/serverDevelopment');
const api = supertest(app);

module.exports = describe('Retrieve parameters use cases', () => {
  it('Retrieve parameters invalid game id', done => {
    api
      .get(constants.urls.retrieveParameters('a'))
      .set(constants.users.validUser.header)
      .end((err, res) => {
        if (err)
          done(err);
        else {
          expect(res.status, 'Status').to.equal(400);
          done();
        }
      });
  });

  it('Retrieve parameters valid game id', done => {
    api
      .get(constants.urls.retrieveParameters(constants.posts.newGame.valid.id))
      .set(constants.users.validUser.header)
      .end((err, res) => {
        if (err)
          done(err);
        else {
          expect(res.status, 'Status').to.equal(200);
          done();
        }
      });
  });
});
