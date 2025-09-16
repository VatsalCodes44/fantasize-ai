// import { auth } from "@clerk/nextjs/server";
// import { generateImageFromPack } from "@repo/common/types";
// import PrismaClient from "@repo/db/client";
// import { FalAiModel } from "models/FalAiModel";
// import { NextRequest, NextResponse } from "next/server";

// const falAiModel = new FalAiModel();

// export async function POST(req: NextRequest) {
//     const parsedBody = generateImageFromPack.safeParse(await req.json())
//     const {userId} = await auth()
//     if (!parsedBody.success || !userId) {
//         return NextResponse.json({
//                 message: "Incorrect Inputs"
//             },{
//                 status: 411
//             }
//         )
//     }
//     const {modelId, packId} = parsedBody.data;

//     const model = await PrismaClient.model.findUnique({
//         where: {
//             id: modelId
//         }
//     })

//     const packPrompts = await PrismaClient.packPrompts.findMany({
//         where: {
//             packId
//         }
//     })

//     if (!model || !model.tensorPath || !packPrompts || packPrompts.length == 0) {
//         return NextResponse.json({
//                 message: "Incorrect Inputs"
//             },{
//                 status: 411
//         })
//     }


//     const results = await Promise.all(packPrompts.map(async (packPrompt) => {
//         const prompt = packPrompt.prompt
//         let modifiedPrompt = ""
//         if (model.bald) {
//             modifiedPrompt = `${model.age}-year-old ${model.ethinicity} bald ${model.type} with ${model.eyeColor}, ${prompt}`
//         } else {
//             modifiedPrompt = `${model.age}-year-old ${model.ethinicity} ${model.type} with ${model.eyeColor}, ${prompt}`
//         }
//         const {request_id, response_url} = await falAiModel.generateImage(modifiedPrompt, 1, model.tensorPath!)
    
//         return {request_id, response_url, modifiedPrompt}
//     }))
//     await PrismaClient.outputImages.createManyAndReturn({
//         data: results.map((result) => {
//             return {
//                 userId, 
//                 prompt: result.modifiedPrompt, 
//                 modelId, 
//                 falAiRequestId: result.request_id
//             }
//         })
//     })

//     return NextResponse.json({ success: true });
// }





import { auth } from "@clerk/nextjs/server";
import { generateImageFromPack } from "@repo/common/types";
import PrismaClient from "@repo/db/client";
import { FalAiModel } from "models/FalAiModel";
import { NextRequest, NextResponse } from "next/server";

const falAiModel = new FalAiModel();

export async function POST(req: NextRequest) {
  try {
    const parsedBody = generateImageFromPack.safeParse(await req.json())
    const {userId} = await auth()
    const balance = await PrismaClient.fAITokenAccount.findUnique({
      where: {
          userId: userId!
      }
    })
    if (!balance) {
      return NextResponse.json({
        message: "Account not found"
      }, { status: 402 });
    }
    if (balance.FAI < 16) {
        return NextResponse.json({
          message: "Not enough FAI tokens"
        }, {status: 402})
      }
    if (!parsedBody.success || !userId) {
      return NextResponse.json({
              message: "Incorrect Inputs"
          },{
              status: 411
          }
      )
    }
    
    if (!parsedBody.success || !userId) {
      return NextResponse.json({
        message: "Incorrect Inputs"
      }, {
        status: 411
      })
    }

    const {modelId, packId} = parsedBody.data;

    const model = await PrismaClient.model.findUnique({
      where: {
        id: modelId
      }
    })

    const packPrompts = await PrismaClient.packPrompts.findMany({
      where: {
        packId
      }
    })

    if (!model || !model.tensorPath || !packPrompts || packPrompts.length == 0) {
      return NextResponse.json({
        message: "Incorrect Inputs"
      }, {
        status: 411
      })
    }

    const results = await Promise.all(
      packPrompts.map(async (packPrompt) => {
        try {
          const prompt = packPrompt.prompt
          let modifiedPrompt = ""
          if (model.bald) {
            modifiedPrompt = `${model.age}-year-old ${model.ethinicity} bald ${model.type} with ${model.eyeColor}, ${prompt}`
          } else {
            modifiedPrompt = `${model.age}-year-old ${model.ethinicity} ${model.type} with ${model.eyeColor}, ${prompt}`
          }
          const {request_id, response_url} = await falAiModel.generateImage(modifiedPrompt, 1, model.tensorPath!)
          return {request_id, response_url, modifiedPrompt, success: true}
        } catch (error) {
          console.error(`Failed to generate image for prompt: ${packPrompt.prompt}`, error)
          return {success: false, error: error instanceof Error ? error.message : 'Unknown error', prompt: packPrompt.prompt}
        }
      })
    )

    // Filter out only successful results
    const successfulResults = results.filter(result => result.success && result.request_id)

    if (successfulResults.length === 0) {
      return NextResponse.json({
        message: "All image generations failed"
      }, {
        status: 500
      })
    }

    await PrismaClient.outputImages.createMany({
      data: successfulResults.map((result: any) => ({
        userId, 
        prompt: result.modifiedPrompt, 
        modelId, 
        falAiRequestId: result.request_id
      }))
    })

    await PrismaClient.fAITokenAccount.update({
        where: {
            userId
        }, 
        data: {
            FAI: {
                decrement: successfulResults.length
            },
            PendingTokens: {
                increment: successfulResults.length
            }
        }
    })

    return NextResponse.json({ 
      success: true,
      generated: successfulResults.length,
      total: packPrompts.length
    })

  } catch (error) {
    console.error("Unexpected error in image generation:", error)
    return NextResponse.json({
      message: "Internal server error"
    }, {
      status: 500
    })
  }
}