import { z } from "zod";

export const campingSchema = z.object({
  title: z.string().min(2, "title must be more than 2 character").max(50,"title must be less than 50 character"),
  price:z.coerce.number(),
  description:z.string().min(2, "description must be more than 2 character").max(200,"description must be less than 200 character"),
  category:z.string()
  
});