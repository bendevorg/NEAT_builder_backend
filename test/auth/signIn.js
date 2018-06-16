const chai = require('chai');
const supertest = require('supertest');
const constants = require('../utils/constants');

const expect = chai.expect;
const app =
  process.env.NODE_ENV == 'production'
    ? require('../../tools/serverProduction')
    : require('../../tools/serverDevelopment');
const api = supertest(app);

module.exports = describe('Sign in use cases', () => {
  it('Sign in invalid email', done => {
    api
      .post(constants.urls.signIn())
      .set(constants.users.validUser.header)
      .send(constants.posts.newUser.invalidEmail)
      .end((err, res) => {
        if (err)
          done(err);
        else {
          expect(res.status, 'Status').to.equal(400);
          done();
        }
      });
  });

  it('Sign in invalid password', done => {
    api
      .post(constants.urls.signIn())
      .set(constants.users.validUser.header)
      .send(constants.posts.newUser.invalidPassword)
      .end((err, res) => {
        if (err)
          done(err);
        else {
          expect(res.status, 'Status').to.equal(400);
          done();
        }
      });
  });

  it('Sign in valid user not registered', done => {
    api
      .post(constants.urls.signIn())
      .set(constants.users.validUser.header)
      .send(constants.posts.newUser.validNotRegistered)
      .end((err, res) => {
        if (err)
          done(err);
        else {
          expect(res.status, 'Status').to.equal(400);
          done();
        }
      });
  });

  it('Sign in valid user wrong password', done => {
    api
      .post(constants.urls.signIn())
      .set(constants.users.validUser.header)
      .send({
        email: constants.posts.newUser.valid.email,
        password: 'HackerXxX'
      })
      .end((err, res) => {
        if (err)
          done(err);
        else {
          expect(res.status, 'Status').to.equal(400);
          done();
        }
      });
  });

  it('Sign in valid user', done => {
    api
      .post(constants.urls.signIn())
      .set(constants.users.validUser.header)
      .send(constants.posts.newUser.valid)
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
