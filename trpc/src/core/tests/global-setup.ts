import 'dotenv/config';

import { PORT } from '@/constants';

import { listen, server } from '../trpc/http-server';

export function setup() {
  listen(PORT);
}

export function teardown() {
  server.close();
}
