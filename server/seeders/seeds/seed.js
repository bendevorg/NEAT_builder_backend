const fs = require('fs');
const gamesPath = process.cwd() + '/server/seeders/seeds/games';

let games = [];
let instructions = [];
let instructionItems = [];
let parameters = [];

// Get all seeds
fs.readdirSync(gamesPath).forEach(folder => {
  if (folder.indexOf('.') === -1) {
    let gamePath = gamesPath + '/' + folder;
    if (fs.existsSync(gamePath + '/game.js')) {
      games.push(require(gamePath + '/game.js'));
      require(gamePath + '/game.js');
      if (fs.existsSync(gamePath + '/parameter.js')) {
        parameters = parameters.concat(
          require(gamePath + '/parameter.js')(games[games.length - 1].id)
        );
      }
      if (fs.existsSync(gamePath + '/instructions')) {
        let instructionPath = gamePath + '/instructions/';
        fs.readdirSync(instructionPath).forEach(instructionFolder => {
          if (instructionFolder.indexOf('.') === -1) {
            if (fs.existsSync(instructionPath + instructionFolder + '/instruction.js')) {
              instructions.push(
                require(instructionPath + instructionFolder + '/instruction.js')(
                  games[games.length - 1].id
                )
              );
              if (fs.existsSync(instructionPath + instructionFolder + '/items.js')) {
                instructionItems = instructionItems.concat(
                  require(instructionPath + instructionFolder + '/items.js')(
                    instructions[instructions.length - 1].id
                  )
                );
              }
            }
          }
        });
      }
    }
  }
});

module.exports = { games, instructions, instructionItems, parameters };
