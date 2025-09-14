/*
  Warnings:

  - Added the required column `Fname` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Lname` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."orders" ADD COLUMN     "Fname" TEXT NOT NULL,
ADD COLUMN     "Lname" TEXT NOT NULL;
