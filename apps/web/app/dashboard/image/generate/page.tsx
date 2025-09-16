import PrismaClient from "@repo/db/client";
import { auth } from "@clerk/nextjs/server";
import GenerateImage from "@/components/manualComponents/GenerateImage";

export default async function () {
  const {userId} = await auth()
  if (!userId) return <div>Please sign in to generate images.</div>
  const models = await PrismaClient.model.findMany({
    where: {
      userId: userId,
      trainingStatus: "generated"
    }, select: {
      id: true,
      name: true
    }
  })
  return (
    <div className="flex justify-center pt-20">
      <GenerateImage models={models} />
    </div>
  );
}
