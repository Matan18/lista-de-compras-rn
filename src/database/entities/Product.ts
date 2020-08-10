import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column('decimal')
  price: number;

  @Column('integer')
  quantity: number;

  @Column()
  checked: boolean;
}
