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
    newInstructionItems: instructionId =>
      URL_PREFIX + 'games/instructions/' + instructionId + '/items/new',
    newParameters: gameId => URL_PREFIX + 'games/' + gameId + '/parameters/new',
    retrieveParameters: gameId => URL_PREFIX + 'games/' + gameId + '/parameters',
    deleteParameters: parameterId => URL_PREFIX + 'games/parameters/' + parameterId,
    signIn: () => URL_PREFIX + 'auth/sign_in',
    signUp: () => URL_PREFIX + 'auth/sign_up',
    deleteUsers: userId => URL_PREFIX + 'users/' + userId,
    retrieveLeaderboards: gameId => URL_PREFIX + 'leaderboard/' + gameId,
    newLeaderboardEntries: gameId => URL_PREFIX + 'leaderboard/' + gameId + '/new'
  },
  posts: {
    newGame: {
      valid: {
        name: faker.name.firstName(),
        goal: 1000,
        actions: 2,
        tier: 1
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
        name: faker.name.firstName(),
        description: faker.lorem.text()
      },
      invalidName: {
        name: '',
        description: faker.lorem.text()
      },
      invalidDescription: {
        name: faker.name.firstName(),
        description: ''
      }
    },
    newParameter: {
      valid: {
        name: faker.name.firstName(),
        value: faker.name.firstName()
      },
      invalid: {
        name: '',
        value: faker.name.firstName()
      }
    },
    newUser: {
      valid: {
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password()
      },
      validNotRegistered: {
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password()
      },
      invalidName: {
        name: '',
        email: faker.internet.email(),
        password: faker.internet.password()
      },
      invalidEmail: {
        name: faker.name.findName(),
        email: '',
        password: faker.internet.password()
      },
      invalidPassword: {
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: ''
      }
    },
    newLeaderboardEntry: {
      valid: {
        name: faker.name.firstName(),
        score: 9999,
        time: 1000
      },
      invalidName: {
        name: '',
        score: 9999,
        time: 1000
      },
      invalidScore: {
        name: faker.name.firstName(),
        score: 'ae',
        time: 1000
      },
      invalidTime: {
        name: faker.name.firstName(),
        score: 9999,
        time: 'ae'
      },
      validInput: {
        name: faker.name.firstName(),
        score: 9999,
        time: 1000,
        genetic: {
          speciesPerGeneration: 1,
          mutationRate: 0.5
        },
        neuralNetwork: {
          hiddenLayers: 1,
          learningRate: 0.1,
          inputs: ['player.x * 10', 'player.y * 10']
        }
      }
    }
  }
};

module.exports = constants;
