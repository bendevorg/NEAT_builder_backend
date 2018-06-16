const chai = require('chai');
const supertest = require('supertest');
const constants = require('../utils/constants');

const expect = chai.expect;
const app =
  process.env.NODE_ENV == 'production'
    ? require('../../tools/serverProduction')
    : require('../../tools/serverDevelopment');
const api = supertest(app);

module.exports = describe('New games use cases', () => {
  it('New invalid game', done => {
    api
      .post(constants.urls.newGames())
      .set(constants.users.validUser.header)
      .send(constants.posts.newGame.invalid)
      .end((err, res) => {
        if (err)
          done(err);
        else {
          expect(res.status, 'Status').to.equal(400);
          done();
        }
      });
  });

  it('New valid game', done => {
    api
      .post(constants.urls.newGames())
      .set(constants.users.validUser.header)
      .send(constants.posts.newGame.valid)
      .end((err, res) => {
        if (err)
          done(err);
        else {
          expect(res.status, 'Status').to.equal(201);
          expect(res.body.msg).to.have.property('id');
          constants.posts.newGame.valid.id = res.body.msg.id;
          done();
        }
      });
  });
});
