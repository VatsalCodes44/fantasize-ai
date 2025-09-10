"use client"

import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import { Skeleton } from "../ui/skeleton"
import axios from "axios"
import { useRouter } from "next/navigation"
import { BACKEND_URL } from "@/app/config"
import Image from "next/image"

type Image = { imageUrl: string[]; createdAt: Date }

export function Images() {
  const [myImages, setMyImages] = useState<Image[] | null>(null)
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [offset, setOffset] = useState(0)
  const limit = 15
  const router = useRouter()

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/bulk/images?limit=${limit}&offset=${offset}`)
      .then((res) => {
        setMyImages(res.data.images)
        setOffset((p) => p + limit)
      })
  }, [])

  if (!myImages) {
    return (
      <div className="mx-auto">
        <div className="p-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array(12)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="p-2">
                <Skeleton className="h-[230px] w-[310px] rounded-md" />
              </div>
            ))}
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto w-fit">
      <div
        className={`${
          myImages.length == 0 ? "hidden" : ""
        } grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6`}
      >
        {myImages.map((image, index) =>
          image.imageUrl.map((url, i) => (
            <div
              key={`${index}-${i}`}
              className="relative"
              style={{ width: 310, height: 230 }}
            >
              <Image
                src={url}
                alt="Generated Image"
                onClick={() => router.push(url)}
                className="h-full w-full rounded-md object-cover hover:cursor-pointer hover:scale-105 transition-transform duration-200"
              />
              <div className="absolute bottom-1 right-1 bg-black bg-opacity-50 text-white px-1 py-0.5 text-xs rounded">
                {new Date(image.createdAt).toDateString()}
              </div>
            </div>
          ))
        )}
      </div>

      <div
        className={`${
          myImages.length <= 15 || buttonDisabled ? "hidden" : ""
        } flex justify-center`}
      >
        <Button
          variant="outline"
          className="mt-6"
          onClick={async () => {
            const res = await axios.get(
              `${BACKEND_URL}/bulk/images?limit=${limit}&offset=${offset}`
            )
            setMyImages((p) => [...p!, ...res.data.images])
            setOffset((p) => p + limit)
            if (res.data.images.length < limit) {
              setButtonDisabled(true)
            }
          }}
        >
          Load More
        </Button>
      </div>

      <div
        className={`${
          myImages != null ? "hidden" : ""
        } text-center py-40 text-gray-500 text-lg font-semibold`}
      >
        No Images generated yet
      </div>
    </div>
  )
}
