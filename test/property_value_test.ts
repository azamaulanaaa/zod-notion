import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import {
  PropertyValueCheckboxSchema,
  PropertyValueCreatedBySchema,
  PropertyValueCreatedTimeSchema,
  PropertyValueDateSchema,
  PropertyValueEmailSchema,
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

// NOTE: Reference https://developers.notion.com/reference/page-property-values#date
describe("PropertyValueDateSchema", () => {
  it("no error on valid examples", () => {
    const examples = [
      {
        "date": {
          "start": "2023-02-23",
        },
      },
      {
        "id": "M%3BBw",
        "type": "date",
        "date": {
          "start": "2023-02-07",
          "end": null,
          "time_zone": null,
        },
      },
    ];
    const error = PropertyValueDateSchema.array().safeParse(examples).error;
    expect(error).toBeUndefined();
  });
});

// NOTE: Reference https://developers.notion.com/reference/page-property-values#email
describe("PropertyValueEmailSchema", () => {
  it("no error on valid examples", () => {
    const examples = [
      {
        "email": "ada@makenotion.com",
      },
      {
        "id": "y%5C%5E_",
        "type": "email",
        "email": "ada@makenotion.com",
      },
    ];
    const error = PropertyValueEmailSchema.array().safeParse(examples).error;
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
