import { Exclude } from 'class-transformer';

export class CreateProductDto {
  @Exclude()
  name!: string;

  @Exclude()
  price!: number;
}
