import { Request, Response } from "express";
import { PetUseCase } from "./pet-use-case";

export class PetController {
    constructor(private useCase: PetUseCase) {}
    async create(request: Request, response: Response) {
        try {
            const { tutorId } = request.params;
            const { id, name, species, carry, weight, date_of_birth } =
                request.body;

            const result = await this.useCase.execute({
                id,
                name,
                species,
                carry,
                weight,
                date_of_birth,
                tutorId,
            });

            return response.status(201).json(result);
        } catch (err) {
            if (err instanceof Error) {
                return response.status(400).json({
                    message: err.message || "Unexpected error",
                });
            }
            return response.status(500).json({
                message: "Unexpected error",
            });
        }
    }

    async update(request: Request, response: Response) {
        try {
            const { petId, tutorId } = request.params;

            const { id, name, species, carry, weight, date_of_birth } =
                request.body;

            await this.useCase.update(Number(petId), {
                id,
                name,
                species,
                carry,
                weight,
                date_of_birth,
                tutorId,
            });

            return response.status(200).send();
        } catch (err) {
            if (err instanceof Error) {
                return response.status(400).json({
                    message: err.message || "Unexpected error",
                });
            }
            return response.status(500).json({
                message: "Unexpected error",
            });
        }
    }

    async delete(request: Request, response: Response) {
        try {
            const { petId } = request.params;

            await this.useCase.delete(Number(petId));

            return response.status(200).send();
        } catch (err) {
            if (err instanceof Error) {
                return response.status(400).json({
                    message: err.message || "Unexpected error",
                });
            }
            return response.status(500).json({
                message: "Unexpected error",
            });
        }
    }
}
