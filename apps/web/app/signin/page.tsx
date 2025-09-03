
import { useUser } from "@clerk/nextjs";
import React from "react";
import { redirect } from "next/navigation";
import { SigninComponent } from "@/components/manualComponents/SigninComponent";
import { auth } from "@clerk/nextjs/server";

export default async function BackgroundBoxesDemo() {
    const { userId } = await auth();

    if (userId){
      redirect('/dashboard');
    }
  return (
    <SigninComponent />
  );
}

