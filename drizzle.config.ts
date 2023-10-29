import { config } from 'dotenv';
import type { Config } from 'drizzle-kit';

config({ path: '.env.local' });

export default {
  schema: './lib/db/schema.ts',
  driver: 'mysql2',
  dbCredentials: {
    connectionString: process.env.DB_DEV_URL as string,
  },
} satisfies Config;
