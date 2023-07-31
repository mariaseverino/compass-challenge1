import { describe, expect, it } from "vitest";

import { TutorMongoRepository } from "../../infra/tutor-mongo-repository";
import { PetUseCase } from "./pet-use-case";
import { PetMongoRepository } from "../../infra/pet-mongo-repository";
import { Pet } from "../../entities/pet/pet-entity";
import { randomUUID } from "crypto";

describe("Create pet", () => {
    it("Should be possible to create a pet", async () => {
        const sut = new PetUseCase(
            new PetMongoRepository(),
            new TutorMongoRepository(),
        );

        const tutorId = "1";

        const pet = new Pet(
            99,
            "Lilo2",
            "dog",
            "p",
            5,
            "1993-12-12 10:10",
            Number(tutorId),
        );

        const result = await sut.execute({
            id: pet.id,
            name: pet.name,
            species: pet.species,
            carry: pet.carry,
            weight: pet.weight,
            date_of_birth: pet.date_of_birth,
            tutorId,
        });

        expect(result._id.toHexString()).toBeTypeOf("string");
    });

    it("Shouldn't be possible to create a pet if his tutor does not exists", async () => {
        const sut = new PetUseCase(
            new PetMongoRepository(),
            new TutorMongoRepository(),
        );

        const tutorId = "55";

        const pet = new Pet(
            2,
            "Lilo2",
            "dog",
            "p",
            5,
            "1993-12-12 10:10",
            Number(tutorId),
        );

        expect(async () => {
            return await sut.execute({
                id: pet.id,
                name: pet.name,
                species: pet.species,
                carry: pet.carry,
                weight: pet.weight,
                date_of_birth: pet.date_of_birth,
                tutorId,
            });
        }).rejects.toThrowError();
    });
});
