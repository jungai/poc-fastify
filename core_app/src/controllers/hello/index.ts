import { RouteHandlerMethod } from 'fastify';
import { IHello } from './types';

export const helloHandler: RouteHandlerMethod = (_req, res) => {
    res.send({ hello: 'world' });
};

export const hello: IHello = {
    handler: helloHandler,
};
