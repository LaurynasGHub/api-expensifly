const { Router } = require('express');
const { createExpense } = require('../controllers');
// const verifyJWT = require('../middleware/verifyJWT');

const router = Router();

//POST /product
router.post('/', async (req, res) => {
  try {
    const data = await createExpense(req.body);
    res.send(data);
  } catch (error) {
    console.log('Error:', error.message);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
