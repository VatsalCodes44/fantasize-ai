/*
  Warnings:

  - The `imageUrl` column on the `OutputImages` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "public"."OutputImages" DROP COLUMN "imageUrl",
ADD COLUMN     "imageUrl" TEXT[] DEFAULT ARRAY[]::TEXT[];
