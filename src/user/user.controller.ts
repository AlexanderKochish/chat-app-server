import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findByName(@Query('search') search: string) {
    return await this.userService.findByName(search);
  }
}
