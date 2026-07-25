const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Event listeners for Mongoose connection
    mongoose.connection.on('connected', () => {
      console.log('Mongoose default connection open to MongoDB');
    });

    mongoose.connection.on('error', (err) => {
      console.error(`Mongoose default connection error: ${err.message}`);
    });

    mongoose.connection.on('disconnected', () => {
      console.warn('Mongoose default connection disconnected');
    });

    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/roshani_devlabs');
    console.log(`MongoDB Connected successfully to host: ${conn.connection.host}`);
  } catch (error) {
    console.error(`CRITICAL MongoDB Connection Error: ${error.message}`);
    console.log('---------------------------------------------------------');
    console.log('WARNING: The database connection failed.');
    console.log('The server will continue to run, but database-dependent');
    console.log('features (API endpoints) will not function correctly.');
    console.log('Please ensure your MongoDB instance is running.');
    console.log('---------------------------------------------------------');
  }
};

module.exports = connectDB;

