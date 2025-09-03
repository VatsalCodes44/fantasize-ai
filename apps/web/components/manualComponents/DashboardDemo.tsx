"use client";
import React, { useState } from "react";
import { Login, Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { FloatingNav } from "../ui/floating-navbar";

// export function SidebarDemo({children}: {children: React.ReactNode}) {
//   const links = [
//     {
//       label: "Dashboard",
//       href: "#",
//       icon: (
//         <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
//       ),
//     },
//     {
//       label: "Profile",
//       href: "#",
//       icon: (
//         <IconUserBolt className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
//       ),
//     },
//     {
//       label: "Settings",
//       href: "#",
//       icon: (
//         <IconSettings className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
//       ),
//     },
//     {
//       label: "Logout",
//       href: "#",
//       icon: (
//         <IconArrowLeft className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
//       ),
//     },
//   ];
//   const [open, setOpen] = useState(false);
//   return (
//     <div
//       className={cn(
//         "mx-auto flex w-full flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
//         "min-h-screen", // for your use case, use `h-screen` instead of `h-[60vh]`
//       )}
//     >
//       <Sidebar open={open} setOpen={setOpen}>
//         <SidebarBody className="justify-between gap-10">
//           <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
//             {open ? <Logo /> : <LogoIcon />}
//             <div className="mt-8 flex flex-col gap-2">
//               {links.map((link, idx) => (
//                 <SidebarLink key={idx} link={link} />
//               ))}
//             </div>
//           </div>
//           <div>
//             <Login />
//           </div>
//         </SidebarBody>
//       </Sidebar>
//       <div className="flex flex-1">
//         <div className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl border border-neutral-200 bg-white p-2 md:p-10 dark:border-neutral-700 dark:bg-neutral-900">
//             {children}
//         </div>
//         </div>
//     </div>
//   );
// }


export const Logo = () => {
  return (
    <a
      href="/"
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
    </a>
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








// export function SidebarDemo({children} : {children: React.ReactNode}) {
//   const links = [
//     {
//       label: "Dashboard",
//       href: "#",
//       icon: (
//         <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
//       ),
//     },
//     {
//       label: "Profile",
//       href: "#",
//       icon: (
//         <IconUserBolt className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
//       ),
//     },
//     {
//       label: "Settings",
//       href: "#",
//       icon: (
//         <IconSettings className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
//       ),
//     },
//     {
//       label: "Logout",
//       href: "#",
//       icon: (
//         <IconArrowLeft className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
//       ),
//     },
//   ];
//   const [open, setOpen] = useState(false);
//   return (
//     <div
//       className={cn(
//         "mx-auto flex w-full flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
//         "h-screen", // for your use case, use `h-screen` instead of `h-[60vh]`
//       )}
//     >
//       <Sidebar open={open} setOpen={setOpen}>
//         <SidebarBody className="justify-between gap-10">
//           <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
//             {open ? <Logo /> : <LogoIcon />}
//             <div className="mt-8 flex flex-col gap-2">
//               {links.map((link, idx) => (
//                 <SidebarLink key={idx} link={link} />
//               ))}
//             </div>
//           </div>
//           <div>
//             <Login />
//           </div>
//         </SidebarBody>
//       </Sidebar>
//       <div className="flex flex-1 relative ">
//         <div className="flex w-full flex-1 overflow-y-scroll flex-col gap-2 rounded-tl-2xl border border-neutral-200 bg-white p-2 md:p-10 dark:border-neutral-700 dark:bg-neutral-900">
//         <FloatingNav />
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// }

 
export function SidebarDemo({children} : {children: React.ReactNode}) {
  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Profile",
      href: "#",
      icon: (
        <IconUserBolt className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <IconSettings className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];
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
            </div>
          </div>
          <div>
            <Login />
          </div>
        </SidebarBody>
      </Sidebar>
      
      {/* KEY FIX: Add height constraints for mobile */}
      <div className="flex flex-1 relative md:h-auto h-[calc(100vh-2.5rem)]"> {/* Add mobile height */}
        <div className="flex w-full flex-1 overflow-y-scroll flex-col gap-2 rounded-tl-2xl border border-neutral-200 bg-white p-2 md:p-10 dark:border-neutral-700 dark:bg-neutral-900">
          <FloatingNav />
          {children}
        </div>
      </div>
    </div>
  );
}