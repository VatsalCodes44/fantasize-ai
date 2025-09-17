-- DropForeignKey
ALTER TABLE "public"."OutputImages" DROP CONSTRAINT "OutputImages_modelId_fkey";

-- AlterTable
ALTER TABLE "public"."OutputImages" ALTER COLUMN "modelId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."OutputImages" ADD CONSTRAINT "OutputImages_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "public"."Model"("id") ON DELETE SET NULL ON UPDATE CASCADE;
