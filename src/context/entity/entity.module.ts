import { Module } from '@nestjs/common';
import { PrismaService } from 'src/config';
import {
  CarbonEntity,
  GamificationEntity,
  LoginEntity,
  RegisterEntity,
} from '.';

@Module({
  exports: [
    PrismaService,
    CarbonEntity,
    GamificationEntity,
    LoginEntity,
    RegisterEntity,
  ],
  providers: [
    PrismaService,
    CarbonEntity,
    GamificationEntity,
    LoginEntity,
    RegisterEntity,
  ],
})
export class EntityModule {}
