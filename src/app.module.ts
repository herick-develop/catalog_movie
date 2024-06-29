import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MovieModule } from './movie/movie.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    MovieModule,
    DatabaseModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    })
  ],
  controllers: [AppController],
})
export class AppModule {}
