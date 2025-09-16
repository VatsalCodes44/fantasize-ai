import { AuroraText } from "@/components/magicui/aurora-text";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { GridBackground } from "@/components/manualComponents/GridBackground";
import { HowTOGenerateImage } from "@/components/manualComponents/HowTOGenerateImage";
import { HowTOGenerateVideo } from "@/components/manualComponents/HowToGenerateVideo";
import { Pricing } from "@/components/ui/pricing-homepage";
import { FlipWords } from "@/components/ui/flip-words";
import { ModeToggle } from "@/components/ui/ModeToggle"
import Footer from "@/components/ui/Footer";

export default () => {
  // const projects = [
  //   {
  //     title: "Starter 🟢",
  //     description:
  //       "A technology company that builds economic infrastructure for the internet.",
  //     link: "https://stripe.com",
  //   },
  //   {
  //     title: "Netflix",
  //     description:
  //       "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
  //     link: "https://netflix.com",
  //   },
  //   {
  //     title: "Google",
  //     description:
  //       "A multinational technology company that specializes in Internet-related services and products.",
  //     link: "https://google.com",
  //   },
  //   {
  //     title: "Meta",
  //     description:
  //       "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
  //     link: "https://meta.com",
  //   },
  //   {
  //     title: "Amazon",
  //     description:
  //       "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
  //     link: "https://amazon.com",
  //   },
  //   {
  //     title: "Microsoft",
  //     description:
  //       "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
  //     link: "https://microsoft.com",
  //   },
  // ];
  return (
    <div className="">
      <div className="fixed bottom-8 right-8 lg:bottom-12 lg:right-12 z-50">
        <ModeToggle/>
      </div>
       <div className="relative flex justify-center items-center w-full overflow-hidden min-h-60 sm:h-60 rounded-b-2xl">
        <GridBackground />
        <div className="relative z-10">
          <div className="mb-4 flex justify-center text-4xl sm:text-7xl gap-2 font-bold">
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
      <div className="max-w-7xl mx-auto pt-20 pb-12 px-5">
        <div className="max-w-7xl mx-auto pt-12 pb-8 px-5">
          <h2 className="text-center text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Pricing
          </h2>

          {/* Token Usage Rules */}
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-cyan-600 dark:text-cyan-400 mb-4">
              Token Usage Rules (FAI Tokens)
            </h3>

            {/* Rules Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-white dark:bg-black dark:border dark:border-white/[0.2] shadow-md hover:shadow-lg transition">
                <div className="text-4xl mb-3">🖼️</div>
                <h4 className="text-lg font-bold mb-1">1 FAI Token</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Generates <span className="font-semibold">1 Image</span> (720p / 1080p)
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-black dark:border dark:border-white/[0.2] shadow-md hover:shadow-lg transition">
                <div className="text-4xl mb-3">🤖</div>
                <h4 className="text-lg font-bold mb-1">20 FAI Tokens</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Trains <span className="font-semibold">1 Face Model (LoRA)</span>
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-black dark:border dark:border-white/[0.2] shadow-md hover:shadow-lg transition">
                <div className="text-4xl mb-3">🎞️</div>
                <h4 className="text-lg font-bold mb-1">8 FAI Tokens</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Generates <span className="font-semibold">1 Video</span> without Audio (720p / 1080p)
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-black dark:border dark:border-white/[0.2] shadow-md hover:shadow-lg transition">
                <div className="text-4xl mb-3">🎬🔊</div>
                <h4 className="text-lg font-bold mb-1">10 FAI Tokens</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Generates <span className="font-semibold">1 Video with Audio</span> (720p / 1080p)
                </p>
              </div>
            </div>
          </div>
        </div>
        <Pricing/>
      </div>
      
      <div className=" pt-4 border-t-2 rounded-3xl h-80">
        <Footer />
      </div>

    </div>
  )
}

