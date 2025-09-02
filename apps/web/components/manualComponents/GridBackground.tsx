"use client";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

export const GridBackground = () => {
  return (
        <FlickeringGrid
          className="absolute inset-0 z-0 "
          squareSize={6}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.5}
          flickerChance={0.2}
        />
  )
}

