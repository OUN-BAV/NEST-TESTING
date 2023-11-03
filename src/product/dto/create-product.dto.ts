import {
  IsAlphanumeric,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
  IsNumber,
  IsBoolean,
} from 'class-validator';
import { User } from 'src/users/entities/user.entity';
import { ProductCategory } from 'src/product-category/entities/product-category.entity';

export class CreateProductDto {
  @IsString()
  @MinLength(2, { message: 'Name must have atleast 2 characters.' })
  @IsNotEmpty()
  name: string;

  @IsString()
  @MinLength(10, { message: 'Name must have atleast 2 characters.' })
  @IsNotEmpty()
  code: string;

  @IsNumber()
  @MinLength(1, { message: 'Name must have atleast 2 characters.' })
  @IsNotEmpty()
  price: number;

  @IsAlphanumeric()
  @MinLength(1, { message: 'Name must have atleast 2 characters.' })
  @IsNotEmpty()
  quantity: number;

  @IsBoolean()
  @IsNotEmpty()
  is_availble: boolean;

  @IsNumber()
  user: User;

  @IsNumber()
  product_category: ProductCategory;
}
