const { Router } = require('express');
const { createExpense, removeExpense } = require('../controllers');
// const verifyJWT = require('../middleware/verifyJWT');

const router = Router();

//POST /expense
router.post('/', async (req, res) => {
  try {
    const data = await createExpense(req.body);
    res.send(data);
  } catch (error) {
    console.log('Error:', error.message);
    res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  // console.log(req.params);
  try {
    const data = await removeExpense(req.params.id);
    res.send(data);
  } catch (error) {
    console.log('Error:', error.message);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
