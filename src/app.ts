import express, { Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './middlewares/globalErrorHandler';
import notFound from './middlewares/notFound';
import router from './routes';
const app = express();

// parsers
app.use(express.json());
app.use(cors());

// applications routes
app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Students!');
});

app.use(globalErrorHandler);

app.use(notFound);

export default app;
