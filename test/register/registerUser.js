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

module.exports = describe('Register user use cases', () => {
  it('Register user with invalid id', done => {
    api
      .post(constants.urls.PREFIX + constants.urls.REGISTER_USER)
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

  it('Register user with invalid battleTag', done => {
    api
      .post(constants.urls.PREFIX + constants.urls.REGISTER_USER)
      .set(constants.users.validApiKeyOne.header)
      .send(constants.register.invalidBattleTag)
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.body)
            .to.have.property('msg')
            .to.equal(appConstants.messages.error.INVALID_BATTLETAG);
          expect(res.status, 'Status').to.equal(400);
          done();
        }
      });
  });

  it('Register user with valid input', done => {
    api
      .post(constants.urls.PREFIX + constants.urls.REGISTER_USER)
      .set(constants.users.validApiKeyOne.header)
      .send(constants.register.validInput)
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          expect(res.body)
            .to.have.property('msg')
            .to.equal(appConstants.messages.success.USER_REGISTERED);
          expect(res.status, 'Status').to.equal(201);
          done();
        }
      });
  });
});
