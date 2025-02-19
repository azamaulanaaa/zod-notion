import { z } from "zod";

export const ParentDatabaseSchema = z.object({
  type: z.literal("database_id"),
  database_id: z.string(),
});
export const ParentPageSchema = z.object({
  type: z.literal("page_id"),
  page_id: z.string(),
});
export const ParentWorkspaceSchema = z.object({
  type: z.literal("workspace"),
  workspace: z.literal(true),
});
export const ParentBlockSchema = z.object({
  type: z.literal("block_id"),
  block_id: z.string(),
});
export const ParentSchema = z.discriminatedUnion("type", [
  ParentDatabaseSchema,
  ParentPageSchema,
  ParentWorkspaceSchema,
  ParentBlockSchema,
]);
