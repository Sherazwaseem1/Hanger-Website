import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const mongoDB = "mongodb://localhost:27017/Games_DB";

    const db = await mongoose.connect(mongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected: ${db.connection.host}`);
    console.log("MongoDB connected successfully on port number 27017");

  } catch (error)
  {
    console.log(error);
  }
};
