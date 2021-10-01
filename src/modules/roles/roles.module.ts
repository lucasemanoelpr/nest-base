import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';

@Module({
  controllers: [RolesController],
  providers: [RolesService],
  imports: [TypeOrmModule.forFeature([Role])],
})
export class RolesModule {}
