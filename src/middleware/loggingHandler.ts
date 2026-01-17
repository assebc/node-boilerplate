import type { Request, Response, NextFunction } from 'express';

export function loggingHandler(req: Request, res: Response, next: NextFunction) {
  const start = Date.now();

  console.log(`-> ${req.method} ${req.originalUrl}`);

  res.on('finish', () => {
    const ms = Date.now() - start;
    console.log(`<-${res.statusCode} ${req.method} ${req.originalUrl} (${ms}ms)`);
  });

  next();
}
