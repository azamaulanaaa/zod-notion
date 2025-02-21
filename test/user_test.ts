import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import {
  ObjectFullUserBotSchema,
  ObjectFullUserPersonSchema,
  ObjectFullUserSchema,
  ObjectPartialUserSchema,
} from "@/user.ts";

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

// NOTE: Reference https://developers.notion.com/reference/user
describe("ObjectFullUserPersonSchema", () => {
  it("no error on valid examples", () => {
    const examples = [{
      object: "user",
      id: "e79a0b74-3aba-4149-9f74-0bb5791a6ee6",
      type: "person",
      name: "Avocado Lovelace",
      avatar_url:
        "https://secure.notion-static.com/e6a352a8-8381-44d0-a1dc-9ed80e62b53d.jpg",
      person: { email: "avo@example.org" },
    }];
    const error = ObjectFullUserPersonSchema.array().safeParse(examples).error;
    expect(error).toBeUndefined();
  });
});

// NOTE: Reference https://developers.notion.com/reference/user
describe("ObjectFullUserBotSchema", () => {
  it("no error on valid examples", () => {
    const examples = [{
      object: "user",
      id: "e79a0b74-3aba-4149-9f74-0bb5791a6ee6",
      type: "bot",
      name: "Avocado Lovelace",
      avatar_url:
        "https://secure.notion-static.com/e6a352a8-8381-44d0-a1dc-9ed80e62b53d.jpg",
      bot: {
        owner: {
          type: "workspace",
          workspace: true,
        },
        workspace_name: "Ada Lovelace's Notion",
      },
    }];
    const error = ObjectFullUserBotSchema.array().safeParse(examples).error;
    expect(error).toBeUndefined();
  });
});

// NOTE: Reference https://developers.notion.com/reference/user
describe("ObjectFullUserSchema", () => {
  it("no error on valid examples", () => {
    const examples = [{
      object: "user",
      id: "e79a0b74-3aba-4149-9f74-0bb5791a6ee6",
      type: "person",
      name: "Avocado Lovelace",
      avatar_url:
        "https://secure.notion-static.com/e6a352a8-8381-44d0-a1dc-9ed80e62b53d.jpg",
      person: { email: "avo@example.org" },
    }, {
      object: "user",
      id: "e79a0b74-3aba-4149-9f74-0bb5791a6ee6",
      type: "bot",
      name: "Avocado Lovelace",
      avatar_url:
        "https://secure.notion-static.com/e6a352a8-8381-44d0-a1dc-9ed80e62b53d.jpg",
      bot: {
        owner: {
          type: "workspace",
          workspace: true,
        },
        workspace_name: "Ada Lovelace's Notion",
      },
    }];
    const error = ObjectFullUserSchema.array().safeParse(examples).error;
    expect(error).toBeUndefined();
  });
});
