import { Module } from '@nestjs/common';
import {
  CarbonController,
  CreditController,
  GamificationController,
  LoginController,
  RegisterController,
  UserController,
} from './controller';
import { UtilModule } from 'src/util/util.module';
import {
  CarbonService,
  CreditService,
  GamificationService,
  LoginService,
  RegisterService,
} from './service';
import { EntityModule } from './entity/entity.module';

@Module({
  imports: [EntityModule, UtilModule],
  controllers: [
    CarbonController,
    CreditController,
    GamificationController,
    LoginController,
    RegisterController,
    UserController,
  ],
  providers: [
    CarbonService,
    CreditService,
    GamificationService,
    LoginService,
    RegisterService,
  ],
})
export class ContextModule {}
