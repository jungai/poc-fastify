import { FastInstanceResult } from '../app';

export function setupAllRoutes(fast: FastInstanceResult): FastInstanceResult {
    fast.get('/', (request, reply) => {
        reply.send({ hello: 'world' });
    });

    return fast;
}
