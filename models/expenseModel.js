//expense model schema, what is required

const mongoose = require('mongoose');

//add parameters and filter by them
const expenseSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: false },
  price: { type: Number, required: true, unique: false },
  year: { type: Number, required: true, unique: false },
  month: { type: String, required: true, unique: false },
  day: { type: Number, required: true, unique: false },
  shop: { type: String, required: true, unique: false },
  userId: { type: String, required: true, unique: false },
});

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;
