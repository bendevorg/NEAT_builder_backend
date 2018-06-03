const chai = require('chai');
const supertest = require('supertest');
const constants = require('../utils/constants');

const expect = chai.expect;
const app =
  process.env.NODE_ENV == 'production'
    ? require('../../tools/serverProduction')
    : require('../../tools/serverDevelopment');
const api = supertest(app);

module.exports = describe('New leaderboard entry use cases', () => {
  it('New invalid gameid leaderboard', done => {
    api
      .post(constants.urls.newLeaderboardEntries('a'))
      .set(constants.users.validUser.header)
      .send(constants.posts.newLeaderboardEntry.valid)
      .end((err, res) => {
        if (err)
          done(err);
        else {
          expect(res.status, 'Status').to.equal(400);
          done();
        }
      });
  });

  it('New invalid leaderboard name', done => {
    api
      .post(constants.urls.newLeaderboardEntries(constants.posts.newGame.valid.id))
      .set(constants.users.validUser.header)
      .send(constants.posts.newLeaderboardEntry.invalidName)
      .end((err, res) => {
        if (err)
          done(err);
        else {
          expect(res.status, 'Status').to.equal(400);
          done();
        }
      });
  });

  it('New invalid leaderboard score', done => {
    api
      .post(constants.urls.newLeaderboardEntries(constants.posts.newGame.valid.id))
      .set(constants.users.validUser.header)
      .send(constants.posts.newLeaderboardEntry.invalidScore)
      .end((err, res) => {
        if (err)
          done(err);
        else {
          expect(res.status, 'Status').to.equal(400);
          done();
        }
      });
  });

  it('New invalid leaderboard time', done => {
    api
      .post(constants.urls.newLeaderboardEntries(constants.posts.newGame.valid.id))
      .set(constants.users.validUser.header)
      .send(constants.posts.newLeaderboardEntry.invalidTime)
      .end((err, res) => {
        if (err)
          done(err);
        else {
          expect(res.status, 'Status').to.equal(400);
          done();
        }
      });
  });

  it('New valid leaderboard entry', done => {
    api
      .post(constants.urls.newLeaderboardEntries(constants.posts.newGame.valid.id))
      .set(constants.users.validUser.header)
      .send(constants.posts.newLeaderboardEntry.valid)
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
