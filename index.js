const mongoose = require('mongoose');

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
