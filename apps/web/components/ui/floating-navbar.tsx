"use client";
import React, { JSX, useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { IconFaceId, IconPhoto, IconStack, IconTextCaption } from '@tabler/icons-react';


// export const FloatingNav = ({
//   className,
// }: {
//   className?: string;
// }) => {
//   const { scrollYProgress } = useScroll();

//   const [visible, setVisible] = useState(true);
//   const pathname = usePathname();

//   const navItems = [
//     {
//       name: "Generate",
//       link: "/dashboard/generate",
//       icon: <IconTextCaption className={`${pathname.endsWith("generate") ? "text-cyan-500" : "text-neutral-500 dark:text-white"} h-4 w-4`} />,
//     },
//     {
//       name: "Train",
//       link: "/dashboard/train",
//       icon: <IconFaceId className={`${pathname.endsWith("train") ? "text-cyan-500" : "text-neutral-500 dark:text-white"} h-4 w-4`} />,
//     },
//     {
//       name: "Packs",
//       link: "/dashboard/packs",
//       icon: (
//         <IconStack className={`${pathname.endsWith("packs") ? "text-cyan-500" : "text-neutral-500 dark:text-white"} h-4 w-4`} />
//       ),
//     },
//     {
//       name: "Images",
//       link: "/dashboard/images",
//       icon: (
//         <IconPhoto className={`${pathname.endsWith("images") ? "text-cyan-500" : "text-neutral-500 dark:text-white"} h-4 w-4`} />
//       ),
//     },
//   ];

//   useMotionValueEvent(scrollYProgress, "change", (current) => {
//     // Check if current is not undefined and is a number
//     if (typeof current === "number") {
//       let direction = current! - scrollYProgress.getPrevious()!;
//       if (scrollYProgress.get()<=0.1) {
//         setVisible(true);
//       }
//       else if (scrollYProgress.get() < 0.1) {
//         setVisible(false);
//       } else {
//         if (direction <= 0) {
//           setVisible(true);
//         } else {
//           setVisible(false);
//         }
//       }
//     }
//   });

//   return (
//     <AnimatePresence mode="wait">
//       <motion.div
//         initial={{
//           opacity: 1,
//           y: -100,
//         }}
//         animate={{
//           y: visible ? 0 : -100,
//           opacity: visible ? 1 : 0,
//         }}
//         transition={{
//           duration: 0.2,
//         }}
//         className={cn(
//           "flex max-w-fit fixed top-11 md:top-6 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
//           className
//         )}
//       >
//         {navItems.map((navItem: any, idx: number) => {
//           return (
//           <a
//             key={`link=${idx}`}
//             href={navItem.link}
//             className={cn(
//               `${pathname.endsWith(navItem.name.toLowerCase()) ? "text-cyan-500" : "dark:text-neutral-50 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"} relative items-center flex space-x-1` 
//             )}
//           >
//             <span className="block sm:hidden">{navItem.icon}</span>
//             <span className="hidden sm:block text-sm">{navItem.name}</span>
//           </a>
//         )})}
//       </motion.div>
//     </AnimatePresence>
//   );
// };




export const FloatingNav = ({
  className,
}: {
  className?: string;
}) => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const scrollContainerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Find the scrollable container
  useEffect(() => {
    if (!isMounted) return;

    const findScrollContainer = () => {
      // Look for the closest parent with overflow-y-scroll
      const containers = document.querySelectorAll('.overflow-y-scroll');
      if (containers.length > 0) {
        // Get the first scrollable container that's actually scrollable
        const scrollableContainer = Array.from(containers).find(container => 
          container.scrollHeight > container.clientHeight
        );
        return scrollableContainer as HTMLElement;
      }
      return null;
    };

    const scrollContainer = findScrollContainer();
    if (scrollContainer) {
      scrollContainerRef.current = scrollContainer;
      
      const handleScroll = () => {
        if (!scrollContainerRef.current) return;
        
        const scrollTop = scrollContainerRef.current.scrollTop;
        
        // Show/hide logic based on scroll direction
        if (scrollTop > lastScrollTop && scrollTop > 50) {
          // Scrolling down - hide
          setVisible(false);
        } else if (scrollTop < lastScrollTop) {
          // Scrolling up - show
          setVisible(true);
        }
        
        // Always show when at the top
        if (scrollTop <= 50) {
          setVisible(true);
        }
        
        setLastScrollTop(scrollTop);
      };

      scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
      
      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isMounted, lastScrollTop]);

  // Fallback: if no scroll container found, use window scroll
  useEffect(() => {
    if (!isMounted || scrollContainerRef.current) return;

    const handleWindowScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      if (scrollTop > lastScrollTop && scrollTop > 50) {
        setVisible(false);
      } else if (scrollTop < lastScrollTop) {
        setVisible(true);
      }
      
      if (scrollTop <= 20) {
        setVisible(true);
      }
      
      setLastScrollTop(scrollTop);
    };

    window.addEventListener('scroll', handleWindowScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
    };
  }, [isMounted, lastScrollTop]);

  if (!isMounted) {
    return null;
  }

  const navItems = [
    {
      name: "Generate",
      link: "/dashboard/generate",
      icon: <IconTextCaption className={`${pathname.endsWith("generate") ? "text-cyan-500" : "text-neutral-500 dark:text-white"} h-4 w-4`} />,
    },
    {
      name: "Face-Model",
      link: "/dashboard/face-model",
      icon: <IconFaceId className={`${pathname.endsWith("face-model") ? "text-cyan-500" : "text-neutral-500 dark:text-white"} h-4 w-4`} />,
    },
    {
      name: "Packs",
      link: "/dashboard/packs",
      icon: (
        <IconStack className={`${pathname.endsWith("packs") ? "text-cyan-500" : "text-neutral-500 dark:text-white"} h-4 w-4`} />
      ),
    },
    {
      name: "Images",
      link: "/dashboard/images",
      icon: (
        <IconPhoto className={`${pathname.endsWith("images") ? "text-cyan-500" : "text-neutral-500 dark:text-white"} h-4 w-4`} />
      ),
    },
  ];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: .4,
        }}
        className={cn(
          "flex max-w-fit fixed top-11 md:top-6 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-8 py-2  items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => {
          return (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              `${pathname.endsWith(navItem.name.toLowerCase()) ? "text-cyan-500" : "dark:text-neutral-50 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"} relative items-center flex space-x-1` 
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </a>
        )})}
      </motion.div>
    </AnimatePresence>
  );
};