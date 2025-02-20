import { z } from "zod";

export const EmojiBasicSchema = z.object({
  type: z.literal("emoji"),
  emoji: z.string().emoji(),
});

export const EmojiCustomSchema = z.object({
  type: z.literal("custom_emoji"),
  custom_emoji: z.object({
    id: z.string(),
    name: z.string(),
    url: z.string(),
  }),
});

export const EmojiSchema = z.discriminatedUnion("type", [
  EmojiBasicSchema,
  EmojiCustomSchema,
]);
