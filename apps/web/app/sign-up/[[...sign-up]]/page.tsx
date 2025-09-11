"use client"
import { ShineBorder } from "@/components/magicui/shine-border";
import { Boxes } from "@/components/ui/background-boxes";
import { Card, CardHeader } from "@/components/ui/card";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-black flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <div className="flex justify-center items-center h-screen">
        <Card className="relative max-w-[350px] w-full">
          <ShineBorder shineColor={["#2f0874" ,"#872d9b", "#e903f9", "#08f9fb", "#068fe0"]} />
          <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
        </Card>
      </div>
    </div>
  );
}
