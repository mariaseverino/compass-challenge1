import { CreateTutorResponse } from "../entities/tutor/tutor-dto";
import { Tutor } from "../entities/tutor/tutor-entity";
import TutorModel from "../entities/tutor/tutor-model";
import { TutorRepository } from "../entities/tutor/tutor-repository";

export class TutorMongoRepository implements TutorRepository {
    async findTutorById(id: number): Promise<Tutor | null> {
        const tutor = await TutorModel.findOne({ id });

        return tutor;
    }
    async create(tutor: Tutor): Promise<CreateTutorResponse> {
        const newTutor = await TutorModel.create(tutor);

        return newTutor;
    }
}
