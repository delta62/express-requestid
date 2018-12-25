import { Request, Response, NextFunction } from 'express'
import uuid from 'uuid/v4'

export interface Options {
  header: string
}

const DEFAULT_OPTS = {
  header: 'X-Request-Id'
}

export default function requestId(opts?: Options) {
  opts = { ...DEFAULT_OPTS, ...opts }
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers[opts!.header]) {
      req.headers[opts!.header] = uuid()
    }
    next()
  }
}
