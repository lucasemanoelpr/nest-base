import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { typeOrmConfigAsync } from './config/typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    UsersModule,
    ConfigModule.forRoot(),
  ],
  controllers: [],
  providers: [],
  exports: [UsersModule],
})
export class AppModule {}
