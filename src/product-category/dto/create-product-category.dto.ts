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
export class CreateProductCategoryDto {
  @IsString()
  @MinLength(2, { message: 'category must have atleast 2 characters' })
  @IsAlphanumeric(null, {
    message: 'you must input cantegory name',
  })
  name: string;

  @IsString()
  @MinLength(2, { message: 'category must have atleast 2 characters' })
  @IsAlphanumeric(null, {
    message: 'you must input cantegory name',
  })
  description: string;
}
