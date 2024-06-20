import { Module } from '@nestjs/common';
import { UsersControllers } from './users.controllers';
import { UsersService } from './users.service';

@Module({
  imports: [],
  controllers: [UsersControllers],
  providers: [UsersService],
})
export class UsersModule {}
