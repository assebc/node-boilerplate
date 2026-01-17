import http from 'http';
import express from 'express';
import { SERVER } from './config/config';
import { corsHandler } from './middleware/corsHandler';
import { routeNotFound } from './middleware/routeNotFound';
import { loggingHandler } from './middleware/loggingHandler';
import { errorHandler } from './middleware/errorHandler';
import { api } from './controllers';

const app = express();
export const router = app;

export let httpClient: ReturnType<typeof http.createServer>;

// 1) Logger
app.use(loggingHandler);

// 2) Body parsers
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 3) CORS
app.use(corsHandler);

// 4) Routes
app.use('/api', api);

// 5) 404
app.use(routeNotFound);

// 6) Error handler
app.use(errorHandler);

export const Main = () => {
  console.info('Initializing AI Service');

  httpClient = http.createServer(app);
  httpClient.listen(SERVER.SERVER_PORT, () => {
    console.info(`Server started at ${SERVER.SERVER_HOSTNAME}:${SERVER.SERVER_PORT}`);
  });
};

export const Shutdown = (callback: any) => httpClient && httpClient.close(callback);

Main();
