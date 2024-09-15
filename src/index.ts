import { OpenAPIHono } from "@hono/zod-openapi"
import { getRoute,postRoute } from "./routes"
import { swaggerUI } from "@hono/swagger-ui"

const app = new OpenAPIHono()

app.openapi(getRoute,(c) => {
  const {id} = c.req.valid('param')

  return c.json({
    id,
    age:"20",
    name:"Ultra-man"
  })
})

app.get('/ui', swaggerUI({ url: '/doc' }))
app.openapi(postRoute,(c) => {
  const {id} = c.req.valid('param')

  return c.json({
    id,
    age:"20",
    name:"Ultra-man"
  })
})

app.doc('/doc', {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'My API',
  },
})

export default app
