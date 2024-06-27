import express from 'express';
import userRouter from './routes/user';
import authRouter from './routes/auth';
import pointsRouter from './routes/points';
import tableRanking from './routes/table';
import content from './routes/progress';
import community from './routes/community';
import aprender from './routes/content';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Request } from 'express';
import '../prisma/seed/seed';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json({ limit: '500mb' }));
app.use(
  express.urlencoded({ limit: '500mb', extended: true, parameterLimit: 500000 })
);

//permite utilizar diversos tipos de requisição no postman, não somente em json
app.use(bodyParser.json({ limit: '500mb' }));
app.use(bodyParser.urlencoded({ limit: '500mb', extended: false }));
app.use(cors<Request>());

app.get('/', (req, res) => {
  res.json({ msg: 'Olá, mundo!' });
});

app.use('/api/users/', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/points', pointsRouter);
app.use('/api/table', tableRanking);
app.use('/api/content', content);
app.use('/api/community', community);
app.use('/api/aprender', aprender);

Object.keys(require.cache).forEach(function (key) {
  delete require.cache[key];
});

const PORT = process.env.SERVER_PORT || 8000;

app.listen(PORT, () => {
  console.log('Rodando na porta ' + PORT);
});
