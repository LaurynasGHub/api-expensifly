const Expense = require('../models/expenseModel.js');

async function getAllExpenses() {
  const response = await Expense.find();

  return response;
}

module.exports = getAllExpenses;
