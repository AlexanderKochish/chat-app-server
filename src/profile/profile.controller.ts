import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';
import { AuthResponse } from 'src/auth/types/auth.interface';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @UseGuards(AuthGuard)
  @Get('me')
  async findOwnProfile(@Req() req: AuthResponse) {
    const user = req['user'];
    return await this.profileService.findOwnProfile(user.userId);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  async updateProfile(@Param('id') id: string, @Body() uDto: UpdateProfileDto) {
    return await this.profileService.updateProfile(id, uDto);
  }
}
