import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { UserService } from 'src/user/user.service';
import { SignUpDto } from './dto/sign-up.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
    private readonly jwt: JwtService,
  ) {}

  async signUp(dto: SignUpDto): Promise<string> {
    const existingUser = await this.userService.findOne(dto.email);

    if (existingUser) {
      throw new ConflictException('User already exist');
    }
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(dto.password, salt);

    const { email, name, id } = await this.prisma.user.create({
      data: {
        email: dto.email,
        name: dto.name,
        password: hashPassword,
        profile: {
          create: {
            avatar: null,
            bio: '',
            bgImage: null,
          },
        },
      },
    });

    return await this.getToken(id, email, name as string);
  }

  async signIn(email: string, password: string) {
    const existingUser = await this.userService.findOne(email);

    if (!existingUser) {
      throw new UnauthorizedException('User not found');
    }

    const comparedPassword = await bcrypt.compare(
      password,
      existingUser.password,
    );

    if (!comparedPassword) {
      throw new UnauthorizedException('Password not accepted');
    }

    const { id, name } = existingUser;

    return await this.getToken(id, email, name as string);
  }

  async getToken(userId: string, email: string, name: string) {
    const payload = {
      userId,
      email,
      name,
    };

    return await this.jwt.signAsync(payload, {
      secret: process.env.JWT_SECRET,
    });
  }
}
