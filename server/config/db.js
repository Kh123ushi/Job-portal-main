import mongoose from "mongoose";

//Function to connect to the MongoDB database
const connectDB = async () => {
  mongoose.connection.on("connected", () => console.log("Database Connected"));

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is not defined");
  }

  const dbName = process.env.MONGODB_DB_NAME || "JobPortal";
  const [baseUrl, query] = uri.split("?");
  const normalizedBase = baseUrl.replace(/\/+$|\s+$/g, "");
  const hasDatabaseName = /\/[^\/]+$/.test(normalizedBase);
  const connectionString = hasDatabaseName
    ? uri
    : `${normalizedBase}/${dbName}${query ? `?${query}` : ""}`;

  await mongoose.connect(connectionString);
};
export default connectDB;
