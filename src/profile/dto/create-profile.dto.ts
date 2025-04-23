import { IsOptional, IsString } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @IsOptional()
  avatar: string;
  @IsString()
  @IsOptional()
  bio: string;
  @IsString()
  @IsOptional()
  bgImage: string;
}
