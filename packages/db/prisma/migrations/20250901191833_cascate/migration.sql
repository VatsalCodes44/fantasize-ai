-- DropForeignKey
ALTER TABLE "public"."PackPrompts" DROP CONSTRAINT "PackPrompts_packId_fkey";

-- AddForeignKey
ALTER TABLE "public"."PackPrompts" ADD CONSTRAINT "PackPrompts_packId_fkey" FOREIGN KEY ("packId") REFERENCES "public"."Packs"("id") ON DELETE CASCADE ON UPDATE CASCADE;
