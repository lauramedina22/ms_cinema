import 'dotenv/config';
import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: ['src/**/*.entity{.ts,.js}', 'dist/**/*.entity.js'],
  migrations: ['src/migrations/*{.ts,.js}', 'dist/migrations/*.js'],
  synchronize: false,
});

export default dataSource;


/* Un ORM (Object-Relational Mapping o Mapeo Objeto-Relacional) es una técnica y herramienta de programación que permite conectar una base de datos relacional con un lenguaje de programación orientado a objetos.
Actúa como un puente o traductor entre ambos mundos: convierte los datos de las tablas de la base de datos en objetos que puedes usar directamente en tu código, sin necesidad de escribir consultas complejas en SQL de forma manual
*/