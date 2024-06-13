import { defineConfig } from 'drizzle-kit';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';


export default defineConfig({
  schema: './db.ts',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL!
  },
  verbose: true,
  strict: true
});

export const db = drizzle(
  neon(process.env.POSTGRES_URL!, {
    fetchOptions : {
      cache : 'no-store'
    }
  })
)
