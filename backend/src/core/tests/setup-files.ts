import { beforeAll } from 'vitest';

import { PORT } from '@/constants';

import { listen } from '../trpc/router';

beforeAll(() => {
  listen(PORT);
});
