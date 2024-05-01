const {
  expenseModelValidation,
} = require('../validation/expenseModelValidation');

const Expense = require('../models/expenseModel');
const { default: mongoose } = require('mongoose');

//POST/expense
async function removeExpense(id) {
  const response = await Expense.findByIdAndDelete(id);

  return response;
}

module.exports = removeExpense;
