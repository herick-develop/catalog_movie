import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, UseGuards } from '@nestjs/common';

import { MovieService } from '../services/movie.service';
import { MovieBodySchema, movieBodySchema } from '../dto/movie-body.schema';
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ApiBearerAuth, ApiBody, ApiHeader, ApiParam, ApiTags } from '@nestjs/swagger';
import { MovieDto } from '../dto/movie-body.dto';

@Controller('movies')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('Movies')
export class MovieController {
  constructor(private readonly moviesService: MovieService) {}

  @Get()
  findAll() {
    return this.moviesService.findAll();
  }

  @Get(':id')
  @ApiParam({name: 'id', example: 1})
  findOne(@Param('id') id: number) {
    return this.moviesService.findOne(id);
  }

  @Delete('/delete/:id')
  @ApiParam({name: 'id', example: 2})
  async remove(@Param('id') id: number) {
    return this.moviesService.remove(id);
  }

  @Post('/create')
  @ApiBody({ type: MovieDto })
  @UsePipes(new ZodValidationPipe(movieBodySchema))
  async create(@Body() body: MovieBodySchema) {
    const  { title, description, release_date, duration, genre, director, rating, poster_url } = body;

    const newMovie = await this.moviesService.create(
      {
        title,
        description,
        release_date,
        duration,
        genre,
        director,
        rating,
        poster_url,
      }
    );
    return newMovie
  }

  @Patch('/update/:id')
  @ApiParam({name: 'id', example: 1})
  @ApiBody({ type: MovieDto,
    examples: {
      example1: {
        summary: 'Update movie title',
        value: {
          title: 'new Title'
        },
      },
    },
  })
  @UsePipes(new ZodValidationPipe(movieBodySchema))
  async update(@Param('id') id: number, @Body() updateMovieDto: MovieBodySchema) {
    return this.moviesService.update(id, updateMovieDto);
  }

}
