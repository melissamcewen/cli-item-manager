
const low = require('lowdb');
const db = require('./db');
const chalk = require('chalk');



/// Utility: Converts value to lowercase
function toLower(v) {
  return v.toLowerCase();
}

/// Utility: log out by category
function groupBy(array, group) {
    var hash = Object.create(null),
        result ={},
        message ="";

    array.forEach(function (a) {
      var category = a[group];
        if (!hash[a[group]]) {
          hash[a[group]] = [];
          result[category] =  a.title + "\n" ;
        } else {
          result[category] = result[category] + a.title + "\n";
        }

       hash[a[group]].push(a);
    });
  for (var key in result) {
    console.log(chalk.blue.bold(key) + chalk.red('\n************\n') + chalk.blue(result[key]) + "\n\n");

  }
}



/**
 * @function  [addItem]
 * @returns {String} Status
 */
const addItem = (title, category, description) => {
  const result = db.get('items')
  .push({ title: title, category: toLower(category), description: description})
  .write();
  console.log(result);
};


/**
 * @function  [getItem]
 * @returns {Json} Item
 */
const getItem = (title) => {
  var result = db.get('items')
  .filter({title: title})
  .value();
  console.log(result);
};

/**
 * @function  [getItems]
 * @returns {Json} Items
 */
const getItems = (category) => {
  var result = db.get('items')
  .value();
  groupBy(result, "category");
};



module.exports = { addItem, getItem, getItems };
