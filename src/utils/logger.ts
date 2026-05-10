import winston from 'winston';
import path from 'path';

const { combine, timestamp, printf, colorize } = winston.format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});

const transports: winston.transport[] = [];

// Only use file logging in local development environments
const isLocal = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV;
const isVercel = !!process.env.VERCEL;

if (isLocal && !isVercel) {
  transports.push(
    new winston.transports.File({ filename: path.join('logs', 'combined.log') }),
    new winston.transports.File({ filename: path.join('logs', 'error.log'), level: 'error' })
  );
}

// Always use console logging in production (Vercel) and development
transports.push(
  new winston.transports.Console({
    format: combine(
      colorize(),
      timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      myFormat
    ),
  })
);

const logger = winston.createLogger({
  level: 'info',
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    myFormat
  ),
  transports,
});

export default logger;
