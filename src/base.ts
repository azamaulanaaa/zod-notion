import { z } from "zod";

export const ObjectBaseSchema = z.object({
  object: z.string(),
  id: z.string(),
});
