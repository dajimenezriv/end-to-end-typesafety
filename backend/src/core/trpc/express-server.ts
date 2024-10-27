import * as trpcExpress from '@trpc/server/adapters/express';
import * as express from 'express';
import { writeFileSync } from 'fs';
import { resolve } from 'path';
import * as swaggerUi from 'swagger-ui-express';
import { generateOpenApiDocument } from 'trpc-openapi';

import { BASE_URL } from '@/constants';

import { appRouter } from './router';
import { createContext } from './trpc-server';

export const app = express();

const openApiDocument = generateOpenApiDocument(appRouter, {
  title: 'tRPC',
  version: '1.0.0',
  baseUrl: BASE_URL,
});

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  }),
);

app.use(
  '/swagger',
  swaggerUi.serve,
  swaggerUi.setup(openApiDocument, {
    swaggerOptions: {
      defaultModelsExpandDepth: -1,
    },
  }),
);

const swaggerFilePath = resolve(__dirname, 'swagger.json');
writeFileSync(swaggerFilePath, JSON.stringify(openApiDocument, null, 2));
