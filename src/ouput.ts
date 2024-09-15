import {z} from "@hono/zod-openapi"

export const outputSchema = z.object({
    id :z.string().openapi({
       example:"12321"
    }),
    name: z.string().min(2).max(50).openapi({
        example:"John Doe"
    }),
    age: z.string().openapi({
        example:"22"
    })
})