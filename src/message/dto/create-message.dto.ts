import { IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  text: string;

  @IsString()
  roomId: string;

  @IsString()
  ownerId: string;
}
