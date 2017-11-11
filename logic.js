
const low = require('lowdb');
const db = require('./db');


/// Utility: Converts value to lowercase
function toLower(v) {
  return v.toLowerCase();
}


/**
 * @function  [addItem]
 * @returns {String} Status
 */
const addItem = (title, category, description) => {
  const result = db.get('items')
  .push({ title: title, category: category, description: description})
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
const getItems = (title) => {
  var result = db.get('items')
  .value();
  console.log(result);
};



module.exports = { addItem, getItem, getItems };
