import { Pool, type ClientConfig } from 'pg'
import { attachDatabasePool } from '@vercel/functions'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '~/generated/prisma/client'
import { parseIntoClientConfig } from 'pg-connection-string';

const config: ClientConfig = parseIntoClientConfig(process.env.POSTGRES_URL_NON_POOLING!)

const pool = new Pool({
  ...config,
  ssl: { rejectUnauthorized: false }
})

attachDatabasePool(pool)

export const prisma = new PrismaClient({
  adapter: new PrismaPg(pool),
})
