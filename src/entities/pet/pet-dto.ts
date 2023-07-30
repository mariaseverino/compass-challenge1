import { Types } from "mongoose";

export interface CreatePetResponse {
    id: number;
    name: string;
    species: string;
    carry: string;
    weight: number;
    date_of_birth: string;
    _id: Types.ObjectId;
}

export interface CreatePetRequest {
    id: number;
    name: string;
    species: string;
    carry: string;
    weight: number;
    date_of_birth: string;
    tutorId: string;
}
