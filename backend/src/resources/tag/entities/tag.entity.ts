import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('Tag')
export class Tag {
  @PrimaryGeneratedColumn({ unsigned: true })
  tag_id: number;

  @Column()
  name: number; // Notez que dans le SQL, c'est un BIGINT, mais c'est probablement une erreur et devrait être un TEXT

  @OneToMany(() => TagRestaurant, tagRestaurant => tagRestaurant.tag)
  tagRestaurants: TagRestaurant[];
}