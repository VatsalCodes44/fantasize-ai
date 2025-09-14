/*
  Warnings:

  - The `status` column on the `orders` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "public"."PaymentStatusEnum" AS ENUM ('Pending', 'Completed', 'Failed');

-- AlterTable
ALTER TABLE "public"."orders" DROP COLUMN "status",
ADD COLUMN     "status" "public"."PaymentStatusEnum" NOT NULL DEFAULT 'Pending';
