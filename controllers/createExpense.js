const {
  expenseModelValidation,
} = require('../validation/expenseModelValidation');
//gaunam palei schema sukurta prdukta
const Expense = require('../models/expenseModel');

//POST/product
async function createExpense(props) {
  console.log(props);

  expenseModelValidation(props);
  //product turi ivairius metodus kaip create/find ir pan. mongoDB dokumentacijoj jie yra aprasyti
  const response = await Product.create(props);

  return response;
}

module.exports = createExpense;
