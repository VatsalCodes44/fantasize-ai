/*
  Warnings:

  - Added the required column `generateAudio` to the `OutputVideos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."OutputVideos" ADD COLUMN     "generateAudio" BOOLEAN NOT NULL;
