import { Exclude } from 'class-transformer';

export class SignInDto {
  @Exclude()
  email!: string;

  @Exclude()
  password!: string;
}
