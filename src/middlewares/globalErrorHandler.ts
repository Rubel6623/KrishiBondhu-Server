import { ErrorRequestHandler } from 'express';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = 500;
  let message = 'Something went wrong!';
  let errorSources = [
    {
      path: '',
      message: 'Something went wrong',
    },
  ];

  if (err.name === 'ZodError') {
    statusCode = 400;
    message = 'Validation Error';
    errorSources = err.errors.map((error: any) => ({
      path: error.path[error.path.length - 1],
      message: error.message,
    }));
  } else if (err instanceof Error) {
    message = err.message;
    errorSources = [
      {
        path: '',
        message: err.message,
      },
    ];
  }

  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    stack: process.env.NODE_ENV === 'development' ? err?.stack : null,
  });
};

export default globalErrorHandler;
