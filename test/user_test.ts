import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { ObjectPartialUserSchema } from "@/user.ts";

describe("ObjectPartialUserSchema", () => {
  it("have `object` property", () => {
    const success = ObjectPartialUserSchema.safeParse({
      id: "59833787-2cf9-4fdf-8782-e53db20768a5",
    }).success;
    expect(success).toBeFalsy();
  });

  it("have `id` property", () => {
    const success = ObjectPartialUserSchema.safeParse({
      object: "user",
    }).success;
    expect(success).toBeFalsy();
  });

  it('`object` property value must be "user"', () => {
    const success = ObjectPartialUserSchema.safeParse({
      object: "page",
      id: "59833787-2cf9-4fdf-8782-e53db20768a5",
    }).success;
    expect(success).toBeFalsy();
  });

  it("no error on valid examples", () => {
    const success = ObjectPartialUserSchema.safeParse({
      object: "user",
      id: "59833787-2cf9-4fdf-8782-e53db20768a5",
    }).success;
    expect(success).toBeTruthy();
  });
});
