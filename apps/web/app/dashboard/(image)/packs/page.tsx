import { Packs } from '@/components/manualComponents/Pack'
import { FocusCards } from '@/components/ui/focus-cards';
import PrismaClient from "@repo/db/client";
export default async function page() {
  const cards = await PrismaClient.packs.findMany({
    orderBy: {
      name: "desc"
    }
  })
  return (
    <div className='flex justify-center mt-10'>
        <FocusCards cards={cards} />
    </div>
  )
}

