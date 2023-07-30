import { CreatePetResponse } from "../entities/pet/pet-dto";
import PetModel from "../entities/pet/pet-model";
import { PetRepository } from "../entities/pet/pet-repository";
import { Pet } from "../entities/pet/pet-entity";

export class PetMongoRepository implements PetRepository {
    async findPetById(id: number): Promise<Pet | null> {
        const pet = await PetModel.findOne({ id });

        return pet;
    }
    async savePet(pet: Pet): Promise<CreatePetResponse> {
        const newPet = await PetModel.create(pet);
        return newPet;
    }
}
