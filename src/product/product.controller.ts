import { Controller, Get } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { ProductDto } from './dtos/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('products')
  async getAllProducts(): Promise<ProductDto[]> {
    const allProducts = await this.productService.find();
    return plainToInstance(ProductDto, allProducts);
  }
}
