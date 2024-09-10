import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config'; // ConfigModule was imported here because the path relative not was find in in file env.
import { QuestionsModule } from './questions/questions.module';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, UserModule, DatabaseModule, QuestionsModule], // ConfigModule.forRoot() was add here because the paht relative not was find in in file env.
})
export class AppModule {}