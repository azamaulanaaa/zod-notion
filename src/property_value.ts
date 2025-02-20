import { z } from "zod";
import { TimeZoneSchema } from "@/base.ts";

export const PropertyValueDateSchema = z.object({
  date: z.object({
    start: z.coerce.date(),
    end: z.coerce.date().optional().nullable(),
    time_zone: TimeZoneSchema.optional().nullable(),
  }),
});
