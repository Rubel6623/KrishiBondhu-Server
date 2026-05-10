import { ErrorRequestHandler } from 'express';
import logger from '../utils/logger';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = 500;
  let message = 'Something went wrong!';
  let errorSources = [{ path: '', message: 'Something went wrong' }];

  if (err.name === 'ZodError') {
    statusCode = 400;
    message = 'Validation Error';
    errorSources = err.errors.map((error: any) => ({
      path: error.path[error.path.length - 1],
      message: error.message,
    }));
    logger.warn(`[Validation] ${req.method} ${req.url} — ${errorSources.map(e => e.message).join(', ')}`);
  } else if (err instanceof Error) {
    message = err.message;
    errorSources = [{ path: '', message: err.message }];
    logger.error(`[Error] ${req.method} ${req.url} — ${err.message}\n${err.stack}`);
  } else {
    logger.error(`[Unknown Error] ${req.method} ${req.url}`, err);
  }

  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    stack: process.env.NODE_ENV === 'development' ? err?.stack : null,
  });
};

export default globalErrorHandler;

