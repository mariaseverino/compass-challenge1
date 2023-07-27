import { Types } from "mongoose";

export interface CreateTutorResponse {
    id: number;
    name: string;
    phone: string;
    email: string;
    date_of_birth: string;
    zip_code: string;
    _id: Types.ObjectId;
}
