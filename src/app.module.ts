import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ExpensesModule } from './expenses/expenses.module';
import { ExpensesService } from './expenses/expenses.service';
import { ExpensesController } from './expenses/expenses.controller';

@Module({
  imports: [UsersModule, ExpensesModule],
  controllers: [ExpensesController],
  providers: [ExpensesService],
})
export class AppModule {}
