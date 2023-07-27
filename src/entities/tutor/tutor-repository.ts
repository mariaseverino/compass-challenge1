import { CreateTutorResponse } from "./tutor-dto";
import { Tutor } from "./tutor-entity";

export interface TutorRepository {
    create(product: Tutor): Promise<CreateTutorResponse>;
    findTutorById(id: number): Promise<Tutor | null>;
}
