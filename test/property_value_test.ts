import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { PropertyValueDateSchema } from "@/property_value.ts";

describe("PropertyValueDateSchema", () => {
  it("no error on valid examples", () => {
    const examples = [
      {
        "date": {
          "start": "2021-05-11T11:00:00.000-04:00",
        },
      },
      {
        "date": {
          "start": "2021-04-26",
          "end": "2021-05-07",
        },
      },
      {
        "date": {
          "start": "2020-12-08T12:00:00Z",
          "time_zone": "America/New_York",
        },
      },
    ];
    for (const example of examples) {
      const error = PropertyValueDateSchema.safeParse(example).error;
      expect(error).toBeUndefined();
    }
  });
});
