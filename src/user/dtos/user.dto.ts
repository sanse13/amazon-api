import { Exclude, Expose } from 'class-transformer';
import { TransformObjectId } from '../../utils/expose-id.decorator';

@Exclude()
export class UserDto {
  @TransformObjectId()
  @Expose()
  _id!: string;

  @Expose()
  email!: string;

  @Expose()
  name!: string;
}
