import express, { Request, Response } from 'express';
import { ProductRoutes } from './app/module/product/product.route';
const app = express();
//middleware
app.use(express.json());

app.use('/', ProductRoutes);
app.get('/', (req: Request, res: Response) => {
  res.send('server is running');
});

export default app;
