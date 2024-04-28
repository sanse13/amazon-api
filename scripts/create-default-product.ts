import { NestFactory } from '@nestjs/core';
import { CreateProductDto } from 'src/product/dtos/create-product.dto';
import { AppModule } from '../src/app.module';
import { ProductService } from '../src/product/product.service';

async function createDefaultProduct() {
  const app = await NestFactory.create(AppModule);
  const productService = app.get(ProductService);

  await productService.productModel.deleteMany();

  const productList: CreateProductDto[] = [
    {
      name: 'Airpods',
      price: 120,
      imageRef: 'airpods.jpeg',
      description:
        'Auriculares inalámbricos de Apple para una experiencia auditiva sin restricciones.',
    },
    {
      name: 'Camiseta de algodón',
      price: 19.99,
      imageRef: 'camiseta.jpeg',
      description:
        'Una camiseta básica de algodón suave y cómoda, ideal para el uso diario.',
    },
    {
      name: 'Zapatos deportivos',
      price: 59.99,
      imageRef: 'zapatillas.jpeg',
      description:
        'Zapatos diseñados para brindar comodidad y apoyo durante actividades físicas.',
    },
    {
      name: 'Teléfono inteligente',
      price: 399.99,
      imageRef: 'iphone.jpeg',
      description:
        'Un teléfono avanzado con funciones inteligentes y un rendimiento excepcional.',
    },
    {
      name: 'Portátil ultrabook',
      price: 1099.99,
      imageRef: 'portatil.jpeg',
      description:
        'Un portátil delgado y potente, perfecto para la productividad en movimiento.',
    },
    {
      name: 'Reloj inteligente',
      price: 149.99,
      imageRef: 'garmin.jpeg',
      description:
        'Un reloj que va más allá de solo dar la hora, con funciones inteligentes y de seguimiento de la salud.',
    },
    {
      name: 'Silla de oficina ergonómica',
      price: 129.99,
      imageRef: 'silla.jpeg',
      description:
        'Una silla diseñada para proporcionar comodidad y apoyo durante largas horas de trabajo en la oficina.',
    },
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
