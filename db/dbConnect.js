import mongoose from "mongoose";

const connection = {};

async function dbConnect() {
  if (connection.isConnected) return;

  const db = await mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(res => console.log("Connected", res));
  return db;
}

export default dbConnect;
