const program = require('commander');
// Require logic.js file and extract controller functions using JS destructuring assignment
const { addItem, getItem, getItems } = require('./logic');

program
  .version('0.0.1')
  .description('Item management system');

program
  .command('addItem <title> <category> <description>')
  .alias('a')
  .description('Add an item')
  .action((title, category, description) => {
    addItem(title, category, description);
  });

program
  .command('getItem <title>')
  .alias('r')
  .description('Get item')
  .action(title => getItem(title));

program
  .command('listItems')
  .alias('l')
  .description('Get items')
  .action(getItems());


program.parse(process.argv);