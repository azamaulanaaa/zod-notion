import { z } from "zod";
import { TimeZoneSchema } from "@/base.ts";
import { RichTextSchema } from "@/rich_text.ts";
import { ObjectUserSchema } from "@/user.ts";
import { FileNotionSchema } from "@/file.ts";
import { FileExternalSchema } from "@/file.ts";
import { EmojiBasicSchema, EmojiCustomSchema } from "@/emoji.ts";

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
  created_by: ObjectUserSchema,
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

const PropertyValueFilesBaseSchema = PropertyValueBaseSchema.extend({
  type: z.literal("files").optional().default("files"),
});
export const PropertyValueFilesNotionSchema = PropertyValueFilesBaseSchema
  .extend({
    files: FileNotionSchema.extend({
      name: z.string(),
      type: FileNotionSchema.shape.type.optional().default("file"),
    }).array(),
  });
export const PropertyValueFilesExternalSchema = PropertyValueFilesBaseSchema
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

const PropertyValueFormulaBaseSchema = PropertyValueBaseSchema.extend({
  type: z.literal("formula").optional().default("formula"),
});
export const PropertyValueFormulaStringSchema = PropertyValueFormulaBaseSchema
  .extend({
    formula: z.object({
      type: z.literal("string"),
      string: z.string().nullable(),
    }),
  });
export const PropertyValueFormulaDateSchema = PropertyValueFormulaBaseSchema
  .extend({
    formula: z.object({
      type: z.literal("date"),
      date: PropertyValueDateSchema.nullable(),
    }),
  });
export const PropertyValueFormulaNumberSchema = PropertyValueFormulaBaseSchema
  .extend({
    formula: z.object({
      type: z.literal("number"),
      number: z.number().nullable(),
    }),
  });
export const PropertyValueFormulaBooleanSchema = PropertyValueFormulaBaseSchema
  .extend({
    formula: z.object({
      type: z.literal("boolean"),
      boolean: z.boolean().nullable(),
    }),
  });
export const PropertyValueFormulaSchema = z.union([
  PropertyValueFormulaStringSchema,
  PropertyValueFormulaDateSchema,
  PropertyValueFormulaNumberSchema,
  PropertyValueFormulaBooleanSchema,
]);

const PropertyValueIconBaseSchema = PropertyValueBaseSchema.extend({
  type: z.literal("icon").optional().default("icon"),
});
export const PropertyValueIconEmojiBasicSchema = PropertyValueIconBaseSchema
  .extend({
    icon: EmojiBasicSchema,
  });
export const PropertyValueIconEmojiCustomSchema = PropertyValueIconBaseSchema
  .extend({
    icon: EmojiCustomSchema,
  });
export const PropertyValueIconFileNotionSchema = PropertyValueIconBaseSchema
  .extend({
    icon: FileNotionSchema,
  });
export const PropertyValueIconFileExternalSchema = PropertyValueIconBaseSchema
  .extend({
    icon: FileExternalSchema,
  });
export const PropertyValueIconSchema = z.union([
  PropertyValueIconEmojiBasicSchema,
  PropertyValueIconEmojiCustomSchema,
  PropertyValueIconFileNotionSchema,
  PropertyValueIconFileExternalSchema,
]);

export const PropertyValueLastEditedBySchema = PropertyValueBaseSchema.extend({
  type: z.literal("last_edited_by").optional().default("last_edited_by"),
  last_edited_by: ObjectUserSchema,
});

export const PropertyValueLastEditedTimeSchema = PropertyValueBaseSchema.extend(
  {
    type: z.literal("last_edited_time").optional().default("last_edited_time"),
    last_edited_time: z.coerce.date(),
  },
);

export const PropertyValueTitleSchema = PropertyValueBaseSchema.extend({
  type: z.literal("title"),
  title: RichTextSchema.array(),
});
