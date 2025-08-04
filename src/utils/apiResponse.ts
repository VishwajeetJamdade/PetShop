import type { Response } from 'express';

export const successResponse = (
  res: Response,
  data: any,
  statusCode = 200
) => {
  res.status(statusCode).json({
    success: true,
    data
  });
};

export const errorResponse = (
  res: Response,
  error: Error,
  statusCode = 500
) => {
  res.status(statusCode).json({
    success: false,
    error: error.message
  });
};