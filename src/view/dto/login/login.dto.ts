import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsObject, IsString } from 'class-validator';

@Injectable()
export class LoginDto {
  @ApiProperty()
  @IsString()
  uuid: string;
}

@Injectable()
export class CreditDto {
  @ApiProperty()
  @IsString()
  uuid: string;
}
