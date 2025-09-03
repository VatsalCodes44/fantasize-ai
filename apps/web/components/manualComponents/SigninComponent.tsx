"use client"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShineBorder } from "@/components/magicui/shine-border";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { AuroraText } from "@/components/magicui/aurora-text";
import { useSignIn } from "@clerk/nextjs";
import React from "react";
import { Boxes } from "@components/ui/background-boxes";

export function SigninComponent() {
  const { signIn, isLoaded } = useSignIn();


  // This function will be called when the user clicks "Sign in with Google"
  const signInWithGoogle = () => {
    if (!isLoaded) return;

    // Start the OAuth flow using Google
    signIn.authenticateWithRedirect({
      strategy: 'oauth_google', // Clerk's identifier for Google
      redirectUrl: '/sso-callback', // The route Clerk will use to handle the callback
      redirectUrlComplete: '/dashboard', // Where to send the user after successful sign-in
    });
  };

  // This function will be called when the user clicks "Sign in with GitHub"
  const signInWithGitHub = () => {
    if (!isLoaded) return;

    // Start the OAuth flow using GitHub
    signIn.authenticateWithRedirect({
      strategy: 'oauth_github', // Clerk's identifier for GitHub
      redirectUrl: '/sso-callback',
      redirectUrlComplete: '/dashboard',
    });
  };
  return (
    <div className="h-screen relative w-full overflow-hidden bg-black flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <div className="flex justify-center items-center h-screen">
        <Card className="relative overflow-hidden max-w-[350px] w-full">
          <ShineBorder shineColor={["#2f0874" ,"#872d9b", "#e903f9", "#08f9fb", "#068fe0"]} />
          <CardHeader>
            <CardTitle>
              <div className="mb-2 flex justify-center text-2xl gap-2 font-bold">
                <img src="/fantasizeico.ico" className="h-8 " alt="" />
                <AuroraText speed={1} colors={["#2f0874" ,"#872d9b", "#e903f9", "#08f9fb", "#068fe0"]}>Fantasize Ai</AuroraText>
              </div>
            </CardTitle>
            <CardDescription className="text-center">
              Welcome back! Please sign in to continue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <div className="flex flex-col space-y-4">
                <button
                  className="group/btn shadow-input relative hover:cursor-pointer flex h-10 w-full items-center justify-center space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
                  type="submit"
                  onClick={signInWithGitHub}
                >
                  <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                  <span className="text-sm text-neutral-700 dark:text-neutral-300">
                    GitHub
                  </span>
                </button>
                <button
                  className="group/btn shadow-input relative hover:cursor-pointer flex h-10 w-full items-center justify-center space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
                  type="submit"
                  onClick={signInWithGoogle}
                >
                  <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                  <span className="text-sm text-neutral-700 dark:text-neutral-300">
                    Google
                  </span>
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

