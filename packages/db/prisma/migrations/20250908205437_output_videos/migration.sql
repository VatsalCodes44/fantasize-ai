-- CreateTable
CREATE TABLE "public"."OutputVideos" (
    "id" TEXT NOT NULL,
    "videoUrl" TEXT NOT NULL DEFAULT '',
    "imageUrl" TEXT,
    "prompt" TEXT NOT NULL,
    "status" "public"."OutputImagesStatusEnum" NOT NULL DEFAULT 'Pending',
    "userId" TEXT NOT NULL,
    "falAiRequestId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OutputVideos_pkey" PRIMARY KEY ("id")
);
