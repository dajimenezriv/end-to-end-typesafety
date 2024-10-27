import { initTRPC } from '@trpc/server';
import { CreateHTTPContextOptions } from '@trpc/server/adapters/standalone';
import { OpenApiMeta } from 'trpc-openapi';

export const createContext = ({ req }: CreateHTTPContextOptions) => {
  const language = req?.headers?.['accept-language'];
  const token = req?.headers?.authorization?.split(' ')[1];
  return { token, language };
};

type Context = Awaited<ReturnType<typeof createContext>>;
const t = initTRPC.context<Context>().meta<OpenApiMeta>().create();

export const router = t.router;
export const procedure = t.procedure;
export const middleware = t.middleware;
