import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateMovieCatalogTable1719530000068 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "movie" (
                "id" SERIAL PRIMARY KEY,
                "title" VARCHAR(500) NOT NULL,
                "description" TEXT NOT NULL,
                "release_date" DATE NOT NULL,
                "duration" INT NOT NULL,
                "genre" VARCHAR(100) NOT NULL,
                "director" VARCHAR(200),
                "rating" DECIMAL(3, 1),
                "poster_url" VARCHAR(1000),
                "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "movie"
        `);
    }

}
