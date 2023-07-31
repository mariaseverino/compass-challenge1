import {
    CreatePetRequest,
    CreatePetResponse,
} from "../../entities/pet/pet-dto";
import { PetRepository } from "../../entities/pet/pet-repository";
import { Pet } from "../../entities/pet/pet-entity";
import { TutorRepository } from "../../entities/tutor/tutor-repository";

export class PetUseCase {
    constructor(
        private petRepo: PetRepository,
        private tutorRepo: TutorRepository,
    ) {}

    async execute(request: CreatePetRequest): Promise<CreatePetResponse> {
        console.log(request.tutorId);
        const tutorExists = await this.tutorRepo.findTutorById(
            Number(request.tutorId),
        );

        console.log(tutorExists);
        if (!tutorExists) {
            throw new Error("Tutor not exists");
        }

        const pet = new Pet(
            request.id,
            request.name,
            request.species,
            request.carry,
            request.weight,
            request.date_of_birth,
            tutorExists.id,
        );

        const response = await this.petRepo.savePet(pet);

        return response;
    }
    async update(id: number, request: CreatePetRequest): Promise<void> {
        const petExists = await this.petRepo.findPetById(id);

        if (petExists == null) {
            throw new Error("Pet does not exists");
        }

        const pet = new Pet(
            request.id,
            request.name,
            request.species,
            request.carry,
            request.weight,
            request.date_of_birth,
            Number(request.tutorId),
        );

        await this.petRepo.updatePet(id, pet);
    }
}
