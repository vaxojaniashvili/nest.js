import { Module } from '@nestjs/common';
import { UsersControllers } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [],
  controllers: [UsersControllers],
  providers: [UsersService],
})
export class UsersModule {}
