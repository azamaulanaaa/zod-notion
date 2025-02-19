import { z } from "zod";
import { ObjectBaseSchema } from "@/base.ts";

export const ObjectPartialDatabaseSchema = ObjectBaseSchema.extend({
  object: z.literal("block"),
});
