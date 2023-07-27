import { randomUUID } from "crypto";
import { describe, expect, it } from "vitest";

import { Tutor } from "../../entities/tutor/tutor-entity";
import { TutorMongoRepository } from "../../infra/tutor-mongo-repository";
import { TutorUseCase } from "./tutor-use-case";

describe("Create tutor", () => {
    it("Should be possible to create a tutor", async () => {
        const sut = new TutorUseCase(new TutorMongoRepository());

        const tutor = new Tutor(
            Number(randomUUID()),
            "Jonas",
            "85989323895",
            "jonas@paidepet.com",
            "1993-12-12 10:10",
            "61760000",
        );

        const result = await sut.execute({
            id: tutor.id,
            name: tutor.name,
            phone: tutor.phone,
            email: tutor.email,
            date_of_birth: tutor.date_of_birth,
            zip_code: tutor.zip_code,
        });

        expect(result._id.toHexString()).toBeTypeOf("string");
    });

    it("Shouldn't be possible to create a tutor that already exists", async () => {
        const sut = new TutorUseCase(new TutorMongoRepository());

        const tutor = new Tutor(
            1,
            "Jonas",
            "85989323895",
            "jonas@paidepet.com",
            "1993-12-12 10:10",
            "61760000",
        );

        expect(async () => {
            return await sut.execute({
                id: tutor.id,
                name: tutor.name,
                phone: tutor.phone,
                email: tutor.email,
                date_of_birth: tutor.date_of_birth,
                zip_code: tutor.zip_code,
            });
        }).rejects.toThrowError();
    });
});
