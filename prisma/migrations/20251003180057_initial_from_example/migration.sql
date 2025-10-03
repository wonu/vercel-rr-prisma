-- CreateEnum
CREATE TYPE "public"."QuoteKind" AS ENUM ('Fact', 'Opinion');

-- CreateTable
CREATE TABLE "public"."Quotes" (
    "id" SERIAL NOT NULL,
    "quote" TEXT NOT NULL,
    "kind" "public"."QuoteKind" NOT NULL DEFAULT 'Opinion',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Quotes_pkey" PRIMARY KEY ("id")
);
