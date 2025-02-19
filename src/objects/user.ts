import { z } from "zod";

export const ObjectPartialUserSchema = z.object({
  object: z.literal("user"),
  id: z.string(),
});
