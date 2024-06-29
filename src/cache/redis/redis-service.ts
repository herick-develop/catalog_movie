import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { config } from "dotenv";
import Redis from "ioredis";

config()

@Injectable()
export class RedisService extends Redis implements OnModuleDestroy {
    constructor() {
        super({
            host: process.env.REDIS_HOST,
            port: JSON.parse(process.env.REDIS_PORT),
            db: JSON.parse(process.env.REDIS_DB),
        })
    }

    onModuleDestroy() {
        return this.disconnect()
    }
}