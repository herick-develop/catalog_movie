import { config } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

config()

const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: JSON.parse(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    migrations: [__dirname + '/migrations/*.ts'],
    synchronize: false,
};

export default new DataSource(dataSourceOptions);
