import { FastInstanceResult } from '../app';
import { hello } from '../controllers/hello';

export function setupAllRoutes(fast: FastInstanceResult): FastInstanceResult {
    // TODO: change style
    fast.get('/', { ...hello });

    return fast;
}
