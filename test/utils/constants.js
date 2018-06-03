const URL_PREFIX = '/api/';

module.exports = {
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
    retrieveInstructions: gameId => URL_PREFIX + 'games/' + gameId + '/instructions',
    newInstruction: gameId => URL_PREFIX + 'games/' + gameId + '/instructions/new',
    newInstructionItem: instructionId => URL_PREFIX + 'games/instructions/' + instructionId + '/items/new',
    retrieveParameters: gameId => URL_PREFIX + 'games/' + gameId + '/parameters',
    newParameter: gameId => URL_PREFIX + 'games/' + gameId + '/parameters/new',
    retrieveLeaderobard: gameId => URL_PREFIX + 'leaderboard/' + gameId,
    newLeaderboardEntry: gameId => URL_PREFIX + 'leaderboard/' + gameId + '/new',
  },
  register: {
    invalidId: {
      id: 'hello',
      battleTag: 'Tester#12312'
    },
    invalidBattleTag: {
      id: 123,
      battleTag: 'holysiege'
    },
    validInput: {
      id: 123,
      battleTag: 'Tester#12312'
    },
    inexistentId:{
      id: 00000000,
      battleTag: 'battleTag#00000'
    }
  }
};
