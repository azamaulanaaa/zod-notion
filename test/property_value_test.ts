import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import {
  PropertyValueCheckboxSchema,
  PropertyValueCreatedBySchema,
  PropertyValueCreatedTimeSchema,
  PropertyValueDateSchema,
  PropertyValueTitleSchema,
} from "@/property_value.ts";

// NOTE: Reference https://developers.notion.com/reference/page-property-values#checkbox
describe("PropertyValueCheckboxSchema", () => {
  it("no error on valid examples", () => {
    const examples = [
      {
        "checkbox": true,
      },
      {
        "id": "ZI%40W",
        "type": "checkbox",
        "checkbox": true,
      },
    ];
    const error = PropertyValueCheckboxSchema.array().safeParse(examples).error;
    expect(error).toBeUndefined();
  });
});

// NOTE: Reference https://developers.notion.com/reference/page-property-values#created-by
describe("PropertyValueCreatedBySchema", () => {
  it("no error on valid examples", () => {
    const examples = [
      {
        "created_by": {
          "object": "user",
          "id": "c2f20311-9e54-4d11-8c79-7398424ae41e",
        },
      },
    ];
    const error =
      PropertyValueCreatedBySchema.array().safeParse(examples).error;
    expect(error).toBeUndefined();
  });
});

// NOTE: https://developers.notion.com/reference/page-property-values#created-time
describe("PropertyValueCreatedTimeSchema", () => {
  it("no error on valid examples", () => {
    const examples = [
      {
        "id": "eB_%7D",
        "type": "created_time",
        "created_time": "2022-10-24T22:54:00.000Z",
      },
    ];
    const error =
      PropertyValueCreatedTimeSchema.array().safeParse(examples).error;
    expect(error).toBeUndefined();
  });
});

// NOTE: Reference https://developers.notion.com/reference/page-property-values#title
describe("PropertyValueTitleSchema", () => {
  it("no error on valid examples", () => {
    const examples = [
      {
        "id": "title",
        "type": "title",
        "title": [
          {
            "type": "text",
            "text": {
              "content": "A better title for the page",
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
            "plain_text": "This is also not done",
            "href": null,
          },
        ],
      },
    ];
    const error = PropertyValueTitleSchema.array().safeParse(examples).error;
    expect(error).toBeUndefined();
  });
});

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
