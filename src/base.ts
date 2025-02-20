import { z } from "zod";

export const ObjectBaseSchema = z.object({
  object: z.string(),
  id: z.string(),
});

export const ColorSchema = z.enum([
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
]);
export const ColorBackgroundSchema = z.enum([
  "gray_background",
  "brown_background",
  "orange_background",
  "yellow_background",
  "green_background",
  "blue_background",
  "purple_background",
  "pink_background",
  "red_background",
]);
