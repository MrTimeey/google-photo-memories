import express from 'express';
import cors from 'cors';
import routes from '../routes';

const server: express.Application = express();

server.use(cors());
server.use(express.json());

const apiRouter: express.Router = express.Router();
apiRouter.use('/hello', routes.helloWorld);
apiRouter.use('/ping', routes.ping);

server.use('/api', apiRouter);

export default server;
