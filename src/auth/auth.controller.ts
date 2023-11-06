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
import { localAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UsersService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @UseGuards(localAuthGuard)
  @Post('login')
  async logIn(@Request() req) {
    return this.authService.logIn(req.body);
  }

  @Post('register')
  async registerUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @UseGuards(RefreshjwtAuthGuard)
  @Post('refresh')
  async refreshToken(@Request() req) {
    return this.authService.refreshToken(req.body);
  }
}
