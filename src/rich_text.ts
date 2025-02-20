import { z } from "zod";
import { ColorBackgroundSchema, ColorSchema } from "@/base.ts";

export const AnnotationSchema = z.object({
  bold: z.boolean(),
  italic: z.boolean(),
  strikethrough: z.boolean(),
  underline: z.boolean(),
  code: z.boolean(),
  color: z.union([ColorSchema, ColorBackgroundSchema]),
});

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
