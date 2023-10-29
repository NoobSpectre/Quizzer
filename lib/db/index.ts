import { connect } from '@planetscale/database';
import { drizzle } from 'drizzle-orm/planetscale-serverless';
import * as schema from './schema';

if (!process.env.DB_DEV_URL) {
  throw new Error('Database URL not found!!!');
}

const connection = connect({ url: process.env.DB_DEV_URL });
export const db = drizzle(connection, { schema });
