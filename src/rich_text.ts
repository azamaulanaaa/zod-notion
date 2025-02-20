import { z } from "zod";
import { ColorBackgroundSchema, ColorSchema, TimeZoneSchema } from "@/base.ts";
import { ObjectPartialUserSchema } from "@/user.ts";

export const AnnotationSchema = z.object({
  bold: z.boolean(),
  italic: z.boolean(),
  strikethrough: z.boolean(),
  underline: z.boolean(),
  code: z.boolean(),
  color: z.union([ColorSchema, ColorBackgroundSchema]),
});

export const MentionTemplateValueDateSchema = z.object({
  type: z.literal("template_mention_date"),
  template_mention_date: z.enum(["today", "now"]),
});
export const MentionTemplateValueUserSchema = z.object({
  type: z.literal("template_mention_user"),
  template_mention_user: z.literal("me"),
});
export const MentionTemplateValueSchema = z.discriminatedUnion("type", [
  MentionTemplateValueDateSchema,
  MentionTemplateValueUserSchema,
]);

export const MentionDatabaseSchema = z.object({
  type: z.literal("database"),
  database: z.object({
    id: z.string(),
  }),
});
export const MentionDateSchema = z.object({
  type: z.literal("date"),
  // NOTE: no dry is required since circular import
  date: z.object({
    start: z.coerce.date(),
    end: z.coerce.date().optional().nullable(),
    time_zone: TimeZoneSchema.optional().nullable(),
  }),
});
export const MentionLinkPreviewSchema = z.object({
  type: z.literal("link_preview"),
  link_preview: z.object({
    url: z.string(),
  }),
});
export const MentionPageSchema = z.object({
  type: z.literal("page"),
  page: z.object({
    id: z.string(),
  }),
});
export const MentionTemplateSchema = z.object({
  type: z.literal("template_mention"),
  template_mention: MentionTemplateValueSchema,
});
export const MentionUserSchema = z.object({
  type: z.literal("user"),
  user: ObjectPartialUserSchema,
});
export const MentionSchema = z.discriminatedUnion("type", [
  MentionDatabaseSchema,
  MentionDateSchema,
  MentionLinkPreviewSchema,
  MentionPageSchema,
  MentionTemplateSchema,
  MentionUserSchema,
]);

const BaseRichTextSchema = z.object({
  type: z.string(),
  annotations: AnnotationSchema,
  plain_text: z.string(),
  href: z.string().nullable(),
});
export const RichTextTextSchema = BaseRichTextSchema.extend({
  type: z.literal("text"),
  text: z.object({
    content: z.string(),
    link: z.object({
      url: z.string(),
    }).nullable(),
  }),
});
export const RichTextEquationSchema = BaseRichTextSchema.extend({
  type: z.literal("equation"),
  equation: z.object({
    expression: z.string(),
  }),
});

export const RichTextMentionSchema = BaseRichTextSchema.extend({
  type: z.literal("mention"),
  mention: MentionSchema,
});
export const RichTextSchema = z.discriminatedUnion("type", [
  RichTextTextSchema,
  RichTextEquationSchema,
  RichTextMentionSchema,
]);
