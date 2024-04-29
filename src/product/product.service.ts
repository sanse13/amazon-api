import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dtos/create-product.dto';
import { Product, ProductDocument } from './product.schema';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) public productModel: Model<Product>) {}

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = new this.productModel(createProductDto);
    return createdProduct.save();
  }

  async find(): Promise<ProductDocument[]> {
    return this.productModel.find().exec();
  }
}
