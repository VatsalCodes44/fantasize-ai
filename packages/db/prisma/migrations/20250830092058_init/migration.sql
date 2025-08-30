-- AlterTable
ALTER TABLE "public"."Model" ADD COLUMN     "trainingStatus" "public"."ModelTrainingStatusEnum" NOT NULL DEFAULT 'Pending';
