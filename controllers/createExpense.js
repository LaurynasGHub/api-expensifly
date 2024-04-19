//gaunam palei schema sukurta prdukta
const Expense = require('../models/expenseModel');

//POST/product
async function createExpense(props) {
  console.log(props);

  //product turi ivairius metodus kaip create/find ir pan. mongoDB dokumentacijoj jie yra aprasyti
  const response = await Expense.create(props);

  return response;
}

module.exports = createExpense;
