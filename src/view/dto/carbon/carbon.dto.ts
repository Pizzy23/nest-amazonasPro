import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsObject, IsString } from 'class-validator';

@Injectable()
export class CarbonDto {
  @ApiProperty()
  @IsString()
  uuid: string;
  @ApiProperty()
  @IsString()
  plantHealth: number;
  @ApiProperty()
  @IsString()
  carbon: number;
  @ApiProperty()
  @IsString()
  area: number;
}
