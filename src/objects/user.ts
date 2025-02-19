import { z } from "zod";
import { ObjectBaseSchema } from "@/objects/object.ts";

export const ObjectPartialUserSchema = ObjectBaseSchema.extend({
  object: z.literal("user"),
});
