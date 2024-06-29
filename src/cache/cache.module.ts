import { Module } from "@nestjs/common";
import { RedisService } from "./redis/redis-service";
import { CacheRepository } from "./cache-repository";
import { RedisCacheRepository } from "./redis/redis-cache-repository";

@Module({
    providers: [
        RedisService,
        {
            provide: CacheRepository,
            useClass: RedisCacheRepository
        }
    ],
    exports: [CacheRepository]
})

export class CacheModule {}