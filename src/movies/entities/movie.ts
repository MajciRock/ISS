import {
  Column,
<<<<<<< Updated upstream
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Genre } from '../../genres/entity/genre';
=======
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Genre } from '../../genres/entity/genre';
import { User } from '../../users/entity/user.entity';
>>>>>>> Stashed changes

@Entity('movies') //ime tabele
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  release_date: Date;
  @Column()
  rating: number;
<<<<<<< Updated upstream
  @ManyToOne(() => Genre, (genre) => genre.movies, { nullable: false })
  @JoinColumn({ name: 'genre_id' })
  genre: Genre;
=======
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Genre, (genre) => genre.movies, { nullable: false })
  @JoinColumn({ name: 'genre_id' })
  genre: Genre;
  @ManyToOne(() => User, (user) => user.movies, { nullable: false })
  @JoinColumn({ name: 'user_id' })
  user: User;
>>>>>>> Stashed changes
}
