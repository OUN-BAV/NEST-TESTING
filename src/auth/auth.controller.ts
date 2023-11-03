import {
  Controller,
  HttpCode,
  HttpStatus,
  Body,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { localStrategy } from './strategies/local.strategy';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { RefreshjwtAuthGuard } from './guards/refresh-jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UsersService,
  ) {}

  @UseGuards(localStrategy)
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async logIn(@Request() req) {
    console.log(req.user);
    return this.authService.logIn(req.body);
  }

  @Post('register')
  async registerUser(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.userService.create(createUserDto);
  }

  @UseGuards(RefreshjwtAuthGuard)
  @Post('refresh')
  async refreshToken(@Request() req) {
    return this.authService.refreshToken(req.body);
  }
}
