import { CreatePetResponse } from "./pet-dto";
import { Pet } from "./pet-entity";

export interface PetRepository {
    savePet(pet: Pet): Promise<CreatePetResponse>;
    findPetById(id: number): Promise<Pet | null>;
    updatePet(id: number, pet: Pet): Promise<void>;
    deletePet(id: number): Promise<void>;
}
