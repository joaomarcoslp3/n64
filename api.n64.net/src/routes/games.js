const express = require('express')
const router = express.Router()
const Games = require('../models/Games')

router.get('/', async (req, res) => {
  const { limit, page, fields, orderBy, sortBy, q } = req.body
  const defaultValues = {
    limit: 10,
    page: 1,
  }

  const criteria = {
    limit: Number(limit) || defaultValues.limit, 
    page: Number(page) || defaultValues.page,
    fields: fields || null,
    orderBy: orderBy || 'title',
    sortBy: sortBy !== undefined ? Number(sortBy) : 1,
    q: q || ''
  }

  const result = await Games.find(criteria )

  return res.json({message: 'GAMES FOUNDED', data: result})
})

module.exports = router
