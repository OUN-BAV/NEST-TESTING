/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findByEmail(username);
    const isValidUser = await bcrypt.compare(pass, user.password);
    if (!isValidUser) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'This may incorect user name or password.',
        }, 
        HttpStatus.INTERNAL_SERVER_ERROR, 
        {
        cause: new UnauthorizedException(),
        }
      );
    }
    const { password, ...result } = user;
    return result;
  }

  async logIn(user: User) {
    const payload = {
      username: user.username,
      sub: {
        name: user.name,
        id: user.id,
      },
    };

    return {
      ...user,
      access_token: this.jwtService.sign(payload),
      refresh_token: this.jwtService.sign(payload, { expiresIn: '7d' }),
    };
  }

  async refreshToken(user: User) {
    const payload = {
      username: user.username,
      sub: {
        name: user.name,
        id: user.id,
      },
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
