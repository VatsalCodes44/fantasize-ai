import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function HowTOGenerateVideo() {
  const data = [
    {
      title: "Upload a Photo",
      content: (
        <div key="Upload a Photo">
          <p className="mb-8 text-sm font-normal text-neutral-800 md:text-lg dark:text-neutral-200">
            Choose any single picture — a selfie, a portrait, or even artwork. One image is all it takes
          </p>
          <div className="grid grid-cols-1 gap-4">
            <img
              src="/FA4.jpg"
              alt="startup template"
              width={500}
              height={500}
              className=" rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] "
            />
          </div>
        </div>
      ),
    },
    {
      title: "Add Your Prompt",
      content: (
        <div key="Add Your Prompt">
          <p className="mb-8 text-sm font-normal text-neutral-800 md:text-lg dark:text-neutral-200">
            Describe the scene you want — “cinematic slow-motion with neon lights” or “anime hero walking through a futuristic city.” Fantasize AI gets it
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/prompt-3.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-fit w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] "
            />
            <img
              src="/prompt-4.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-fit w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] "
            />
          </div>
        </div>
      ),
    },
    {
      title: "Watch It Come Alive",
      content: (
        <div key="Watch It Come Alive">
          <p className="mb-4 text-sm font-normal text-neutral-800 md:text-lg dark:text-neutral-200">
            Your still photo instantly transforms into a cinematic, dynamic video that feels like it was shot on a movie set.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <video className='hover:cursor-pointer min-h-[200px] min-w-[250px] rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]' 
            src={"/veo.mp4"} 
            autoPlay loop muted playsInline
            controls preload="none" />
          </div>
        </div>
      ),
    }
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} initialHeading= "Transform Images Into" middleHeading="Motion" terminationHeading=""/>
    </div>
  );
}
