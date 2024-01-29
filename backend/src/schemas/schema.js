const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  transaction: {
    type: String,
  },
  date: { 
    type: Date, 
    default: Date.now 
  },
  description: {
    type: String,
  },
  value: {
    type: String,
  },
  categories: {
    type: String,
  }
});


const EntryModel = mongoose.model('Entry', entrySchema);

module.exports = {
  EntryModel
};