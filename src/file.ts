import { z } from "zod";

export const FileNotionSchema = z.object({
  type: z.literal("file"),
  file: z.object({
    url: z.string(),
    expiry_time: z.coerce.date(),
  }),
});
export const FileExternalSchema = z.object({
  type: z.literal("external"),
  external: z.object({
    url: z.string(),
  }),
});
export const FileSchema = z.discriminatedUnion("type", [
  FileNotionSchema,
  FileExternalSchema,
]);
