import express, { Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './modules/student/student.route';
import { UserRoutes } from './modules/user/user.route';
import globalErrorHandler from './middlewares/globalErrorHandler';
import notFound from './middlewares/notFound';
const app = express();

// parsers
app.use(express.json());
app.use(cors());

// applications routes
app.use('/api/v1/students', StudentRoutes);
app.use('/api/v1/user', UserRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Students!');
});

app.use(globalErrorHandler);

app.use(notFound);

export default app;
