import http from 'http';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import initializeDb from './db';
import api from './api';
import apiConfig from './config/api';
import logger from './lib/utils/logger';

import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json';

let app = express();
app.server = http.createServer(app);

// 3rd party middleware
app.use(cors({
  exposedHeaders: apiConfig.corsHeaders
}));

app.use(helmet());

app.use(bodyParser.json({
  limit: apiConfig.bodyLimit
}));

app.use(morgan('combined'));

initializeDb(() => {
  // api specs
  app.use(apiConfig.specs, swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  // api router
  app.use(apiConfig.prefix, api());

  app.server.listen(apiConfig.port);

  logger.info(`Started on PORT ${app.server.address().port}...`);
});

export default app;
