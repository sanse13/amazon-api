import { NestFactory } from '@nestjs/core';
import { CreateProductDto } from 'src/product/dtos/create-product.dto';
import { AppModule } from '../src/app.module';
import { ProductService } from '../src/product/product.service';

async function createDefaultProduct() {
  const app = await NestFactory.create(AppModule);
  const productService = app.get(ProductService);

  await productService.productModel.deleteMany();

  const productList: CreateProductDto[] = [
    { name: 'Airpods', price: 120 },
    { name: 'Camiseta de algodón', price: 19.99 },
    { name: 'Zapatos deportivos', price: 59.99 },
    { name: 'Teléfono inteligente', price: 399.99 },
    { name: 'Auriculares inalámbricos', price: 79.99 },
    { name: 'Portátil ultrabook', price: 1099.99 },
    { name: 'Cámara digital DSLR', price: 799.99 },
    { name: 'Reloj inteligente', price: 149.99 },
    { name: 'Tableta Android', price: 249.99 },
    { name: 'Silla de oficina ergonómica', price: 129.99 },
    { name: 'Juego de sartenes antiadherentes', price: 69.99 },
  ];

  await Promise.all(
    productList.map(async (product) => {
      await productService.createProduct(product);
      console.log('Producto creado:', product);
    }),
  );

  await app.close();
}

createDefaultProduct();
