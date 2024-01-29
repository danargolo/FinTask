const { entryModel } = require("../models");

const getAll = async () => {
  const entries = await entryModel.getAll();
  return entries;
};

const insertEntry = (data) => {
  //validation
  return entryModel.insertEntry(data)
}

module.exports = {
  getAll,
  insertEntry
}