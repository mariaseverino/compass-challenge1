import connectDB from "../../infra/connection";
import { Tutor } from "./tutor-entity";

export const tutorSchema = new connectDB.Schema<Tutor>({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    date_of_birth: { type: String, required: true },
    zip_code: { type: String, required: true },
});

const TutorModel = connectDB.model<Tutor>("Tutor", tutorSchema);

export default TutorModel;
