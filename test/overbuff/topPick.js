const chai = require('chai');
const supertest = require('supertest');
const constants = require('../utils/constants');

const expect = chai.expect;
const app =
  process.env.NODE_ENV == 'production'
    ? require('../../tools/serverProduction')
    : require('../../tools/serverDevelopment');
const api = supertest(app);

module.exports = describe('Top pick use cases', () => {
  it('Top pick without api-key', done => {
    api
      .get(constants.urls.PREFIX + constants.urls.TOP_PICK)
      .set(constants.users.noApiKey.header)
      .end((err, res) => {
        if (err)
          done(err);
        else {
          expect(res.status, 'Status').to.equal(401);
          done();
        }
      });
  });

  it('Top pick with invalid api-key', done => {
    api
      .get(constants.urls.PREFIX + constants.urls.TOP_PICK)
      .set(constants.users.invalidApiKey.header)
      .end((err, res) => {
        if (err)
          done(err);
        else {
          expect(res.status, 'Status').to.equal(401);
          done();
        }
      });
  });

  it('Top pick with valid api-key', done => {
    api
      .get(constants.urls.PREFIX + constants.urls.TOP_PICK)
      .set(constants.users.validApiKeyOne.header)
      .end((err, res) => {
        if (err)
          done(err);
        else {
          expect(res.status, 'Status').to.equal(200);
          expect(res.body)
            .to.have.property('msg')
            .be.a('array');
          expect(res.body)
            .to.have.property('msg')
            .with.length.greaterThan(0);
          done();
        }
      });
  });
});
