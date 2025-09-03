import { redirect } from 'next/navigation'
import React from 'react'

function page() {
    redirect('/dashboard/generate')
  return (
    <div></div>
  )
}

export default page