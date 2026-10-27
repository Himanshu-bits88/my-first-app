import mongoose from "mongoose";

let cached = global.mongoose;
if (!cached) cached = global.mongoose = { conn: null, promise: null };

export async function connectDB() {
  if (cached.conn) return cached.conn;
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    const error = new Error("Configure MONGODB_URI in Netlify environment variables for the Functions scope.");
    error.code = "MONGODB_NOT_CONFIGURED";
    throw error;
  }
  if (!cached.promise) {
    cached.promise = mongoose.connect(uri).then((m) => m).catch((error) => {
      cached.promise = null;
      throw error;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
