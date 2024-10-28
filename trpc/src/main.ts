import { PORT, BASE_URL } from './constants';
import { app } from './core/trpc/express-server';

app.listen(PORT, () => {
  console.log(`tRPC server running on ${BASE_URL}`);
});
