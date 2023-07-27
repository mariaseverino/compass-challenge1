import { TutorUseCase } from "./app/tutor/tutor-use-case";
import { TutorMongoRepository } from "./infra/tutor-mongo-repository";
import { Router } from "express";

import { TutorController } from "./app/tutor/tutor-controller";

const routes = Router();

const tutorMongoRepository = new TutorMongoRepository();
const tutorUseCase = new TutorUseCase(tutorMongoRepository);
const tutorController = new TutorController(tutorUseCase);

routes.post("/api/tutor", (request, response) => {
    return tutorController.create(request, response);
});

export default routes;
