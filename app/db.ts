import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '~/generated/prisma/client'

export function getDb() {
  const pool = new PrismaPg({})
  const prisma = new PrismaClient({ adapter: pool })

  return prisma
}