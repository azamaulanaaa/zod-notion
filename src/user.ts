import { z } from "zod";
import { ObjectBaseSchema } from "@/base.ts";

export const ObjectPartialUserSchema = ObjectBaseSchema.extend({
  object: z.literal("user"),
});
