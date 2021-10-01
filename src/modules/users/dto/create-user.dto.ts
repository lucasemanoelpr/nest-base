import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(8, 24)
  password: string;

  @IsNotEmpty()
  @Length(8, 24)
  confirm: string;

  telephone: string;

  @IsNotEmpty()
  cellphone: string;

  @IsNotEmpty()
  birthdate: Date;
}
