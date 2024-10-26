import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

import { PORT } from '@/constants';

import { AppRouter } from './router';

const URL = `http://localhost:${PORT}/`;

export const publicTrpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: URL,
    }),
  ],
});

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: URL,
      headers() {
        return {
          Authorization: `Bearer valid_token`,
        };
      },
    }),
  ],
});

export const englishTrpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: URL,
      headers() {
        return {
          'Accept-Language': 'en',
        };
      },
    }),
  ],
});
