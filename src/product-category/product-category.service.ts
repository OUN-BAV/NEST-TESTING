import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductCategoryDto } from './dto/create-product-category.dto';
import { UpdateProductCategoryDto } from './dto/update-product-category.dto';
import { ProductCategory } from './entities/product-category.entity';

@Injectable()
export class ProductCategoryService {
  constructor(
    @InjectRepository(ProductCategory)
    private productCategoryRepository: Repository<ProductCategory>,
  ) {}
  create(createProductCategoryDto: CreateProductCategoryDto) {
    const productCategory = new ProductCategory();
    productCategory.name = createProductCategoryDto.name;
    productCategory.description = createProductCategoryDto.description;
    return this.productCategoryRepository.save(productCategory);
  }

  findAll() {
    return this.productCategoryRepository.find();
  }

  findOne(id: number) {
    return this.productCategoryRepository.findOneBy({ id });
  }

  update(id: number, updateProductCategoryDto: UpdateProductCategoryDto) {
    const productCategory = new ProductCategory();
    productCategory.name = updateProductCategoryDto.name;
    productCategory.description = updateProductCategoryDto.description;
    productCategory.id = id;
    return this.productCategoryRepository.save(productCategory);
  }

  remove(id: number) {
    return this.productCategoryRepository.delete({ id });
  }
}
