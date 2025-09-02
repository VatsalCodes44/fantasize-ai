import { fal } from "@fal-ai/client";
import { BaseModel } from "./BaseModel";


export class FalAiModel extends BaseModel {
    constructor () {
        super();
    }

    public override async generateImage(prompt: string, tensorPath: string) {
        const {request_id, response_url} = await fal.queue.submit("fal-ai/flux-lora", {
            input: {
              prompt,
              loras: [{path: tensorPath, scale: 1}]
            },
            webhookUrl: `${process.env.WEKHOOK_URL}` + "api/fal-ai/webhook"
        });
        return {request_id, response_url};
    }

    public override async trainModel(zipUrl: string, triggerWord?: string) {
        const {request_id, response_url} = await fal.queue.submit("fal-ai/flux-lora-fast-training", {
            input: {
              images_data_url: zipUrl,
              trigger_word: triggerWord
            },
            webhookUrl: `${process.env.WEKHOOK_URL}` + "/api/fal-ai/webhook",
          });
          return {request_id, response_url}
    }
}