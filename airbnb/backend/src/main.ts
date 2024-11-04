import * as cors from 'cors';
import * as express from 'express';
import 'reflect-metadata';

import { PORT } from './constants';
import { RegisterRoutes } from './core/api/routes';

const app = express();
app.use(cors());

RegisterRoutes(app);

console.log(`Listening on port ${PORT}`);
app.listen(PORT);
