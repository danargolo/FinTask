const { EntryModel } = require("../schemas/schema");


const toReversed = (array) => [...array].reverse();

const getAll = async () => {
  const response = await EntryModel.find();

  const reversedResponse = toReversed(response);

  return reversedResponse
}

const insertEntry = (data) => {
  console.log(data);
  const entry = EntryModel(data)

  entry
  .save()
  .then(() => console.log("Adicionado com sucesso"))
};

module.exports = {
  getAll,
  insertEntry
}