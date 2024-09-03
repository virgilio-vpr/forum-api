import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config'; // ConfigModule was imported here because the paht relative not was find in in file env.

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, UserModule, DatabaseModule], // ConfigModule.forRoot() was add here because the paht relative not was find in in file env.

})
export class AppModule { }
