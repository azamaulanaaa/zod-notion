import { z } from "zod";

export const ObjectBasSchema = z.object({
  object: z.string(),
  id: z.string(),
});
