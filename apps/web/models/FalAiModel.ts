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
            // webhookUrl: `${process.env.WEKHOOK_URL}/api/fal-ai/webhook/image`
        });
        return {request_id, response_url};
    }
    
    public async trainModel(zipUrl: string, triggerWord?: string) {
      const {request_id, response_url} = await fal.queue.submit("fal-ai/flux-lora-fast-training", {
        input: {
          images_data_url: zipUrl,
        },
        // webhookUrl: `${process.env.WEKHOOK_URL}/api/fal-ai/webhook/train`,
        
      });
      return {request_id, response_url}
    }
    
    public async imageToVideo(prompt: string, resolution: "720p" | "1080p", generateAudio: boolean, imageUrl: string) {
      const { request_id } = await fal.queue.submit("fal-ai/veo3/fast/image-to-video", {
        input: {
          prompt,
          resolution,
          generate_audio: generateAudio,
          image_url: imageUrl,
        },
        // webhookUrl: "https://optional.webhook.url/for/results",
      });
      return {request_id,};
    }
    
    public async textToVideo(prompt: string, resolution: "720p" | "1080p", generateAudio: boolean) {
      const { request_id } = await fal.queue.submit("fal-ai/veo3/fast", {
        input: {
          prompt: prompt,
          generate_audio: generateAudio,
          resolution,
          enhance_prompt: true
        },
        // webhookUrl: "https://optional.webhook.url/for/results",
      });
      return {request_id,};
    }
}