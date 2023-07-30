import { Types } from "mongoose";

export class Pet {
    constructor(
        public id: number,
        public name: string,
        public species: string,
        public carry: string,
        public weight: number,
        public date_of_birth: string,
        public tutor: Number,
    ) {}
}
