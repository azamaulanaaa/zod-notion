import { z } from "zod";
import { ObjectBaseSchema } from "@/base.ts";

export const ObjectPartialPageSchema = ObjectBaseSchema.extend({
  object: z.literal("page"),
});
