import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import {
  ParentBlockSchema,
  ParentDatabaseSchema,
  ParentPageSchema,
  ParentSchema,
  ParentWorkspaceSchema,
} from "@/parent.ts";

describe("ParentDatabaseSchema", () => {
  it("no error on valid example", () => {
    const error = ParentDatabaseSchema.safeParse({
      "type": "database_id",
      "database_id": "d9824bdc-8445-4327-be8b-5b47500af6ce",
    }).error;
    expect(error).toBeUndefined();
  });
});

describe("ParentPageSchema", () => {
  it("no error on valid example", () => {
    const error = ParentPageSchema.safeParse({
      "type": "page_id",
      "page_id": "59833787-2cf9-4fdf-8782-e53db20768a5",
    }).error;
    expect(error).toBeUndefined();
  });
});

describe("ParentWorkspaceSchema", () => {
  it("no error on valid example", () => {
    const error = ParentWorkspaceSchema.safeParse({
      "type": "workspace",
      "workspace": true,
    }).error;
    expect(error).toBeUndefined();
  });
});

describe("ParentBlockSchema", () => {
  it("no error on valid example", () => {
    const error = ParentBlockSchema.safeParse({
      "type": "block_id",
      "block_id": "7d50a184-5bbe-4d90-8f29-6bec57ed817b",
    }).error;
    expect(error).toBeUndefined();
  });
});

describe("ParentSchema", () => {
  it("no error on valid example", () => {
    const examples = [
      {
        "type": "database_id",
        "database_id": "d9824bdc-8445-4327-be8b-5b47500af6ce",
      },
      {
        "type": "page_id",
        "page_id": "59833787-2cf9-4fdf-8782-e53db20768a5",
      },
      {
        "type": "workspace",
        "workspace": true,
      },
      {
        "type": "block_id",
        "block_id": "7d50a184-5bbe-4d90-8f29-6bec57ed817b",
      },
    ];

    for (const example of examples) {
      const error = ParentSchema.safeParse(example).error;
      expect(error).toBeUndefined();
    }
  });
});
