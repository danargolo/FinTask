const { entryService } = require('../services')

const getAll = async(req, res) => {
  const response = await entryService.getAll()

  return res.status(200).json(response)
}

const insertEntry = async(req, res) => {
  const data = req.body
  entryService.insertEntry(data)
  return res.status(201).json("Item cadastrado com sucesso");
}

module.exports = {
  getAll,
  insertEntry
}