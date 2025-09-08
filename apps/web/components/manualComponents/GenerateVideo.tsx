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

type models = {
    id: string;
    name: string;
}

export default function GenerateVideo({models}: {models: models[]}) {
  const [prompt, setPrompt] = useState("")
  const [files, setFiles] = useState<File | null>(null);
  const handleFileUpload = (file: File) => {
    setFiles(file);
  };
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
            <ImageUpload onChange={() => {}}/>
          </div>
        </CardContent>
        <CardFooter className=" border-t border-border">
           <Button disabled={prompt === ""} className="w-full mt-8" onClick={async () => {
                
            }}>
             Generate
            </Button>
        </CardFooter>
    </Card>
  );
}

