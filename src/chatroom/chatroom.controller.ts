import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { ChatroomService } from './chatroom.service';
import { CreateChatroomDto } from './dto/create-chatroom.dto';
import { AuthGuard } from 'src/auth/guard/auth.guard';

@Controller('chats')
export class ChatroomController {
  constructor(private readonly chatroomService: ChatroomService) {}

  @UseGuards(AuthGuard)
  @Post('create')
  async create(@Body() dto: CreateChatroomDto) {
    return await this.chatroomService.create(dto);
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async findAll(@Param(':id') id: string) {
    return await this.chatroomService.findAll(id);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.chatroomService.findOne(+id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateChatroomDto: UpdateChatroomDto,
  // ) {
  //   return this.chatroomService.update(+id, updateChatroomDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.chatroomService.remove(+id);
  // }
}
