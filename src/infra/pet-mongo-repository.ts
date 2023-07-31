import { CreatePetResponse } from "../entities/pet/pet-dto";
import PetModel from "../entities/pet/pet-model";
import { PetRepository } from "../entities/pet/pet-repository";
import { Pet } from "../entities/pet/pet-entity";

export class PetMongoRepository implements PetRepository {
    async deletePet(id: number): Promise<void> {
        await PetModel.where({ id }).deleteOne();
    }
    async updatePet(id: number, pet: Pet): Promise<void> {
        await PetModel.where({ id }).updateOne(pet);
    }
    async findPetById(id: number): Promise<Pet | null> {
        const pet = await PetModel.findOne({ id });

        return pet;
    }
    async savePet(pet: Pet): Promise<CreatePetResponse> {
        const newPet = await PetModel.create(pet);
        return newPet;
    }
}
