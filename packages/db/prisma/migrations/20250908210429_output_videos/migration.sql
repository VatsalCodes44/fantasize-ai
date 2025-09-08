/*
  Warnings:

  - Added the required column `videoType` to the `OutputVideos` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."VideoTypeEnum" AS ENUM ('TextToVideo', 'ImageToVideo');

-- AlterTable
ALTER TABLE "public"."OutputVideos" ADD COLUMN     "videoType" "public"."VideoTypeEnum" NOT NULL;
