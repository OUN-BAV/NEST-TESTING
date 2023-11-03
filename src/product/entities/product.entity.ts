import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { ProductCategory } from 'src/product-category/entities/product-category.entity';
@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  code: string;

  @Column()
  image: string;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @Column()
  is_availble: boolean;

  /**
   * Relationship with user
   */

  @ManyToOne((type) => User, (user) => user.products)
  user: User;

  /**
   * Relationship with category
   */

  @ManyToOne(
    (type) => ProductCategory,
    (product_category) => product_category.products,
  )
  product_category: ProductCategory;
}
