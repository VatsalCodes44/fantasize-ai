/*
  Warnings:

  - You are about to drop the column `name` on the `Packs` table. All the data in the column will be lost.
  - Added the required column `content` to the `Packs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Packs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Packs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Packs" DROP COLUMN "name",
ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
