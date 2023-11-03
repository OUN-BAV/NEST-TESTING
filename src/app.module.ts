import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
// import { UsersController } from './users/users.controller';

import { AppService } from './app.service';
// import { UsersService } from './users/users.service';

import { UsersModule } from './users/users.module';
import { ProductModule } from './product/product.module';
import { ProductCategoryModule } from './product-category/product-category.module';
import { EventoryModule } from './eventory/eventory.module';
import { OrderModule } from './order/order.module';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './users/entities/user.entity';
import { Product } from './product/entities/product.entity';
import { ProductCategory } from './product-category/entities/product-category.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: 'p@st123',
      database: 'NJ-TEST',
      entities: [User, Product, ProductCategory],
      synchronize: true,
      logging: true,
    }),
    UsersModule,
    ProductModule,
    ProductCategoryModule,
    EventoryModule,
    OrderModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
