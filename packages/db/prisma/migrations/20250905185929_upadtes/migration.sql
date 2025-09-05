/*
  Warnings:

  - Added the required column `noOfPrompts` to the `Packs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Packs" ADD COLUMN     "noOfPrompts" INTEGER NOT NULL;
