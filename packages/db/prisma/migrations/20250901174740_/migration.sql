/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Model" DROP CONSTRAINT "Model_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."OutputImages" DROP CONSTRAINT "OutputImages_userId_fkey";

-- DropTable
DROP TABLE "public"."User";
