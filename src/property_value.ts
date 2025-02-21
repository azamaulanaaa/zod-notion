import { z } from "zod";
import { TimeZoneSchema } from "@/base.ts";
import { RichTextSchema } from "@/rich_text.ts";
import { ObjectPartialUserSchema } from "@/user.ts";

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

export const PropertyValueTitleSchema = PropertyValueBaseSchema.extend({
  type: z.literal("title"),
  title: RichTextSchema.array(),
});

export const PropertyValueDateSchema = z.object({
  date: z.object({
    start: z.coerce.date(),
    end: z.coerce.date().optional().nullable(),
    time_zone: TimeZoneSchema.optional().nullable(),
  }),
});
