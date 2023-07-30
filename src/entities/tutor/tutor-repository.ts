import { CreateTutorResponse, GetTutorResponse } from "./tutor-dto";
import { Tutor } from "./tutor-entity";

export interface TutorRepository {
    create(product: Tutor): Promise<CreateTutorResponse>;
    findTutorById(id: number): Promise<CreateTutorResponse | null>;
    getAll(): Promise<GetTutorResponse>;
}
