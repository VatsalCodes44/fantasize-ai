import { AuroraText } from "@/components/magicui/aurora-text";
import { PaymentCard } from "@/components/manualComponents/payment-cards";

export default async () => {
  return (
    <div className="">
      <div className="relative ">
        {/* Logo + Brand */}
        <div className="col-span-1 flex justify-center">
          <img src="/fantasizelogo.png" className="relative left-3 h-20 w-20" alt="" />
          <div className="flex justify-center items-center text-5xl pb-2 font-semibold">
            <AuroraText speed={1} colors={["#2f0874" ,"#872d9b", "#e903f9", "#08f9fb", "#068fe0"]}>Fantasize Ai</AuroraText>
          </div>
        </div>

        {/* Pricing Section */}
      <div className="max-w-7xl mx-auto pt-12 pb-16 px-5">

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
      <div className="max-w-7xl mx-auto pb-12 px-5">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold tracking-tight">
          Pricing
        </h2>
        <PaymentCard/>
      </div>
      </div>

      
      <div className="">
        hi
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

