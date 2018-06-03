/**
 * All project constants
 * @module utils/constants
 */
module.exports = {
  messages: {
    info: {
      GAME_DELETED: 'Game deleted',
      INSTRUCTION_DELETED: 'Instruction deleted',
      LEADERBOARD_ENTRY_SUCCESS: 'This entry was added to the leaderboard.',
      INSTRUCTION_SAVED: 'Instruction was saved with success.',
      INSTRUCTION_ITEM_SAVED: 'Instruction item was saved with success.'
    },
    error: {
      INVALID_GAME_ID: 'Game id not valid.',
      INVALID_INSTRUCTION_ID: 'Instruction id not valid.',
      INVALID_NAME: 'Name not valid.',
      INVALID_SCORE: 'Score not valid.',
      INVALID_TIME: 'Time not valid.',
      UNEXPECTED_DB: 'An error ocurred while accessing our database. Please try again.'
    }
  },
  regex: {
    integer: /^-?\d+$/
  }
};
