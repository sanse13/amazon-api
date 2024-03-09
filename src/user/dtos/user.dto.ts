import { Exclude, Expose } from '@nestjs/class-transformer';

@Exclude()
export class UserDto {
  @Expose()
  _id!: string;

  @Expose()
  name!: string;

  @Expose()
  email!: string;
}
