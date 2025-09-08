"use client"

import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import { Skeleton } from "../ui/skeleton"
import axios from "axios"
import { useRouter } from "next/navigation"

type Image = {imageUrl: string[], createdAt: Date}

export function Images() {
    const [myImages, setMyImages] = useState<Image[] | null>(null) 
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [offset, setOffset] = useState(0)
    const limit = 15;
    const router = useRouter();
    useEffect(() =>  {
        axios.get("http://localhost:3000/api/images/bulk?limit="+limit+"&offset="+offset).then((res) => {
            setMyImages(res.data.images)
            setOffset(p=>p+limit)
        })
    },[])

    if (!myImages) {
        return (
            <div className="mx-auto">
                <div className={` p-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6`}>
                    {Array(12).fill(0).map((_,index) => {
                        console.log(index)
                        return (
                            <div key={index} className="p-2">
                                <Skeleton className="h-40 w-32 sm:h-48 sm:w-36 md:h-56 md:w-36 lg:h-64 lg:w-44" />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    return (
        <div className="h-full w-full flex justify-center">
            <div className={`${myImages.length == 0 ? "hidden" : "" } grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4`}>
                {myImages.map((image,index) => {

                    return (
                        <div key={index} className="">
                            {image.imageUrl.map((url) => {
                                return (
                                    <div className="relative h-40 w-32 sm:h-48 sm:w-36 md:h-56 md:w-36 lg:h-64 lg:w-44" >
                                        <img src={url} alt="Generated Image" onClick={() => {
                                            router.push(url)
                                        }} className="h-full w-full rounded-md hover:cursor-pointer hover:scale-105"/>
                                        <div className="absolute bottom-0 right-0 bg-black bg-opacity-50 dark:text-white p-.5 text-xs rounded-xs">
                                            {new Date(image.createdAt).toDateString()}
                                        </div>
                                    </div>
                                )
                            })}
                            
                        </div>
                    )
                })}
            </div>
            <div className={`${myImages.length <= 15 || buttonDisabled ? "hidden" : "" } flex justify-center`}>
                <Button variant="outline" className="mt-4" onClick={async () => {
                    const res = await axios.get("http://localhost:3000/api/images/bulk?limit="+limit+"&offset="+offset)
                    setMyImages(p => [...p!, ...res.data.images])
                    setOffset(p=>p+limit)
                    if (res.data.images.length < limit) {
                        setButtonDisabled(true)
                    }
                }}>Load More</Button>
            </div>
            <div className={`${myImages != null ? "hidden" : ""} text-center py-40 text-gray-500 text-lg font-semibold`}>
                No Images generated yet
            </div>
        </div>
    )
}

