import { Prisma } from '../generated/prisma/client';
import { TErrorSources, TGenericErrorResponse } from '../types/error.interface';


const handlePrismaValidationError = (
  err: Prisma.PrismaClientValidationError,
): TGenericErrorResponse => {
  const errorSources: TErrorSources = [
    {
      path: '',
      message: err.message,
    },
  ];

  const statusCode = 400;

  return {
    statusCode,
    message: 'Validation Error',
    errorSources,
  };
};

export default handlePrismaValidationError;

