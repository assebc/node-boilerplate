import type { Request, Response } from 'express';

export function routeNotFound(req: Request, res: Response) {
  return res.status(404).json({
    error: 'Route not found',
    method: req.method,
    path: req.originalUrl
  });
}
