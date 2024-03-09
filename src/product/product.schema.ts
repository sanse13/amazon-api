import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'product', timestamps: true, toJSON: { virtuals: true } })
export class Product {
  @Prop({ required: true })
  name!: string;

  @Prop({ required: true })
  price!: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
