import React from 'react'
import { AuroraText } from '../magicui/aurora-text'
import { IconBrandGithubFilled, IconBrandTwitterFilled, IconCoinFilled } from '@tabler/icons-react'

export default function Footer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-4 md:p-10 ">

        {/* Left Section: Logo + Title */}
        <div className="flex flex-col items-center md:items-center text-center md:text-left">
        <div className="flex relative right-4 items-center gap-3">
            <img
            src="/fantasizelogo.png"
            alt="Fantasize Logo"
            className="relative left-4 h-18 w-18 object-contain"
            />
            <span className="text-3xl font-semibold flex items-center">
            <AuroraText
                speed={1}
                colors={["#2f0874", "#872d9b", "#e903f9", "#08f9fb", "#068fe0"]}
            >
                Fantasize Ai
            </AuroraText>
            </span>
        </div>
        <div className=" text-neutral-700 dark:text-neutral-200">
            Building in public at <a href="https://x.com/mahajan_vatsal_?t=aebnZplGByX7lcjaAkEDzw&s=09" className="text-cyan-500">@mahajan_vatsal_</a>
        </div>
        </div>

        {/* Right Section: Links */}
        <div className="flex flex-col justify-center gap-3 items-center md:items-center text-center md:text-left ">
        <a
            href="/pricing"
            className="hover:text-cyan-500 transition-colors flex gap-1"
        >
            <IconCoinFilled className="size-5 relative top-0.5"/>
            Pricing
        </a>
        <a
            href="https://x.com/mahajan_vatsal_?t=aebnZplGByX7lcjaAkEDzw&s=09"
            className="hover:text-cyan-500 transition-colors flex gap-1"
        >
            <IconBrandTwitterFilled className="size-5 relative top-0.5"/>
            Twitter
        </a>
        <a
            href="https://github.com/VatsalCodes44/fantasize-ai"
            className="hover:text-cyan-500 transition-colors flex gap-1"
        >
            <IconBrandGithubFilled className="size-5 relative top-0.5"/>
            GitHub
        </a>
        </div>
    </div>
  )
}
