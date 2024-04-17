//expense model schema, what is required

const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: false },
  price: { type: Number, required: true, unique: false },
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;
