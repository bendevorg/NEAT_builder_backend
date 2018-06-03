const chai = require('chai');
const supertest = require('supertest');
const constants = require('../utils/constants');

const expect = chai.expect;
const app =
  process.env.NODE_ENV == 'production'
    ? require('../../tools/serverProduction')
    : require('../../tools/serverDevelopment');
const api = supertest(app);

module.exports = describe('Retrieve instructions use cases', () => {
  it('Retrieve instructions invalid game id', done => {
    api
      .get(constants.urls.retrieveInstructions('a'))
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

  it('Retrieve instructions valid game id', done => {
    api
      .get(constants.urls.retrieveInstructions(constants.posts.newInstruction.valid.id))
      .set(constants.users.validUser.header)
      .end((err, res) => {
        if (err)
          done(err);
        else {
          expect(res.status, 'Status').to.equal(200);
          expect(res.body).to.have.property('msg').to.be.an('array');
          done();
        }
      });
  });
});
