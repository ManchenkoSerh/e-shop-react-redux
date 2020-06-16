const {Router} = require('express')
const database = require('../db.json')
const router = Router()

router.get('/getdata', async (req, res) => {
  try {
    res.status(200).send(database)
  } catch (e) {
    res.status(500).json({ message: 'Went wrong'})
  }
})

module.exports = router