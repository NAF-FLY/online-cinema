import { FileModule } from './file/file.module';
import { FileService } from './file/file.service';
import { GenreModule } from './genre/genre.module';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { getMongoDbConfig } from './config/mongo.config';

@Module({
  imports: [
    FileModule,
    GenreModule,
    UserModule,
    AuthModule,
    ConfigModule.forRoot(),
    TypegooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMongoDbConfig,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [FileService, AppService],
})
export class AppModule {}
