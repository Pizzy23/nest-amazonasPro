
import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsObject, IsString } from 'class-validator';

@Injectable()
export class RegisterDto {
  @ApiProperty()
  @IsString()
  uuid: string;
  @ApiProperty()
  @IsString()
  email: string;
  @ApiProperty()
  @IsString()
  name: string;
}
@Injectable()
export class UserDto {
  @ApiProperty()
  @IsString()
  uuid: string;
}