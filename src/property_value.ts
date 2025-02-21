import { z } from "zod";
import { TimeZoneSchema } from "@/base.ts";
import { RichTextSchema } from "@/rich_text.ts";
import { ObjectPartialUserSchema } from "@/user.ts";
import { FileNotionSchema } from "@/file.ts";
import { FileExternalSchema } from "@/file.ts";

const PropertyValueBaseSchema = z.object({
  id: z.string().optional(),
  type: z.string(),
});

export const PropertyValueCheckboxSchema = PropertyValueBaseSchema.extend({
  type: z.literal("checkbox").optional().default("checkbox"),
  checkbox: z.boolean(),
});

export const PropertyValueCreatedBySchema = PropertyValueBaseSchema.extend({
  type: z.literal("created_by").optional().default("created_by"),
  created_by: ObjectPartialUserSchema,
});

export const PropertyValueCreatedTimeSchema = PropertyValueBaseSchema.extend({
  type: z.literal("created_time").optional().default("created_time"),
  created_time: z.coerce.date(),
});

export const PropertyValueDateSchema = PropertyValueBaseSchema.extend({
  type: z.literal("date").optional().default("date"),
  date: z.object({
    start: z.coerce.date(),
    end: z.coerce.date().optional().nullable(),
    time_zone: TimeZoneSchema.optional().nullable(),
  }),
});

export const PropertyValueEmailSchema = PropertyValueBaseSchema.extend({
  type: z.literal("email").optional().default("email"),
  email: z.string().email(),
});

const PropertyValueFormulaBaseSchema = PropertyValueBaseSchema.extend({
  type: z.literal("files").optional().default("files"),
});
export const PropertyValueFilesNotionSchema = PropertyValueFormulaBaseSchema
  .extend({
    files: FileNotionSchema.extend({
      name: z.string(),
      type: FileNotionSchema.shape.type.optional().default("file"),
    }).array(),
  });
export const PropertyValueFilesExternalSchema = PropertyValueFormulaBaseSchema
  .extend({
    files: FileExternalSchema.extend({
      name: z.string(),
      type: FileExternalSchema.shape.type.optional().default("external"),
    }).array(),
  });
export const PropertyValueFilesSchema = z.union([
  PropertyValueFilesNotionSchema,
  PropertyValueFilesExternalSchema,
]);

export const PropertyValueTitleSchema = PropertyValueBaseSchema.extend({
  type: z.literal("title"),
  title: RichTextSchema.array(),
});
