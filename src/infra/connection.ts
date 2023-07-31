import mongoose from "mongoose";

mongoose.set("strictQuery", true);

const url = process.env.MONGO_URL || "mongodb://localhost/desafio1";
mongoose
    .connect(url)
    .then(() => console.log("database running", url))
    .catch(() => console.log("database is not working"));

mongoose.Promise = global.Promise;

export default mongoose;
