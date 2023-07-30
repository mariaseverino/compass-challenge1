import { Pet } from "../pet/pet-entity";
import { CreateTutorResponse, GetTutorResponse } from "./tutor-dto";
import { Tutor } from "./tutor-entity";

export interface TutorRepository {
    create(tutor: Tutor): Promise<CreateTutorResponse>;
    findTutorById(id: number): Promise<CreateTutorResponse | null>;
    getAll(): Promise<GetTutorResponse>;
    updateTutor(tutor: Tutor): Promise<void>;
    deleteTutor(id: number): Promise<void>;
    getPetsOfTutor(tutorId: number): Promise<Pet[]>;
}
