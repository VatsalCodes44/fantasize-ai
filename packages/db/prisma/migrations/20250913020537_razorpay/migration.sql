/*
  Warnings:

  - Added the required column `amount` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."orders" ADD COLUMN     "amount" INTEGER NOT NULL;
