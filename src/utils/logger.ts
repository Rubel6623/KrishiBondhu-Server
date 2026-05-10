import winston from 'winston';
import path from 'path';

const { combine, timestamp, printf, colorize } = winston.format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});

const logger = winston.createLogger({
  level: 'info',
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    myFormat
  ),
  transports: [
    // Write all logs with level 'info' and below to 'combined.log'
    new winston.transports.File({ filename: path.join('logs', 'combined.log') }),
    // Write all error logs to 'error.log'
    new winston.transports.File({ filename: path.join('logs', 'error.log'), level: 'error' }),
  ],
});

// If we're not in production then log to the `console`
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: combine(
      colorize(),
      timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      myFormat
    ),
  }));
}

export default logger;
