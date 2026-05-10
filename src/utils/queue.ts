import PQueue from 'p-queue';
import logger from './logger';

// Concurrency-limited in-memory job queue
// Processes a maximum of 3 AI/background tasks concurrently
const aiQueue = new PQueue({ concurrency: 3 });

export interface QueueJob<T = any> {
  name: string;
  fn: () => Promise<T>;
  onSuccess?: (result: T) => void;
  onError?: (error: Error) => void;
}

export const enqueue = <T>(job: QueueJob<T>): Promise<void> => {
  logger.info(`[Queue] Enqueuing job: "${job.name}" | Pending: ${aiQueue.size}`);

  return aiQueue.add(async () => {
    logger.info(`[Queue] Running job: "${job.name}"`);
    try {
      const result = await job.fn();
      logger.info(`[Queue] Completed job: "${job.name}"`);
      job.onSuccess?.(result);
    } catch (error: any) {
      logger.error(`[Queue] Failed job: "${job.name}" — ${error.message}`);
      job.onError?.(error);
    }
  });
};

export const getQueueStats = () => ({
  size: aiQueue.size,
  pending: aiQueue.pending,
  concurrency: aiQueue.concurrency,
  isPaused: aiQueue.isPaused,
});

export default aiQueue;
