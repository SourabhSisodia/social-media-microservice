import express from 'express';
import { configDotenv } from 'dotenv';
import router from './routes/index.js';
import { Redis } from 'ioredis';
configDotenv();
const redis = new Redis();

const setupAndStartServer = async () => {
  const app = express();
  const port = process.env.PORT;
  app.use(express.json());
  app.use('/api', router);
  app.listen(port, () => {
    console.log(`Successfully started the server on PORT : ${port}`);
  });
};
setupAndStartServer();


