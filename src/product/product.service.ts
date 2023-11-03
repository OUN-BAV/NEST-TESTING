import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    const product: Product = new Product();
    product.name = createProductDto.name;
    product.code = createProductDto.code;
    product.price = createProductDto.price;
    product.quantity = createProductDto.quantity;
    product.is_availble = createProductDto.is_availble;
    product.user = createProductDto.user;
    product.product_category = createProductDto.product_category;
    return this.productRepository.save(product);
  }

  findAll() {
    return this.productRepository.find();
  }

  findOne(id: number) {
    return this.productRepository.findOneBy({ id });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    const product: Product = new Product();
    product.name = updateProductDto.name;
    product.code = updateProductDto.code;
    product.price = updateProductDto.price;
    product.quantity = updateProductDto.quantity;
    product.is_availble = updateProductDto.is_availble;
    product.user = updateProductDto.user;
    product.product_category = updateProductDto.product_category;
    product.id = id;
    return this.productRepository.save(product);
  }

  remove(id: number) {
    return this.productRepository.delete({ id });
  }
}
