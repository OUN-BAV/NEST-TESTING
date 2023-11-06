/* eslint-disable prettier/prettier */
import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class ValidateUserMiddleware implements NestMiddleware {
    use(req: Request, rep: Response, next: NextFunction) {
        // console.log(req.headers);
        next();
    }
}
