//function to get selected date expenses
const Expense = require('../models/expenseModel.js');

async function getExpenseByID(id) {
  const response = await Expense.findById(id).exec();

  return response;
}

module.exports = getExpenseByID;
