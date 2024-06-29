import { IsOptional, IsString, IsInt, IsNumber, IsUrl, MaxLength, IsDate, Min, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class MovieDto {
    @ApiProperty({
        description: 'title',
        example: 'The cronicals of zelda',
    })
    @IsOptional()
    @IsString()
    @MaxLength(500)
    title?: string;

    @ApiProperty({
        description: 'descriptions',
        example: 'This movie is not real',
    })
    @IsOptional()
    @IsString()
    description?: string;

    @ApiProperty({
        description: 'release_date',
        example: '1980-07-16',
    })
    @IsOptional()
    @IsString()
    @IsDate()
    release_date?: string;

    @ApiProperty({
        description: 'duration',
        example: '148',
    })
    @IsOptional()
    @IsInt()
    @Min(1)
    duration?: number;

    @ApiProperty({
        description: 'genre',
        example: 'comedy',
    })
    @IsOptional()
    @IsString()
    @MaxLength(100)
    genre?: string;

    @ApiProperty({
        description: 'director',
        example: 'Andy Muschietti',
    })
    @IsOptional()
    @IsString()
    @MaxLength(200)
    director?: string;

    @ApiProperty({
        description: 'rating',
        example: '7.3',
    })
    @IsOptional()
    @IsNumber()
    @Min(0)
    @Max(10)
    rating?: number;

    @ApiProperty({
        description: 'poster_url',
        example: 'https://avatars.githubusercontent.com/u/142947285?v=4',
    })
    @IsOptional()
    @IsUrl()
    @MaxLength(1000)
    poster_url?: string;
}
