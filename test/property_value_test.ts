import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import {
  PropertyValueDateSchema,
  PropertyValueTitleSchema,
} from "@/property_value.ts";

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
