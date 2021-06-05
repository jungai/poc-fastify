import { FastifySchema, RouteHandlerMethod } from 'fastify';

export type IGetBooksByBookId = {
    schema: FastifySchema;
    handler: RouteHandlerMethod;
};
