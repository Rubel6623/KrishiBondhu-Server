import NodeCache from 'node-cache';
import logger from './logger';

// TTL defaults: standard = 60s, long = 5 min
const cache = new NodeCache({ stdTTL: 60, checkperiod: 120, useClones: false });

export const cacheGet = <T>(key: string): T | undefined => {
  return cache.get<T>(key);
};

export const cacheSet = <T>(key: string, value: T, ttlSeconds = 60): void => {
  const success = cache.set(key, value, ttlSeconds);
  if (success) {
    logger.info(`[Cache] SET "${key}" (TTL: ${ttlSeconds}s)`);
  }
};

export const cacheDel = (key: string): void => {
  cache.del(key);
  logger.info(`[Cache] DEL "${key}"`);
};

export const cacheFlushPattern = (pattern: string): void => {
  const keys = cache.keys().filter((k) => k.startsWith(pattern));
  cache.del(keys);
  logger.info(`[Cache] FLUSH pattern "${pattern}" (${keys.length} keys)`);
};

export default cache;
