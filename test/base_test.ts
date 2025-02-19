import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { ObjectBaseSchema } from "@/base.ts";

describe("ObjectBaseSchema", () => {
  it("have `object` property", () => {
    const success = ObjectBaseSchema.safeParse({
      id: "59833787-2cf9-4fdf-8782-e53db20768a5",
    }).success;
    expect(success).toBeFalsy();
  });

  it("have `id` property", () => {
    const success = ObjectBaseSchema.safeParse({
      object: "page",
    }).success;
    expect(success).toBeFalsy();
  });

  it("no error on valid examples", () => {
    const success = ObjectBaseSchema.safeParse({
      object: "page",
      id: "59833787-2cf9-4fdf-8782-e53db20768a5",
    }).success;
    expect(success).toBeTruthy();
  });
});
