import { z } from "zod";

export const movieBodySchema = z.object({

  //id: z.number().int().positive().optional(),
  title: z.string().max(500).optional(),
  description: z.string().optional(),
  release_date: z.string().optional().refine((date) => date === undefined || !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
  duration: z.number().int().positive().optional(),
  genre: z.string().max(100).optional(),
  director: z.string().max(200).optional().nullable(),
  rating: z.number().min(0).max(10).optional().nullable(),
  poster_url: z.string().url().max(1000).optional().nullable(),
  // created_at: z.string().optional().refine((date) => !isNaN(Date.parse(date)), {
  //   message: "Invalid timestamp format",
  // }),
  // updated_at: z.string().optional().refine((date) => !isNaN(Date.parse(date)), {
  //   message: "Invalid timestamp format",
  // }),
})
export type MovieBodySchema = z.infer<typeof movieBodySchema>