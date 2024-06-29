import { Module } from '@nestjs/common';
import { MovieService } from './services/movie.service';
import { MovieController } from './controllers/movie.controller';
import { movieProviders } from './providers/movie.provider';
import { DatabaseModule } from 'src/database/database.module';
import { CacheModule } from 'src/cache/cache.module';

@Module({
  imports: [DatabaseModule, CacheModule],
  controllers: [MovieController],
  providers: [
    ...movieProviders,
    MovieService
  ],
})
export class MovieModule {}
