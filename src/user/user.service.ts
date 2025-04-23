import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async findOne(email: string) {
    return await this.prisma.user.findUnique({
      where: { email },
    });
  }

  async findByName(search: string) {
    return await this.prisma.user.findMany({
      where: {
        name: { contains: search, mode: 'insensitive' },
      },
      include: {
        profile: true,
      },
    });
  }
}
