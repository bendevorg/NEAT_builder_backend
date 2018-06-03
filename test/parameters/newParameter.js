const chai = require('chai');
const supertest = require('supertest');
const constants = require('../utils/constants');

const expect = chai.expect;
const app =
  process.env.NODE_ENV == 'production'
    ? require('../../tools/serverProduction')
    : require('../../tools/serverDevelopment');
const api = supertest(app);

module.exports = describe('New parameters use cases', () => {
  it('New invalid gameid parameter', done => {
    api
      .post(constants.urls.newParameters('a'))
      .set(constants.users.validUser.header)
      .send(constants.posts.newParameter.valid)
      .end((err, res) => {
        if (err)
          done(err);
        else {
          expect(res.status, 'Status').to.equal(400);
          done();
        }
      });
  });

  it('New invalid parameter', done => {
    api
      .post(constants.urls.newParameters(constants.posts.newGame.valid.id))
      .set(constants.users.validUser.header)
      .send(constants.posts.newParameter.invalid)
      .end((err, res) => {
        if (err)
          done(err);
        else {
          expect(res.status, 'Status').to.equal(400);
          done();
        }
      });
  });

  it('New valid parameter', done => {
    api
    .post(constants.urls.newParameters(constants.posts.newGame.valid.id))
      .set(constants.users.validUser.header)
      .send(constants.posts.newParameter.valid)
      .end((err, res) => {
        if (err)
          done(err);
        else {
          expect(res.status, 'Status').to.equal(200);
          expect(res.body.msg).to.have.property('id');
          constants.posts.newParameter.valid.id = res.body.msg.id;
          done();
        }
      });
  });
});
