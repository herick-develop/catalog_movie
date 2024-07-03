import { Injectable, Inject, NotFoundException, BadRequestException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Movie } from '../entities/movie.entity';
import { MovieBodySchema } from '../dto/movie-body.schema';
import { InternalServerErrorException } from '@nestjs/common';
import { CacheRepository } from 'src/cache/cache-repository';

@Injectable()
export class MovieService {
  constructor(
    @Inject('MOVIE_REPOSITORY')
    private movieRepository: Repository<Movie>,
    private cacheRepository: CacheRepository
  ) {}

  async findAll(): Promise<Movie[]> {
    const cacheKey = 'movies:data';

    try {
      const cacheHit = await this.cacheRepository.get(cacheKey);

      if (cacheHit) {
        return JSON.parse(cacheHit);
      }

      const movies = await this.movieRepository.find();

      await this.cacheRepository.set(cacheKey, JSON.stringify(movies));

      return movies;
    } catch (error) {
      throw new InternalServerErrorException(`Failed to find movies: ${error.message}`);
    }
  }

  async findOne(id: number): Promise<Movie> {
    const cacheKey = `movie:${id}:data`;

    const cacheHit = await this.cacheRepository.get(cacheKey);

    if (cacheHit) {
      return JSON.parse(cacheHit);
    }

    const movie = await this.movieRepository.findOne({ where: { id: id } });

    if (!movie) {
      throw new NotFoundException('Movie not found');
    }

    await this.cacheRepository.set(cacheKey, JSON.stringify(movie));

    return movie;
  }

  async remove(id: number): Promise<{ message: string }> {
    const cacheKey = `movie:${id}:data`;
    const cacheKeyAll = 'movies:data';

    try {
      const movieToRemove = await this.findOne(id);

      await this.movieRepository.remove(movieToRemove);

      await this.cacheRepository.delete(cacheKey);
      await this.cacheRepository.delete(cacheKeyAll);

      return { message: `Movie with ID ${id} has been successfully removed` };
    } catch (error) {
      throw new BadRequestException(`Failed to remove movie with ID ${id}: ${error.message}`);
    }
  }

  async create(movieData: MovieBodySchema): Promise<{message: string}> {
    const cacheKey = 'movies:data';

    try {
      const movie = this.movieRepository.create(movieData);
      await this.movieRepository.save(movie);

      const cacheHit = await this.cacheRepository.get(cacheKey);

      if (cacheHit) {
        await this.cacheRepository.delete(cacheKey);
      }
      
      return {message: `Movie '${movie.title}' created successfully with ID ${movie.id}`};
    } catch (error) {
      throw new BadRequestException(`Failed to create movie: ${error.message}`);
    }
  }

  async update(id: number, updateMovieDto: MovieBodySchema): Promise<{message: string}> {
    const cacheKey = `movie:${id}:data`;
    const cacheKeyAll = 'movies:data';
    try {
      const movieToUpdate = await this.findOne(id);
  
      if (!movieToUpdate) {
        throw new NotFoundException(`Movie with ID ${id} not found.`);
      }
  
      Object.assign(movieToUpdate, updateMovieDto);
  
      await this.movieRepository.save(movieToUpdate);

      await this.cacheRepository.delete(cacheKey);
      await this.cacheRepository.delete(cacheKeyAll);
  
      return {message: `Movie #${id} updated with success`};
    } catch (error) {
      throw new BadRequestException(`Failed to update movie with ID ${id}: ${error.message}`);
    }
  }
}
