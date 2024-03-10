import { Exclude, Expose } from 'class-transformer';
import { TransformObjectId } from 'src/utils/expose-id.decorator';

@Exclude()
export class ProductDto {
  @TransformObjectId()
  @Expose()
  _id!: string;
  @Expose()
  name!: string;
  @Expose()
  price!: number;
}
