import { Pet } from "../entities/pet/pet-entity";
import PetModel from "../entities/pet/pet-model";
import {
    CreateTutorResponse,
    GetTutor,
    GetTutorResponse,
} from "../entities/tutor/tutor-dto";
import { Tutor } from "../entities/tutor/tutor-entity";
import TutorModel from "../entities/tutor/tutor-model";
import { TutorRepository } from "../entities/tutor/tutor-repository";

export class TutorMongoRepository implements TutorRepository {
    async getPetsOfTutor(tutorId: number): Promise<Pet[]> {
        const pets = await PetModel.find(
            { tutor: tutorId },
            { _id: 0, __v: 0, tutor: 0 },
        );

        return pets;
    }
    async deleteTutor(id: number): Promise<void> {
        await TutorModel.where({ id }).deleteOne();
    }
    async updateTutor(tutor: Tutor): Promise<void> {
        await TutorModel.where({ id: tutor.id }).updateOne(tutor);
    }
    async getAll(): Promise<GetTutorResponse> {
        const tutorsWithPets: GetTutorResponse = [];
        const tutors = await TutorModel.find({}, { _id: 0, __v: 0 });

        for (let tutor of tutors) {
            const pets = await PetModel.find(
                { tutor: tutor.id },
                { _id: 0, __v: 0, tutor: 0 },
            );
            const tutorWithPets: GetTutor = {
                id: tutor.id,
                name: tutor.name,
                phone: tutor.phone,
                email: tutor.email,
                date_of_birth: tutor.date_of_birth,
                zip_code: tutor.zip_code,
                pets: pets,
            };

            tutorsWithPets.push(tutorWithPets);
        }

        return tutorsWithPets;
    }
    async findTutorById(id: number): Promise<CreateTutorResponse | null> {
        const tutor = await TutorModel.findOne({ id });

        return tutor;
    }
    async create(tutor: Tutor): Promise<CreateTutorResponse> {
        const newTutor = await TutorModel.create(tutor);

        return newTutor;
    }
}
