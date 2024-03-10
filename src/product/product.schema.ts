import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema({ collection: 'product', timestamps: true, toJSON: { virtuals: true } })
export class Product {
  @Prop({ trim: true, required: true })
  name!: string;

  @Prop({ required: true })
  price!: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
