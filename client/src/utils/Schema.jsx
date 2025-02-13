import { z } from "zod";

export const campingSchema = z.object({
  title: z.string().min(2, "title must be more than 2 character").max(50,"title must be less than 50 character"),
  price:z.coerce.number(),
  description:z.string().min(2, "description must be more than 2 character").max(200,"description must be less than 200 character"),
  category:z.string(),
  lat:z.coerce.number(),
  lng:z.coerce.number(),
  
});
export const profileSchema = z.object({
  firstname: z.string().min(2, "first name must be more than 2 character").max(50,"first name must be less than 50 character"),
  lastname: z.string().min(2, "last name must be more than 2 character").max(50,"last name must be less than 50 character"),

  
});