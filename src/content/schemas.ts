import { z } from 'zod';
export const schemas = {
  managed_websites: z.object({
    "services": z.array(z.object({
      "title": z.string(),
      "description": z.string(),
      "id": z.string()
    })),
    "ownershipPoints": z.array(z.string()),
    "customerPoints": z.array(z.string())
  })
};
export type Schemas = typeof schemas;