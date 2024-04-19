const { Router } = require('express');
const { createExpense } = require('../controllers/createExpense');

const router = Router();

//GET /Expenses/:id dvitaskis reiskia kad id yra kintama reiksme, jei butu tiesiog id tai ir nueitu i /id kelia

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
