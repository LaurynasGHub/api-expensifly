const {
  expenseModelValidation,
} = require('../validation/expenseModelValidation');

const Expense = require('../models/expenseModel');
const { default: mongoose } = require('mongoose');

//POST/expense
async function createExpense(props) {
  // console.log('--Create expense--');
  // console.log('props:');
  // console.log(props);

  expenseModelValidation(props);

  const response = await Expense.create(props);

  return response;
}

module.exports = createExpense;
