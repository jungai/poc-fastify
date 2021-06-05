import Fastify, { FastifyServerOptions, FastifyInstance } from 'fastify';
import cors from 'fastify-cors';
import rateLimit from 'fastify-rate-limit';
import fastifyRequestLogger from '@mgcrea/fastify-request-logger';
import prettifier from '@mgcrea/pino-pretty-compact';
import { setupAllRoutes } from './routes';

export type FastInstanceResult = FastifyInstance & PromiseLike<FastifyInstance>;

const defaultFastifyOptions: FastifyServerOptions = {
    logger: {
        prettyPrint: true,
        prettifier,
    },
    disableRequestLogging: true,
};

export function createFastify(options: FastifyServerOptions = defaultFastifyOptions) {
    return Fastify(options);
}

export function setupPrettyLogger(fast: FastInstanceResult): FastInstanceResult {
    fast.register(fastifyRequestLogger);

    return fast;
}

export function setupCors(fast: FastInstanceResult): FastInstanceResult {
    fast.register(cors);

    return fast;
}

export function setupRateLimit(fast: FastInstanceResult): FastInstanceResult {
    // it will throw 429
    fast.register(rateLimit, {
        max: 10,
        timeWindow: '1 minute',
    });

    return fast;
}

export function setupRoutes(fast: FastInstanceResult): FastInstanceResult {
    setupAllRoutes(fast);

    return fast;
}

export const app = [setupCors, setupRateLimit, setupPrettyLogger, setupRoutes].reduce(
    (fast, plugins) => plugins(fast),
    createFastify(),
);
