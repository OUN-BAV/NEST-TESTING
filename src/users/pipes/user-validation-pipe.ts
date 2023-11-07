/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UsersService } from "../users.service";

@ValidatorConstraint({ async: true })
@Injectable()
export class IsUserNameAreadlyExisted implements ValidatorConstraintInterface {
    constructor(protected readonly userService: UsersService) {}
    async validate(username: string): Promise<boolean> {
        const user = await this.userService.findByEmail(username);
        return !user;
    }
}