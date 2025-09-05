import {Packs} from '@/components/manualComponents/Packs';
import { auth } from '@clerk/nextjs/server';
import PrismaClient from "@repo/db/client";
import parse from 'html-react-parser';
import { redirect } from 'next/navigation';



export default async function page() {
  const {userId} = await auth()
  if (!userId) {
    redirect("/signin")
  }

  const packs = await PrismaClient.packs.findMany({
    orderBy: {
      title: "desc"
    }
  })

  const cards = packs.map(card => {
    return {
      id: card.id,
      description: card.description,
      title: card.title,
      src: card.url,
      buttonName: "Generate",
      content: card.content,
      numOfImages: card.noOfPrompts
    }
  })

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
    <div className='flex justify-center mt-10'>
        <Packs cards = {cards} models={models}/>
    </div>
  )
}

