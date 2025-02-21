import { z } from "zod";
import { ObjectBaseSchema } from "@/base.ts";

export const ObjectPartialUserSchema = ObjectBaseSchema.extend({
  object: z.literal("user"),
});

const ObjectFullUserBaseSchema = ObjectPartialUserSchema.extend({
  type: z.string(),
  name: z.string(),
  avatar_url: z.string().nullable(),
});
export const ObjectFullUserPersonSchema = ObjectFullUserBaseSchema.extend({
  type: z.literal("person").optional().default("person"),
  person: z.object({
    email: z.string().email(),
  }),
});
export const ObjectFullUserBotSchema = ObjectFullUserBaseSchema.extend({
  type: z.literal("bot").optional().default("bot"),
  bot: z.union([
    z.object({
      owner: z.object({
        type: z.literal("workspace"),
        workspace: z.literal(true),
      }),
      workspace_name: z.string(),
    }),
    z.object({
      owner: z.object({
        type: z.literal("user"),
        user: z.union([ObjectFullUserPersonSchema, ObjectPartialUserSchema]),
      }),
      workspace_name: z.literal(null),
    }),
  ]),
});
export const ObjectFullUserSchema = z.union([
  ObjectFullUserPersonSchema,
  ObjectFullUserBotSchema,
]);

export const ObjectUserSchema = z.union([
  ObjectFullUserSchema,
  ObjectPartialUserSchema,
]);
