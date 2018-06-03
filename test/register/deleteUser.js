const chai = require('chai');
const supertest = require('supertest');
const constants = require('../utils/constants');
const appConstants = require('../../server/utils/constants');

const expect = chai.expect;
const app =
  process.env.NODE_ENV == 'production'
    ? require('../../tools/serverProduction')
    : require('../../tools/serverDevelopment');
const api = supertest(app);

module.exports = describe('Delete user use cases', () => {
  it('Delete user with invalid id', done => {
    api
      .delete(constants.urls.PREFIX + constants.urls.DELETE_USER)
      .set(constants.users.validApiKeyOne.header)
      .send(constants.register.invalidId)
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.body)
            .to.have.property('msg')
            .to.equal(appConstants.messages.error.INVALID_ID);
          expect(res.status, 'Status').to.equal(400);
          done();
        }
      });
  });

  it('Delete valid inexistent user', done => {
    api
      .delete(constants.urls.PREFIX + constants.urls.DELETE_USER)
      .set(constants.users.validApiKeyOne.header)
      .send(constants.register.inexistentId)
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.body)
            .to.have.property('msg')
            .to.equal(appConstants.messages.error.USER_NOT_FOUND);
          expect(res.status, 'Status').to.equal(400);
          done();
        }
      });
  });

  it('Delete user with valid input', done => {
    api
      .delete(constants.urls.PREFIX + constants.urls.DELETE_USER)
      .set(constants.users.validApiKeyOne.header)
      .send(constants.register.validInput)
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.body)
            .to.have.property('msg')
            .to.equal(appConstants.messages.success.USER_DELETED);
          expect(res.status, 'Status').to.equal(200);
          done();
        }
      });
  });
});
