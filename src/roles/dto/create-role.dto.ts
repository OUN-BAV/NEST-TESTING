import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateRoleDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2, { message: 'role name must be more that 2 charactor' })
  name: string;
}
