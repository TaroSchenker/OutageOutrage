import { Request, Response, NextFunction } from 'express';

type AsyncFunction = (
  req: Request,
  res: Response,
  next: NextFunction,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
) => Promise<any>;

export default function catchAsync(fn: AsyncFunction) {
  return (req: Request, res: Response, next: NextFunction): void => {
    fn(req, res, next).catch(next);
  };
}
