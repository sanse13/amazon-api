import { Exclude } from 'class-transformer';

export class CreateUserDto {
  @Exclude()
  name!: string;

  @Exclude()
  email!: string;

  @Exclude()
  password!: string;
}
