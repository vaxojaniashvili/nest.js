import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ExpensesController } from './expenses/expenses.controller';

@Module({
  imports: [UsersModule],
  controllers: [ExpensesController],
  providers: [],
})
export class AppModule {}
