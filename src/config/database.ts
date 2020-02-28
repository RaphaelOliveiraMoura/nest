import { TypeOrmModule } from '@nestjs/typeorm';

export default TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'docker',
  password: 'docker',
  database: 'docker_database_test',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrationsTableName: 'migrations-lock',
  migrations: ['src/database/migration/*.js'],
});
