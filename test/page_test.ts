import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { ObjectPartialPageSchema } from "@/page.ts";

describe("ObjectPartialPageSchema", () => {
  it("have `object` property", () => {
    const success = ObjectPartialPageSchema.safeParse({
      id: "59833787-2cf9-4fdf-8782-e53db20768a5",
    }).success;
    expect(success).toBeFalsy();
  });

  it("have `id` property", () => {
    const success = ObjectPartialPageSchema.safeParse({
      object: "user",
    }).success;
    expect(success).toBeFalsy();
  });

  it('`object` property value must be "page"', () => {
    const success = ObjectPartialPageSchema.safeParse({
      object: "user",
      id: "59833787-2cf9-4fdf-8782-e53db20768a5",
    }).success;
    expect(success).toBeFalsy();
  });

  it("no error on valid examples", () => {
    const success = ObjectPartialPageSchema.safeParse({
      object: "page",
      id: "59833787-2cf9-4fdf-8782-e53db20768a5",
    }).success;
    expect(success).toBeTruthy();
  });
});
