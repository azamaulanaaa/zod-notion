import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import {
  PropertyValueCheckboxSchema,
  PropertyValueCreatedBySchema,
  PropertyValueCreatedTimeSchema,
  PropertyValueDateSchema,
  PropertyValueEmailSchema,
  PropertyValueFilesSchema,
  PropertyValueFormulaSchema,
  PropertyValueIconSchema,
  PropertyValueLastEditedBySchema,
  PropertyValueLastEditedTimeSchema,
  PropertyValueMultiSelectSchema,
  PropertyValueNumberSchema,
  PropertyValuePeopleSchema,
  PropertyValuePhoneNumberSchema,
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

// NOTE: Reference https://developers.notion.com/reference/page-property-values#files
describe("PjopertyValueFilesSchema", () => {
  it("no error on valid examples", () => {
    const examples = [
      {
        "files": [
          {
            "name": "Project Alpha blueprint",
            "external": {
              "url":
                "https://www.figma.com/file/g7eazMtXnqON4i280CcMhk/project-alpha-blueprint?node-id=0%3A1&t=nXseWIETQIgv31YH-1",
            },
          },
        ],
      },
      {
        "id": "tJPS",
        "type": "files",
        "files": [
          {
            "name": "Project blueprint",
            "type": "external",
            "external": {
              "url":
                "https://www.figma.com/file/g7eazMtXnqON4i280CcMhk/project-alpha-blueprint?node-id=0%3A1&t=nXseWIETQIgv31YH-1",
            },
          },
        ],
      },
    ];
    const error = PropertyValueFilesSchema.array().safeParse(examples).error;
    expect(error).toBeUndefined();
  });
});

// NOTE: Reference https://developers.notion.com/reference/page-property-values#formula
describe("PropertyValueFormulaSchema", () => {
  it("no error on valid examples", () => {
    const examples = [
      {
        "id": "CSoE",
        "type": "formula",
        "formula": {
          "type": "number",
          "number": 56,
        },
      },
    ];
    const error = PropertyValueFormulaSchema.array().safeParse(examples).error;
    expect(error).toBeUndefined();
  });
});

// NOTE: Reference https://developers.notion.com/reference/page-property-values#icon
describe("PropertyValueIconSchema", () => {
  it("no error on valid examples", () => {
    const examples = [
      {
        "icon": {
          "type": "emoji",
          "emoji": "😀",
        },
      },
      {
        "icon": {
          "type": "file",
          "file": {
            "url":
              "https://local-files-secure.s3.us-west-2.amazonaws.com/13950b26-c203-4f3b-b97d-93ec06319565/a7084c4c-3e9a-4324-af99-34e0cb7f8fe7/notion.jpg?...",
            "expiry_time": "2024-12-03T19:44:56.932Z",
          },
        },
      },
    ];
    const error = PropertyValueIconSchema.array().safeParse(examples).error;
    expect(error).toBeUndefined();
  });
});

// NOTE: Reference https://developers.notion.com/reference/page-property-values#last-edited-by
describe("PropertyValueLastEditedBySchema", () => {
  it("no error on valid examples", () => {
    const examples = [
      {
        "id": "uGNN",
        "type": "last_edited_by",
        "last_edited_by": {
          "object": "user",
          "id": "9188c6a5-7381-452f-b3dc-d4865aa89bdf",
          "name": "Test Integration",
          "avatar_url":
            "https://s3-us-west-2.amazonaws.com/public.notion-static.com/3db373fe-18f6-4a3c-a536-0f061cb9627f/leplane.jpeg",
          "type": "bot",
          "bot": {},
        },
      },
    ];
    const error =
      PropertyValueLastEditedBySchema.array().safeParse(examples).error;
    expect(error).toBeUndefined();
  });
});

// NOTE: Reference https://developers.notion.com/reference/page-property-values#last-edited-time
describe("PropertyValueLastEditedTimeSchema", () => {
  const examples = [{
    "id": "%3Defk",
    "type": "last_edited_time",
    "last_edited_time": "2023-02-24T21:06:00.000Z",
  }];
  const error =
    PropertyValueLastEditedTimeSchema.array().safeParse(examples).error;
  expect(error).toBeUndefined();
});

// NOTE: Reference https://developers.notion.com/reference/page-property-values#multi-select
describe("PropertyValueMultiSelectSchema", () => {
  const examples = [
    {
      "multi_select": [
        {
          "name": "TypeScript",
        },
        {
          "name": "Python",
        },
      ],
    },
    {
      "id": "QyRn",
      "name": "Programming language",
      "type": "multi_select",
      "multi_select": [
        {
          "id": "tC;=",
          "name": "TypeScript",
          "color": "purple",
        },
        {
          "id": "e4413a91-9f84-4c4a-a13d-5b4b3ef870bb",
          "name": "JavaScript",
          "color": "red",
        },
        {
          "id": "fc44b090-2166-40c8-8c58-88f2d8085ec0",
          "name": "Python",
          "color": "gray",
        },
      ],
    },
  ];
  const error =
    PropertyValueMultiSelectSchema.array().safeParse(examples).error;
  expect(error).toBeUndefined();
});

// NOTE: Reference https://developers.notion.com/reference/page-property-values#number
// NOTE: docs does not examplain how to handle number format
describe("PropertyValueNumberSchema", () => {
  it("no error on valid examples", () => {
    const examples = [
      {
        "number": 42,
      },
      {
        "id": "WPj%5E",
        "name": "Number of subscribers",
        "type": "number",
        "number": {
          "format": "number",
        },
      },
    ];
    const error = PropertyValueNumberSchema.array().safeParse(examples).error;
    expect(error).toBeUndefined();
  });
});

// NOTE: Reference https://developers.notion.com/reference/page-property-values#people
describe("PropertyValuePeopleSchema", () => {
  it("no error on valid examples", () => {
    const examples = [
      {
        "people": [{
          "object": "user",
          "id": "c2f20311-9e54-4d11-8c79-7398424ae41e",
        }],
      },
      {
        "id": "%7BLUX",
        "type": "people",
        "people": [
          {
            "object": "user",
            "id": "c2f20311-9e54-4d11-8c79-7398424ae41e",
            "name": "Kimberlee Johnson",
            "avatar_url": null,
            "type": "person",
            "person": {
              "email": "hello@kimberlee.dev",
            },
          },
        ],
      },
    ];
    const error = PropertyValuePeopleSchema.array().safeParse(examples).error;
    expect(error).toBeUndefined();
  });
});

// NOTE: Reference https://developers.notion.com/reference/page-property-values#phone-number
// NOTE: example given by the docs is error, so require some adjustment
describe("PropertyValuePhoneNumberSchema", () => {
  const examples = [
    {
      "phone_number": "415-202-4776",
    },
    {
      "id": "%5DKhQ",
      "name": "Example phone number property",
      "type": "phone_number",
      "phone_number": "415-202-4776",
    },
  ];
  const error =
    PropertyValuePhoneNumberSchema.array().safeParse(examples).error;
  expect(error).toBeUndefined();
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
