import mongoose from "mongoose";

mongoose.set("strictQuery", true);

mongoose
    .connect("mongodb://localhost/desafio1")
    .then(() => console.log("database running"))
    .catch(() => console.log("database is not working"));

mongoose.Promise = global.Promise;

export default mongoose;
