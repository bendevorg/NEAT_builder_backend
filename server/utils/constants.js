/**
 * All project constants
 * @module utils/constants
*/
module.exports = {
  messages: {
    info: {
      LEADERBOARD_ENTRY_SUCCESS: 'This entry was added to the leaderboard.'
    },
    error: {
      INVALID_GAME_ID: 'Game id not valid.',
      INVALID_NAME: 'Name not valid.',
      INVALID_SCORE: 'Score not valid.',
      INVALID_TIME: 'Time not valid.'
    }
  },
  regex:{
    integer: /^-?\d+$/
  }
};
