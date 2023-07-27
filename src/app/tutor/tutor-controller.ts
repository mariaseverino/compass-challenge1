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
        } catch (err: any) {
            return response.status(400).json({
                message: err.message || "Unexpected error",
            });
        }
    }
}