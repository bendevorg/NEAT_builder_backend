const chai = require('chai');
const supertest = require('supertest');
const constants = require('../utils/constants');

const expect = chai.expect;
const app =
  process.env.NODE_ENV == 'production'
    ? require('../../tools/serverProduction')
    : require('../../tools/serverDevelopment');
const api = supertest(app);

module.exports = describe('New instructions items use cases', () => {
  it('New invalid instruction id instruction item', done => {
    api
      .post(constants.urls.newInstructionItems('a'))
      .set(constants.users.validUser.header)
      .send(constants.posts.newInstructionItem.valid)
      .end((err, res) => {
        if (err)
          done(err);
        else {
          expect(res.status, 'Status').to.equal(400);
          done();
        }
      });
  });

  it('New valid instruction id invalid instruction item', done => {
    api
      .post(constants.urls.newInstructionItems(constants.posts.newInstruction.valid.id))
      .set(constants.users.validUser.header)
      .send(constants.posts.newInstructionItem.invalid)
      .end((err, res) => {
        if (err)
          done(err);
        else {
          expect(res.status, 'Status').to.equal(400);
          done();
        }
      });
  });

  it('New invalid instruction', done => {
    api
      .post(constants.urls.newInstructionItems(constants.posts.newInstruction.valid.id))
      .set(constants.users.validUser.header)
      .send(constants.posts.newInstructionItem.invalid)
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
    .post(constants.urls.newInstructions(constants.posts.newGame.valid.id))
      .set(constants.users.validUser.header)
      .send(constants.posts.newInstruction.valid)
      .end((err, res) => {
        if (err)
          done(err);
        else {
          expect(res.status, 'Status').to.equal(200);
          expect(res.body.msg).to.have.property('id');
          constants.posts.newInstruction.valid.id = res.body.msg.id;
          done();
        }
      });
  });
});
