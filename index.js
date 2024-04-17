const mongoose = require('mongoose');
const express = require('express');

require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.get('/', (req, res) => res.send('Express on Vercel'));

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);

    console.log('Database connected');
  } catch (err) {
    console.log('Error:', err.message);
  }
};

connectDB();

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});

//TODO
//get database and use that data in the app
//add routes to add date and expense to the database
