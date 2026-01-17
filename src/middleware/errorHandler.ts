import type { Request, Response, NextFunction } from 'express';

export function errorHandler(err: unknown, _req: Request, res: Response, _next: NextFunction) {
  console.error('Unhandled error:', err);

  // If it's a known Error, include message (safe default)
  const message = err instanceof Error ? err.message : 'Internal server error';

  return res.status(500).json({
    error: 'Internal server error',
    message
  });
}
