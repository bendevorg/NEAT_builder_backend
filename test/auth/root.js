const chai = require('chai');
const supertest = require('supertest');
const constants = require('../utils/constants');

const expect = chai.expect;
const app = process.env.NODE_ENV == 'production'?require('../../tools/serverProduction'):require('../../tools/serverDevelopment');
const api = supertest(app);

module.exports = describe('Auth use cases', () => {
    
  it('Root access without api-key', done => {
    api
      .get(constants.urls.PREFIX)
      .set(constants.users.noApiKey.header)
      .end((err, res) => {
        if (err){
          done(err);
        } else {
          expect(res.status, 'Status').to.equal(401);
          done();
        }
      });
  });

  it('Root access with invalid api-key', done => {
    api
      .get(constants.urls.PREFIX)
      .set(constants.users.invalidApiKey.header)
      .end((err, res) => {
        if (err){
          done(err);
        } else {
          expect(res.status, 'Status').to.equal(401);
          done();
        }
      });
  });

  it('Root access with valid api-key', done => {
    api
      .get(constants.urls.PREFIX)
      .set(constants.users.validApiKeyOne.header)
      .end((err, res) => {
        if (err){
          done(err);
        } else {
          expect(res.status, 'Status').to.equal(200);
          done();
        }
      });
  });
});
