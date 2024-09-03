import mongoose from "mongoose";

type connectionObject = {
  isConnected?: number;
};

const connection: connectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already connected");
    return;
  }

  try {
    const db = await mongoose.connect("mongodb+srv://usc_kiit:bXHipKDidq1dCzle@cluster0.ja54q7c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    connection.isConnected = db.connections[0].readyState;
    console.log("Db connected successfully");
  } catch (error) {
    console.log(error)
    console.log("Database connection failed");
    // process.exit(1);
  }
}

export default dbConnect;
// // lib/dbConnect.ts
// import mongoose from 'mongoose';

// const MONGODB_URI = "mongodb+srv://theabhik2020:<db_password>@cluster0.27axl.mongodb.net/note?retryWrites=true&w=majority&appName=Cluster0";

// if (!MONGODB_URI) {
//   throw new Error(
//     'Please define the MONGODB_URI environment variable inside .env.local'
//   );
// }

// interface MongooseCache {
//   conn: typeof mongoose | null;
//   promise: Promise<typeof mongoose> | null;
// }

// const globalWithMongoose = global as typeof globalThis & {
//   mongoose: MongooseCache;
// };

// let cached = globalWithMongoose.mongoose;

// if (!cached) {
//   cached = globalWithMongoose.mongoose = { conn: null, promise: null };
// }

// async function dbConnect() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//     };

//     cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
//       return mongoose;
//     });
//   }
//   cached.conn = await cached.promise;
//   return cached.conn;
// }

// export default dbConnect;
