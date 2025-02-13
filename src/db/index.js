import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

async function db() {
  try {
    const conn = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`Connected to ${conn.connection.host}`);
  } catch (error) {
    console.log(
      error instanceof Error ? error.message : 'Error connecting with mongodb'
    );
    process.exit(1);
  }
}

export default db;
