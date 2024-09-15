import { createRoute } from "@hono/zod-openapi";
import { paramSchema } from "./input";
import { outputSchema } from "./ouput";


export const getRoute = createRoute({
    method:"get",
    path:"/user/{id}",
    request:{
        params:paramSchema
    },
    responses:{
        200:{
            content:{
                "application/json":{
                    schema : outputSchema
                }
            },
            description:"Get user details  by ID"
        }
    }

})
export const postRoute = createRoute({
    method:"post",
    path:"/user/{id}",
    request:{
    params:paramSchema
    },
    responses:{
        200:{
            content:{
                "application/json":{
                    schema : outputSchema
                }
            },
            description:"Get user details  by ID"
        }
    }

})
