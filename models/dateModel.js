//expense model schema, what is required

const mongoose = require('mongoose');

const dateSchema = new mongoose.Schema({
  year: { type: Number, required: true, unique: false },
  month: {
    type: String,
    enum: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    required: true,
    unique: false,
  },
  day: {
    type: Number,
    enum: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ],
    unique: false,
    required: true,
  },
  //if shop name is empty then pass 'unknown'
  shop: {
    type: String,
    unique: false,
    required: false,
  },
});

const Date = mongoose.model('Expense', dateSchema);

module.exports = Date;
