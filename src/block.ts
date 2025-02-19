import { z } from "zod";
import { ObjectBaseSchema } from "@/base.ts";

export const ObjectPartialBlockSchema = ObjectBaseSchema.extend({
  object: z.literal("block"),
});
