import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './routes';
import globalErrorHandler from './middlewares/globalErrorHandler';
import notFound from './middlewares/notFound';
import rateLimit from 'express-rate-limit';
import * as Sentry from "@sentry/node";
import logger from './utils/logger';

const app: Application = express();

// Initialize Sentry
Sentry.init({
  dsn: process.env.SENTRY_DSN || "https://examplePublicKey@o0.ingest.sentry.io/0",
  tracesSampleRate: 1.0,
});

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // Limit each IP to 1000 requests per `window`
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again after 15 minutes',
  },
});

// Apply rate limiter to all requests
app.use('/api', limiter);

// parsers
app.use(express.json());
app.use(cors());

// Request Logging
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// application routes
app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Krishi Bondhu!');
});

// The error handler must be before any other error middleware and after all controllers
Sentry.setupExpressErrorHandler(app);

// global error handler
app.use(globalErrorHandler);

// not found
app.use(notFound);

export default app;

