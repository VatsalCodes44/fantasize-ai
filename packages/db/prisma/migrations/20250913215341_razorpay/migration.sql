/*
  Warnings:

  - Changed the type of `tokenIncrement` on the `orders` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "public"."orders" DROP COLUMN "tokenIncrement",
ADD COLUMN     "tokenIncrement" INTEGER NOT NULL;
