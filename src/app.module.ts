import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataSource } from 'typeorm';

import { UsersModule } from './users/users.module';
import { ProductModule } from './product/product.module';
import { EventoryModule } from './eventory/eventory.module';
import { ProductCategoryModule } from './product-category/product-category.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderModule } from './order/order.module';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';

import { User } from './users/entities/user.entity';
import { Product } from './product/entities/product.entity';
import { ProductCategory } from './product-category/entities/product-category.entity';
import { Role } from './roles/entities/role.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: 'p@st123',
      database: 'NJ-TEST',
      entities: [User, Product, ProductCategory, Role],
      synchronize: true,
      logging: true,
    }),
    UsersModule,
    ProductModule,
    ProductCategoryModule,
    EventoryModule,
    OrderModule,
    AuthModule,
    RolesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
