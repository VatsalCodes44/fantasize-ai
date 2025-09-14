/*
  Warnings:

  - You are about to drop the column `Fname` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `Lname` on the `orders` table. All the data in the column will be lost.
  - Added the required column `username` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."orders" DROP COLUMN "Fname",
DROP COLUMN "Lname",
ADD COLUMN     "username" TEXT NOT NULL;
