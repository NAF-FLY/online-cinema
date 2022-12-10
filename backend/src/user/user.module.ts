import { UserService } from './user.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { UserModel } from './user.model';
import { ConfigModule } from '@nestjs/config';
import { UserController } from './user.controller';
import { Module } from '@nestjs/common/decorators';

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: UserModel,
        schemaOptions: {
          collection: 'User',
        },
      },
    ]),
    ConfigModule,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
