import mongoose from "mongoose";

type connectionObject = {
  isConnected?: number;
};

const connected: connectionObject = {};

export async function connect(): Promise<void> {
  if (connected.isConnected) {
    console.log("Database is connected");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.mongo_url!);
    const connection = mongoose.connection;

    connection.on("connection", () => {
      console.log("database connection successful");
      connected.isConnected = db.connections[0].readyState;
    });

    connection.on("error", (err) => {
      console.log("connection error: " + err);
    });
  } catch (error: any) {
    console.log("Something went wrong in your connection: " + error);
  }
}