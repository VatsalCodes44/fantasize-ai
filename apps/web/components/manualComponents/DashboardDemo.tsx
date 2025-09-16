"use client";
import React, { cloneElement, useState } from "react";
import { Login, Sidebar, SidebarBody, SidebarLink, useSidebar } from "../ui/sidebar";
import {
  IconPhoto,
  IconVideo,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { FloatingNav } from "../ui/floating-navbar";
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes";

export const Logo = () => {
  return (
    <div
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="" >
        <img src="/fantasizeico.ico" className="h-8" alt="" />
      </div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-xl text-black dark:text-white"
      >
        Fantasize Ai
      </motion.span>
    </div>
  );
};
export const LogoIcon = () => {
  return (
    <a
      href="/"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="" >
        <img src="/fantasizeico.ico" className="h-8" alt="" />
      </div>
    </a>
  );
};


export const ToggleMode = ({
  className,
  ...props
}: {
  className?: string;
}) => {
  const { open, animate } = useSidebar();
    const { setTheme } = useTheme()
  return (
    <div
      className={cn(
        "flex items-center justify-start gap-2 group/sidebar py-2",
        className
      )}
      {...props}
    >
      <Sun onClick={() => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"))
      }} className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon onClick={() => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"))
      }} className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />

      <motion.span
        onClick={() => {
          setTheme((prev) => (prev === "light" ? "dark" : "light"))
        }}
        animate={{
          display: animate ? (open ? "inline-block" : "none") : "inline-block",
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        className="text-neutral-700 hover:cursor-pointer dark:text-neutral-200 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre"
      >
        Toggle Mode
      </motion.span>
    </div>
  );
};


export function SidebarDemo({FAIs, children} : {FAIs: number, children: React.ReactNode}) {
  const links = [
    {
      label: "Image",
      href: "/dashboard/image/generate",
      icon: (
        <IconPhoto className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Video",
      href: "/dashboard/video/generate",
      icon: (
        <IconVideo className="h-6 w-6 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    }
  ]
  const [open, setOpen] = useState(false);
  
  return (
    <div className={cn(
      "mx-auto flex w-full flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
      "h-screen",
    )}>
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
              <ToggleMode />
            </div>
          </div>
          <div>
            <Login />
          </div>
        </SidebarBody>
      </Sidebar>
      
      <div className={`${open ? "hidden md:flex" : ""} flex flex-1 relative md:h-auto h-[calc(100vh-2.5rem)]`}> {/* Add mobile height */}
        <div className="flex w-full flex-1 overflow-y-scroll flex-col gap-2 rounded-tl-2xl border border-neutral-200 bg-white p-2 md:p-10 dark:border-neutral-700 dark:bg-neutral-900">
          <FloatingNav FAIs={FAIs} />
          {children}
        </div>
      </div>
    </div>
  );
}