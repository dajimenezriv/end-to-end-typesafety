import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

import { BASE_URL } from '@/constants';

import { AppRouter } from './router';

export const publicTrpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: BASE_URL,
    }),
  ],
});

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: BASE_URL,
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
      url: BASE_URL,
      headers() {
        return {
          'Accept-Language': 'en',
        };
      },
    }),
  ],
});
