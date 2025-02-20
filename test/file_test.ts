import { describe, it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { FileExternalSchema, FileNotionSchema, FileSchema } from "@/file.ts";

describe("FileExternalSchema", () => {
  it("no error on valid example", () => {
    const error = FileExternalSchema.safeParse({
      "type": "external",
      "external": {
        "url":
          "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80",
      },
    }).error;
    expect(error).toBeUndefined();
  });
});

describe("FileNotionSchema", () => {
  it("no error on valid example", () => {
    const error = FileNotionSchema.safeParse({
      "type": "file",
      "file": {
        "url":
          "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/fa6c03f0-e608-45d0-9327-4cd7a5e56e71/TestFile.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221215T002012Z&X-Amz-Expires=3600&X-Amz-Signature=bf13ca59f618077852298cb92aedc4dd1becdc961c31d73cbc030ef93f2853c4&X-Amz-SignedHeaders=host&x-id=GetObject",
        "expiry_time": "2022-12-15T01:20:12.928Z",
      },
    }).error;
    expect(error).toBeUndefined();
  });
});

describe("FileSchema", () => {
  const examples = [
    {
      "type": "external",
      "external": {
        "url":
          "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80",
      },
    },
    {
      "type": "file",
      "file": {
        "url":
          "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/fa6c03f0-e608-45d0-9327-4cd7a5e56e71/TestFile.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221215T002012Z&X-Amz-Expires=3600&X-Amz-Signature=bf13ca59f618077852298cb92aedc4dd1becdc961c31d73cbc030ef93f2853c4&X-Amz-SignedHeaders=host&x-id=GetObject",
        "expiry_time": "2022-12-15T01:20:12.928Z",
      },
    },
  ];
  for (const example of examples) {
    const error = FileSchema.safeParse(example).error;
    expect(error).toBeUndefined();
  }
});
