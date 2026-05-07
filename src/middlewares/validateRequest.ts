import { NextFunction, Request, Response } from 'express';

const validateRequest = (schema: any) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
        cookies: req.cookies,
      });
      next();
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: 'Validation Error',
        error: error.errors,
      });
    }
  };
};

export default validateRequest;
