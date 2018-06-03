const chai = require('chai');
const supertest = require('supertest');
const constants = require('../utils/constants');

const expect = chai.expect;
const app =
  process.env.NODE_ENV == 'production'
    ? require('../../tools/serverProduction')
    : require('../../tools/serverDevelopment');
const api = supertest(app);

module.exports = describe('Delete parameters use cases', () => {
  it('Delete invalid paramater', done => {
    api
      .delete(constants.urls.deleteParameters('a'))
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

  it('Delete valid paramater', done => {
    api
      .delete(constants.urls.deleteParameters(constants.posts.newParameter.valid.id))
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
