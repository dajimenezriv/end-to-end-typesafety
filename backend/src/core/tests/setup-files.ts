import 'dotenv/config';
import { beforeAll } from 'vitest';

import { PORT } from '@/constants';

import { listen } from '../trpc/http-server';

beforeAll(() => {
  listen(PORT);
});
