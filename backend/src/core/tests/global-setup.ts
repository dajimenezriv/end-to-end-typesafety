import { PORT } from '@/constants';

import { listen } from '../trpc/router';

export default function setup() {
  listen(PORT);
}
