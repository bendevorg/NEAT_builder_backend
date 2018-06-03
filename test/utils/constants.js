const URL_PREFIX = '/api/';
const faker = require('faker');

let constants = {
  users: {
    validUser: {
      header: {
        'content-type': 'application/json'
      }
    }
  },
  urls: {
    retrieveGames: () => URL_PREFIX + 'games',
    newGames: () => URL_PREFIX + 'games/new',
    deleteGames: gameId => URL_PREFIX + 'games/' + gameId,
    retrieveInstructions: gameId => URL_PREFIX + 'games/' + gameId + '/instructions',
    newInstructions: gameId => URL_PREFIX + 'games/' + gameId + '/instructions/new',
    deleteInstructions: instructionId => URL_PREFIX + 'games/instructions/' + instructionId,
    newInstructionItems: instructionId => URL_PREFIX + 'games/instructions/' + instructionId + '/items/new',
    retrieveParameters: gameId => URL_PREFIX + 'games/' + gameId + '/parameters',
    newParameters: gameId => URL_PREFIX + 'games/' + gameId + '/parameters/new',
    retrieveLeaderobards: gameId => URL_PREFIX + 'leaderboard/' + gameId,
    newLeaderboardEntries: gameId => URL_PREFIX + 'leaderboard/' + gameId + '/new',
  },
  posts: {
    newGame: {
      valid: {
        name: faker.name.firstName()
      },
      invalid: {
        name: ''
      }
    },
    newInstruction: {
      valid: {
        name: faker.name.firstName()
      },
      invalid: {
        name: ''
      }
    },
    newInstructionItem: {
      valid: {
        name: faker.name.firstName()
      },
      invalid: {
        name: ''
      }
    }
  }
};

module.exports = constants;