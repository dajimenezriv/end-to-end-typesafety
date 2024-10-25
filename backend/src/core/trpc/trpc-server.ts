import { initTRPC } from '@trpc/server';
import { CreateHTTPContextOptions } from '@trpc/server/adapters/standalone';

export const createContext = ({ req }: CreateHTTPContextOptions) => {
  const token = req?.headers?.authorization?.split(' ')[1];
  return { token };
};

type Context = Awaited<ReturnType<typeof createContext>>;
const t = initTRPC.context<Context>().create();

export const router = t.router;
export const publicProcedure = t.procedure;
