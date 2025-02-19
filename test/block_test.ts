import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { ObjectPartialBlockSchema } from "@/block.ts";

describe("ObjectPartialBlockSchema", () => {
  it("have `object` property", () => {
    const success = ObjectPartialBlockSchema.safeParse({
      id: "59833787-2cf9-4fdf-8782-e53db20768a5",
    }).success;
    expect(success).toBeFalsy();
  });

  it("have `id` property", () => {
    const success = ObjectPartialBlockSchema.safeParse({
      object: "user",
    }).success;
    expect(success).toBeFalsy();
  });

  it('`object` property value must be "block"', () => {
    const success = ObjectPartialBlockSchema.safeParse({
      object: "page",
      id: "59833787-2cf9-4fdf-8782-e53db20768a5",
    }).success;
    expect(success).toBeFalsy();
  });

  it("no error on valid examples", () => {
    const success = ObjectPartialBlockSchema.safeParse({
      object: "block",
      id: "59833787-2cf9-4fdf-8782-e53db20768a5",
    }).success;
    expect(success).toBeTruthy();
  });
});
