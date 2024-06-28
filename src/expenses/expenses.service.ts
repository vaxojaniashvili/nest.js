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
  putUsers(body: CreateExpensesDto) {
    const { title, price, description, id } = body;
    const timeToUpdate = new Date().toLocaleString();
    const updatedUser = {
      id,
      title,
      price,
      description,
      timeToUpdate,
    };
    const findUser = this.data.findIndex((u) => u.id === id);
    if (findUser <= 0) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    } else {
      this.data[findUser] = { ...updatedUser };
      return updatedUser;
    }
  }
  deleteUser(id: CreateExpensesDto) {
    const findIndexUser = this.data.findIndex((u) => u.id === id);
    if (findIndexUser <= 0) {
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    } else {
      this.data.splice(findIndexUser, 1);
      return { message: 'User deleted' };
    }
  }
}
