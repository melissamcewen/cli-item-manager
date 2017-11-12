const low = require('lowdb');
const db = require('./db');


// define our defaults
db.defaults({ items: [] })
  .write()


// Add an example
db.get('items')
  .push({title: 'Ugly pants', category: 'bottoms', description: 'why do I even have these pants? so uggo'})
  .write()


console.log(db);