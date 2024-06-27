import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateExpensesDto } from './dtos/CreateExpenses.dto';

@Injectable()
export class ExpensesService {
  private readonly data = [];
  getExpenses() {
    if (this.data.length < 1) {
      throw new HttpException('Please add expenses', HttpStatus.BAD_REQUEST);
    } else {
      return this.data;
    }
  }
  getExpensesById(id: CreateExpensesDto) {
    const findUser = this.data.find((u) => u.id === id);
    if (findUser) {
      return findUser;
    } else {
      return null;
    }
  }
  postExpenses(body: CreateExpensesDto) {
    const { title, price, description } = body;
    const timeToBuy = new Date().toLocaleString();
    const newUser = {
      id: this.data.length + 1,
      title,
      price,
      description,
      timeToBuy: timeToBuy,
    };
    this.data.push(newUser);
    return newUser;
  }
}
