"use client"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShineBorder } from "@/components/magicui/shine-border";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";
import React, { useState } from "react";
import { BACKEND_URL } from "@/app/config";
import axios from "axios";
import { ImageUpload } from "../ui/imageUpload";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";

type models = {
    id: string;
    name: string;
}

export default function GenerateVideo({models}: {models: models[]}) {
  const [prompt, setPrompt] = useState("")
  const [resolution, setResolution] = useState("")
  const [audio, setAudio] = useState(false)
  const [file, setFile] = useState<File | null>(null);
  return (
    <Card className="p-0 max-w-xl relative overflow-hidden w-full">
      <ShineBorder shineColor={["#2f0874" ,"#872d9b", "#e903f9", "#08f9fb", "#068fe0"]} />
        <CardHeader className="border-b border-border p-4 [.border-b]:pb-4">
          <CardTitle className="text-xl text-center">Generate Video</CardTitle>
          <CardDescription className="text-center">
            No image? We'll generate a random video for you.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4">
          <div>
            <Textarea className="min-h-24" onChange={(e) => {
                setPrompt(e.target.value)
            }} placeholder="Fantasize yourself..."  />
            <div className="flex justify-around gap-2">
              <Select onValueChange={(value) => {
                  setResolution(value) 
              }}>
                  <SelectTrigger className="w-full my-4">
                  <SelectValue placeholder="resolution" />
                  </SelectTrigger>
                  <SelectContent>
                  <SelectGroup>
                      <SelectItem value="720p">720p</SelectItem>
                      <SelectItem value="1080p">1080p</SelectItem>
                  </SelectGroup>
                  </SelectContent>
              </Select>
              <div className=" flex items-center">
                <div className="relative -top-1.5">
                  <Label htmlFor="Audio">Audio</Label>
                  <div id="Audio" className="flex flex-col justify-center">
                      <Switch className="" onCheckedChange={(value) => {
                          setAudio(value)
                      }} />
                  </div>
                </div>
              </div>
            </div>
            <ImageUpload onChange={(img: File | null) => {
              console.log(img)
              setFile(img)
            }}/>
          </div>
        </CardContent>
        <CardFooter className=" border-t border-border">
          <Button disabled={prompt === "" || resolution === "" } className="w-full mt-8" onClick={async () => {

            if (file) {
              const res = await axios.get(`${BACKEND_URL}/pre-signed-url/image-upload`);
              const presignedUrl = res.data.url;
              const key: string = res.data.Key;
  
  
              const res2 = await axios.put(presignedUrl, file, {
                  headers: {
                      "Content-Type": file.type
                  }
              })
              console.log(key)
              
              const res3 = await axios.post(BACKEND_URL+"/ai/generateVideo", {
                prompt,
                imageName: key,
                resolution,
                generateAudio: audio
              })
              
            } else {
              const res = await axios.post(BACKEND_URL+"/ai/generateVideo", {
                prompt,
                resolution,
                generateAudio: audio
              })

            }            
          }}>
            Generate
          </Button>
        </CardFooter>
    </Card>
  );
}

