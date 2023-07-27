import { expect, test } from "vitest";

import { Tutor } from "./tutor-entity";

test("Should be possible to create a tutor", () => {
    const tutor = new Tutor(
        1,
        "Lilo",
        "11111111111",
        "email",
        "1999-05-02 10:10",
        "37470000",
    );

    expect(tutor).toBeInstanceOf(Tutor);
});

test("Shouldn't be possible to create a tutor if he's not of age", () => {
    expect(() => {
        return new Tutor(
            2,
            "Lilo",
            "11111111111",
            "email",
            "2020-05-02 10:10",
            "37470000",
        );
    }).toThrow();
});
