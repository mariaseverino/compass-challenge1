import { Types } from "mongoose";
import { Tutor } from "./tutor-entity";
import { Pet } from "../pet/pet-entity";
import { type } from "os";

export type CreateTutorResponse = {
    id: number;
    name: string;
    phone: string;
    email: string;
    date_of_birth: string;
    zip_code: string;
    _id: Types.ObjectId;
};

export interface GetTutor extends Tutor {
    pets: Pet[];
}

export type GetTutorResponse = GetTutor[];
