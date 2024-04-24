const { Router } = require('express');
const { getAllExpenses } = require('../controllers');

const router = Router();

//GET /product
router.get('/', async (req, res) => {
  try {
    const data = await getAllExpenses();
    res.json(data);
  } catch (error) {
    console.log('Error:', error.message);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
