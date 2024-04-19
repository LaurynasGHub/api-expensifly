const { Router } = require('express');
//isiimportinam reikalingus elementus is elementu
const { createExpense } = require('../controllers');
// const verifyJWT = require('../middleware/verifyJWT');

const router = Router();

//POST /product
//sitoj vietoj sukuriamas/gaunamas kelias, siuo atveju po adreso ten https:/.../
router.post('/', async (req, res) => {
  //try catch block- gaudo errorus, try vykdo funkcija o catch gaudo jei yra erroru is tos funkcijos
  try {
    const data = await createExpense(req.body);
    res.send(data);
  } catch (error) {
    console.log('Error:', error.message);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
