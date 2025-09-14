/*
  Warnings:

  - Added the required column `productName` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."orders" ADD COLUMN     "productName" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "public"."FAITokenAccount" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "FAI" INTEGER NOT NULL,

    CONSTRAINT "FAITokenAccount_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FAITokenAccount_userId_key" ON "public"."FAITokenAccount"("userId");
