import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './movies/entities/movie';
import { GenresModule } from './genres/genres.module';
import { Genre } from './genres/entity/genre';
import { UsersModule } from './users/users.module';
import { User } from './users/entity/user.entity';
import { AuthModule } from './auth/auth.module';
<<<<<<< Updated upstream
=======
import { ConfigModule } from '@nestjs/config';
>>>>>>> Stashed changes

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
<<<<<<< Updated upstream
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'imdb',
=======
      host: process.env.DATABASE_HOST || 'localhost',
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
>>>>>>> Stashed changes
      entities: [Movie, Genre, User],
      synchronize: true,
    }),
    MoviesModule,
    GenresModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
