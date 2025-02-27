import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
<<<<<<< Updated upstream
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import * as bcrypt from 'bcrypt';
=======
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Movie } from '../../movies/entities/movie';
>>>>>>> Stashed changes

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  email: string;
  @Column()
  password: string;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
<<<<<<< Updated upstream
  @Column()
  avatar: string;
=======
  @Column({ nullable: true })
  avatar?: string;
>>>>>>> Stashed changes
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;

<<<<<<< Updated upstream
=======
  @OneToMany(() => Movie, (movie) => movie.user)
  movies: Movie[];

>>>>>>> Stashed changes
  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
