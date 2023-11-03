/* eslint-disable prettier/prettier */
import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

export class ValidateUserMiddleware implements NestMiddleware {
    use(req: Request, rep: Response, next: NextFunction) {
        console.log('Hello from user middleware !');
        next();
    }
}
