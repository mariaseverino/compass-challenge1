import { Schema } from "mongoose";

import connectDB from "../../infra/connection";
import { Pet } from "./pet-entity";

const petSchema = new connectDB.Schema<Pet>({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    species: { type: String, required: true },
    carry: { type: String, required: true },
    weight: { type: Number, required: true },
    date_of_birth: { type: String, required: true },
    tutor: { type: Number, ref: "Tutor" },
});

const PetModel = connectDB.model<Pet>("Pet", petSchema);

export default PetModel;
