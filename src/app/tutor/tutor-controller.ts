import { Request, Response } from "express";

import { TutorUseCase } from "./tutor-use-case";

export class TutorController {
    constructor(private useCase: TutorUseCase) {}
    async create(request: Request, response: Response) {
        try {
            const { id, name, phone, email, date_of_birth, zip_code } =
                request.body;

            const result = await this.useCase.execute({
                id,
                name,
                phone,
                email,
                date_of_birth,
                zip_code,
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

    async list(request: Request, response: Response) {
        try {
            const result = await this.useCase.list();

            return response.status(200).json(result);
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
            const { id, name, phone, email, date_of_birth, zip_code } =
                request.body;

            await this.useCase.update({
                id,
                name,
                phone,
                email,
                date_of_birth,
                zip_code,
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
            const { id } = request.params;

            await this.useCase.delete(Number(id));

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
