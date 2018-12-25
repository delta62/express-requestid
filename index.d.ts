import { Request, Response, NextFunction } from 'express';
export interface Options {
    header: string;
}
export default function requestId(opts?: Options): (req: Request, res: Response, next: NextFunction) => void;
