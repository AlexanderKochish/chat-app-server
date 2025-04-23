import { Controller, Get, Body, Patch, Param, UseGuards } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @UseGuards(AuthGuard)
  @Get(':id')
  async findOwnProfile(@Param('id') id: string) {
    return await this.profileService.findOwnProfile(id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  async updateProfile(@Param('id') id: string, @Body() uDto: UpdateProfileDto) {
    return await this.profileService.updateProfile(id, uDto);
  }
}
