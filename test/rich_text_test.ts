import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { AnnotationSchema, RichTextTextSchema } from "@/rich_text.ts";

describe("AnnotationSchema", () => {
  it("no error on valid examples", () => {
    const examples = [
      {
        "bold": false,
        "italic": false,
        "strikethrough": false,
        "underline": false,
        "code": false,
        "color": "default",
      },
    ];
    for (const example of examples) {
      const error = AnnotationSchema.safeParse(example).error;
      expect(error).toBeUndefined();
    }
  });
});

describe("RichTextTextSchema", () => {
  it("no error on valid examples", () => {
    const examples = [
      {
        "type": "text",
        "text": {
          "content": "This is an ",
          "link": null,
        },
        "annotations": {
          "bold": false,
          "italic": false,
          "strikethrough": false,
          "underline": false,
          "code": false,
          "color": "default",
        },
        "plain_text": "This is an ",
        "href": null,
      },
      {
        "type": "text",
        "text": {
          "content": "inline link",
          "link": {
            "url": "https://developers.notion.com/",
          },
        },
        "annotations": {
          "bold": false,
          "italic": false,
          "strikethrough": false,
          "underline": false,
          "code": false,
          "color": "default",
        },
        "plain_text": "inline link",
        "href": "https://developers.notion.com/",
      },
    ];
    for (const example of examples) {
      const error = RichTextTextSchema.safeParse(example).error;
      expect(error).toBeUndefined();
    }
  });
});
