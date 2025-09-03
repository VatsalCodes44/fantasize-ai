/*
  Warnings:

  - Added the required column `url` to the `Packs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Packs" ADD COLUMN     "url" TEXT NOT NULL;
