import { AuroraText } from "@/components/magicui/aurora-text";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { GridBackground } from "@/components/manualComponents/GridBackground";
import { HowTOGenerateImage } from "@/components/manualComponents/HowTOGenerateImage";
import { HowTOGenerateVideo } from "@/components/manualComponents/HowToGenerateVideo";
import { TrainCard } from "@/components/manualComponents/TrainCard"
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FlipWords } from "@/components/ui/flip-words";

import { ModeToggle } from "@/components/ui/ToggleMode"

export default () => {
  const projects = [
    {
      title: "Stripe",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
    },
    {
      title: "Netflix",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
    },
    {
      title: "Google",
      description:
        "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
    },
    {
      title: "Meta",
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: "https://meta.com",
    },
    {
      title: "Amazon",
      description:
        "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
      link: "https://amazon.com",
    },
    {
      title: "Microsoft",
      description:
        "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      link: "https://microsoft.com",
    },
  ];
  return (
    <div className="">
      {/* <AnimatedThemeToggler /> */}
      <div className="fixed bottom-8 right-8 lg:bottom-12 lg:right-12 z-50">
        <ModeToggle/>
      </div>
       <div className="relative flex justify-center items-center w-full overflow-hidden min-h-60 sm:h-60 rounded-b-2xl">
        <GridBackground />
        <div className="relative z-10">
          <div className="mb-4 flex justify-center text-4xl sm:text-7xl gap-2 font-bold">
            {/* <AnimatedGradientText className="text-4xl sm:text-7xl flex gap-2 font-bold ">
            <div className="">
            </div>
            Fantasize AI
            </AnimatedGradientText> */}
            <img src="/fantasizeico.ico" className="h-10 sm:h-20" alt="" />
            <AuroraText speed={1} colors={["#2f0874" ,"#872d9b", "#e903f9", "#08f9fb", "#068fe0"]}>Fantasize Ai</AuroraText>
          </div>
          <div className="flex justify-start">
            <FlipWords duration={1500} words={["Generate", "Unleash", "Imagine"]} className="text-2xl font-bold relative left-2 text-cyan-500 dark:text-cyan-500" />
            <div className="text-2xl font-semibold ">
              the extraordinary with Fantasize AI. 
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <InteractiveHoverButton className="border-2 border-cyan-500">
              Try now
            </InteractiveHoverButton>
          </div>
        </div>
      </div>

      <div>
        <HowTOGenerateImage />
      </div>
      <div>
        <HowTOGenerateVideo />
      </div>
      <div className="max-w-4xl mx-auto px-12">
        <HoverEffect items={projects}/>
      </div>
      <div className="mt-10 pt-8 border-t-2 rounded-3xl h-80">
          <div className="grid grid-cols-2 gap-4 p-4 md:p-8 lg:p-10">
            <div className="col-span-1 flex justify-center">
              <img src="/fantasizelogo.png" className="relative left-3 h-20 w-20" alt="" />
              <div className="flex justify-center items-center text-3xl pb-2 font-semibold">
                <AuroraText speed={1} colors={["#2f0874" ,"#872d9b", "#e903f9", "#08f9fb", "#068fe0"]}>Fantasize Ai</AuroraText>
              </div>
            </div>
            <div></div>
          </div>
        </div>
    </div>
  )
}

