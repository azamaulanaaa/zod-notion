import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import {
  AnnotationSchema,
  MentionDatabaseSchema,
  MentionDateSchema,
  MentionLinkPreviewSchema,
  MentionPageSchema,
  MentionTemplateSchema,
  MentionTemplateValueDateSchema,
  MentionTemplateValueSchema,
  MentionTemplateValueUserSchema,
  MentionUserSchema,
  RichTextEquationSchema,
  RichTextMentionSchema,
  RichTextTextSchema,
} from "@/rich_text.ts";

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

describe("MentionTemplateValueDateSchema", () => {
  it("no error on valid examples", () => {
    const examples = [
      {
        "type": "template_mention_date",
        "template_mention_date": "today",
      },
    ];
    const error =
      MentionTemplateValueDateSchema.array().safeParse(examples).error;
    expect(error).toBeUndefined();
  });
});

describe("MentionTemplateValueUserSchema", () => {
  it("no error on valid examples", () => {
    const examples = [
      {
        "type": "template_mention_user",
        "template_mention_user": "me",
      },
    ];
    const error =
      MentionTemplateValueUserSchema.array().safeParse(examples).error;
    expect(error).toBeUndefined();
  });
});

describe("MentionTemplateValueSchema", () => {
  it("no error on valid examples", () => {
    const examples = [
      {
        "type": "template_mention_date",
        "template_mention_date": "today",
      },
      {
        "type": "template_mention_user",
        "template_mention_user": "me",
      },
    ];
    const error = MentionTemplateValueSchema.array().safeParse(examples).error;
    expect(error).toBeUndefined();
  });
});

describe("MentionTemplateSchema", () => {
  it("no error on valid examples", () => {
    const examples = [
      {
        "type": "template_mention",
        "template_mention": {
          "type": "template_mention_date",
          "template_mention_date": "today",
        },
      },
      {
        "type": "template_mention",
        "template_mention": {
          "type": "template_mention_user",
          "template_mention_user": "me",
        },
      },
    ];
    const error = MentionTemplateSchema.array().safeParse(examples).error;
    expect(error).toBeUndefined();
  });
});

describe("MentionDatabaseSchema", () => {
  it("no error on valid examples", () => {
    const examples = [
      {
        "type": "database",
        "database": {
          "id": "a1d8501e-1ac1-43e9-a6bd-ea9fe6c8822b",
        },
      },
    ];
    const error = MentionDatabaseSchema.array().safeParse(examples).error;
    expect(error).toBeUndefined();
  });
});

describe("MentionDateSchema", () => {
  it("no error on valid examples", () => {
    const examples = [
      {
        "type": "date",
        "date": {
          "start": "2022-12-16",
          "end": null,
        },
      },
    ];
    const error = MentionDateSchema.array().safeParse(examples).error;
    expect(error).toBeUndefined();
  });
});

describe("MentionLinkPreviewSchema", () => {
  it("no error on valid examples", () => {
    const examples = [
      {
        "type": "link_preview",
        "link_preview": {
          "url":
            "https://workspace.slack.com/archives/C04PF0F9QSD/z1671139297838409?thread_ts=1671139274.065079&cid=C03PF0F9QSD",
        },
      },
    ];
    const error = MentionLinkPreviewSchema.array().safeParse(examples).error;
    expect(error).toBeUndefined();
  });
});

describe("MentionPageSchema", () => {
  it("no error on valid examples", () => {
    const examples = [
      {
        "type": "page",
        "page": {
          "id": "3c612f56-fdd0-4a30-a4d6-bda7d7426309",
        },
      },
    ];
    const error = MentionPageSchema.array().safeParse(examples).error;
    expect(error).toBeUndefined();
  });
});

describe("MentionUserSchema", () => {
  it("no error on valid examples", () => {
    const examples = [
      {
        "type": "user",
        "user": {
          "object": "user",
          "id": "b2e19928-b427-4aad-9a9d-fde65479b1d9",
        },
      },
    ];
    const error = MentionUserSchema.array().safeParse(examples).error;
    expect(error).toBeUndefined();
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

describe("RichTextEquationSchema", () => {
  it("no error on valid examples", () => {
    const examples = [
      {
        "type": "equation",
        "equation": {
          "expression": "E = mc^2",
        },
        "annotations": {
          "bold": false,
          "italic": false,
          "strikethrough": false,
          "underline": false,
          "code": false,
          "color": "default",
        },
        "plain_text": "E = mc^2",
        "href": null,
      },
    ];
    for (const example of examples) {
      const error = RichTextEquationSchema.safeParse(example).error;
      expect(error).toBeUndefined();
    }
  });
});

describe("RichTextMentionSchema", () => {
  it("no error on valid examples", () => {
    const examples = [
      {
        "type": "mention",
        "mention": {
          "type": "database",
          "database": {
            "id": "a1d8501e-1ac1-43e9-a6bd-ea9fe6c8822b",
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
        "plain_text": "Database with test things",
        "href": "https://www.notion.so/a1d8501e1ac143e9a6bdea9fe6c8822b",
      },
      {
        "type": "mention",
        "mention": {
          "type": "date",
          "date": {
            "start": "2022-12-16",
            "end": null,
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
        "plain_text": "2022-12-16",
        "href": null,
      },
      {
        "type": "mention",
        "mention": {
          "type": "link_preview",
          "link_preview": {
            "url":
              "https://workspace.slack.com/archives/C04PF0F9QSD/z1671139297838409?thread_ts=1671139274.065079&cid=C03PF0F9QSD",
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
        "plain_text":
          "https://workspace.slack.com/archives/C04PF0F9QSD/z1671139297838409?thread_ts=1671139274.065079&cid=C03PF0F9QSD",
        "href":
          "https://workspace.slack.com/archives/C04PF0F9QSD/z1671139297838409?thread_ts=1671139274.065079&cid=C03PF0F9QSD",
      },
      {
        "type": "mention",
        "mention": {
          "type": "page",
          "page": {
            "id": "3c612f56-fdd0-4a30-a4d6-bda7d7426309",
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
        "plain_text": "This is a test page",
        "href": "https://www.notion.so/3c612f56fdd04a30a4d6bda7d7426309",
      },
      {
        "type": "mention",
        "mention": {
          "type": "template_mention",
          "template_mention": {
            "type": "template_mention_date",
            "template_mention_date": "today",
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
        "plain_text": "@Today",
        "href": null,
      },
      {
        "type": "mention",
        "mention": {
          "type": "template_mention",
          "template_mention": {
            "type": "template_mention_user",
            "template_mention_user": "me",
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
        "plain_text": "@Me",
        "href": null,
      },
      {
        "type": "mention",
        "mention": {
          "type": "user",
          "user": {
            "object": "user",
            "id": "b2e19928-b427-4aad-9a9d-fde65479b1d9",
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
        "plain_text": "@Anonymous",
        "href": null,
      },
    ];
    const error = RichTextMentionSchema.array().safeParse(examples).error;
    expect(error).toBeUndefined();
  });
});
