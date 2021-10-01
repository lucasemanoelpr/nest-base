import { AuthModule } from './modules/auth/auth.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { typeOrmConfigAsync } from './config/typeorm.config';
import { RolesModule } from './modules/roles/roles.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    UsersModule,
    RolesModule,
  ],
  controllers: [],
  providers: [],
  exports: [UsersModule],
})
export class AppModule {}
