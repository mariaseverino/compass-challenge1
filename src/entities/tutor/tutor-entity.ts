import { addYears, parseISO } from "date-fns";

export class Tutor {
    constructor(
        public id: number,
        public name: string,
        public phone: string,
        public email: string,
        public date_of_birth: string,
        public zip_code: string,
    ) {
        const dateOfBirth = parseISO(date_of_birth);
        const legalAgeDate = addYears(dateOfBirth, 18);
        const today = new Date();

        if (today <= legalAgeDate) {
            throw new Error("Invalid date of birth");
        }
    }
}
