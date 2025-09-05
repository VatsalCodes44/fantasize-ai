import { fal } from "@fal-ai/client";


export class FalAiModel {
    constructor () {
      fal.config({
        credentials: process.env.FAL_KEY
      });
    }

    public async generateImage(prompt: string, tensorPath: string, num_images: number) {
        const {request_id, response_url} = await fal.queue.submit("fal-ai/flux-lora", {
            input: {
              prompt,
              loras: [{path: tensorPath, scale: 1}],
              num_images
            },
            webhookUrl: `${process.env.WEKHOOK_URL}/api/fal-ai/webhook/image`
        });
        return {request_id, response_url};
    }

    public async trainModel(zipUrl: string, triggerWord?: string) {
        const {request_id, response_url} = await fal.queue.submit("fal-ai/flux-lora-fast-training", {
            input: {
              images_data_url: zipUrl,
              // trigger_word: triggerWord
            },
            // webhookUrl: `${process.env.WEKHOOK_URL}/api/fal-ai/webhook/train`,
            
          });
          return {request_id, response_url}
    }

    public async generateImageSync(prompt: string, tensorPath: string) {
      const response = await fal.subscribe("fal-ai/flux-lora", {
        input: {
          prompt,
          loras: [{path: tensorPath, scale: 1}]
        }
      })
      return {
        imageUrl: response.data.images[0]?.url
      }
    }
}