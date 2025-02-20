import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { EmojiBasicSchema, EmojiCustomSchema, EmojiSchema } from "@/emoji.ts";

describe("EmojiBasicSchema", () => {
  it("no error on valid examples", () => {
    const examples = [
      {
        "type": "emoji",
        "emoji": "🥑",
      },
      {
        "type": "emoji",
        "emoji": "🥨",
      },
      {
        "type": "emoji",
        "emoji": "😻",
      },
    ];
    for (const example of examples) {
      const error = EmojiBasicSchema.safeParse(example).error;
      expect(error).toBeUndefined();
    }
  });
});

describe("EmojiCustomSchema", () => {
  it("no error on valid examples", () => {
    const examples = [{
      "type": "custom_emoji",
      "custom_emoji": {
        "id": "45ce454c-d427-4f53-9489-e5d0f3d1db6b",
        "name": "bufo",
        "url":
          "https://s3-us-west-2.amazonaws.com/public.notion-static.com/865e85fc-7442-44d3-b323-9b03a2111720/3c6796979c50f4aa.png",
      },
    }, {
      "type": "custom_emoji",
      "custom_emoji": {
        "id": "45ce454c-d427-4f53-9489-e5d0f3d1db6b",
        "name": "bufo",
        "url":
          "https://s3-us-west-2.amazonaws.com/public.notion-static.com/865e85fc-7442-44d3-b323-9b03a2111720/3c6796979c50f4aa.png",
      },
    }];
    for (const example of examples) {
      const error = EmojiCustomSchema.safeParse(example).error;
      expect(error).toBeUndefined();
    }
  });
});

describe("EmojiSchema", () => {
  it("no error on valid examples", () => {
    const examples = [
      {
        "type": "emoji",
        "emoji": "🥑",
      },
      {
        "type": "emoji",
        "emoji": "🥨",
      },
      {
        "type": "emoji",
        "emoji": "😻",
      },
      {
        "type": "custom_emoji",
        "custom_emoji": {
          "id": "45ce454c-d427-4f53-9489-e5d0f3d1db6b",
          "name": "bufo",
          "url":
            "https://s3-us-west-2.amazonaws.com/public.notion-static.com/865e85fc-7442-44d3-b323-9b03a2111720/3c6796979c50f4aa.png",
        },
      },
      {
        "type": "custom_emoji",
        "custom_emoji": {
          "id": "45ce454c-d427-4f53-9489-e5d0f3d1db6b",
          "name": "bufo",
          "url":
            "https://s3-us-west-2.amazonaws.com/public.notion-static.com/865e85fc-7442-44d3-b323-9b03a2111720/3c6796979c50f4aa.png",
        },
      },
    ];
    for (const example of examples) {
      const error = EmojiSchema.safeParse(example).error;
      expect(error).toBeUndefined();
    }
  });
});
