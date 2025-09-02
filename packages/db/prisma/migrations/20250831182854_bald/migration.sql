/*
  Warnings:

  - You are about to drop the column `blad` on the `Model` table. All the data in the column will be lost.
  - Added the required column `bald` to the `Model` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "public"."EyeColorEnum" ADD VALUE 'Black';

-- AlterTable
ALTER TABLE "public"."Model" DROP COLUMN "blad",
ADD COLUMN     "bald" BOOLEAN NOT NULL;
