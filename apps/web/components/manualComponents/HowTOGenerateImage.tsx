import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function HowTOGenerateImage() {
  const data = [
    {
      title: "Upload Your Photos",
      content: (
        <div key="Upload Your Photos">
          <p className="mb-8 text-sm font-normal text-neutral-800 md:text-lg dark:text-neutral-200">
            Drop in 15–20 selfies with different angles and vibes. The more variety you give, the sharper and more realistic your AI model becomes
          </p>
          <div className="grid grid-cols-3 gap-4">
            <img
              src="/vatsal-1.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="max-h-full w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] "
            />
            <img
              src="/vatsal-2.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="max-h-full w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] "
            />
            <img
              src="/vatsal-3.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="max-h-full w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] "
            />
            <img
              src="/vatsal-4.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="max-h-full w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] "
            />
            <img
              src="/vatsal-5.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="max-h-full w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] "
            />
            <img
              src="/vatsal-6.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-full w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] "
            />
          </div>
        </div>
      ),
    },
    {
      title: "Train Your AI Twin",
      content: (
        <div key="Train Your AI Twin">
          <p className="mb-8 text-sm font-normal text-neutral-800 md:text-lg dark:text-neutral-200">
            In just minutes, Fantasize AI builds a personal face model that looks exactly like you — ready to be styled in endless ways
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/HTG-2.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-fit w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] "
            />
            <img
              src="/HTG-3.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-full w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] "
            />
          </div>
        </div>
      ),
    },
    {
      title: "Turn Prompts into Magic",
      content: (
        <div key="Turn Prompts into Magic">
          <p className="mb-4 text-sm font-normal text-neutral-800 md:text-lg dark:text-neutral-200">
            Type what you imagine — “millionaire,” “asthetic scene,” or “medieval king.” Your AI twin instantly steps into the role
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/prompt-1.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-full w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] "
            />
            <img
              src="/prompt-2.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-full w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] "
            />
          </div>
        </div>
      ),
    },
    {
      title: "Create Stunning, Viral-Ready Images",
      content: (
        <div key="Create Stunning, Viral-Ready Images">
          <p className="mb-4 text-sm font-normal text-neutral-800 md:text-lg dark:text-neutral-200">
            Generate jaw-dropping, hyper-realistic images of yourself in limitless styles. Perfect for Instagram, TikTok, or just blowing your friends’ minds
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/FA3.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="h-full w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] "
            />
            <img
              src="/FA4.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="h-full w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] "
            />
            <img
              src="/FA1.jpg"
              alt="bento template"
              width={500}
              height={500}
              className="h-full w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] "
            />
            <img
              src="/FA6.jpg"
              alt="cards template"
              width={500}
              height={500}
              className="h-full w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] "
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} initialHeading="Generate" middleHeading="Face-Trained" terminationHeading="Images" />
    </div>
  );
}
