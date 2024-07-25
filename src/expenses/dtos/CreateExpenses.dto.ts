import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class CreateExpensesDto {
  @IsNumber()
  @IsOptional()
  id?: number;

  @IsNotEmpty()
  title?: string;

  @IsNotEmpty()
  description?: string;

  @IsNumber()
  @IsNotEmpty()
  price?: number;
}
