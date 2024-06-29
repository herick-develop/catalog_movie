import { config } from 'dotenv';
import { DataSource } from 'typeorm';

config()

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: JSON.parse(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE,
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        migrations: [__dirname + '/../**/*.migrations{.ts,.js}',],
        synchronize: false,
      });
      //inject: [ConfigService]

      return dataSource.initialize();
    },
  },
];