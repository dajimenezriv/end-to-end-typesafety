import { PORT } from './constants';
import { listen } from './core/trpc/router';

listen(PORT);
