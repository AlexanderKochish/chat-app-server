import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
  UnprocessableEntityException,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/sign-up.dto';
import { Response } from 'express';
import { SignInDto } from './dto/sign-in.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  async signUp(
    @Body() dto: SignUpDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    try {
      const token = await this.authService.signUp(dto);

      if (!token) {
        throw new HttpException(
          'Token generation failed',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }

      res.cookie('token', token, {
        httpOnly: true,
        // secure: true,
        maxAge: 1000 * 60 * 60 * 24,
      });

      return { message: 'Registration in successfully', token };
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new UnprocessableEntityException(
          error.message || 'Signup failed',
        );
      }
    }
  }

  @Post('sign-in')
  async signIn(
    @Body() dto: SignInDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    try {
      const token = await this.authService.signIn(dto.email, dto.password);

      if (!token) {
        throw new HttpException(
          'Token generation failed',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }

      res.cookie('token', token, {
        httpOnly: true,
        // secure: true,
        maxAge: 1000 * 60 * 60 * 24,
      });

      return { message: 'Logged in successfully', token };
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new UnprocessableEntityException(
          error.message || 'Signup failed',
        );
      }
    }
  }
}
