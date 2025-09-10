"use client"

import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import { Skeleton } from "../ui/skeleton"
import axios from "axios"
import { useRouter } from "next/navigation"
import { BACKEND_URL } from "@/app/config"

type Video = {videoUrl: string, createdAt: Date}

export function Videos() {
    const [myVideos, setMyVideos] = useState<Video[] | null>(null) 
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [offset, setOffset] = useState(0)
    const limit = 15;
    const router = useRouter();
    useEffect(() =>  {
        axios.get(`${BACKEND_URL}/bulk/videos?limit=${limit}&offset=${offset}`).then((res) => {
            setMyVideos(res.data.videos)
            setOffset(p=>p+limit)
        })
    },[])

    if (!myVideos) {
        return (
            <div className="mx-auto">
                <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6`}>
                    {Array(12).fill(0).map((_,index) => {
                        console.log(index)
                        return (
                            <div key={index} className="">
                                <Skeleton className="w-[320px] h-[180px]" />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    return (
        <div className="mx-auto w-fit">
            <div className={`${myVideos.length == 0 ? "hidden" : ""} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6`}>
                {myVideos.map((video, index) => {
                    console.log(video.videoUrl)
                    return (
                        <video key={index} className='rounded-md hover:cursor-pointer hover:scale-105 transition-transform duration-200' 
                        src={video.videoUrl}
                        autoPlay loop muted playsInline
                        width="320" height="240" controls preload="none" />
                    )
                })}
            </div>

            <div className={`${myVideos.length <= 15 || buttonDisabled ? "hidden" : "" } flex justify-center`}>
                <Button variant="outline" className="mt-4" onClick={async () => {
                    const res = await axios.get(`${BACKEND_URL}/bulk/videos?limit=${limit}&offset=${offset}`)
                    setMyVideos(p => [...p!, ...res.data.videos])
                    setOffset(p=>p+limit)
                    if (res.data.images.length < limit) {
                        setButtonDisabled(true)
                    }
                }}>Load More</Button>
            </div>
            <div className={`${myVideos != null ? "hidden" : ""} text-center py-40 text-gray-500 text-lg font-semibold`}>
                No Images generated yet
            </div>
        </div>
    )
}

