import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Injectable()
export class ProfileService {
  constructor(
    private prisma: PrismaService,
    private userService: PrismaService,
  ) {}

  async findOwnProfile(id: string) {
    return await this.prisma.profile.findUnique({ where: { userId: id } });
  }

  async updateProfile(id: string, uDto: UpdateProfileDto) {
    const profile = await this.findOwnProfile(id);

    if (!profile) {
      throw new NotFoundException('Profile not found');
    }

    return await this.prisma.profile.update({
      where: { userId: id },
      data: {
        avatar: uDto.avatar,
        bgImage: uDto.bgImage,
        bio: uDto.bio,
      },
    });
  }
}
