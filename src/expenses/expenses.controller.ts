import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { CreateExpensesDto } from './dtos/CreateExpenses.dto';

@Controller('expenses')
export class ExpensesController {
  constructor(private readonly expensesService: ExpensesService) {}

  @Get('')
  getExpenses() {
    const expenses = this.expensesService.getExpenses();
    if (expenses) {
      return expenses;
    } else {
      throw new HttpException('Ups bad request!', HttpStatus.BAD_REQUEST);
    }
  }
  @Get(':id')
  getExpensesById(@Param('id', ParseIntPipe) id: CreateExpensesDto) {
    const expensesById = this.expensesService.getExpensesById(id);
    if (expensesById) {
      return expensesById;
    } else {
      throw new HttpException('Ups bad request!', HttpStatus.BAD_REQUEST);
    }
  }
  @Post('/add')
  postExpenses(@Body() body: CreateExpensesDto) {
    const postExpenses = this.expensesService.postExpenses(body);
    if (postExpenses) {
      return postExpenses;
    } else {
      throw new HttpException('Ups bad request!', HttpStatus.BAD_REQUEST);
    }
  }
  @Put('/update')
  putUsers(@Body() body: CreateExpensesDto) {
    const updatedUser = this.expensesService.putUsers(body);
    if (updatedUser) {
      return updatedUser;
    } else {
      throw new HttpException('Ups bad request!', HttpStatus.BAD_REQUEST);
    }
  }
}
