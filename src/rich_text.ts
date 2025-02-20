import { z } from "zod";

export const AnnotationSchema = z.object({
  bold: z.boolean(),
  italic: z.boolean(),
  strikethrough: z.boolean(),
  underline: z.boolean(),
  code: z.boolean(),
  color: z.enum([
    "default",
    "gray",
    "brown",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "pink",
    "red",
    "gray_background",
    "brown_background",
    "orange_background",
    "yellow_background",
    "green_background",
    "blue_background",
    "purple_background",
    "pink_background",
    "red_background",
  ]),
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
