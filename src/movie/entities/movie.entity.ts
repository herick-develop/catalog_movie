import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  title: string;

  @Column('text')
  description: string;

  @Column('date')
  release_date: string;

  @Column('int')
  duration: number;

  @Column({ length: 100 })
  genre: string;

  @Column({ length: 200, nullable: true })
  director: string;

  @Column('decimal', { precision: 3, scale: 1, nullable: true })
  rating: number;

  @Column({ length: 1000, nullable: true })
  poster_url: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
