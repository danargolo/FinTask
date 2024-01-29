const express = require('express')
const { entryController } = require('../controllers')

const router = express.Router();

router
  .get('/', entryController.getAll )
  .post('/', entryController.insertEntry )


module.exports = router