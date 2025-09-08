import { FloatingNav } from '@/components/ui/floating-navbar'
import React from 'react'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    
  return (
    <div 
    // className="relative w-full"
    >
        {/* <FloatingNav className='px-5'/>
        <div className="grid grid-cols-1 min-h-screen"> */}
            {children}
        {/* </div> */}
    </div>
  )
}

