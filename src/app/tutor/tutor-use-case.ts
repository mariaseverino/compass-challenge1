import {
    CreateTutorResponse,
    GetTutorResponse,
} from "../../entities/tutor/tutor-dto";
import { TutorRepository } from "../../entities/tutor/tutor-repository";
import { Tutor } from "../../entities/tutor/tutor-entity";

export class TutorUseCase {
    constructor(private tutorRepo: TutorRepository) {}

    async execute(request: Tutor): Promise<CreateTutorResponse> {
        const tutorAlreadyExists = await this.tutorRepo.findTutorById(
            request.id,
        );

        if (tutorAlreadyExists) {
            throw new Error("Tutor already exists");
        }

        const tutor = new Tutor(
            request.id,
            request.name,
            request.phone,
            request.email,
            request.date_of_birth,
            request.zip_code,
        );

        const response = await this.tutorRepo.create(tutor);

        return response;
    }

    async list(): Promise<GetTutorResponse> {
        const response = await this.tutorRepo.getAll();

        return response;
    }

    async update(request: Tutor): Promise<void> {
        const tutorExists = await this.tutorRepo.findTutorById(request.id);

        if (!!tutorExists) {
            throw new Error("Tutor not exists");
        }

        const tutor = new Tutor(
            request.id,
            request.name,
            request.phone,
            request.email,
            request.date_of_birth,
            request.zip_code,
        );

        await this.tutorRepo.updateTutor(tutor);
    }

    async delete(id: number): Promise<void> {
        const tutorExists = await this.tutorRepo.findTutorById(id);

        if (tutorExists == null) {
            throw new Error("Tutor does not exist");
        }

        const pets = await this.tutorRepo.getPetsOfTutor(id);

        if (pets.length > 0) {
            throw new Error("Cannot remove the tutor, he has registered pets");
        }

        await this.tutorRepo.deleteTutor(id);
    }
}
