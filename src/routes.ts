import { TutorUseCase } from "./app/tutor/tutor-use-case";
import { TutorMongoRepository } from "./infra/tutor-mongo-repository";
import { Router } from "express";

import { TutorController } from "./app/tutor/tutor-controller";
import { PetMongoRepository } from "./infra/pet-mongo-repository";
import { PetUseCase } from "./app/pet/pet-use-case";
import { PetController } from "./app/pet/pet-controller";

const routes = Router();

const tutorMongoRepository = new TutorMongoRepository();
const tutorUseCase = new TutorUseCase(tutorMongoRepository);
const tutorController = new TutorController(tutorUseCase);

const petMongoRepository = new PetMongoRepository();
const petUseCase = new PetUseCase(petMongoRepository, tutorMongoRepository);
const petController = new PetController(petUseCase);

routes.post("/api/tutor", (request, response) => {
    return tutorController.create(request, response);
});

routes.get("/api/tutors", (request, response) => {
    return tutorController.list(request, response);
});

routes.put("/api/tutor/:id", (request, response) => {
    return tutorController.update(request, response);
});

routes.delete("/api/tutor/:id", (request, response) => {
    return tutorController.delete(request, response);
});

routes.post("/api/pet/:tutorId", (request, response) => {
    return petController.create(request, response);
});

routes.put("/api/pet/:petId/tutor/:tutorId", (request, response) => {
    return petController.update(request, response);
});

routes.delete("/api/pet/:petId/tutor/:tutorId", (request, response) => {
    return petController.delete(request, response);
});

export default routes;
