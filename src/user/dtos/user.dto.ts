import { Expose } from 'class-transformer';
import { TransformObjectId } from 'src/utils/expose-id.decorator';

export class UserDto {
  @TransformObjectId()
  @Expose()
  _id!: string;

  @Expose()
  email!: string;

  @Expose()
  name!: string;

  @Expose()
  password?: string;
}
