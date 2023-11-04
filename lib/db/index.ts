import { connect } from '@planetscale/database';
import { eq, sql } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/planetscale-serverless';
import * as schema from './schema';

if (!process.env.DB_DEV_URL) {
  throw new Error('Database URL not found!!!');
}

const connection = connect({ url: process.env.DB_DEV_URL });
export const db = drizzle(connection, { schema });

export const preparedFindUserByEmail = db.query.users
  .findFirst({
    where: eq(schema.users.email, sql.placeholder('email')),
  })
  .prepare();

export const preparedFindUserById = db.query.users.findFirst({
  where: eq(schema.users.id, sql.placeholder('id'))
}).prepare();
