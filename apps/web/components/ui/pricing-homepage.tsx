"use client"
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { CardFooter } from "./card";
import { Button } from "./button";

export const Pricing = ({
  className,
}: {
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const variants = [
    {
      id: 1,
      type: "normal",
      name: "Starter",
      icon: "🟢",
      amount: 100,
      discountPrice: null,
      discountLabel: "(No discount)",
      FAIs: 5,
      Pros: [
        "Cheapest entry point",
        "Good for trying features",
        "Low risk",
      ],
      Cons: [
        "No discount",
        "Not enough tokens for video",
        "Runs out very fast",
      ],
    },
    {
      id: 2,
      type: "normal",
      name: "Value",
      icon: "🔵",
      amount: 250,
      discountPrice: 300,
      discountLabel: "(17% off)",
      FAIs: 14,
      Pros: [
        "Better value",
        "Enough tokens for video + images",
        "Balanced for casual use",
      ],
      Cons: [
        "Not enough for model training",
        "Discount is moderate",
      ],
    },
    {
      id: 3,
      type: "value",
      name: "Pro",
      icon: "🟣",
      amount: 500,
      discountPrice: 650,
      discountLabel: "(23% off)",
      FAIs: 30,
      Pros: [
        "Can train 1 face model (20 FAI) + have tokens left",
        "Good discount",
        "Ideal for regular users",
      ],
      Cons: [
        "Medium upfront cost",
        "Ultimate plan gives better per-token value",
      ],
    },
    {
      id: 4,
      type: "normal",
      name: "Ultimate",
      icon: "🟡",
      amount: 1000,
      discountPrice: 1400,
      discountLabel: "(29% off)",
      FAIs: 62,
      Pros: [
        "Best value (lowest rate)",
        "Multiple models/videos/images",
        "Perfect for creators & pros",
      ],
      Cons: [
        "High upfront cost",
        "Overkill for casual users",
      ],
    },
  ];
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-10",
        className
      )}
    >
      {/* Starter Plan */}
      {variants.map((variant,idx) => {
        return (
          <a key={idx}
            href=""
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(variant.id)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === variant.id && (
                <motion.span
                  className={`absolute inset-0 h-full w-full ${variant.type === "value" ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white" : "bg-neutral-300 dark:bg-slate-800/[0.8]" } block rounded-3xl`}
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card className="relative flex flex-col h-full">
              <div className={cn(
                  "absolute top-0 left-0 px-3 py-1 text-xs font-semibold rounded-full shadow-md",
                  variant.type === "value"
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
                    : "hidden"
                )}>
                Saver Pack
              </div>
                <div className="flex-1">
                    <CardTitle className="text-2xl font-bold">{variant.name} {variant.icon}</CardTitle>
                    <CardDescription className="my-2">
                        <div className="text-xl font-bold py-2 flex items-baseline gap-2 text-white ">
                        <span className={`${!variant.discountPrice ? "hidden" : ""} text-lg line-through text-gray-600 dark:text-gray-400`}>₹{variant.discountPrice}</span>
                        <span className=" text-black dark:text-white">₹{variant.amount}</span>
                        <span className="text-xs">{variant.discountLabel}</span>
                        </div>
                        <h2 className="text-xl font-bold py-2">5 FAI Tokens</h2>
                        <h2 className="text-lg font-semibold pt-2 pb-1">Pros ✅</h2>
                        <div className="text-sm">
                          {variant.Pros.map((pro, idx) => {
                            return (
                              <div key={idx}>
                                • {pro}
                              </div>
                            )
                          })}
                        </div>
                        <h2 className="text-lg font-semibold pt-2 pb-1">Cons ❌</h2>
                        <div className="text-sm">
                          {variant.Cons.map((con, idx) => {
                            return (
                              <div key={idx}>
                                • {con}
                              </div>
                            )
                          })}
                        </div>
                    </CardDescription>
                </div>
            </Card>
          </a>
        )
      })}
    </div>
  );
};





export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // Light mode first, then dark mode overrides
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-white border border-gray-200 group-hover:border-gray-300 relative z-20 flex flex-col shadow-md",
        "dark:bg-black dark:border dark:border-white/[0.2] group-hover:border-slate-700",
        className
      )}
    >
      <div className="relative z-50 flex-1">
        <div className="p-4 flex flex-col h-full">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-gray-900 font-bold tracking-wide mt-4",
        "dark:text-zinc-100",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mt-8 text-gray-600 tracking-wide leading-relaxed text-sm",
        "dark:text-zinc-400",
        className
      )}
    >
      {children}
    </div>
  );
};
