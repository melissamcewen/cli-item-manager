const low = require('lowdb');
const db = require('./db');


// define our defaults
db.defaults({ items: [] })
  .write()


// Add an example
db.get('items')
  .push({title: 'roast carrots', category: 'appetizer', description: 'carrots roasted with a savory yogurt sauce'})
  .write()


console.log(db);