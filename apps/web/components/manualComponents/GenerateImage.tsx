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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShineBorder } from "@/components/magicui/shine-border";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";
import React from "react";
import { BACKEND_URL } from "@/app/config";
import axios from "axios";

type models = {
    id: string;
    name: string;
}

export default function GenerateImage({models}: {models: models[]}) {
    const [model, setModel] = React.useState("")
    const [numOfImages, setNumOfImages] = React.useState<number | null>(null)
    const [prompt, setPrompt] = React.useState("")
  return (
    <Card className="p-0 max-w-xl relative overflow-hidden w-full">
      <ShineBorder shineColor={["#2f0874" ,"#872d9b", "#e903f9", "#08f9fb", "#068fe0"]} />
        <CardHeader className="border-b border-border p-4 [.border-b]:pb-4">
          <CardTitle className="text-xl text-center">Generate Image </CardTitle>
          <CardDescription className="text-center">
            If no face model is selected image of random person will be generated
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4">
          <div>
            <div className="flex justify-center gap-2">
              <Select onValueChange={(value) => {
                  setModel(value) 
              }}>
                  <SelectTrigger className="w-full my-8">
                  <SelectValue placeholder="Select Your Face Model" />
                  </SelectTrigger>
                  <SelectContent>
                  <SelectGroup>
                      <SelectLabel>Faces</SelectLabel>
                      {models.map((m) => {
                          return (
                              <SelectItem key={m.id} value={m.id}>{m.name}</SelectItem>
                          )
                      } )}
                  </SelectGroup>
                  </SelectContent>
              </Select>
              <Select onValueChange={(value) => {
                  setNumOfImages(parseInt(value)) 
              }}>
                  <SelectTrigger className="w-full my-8">
                  <SelectValue placeholder="Number of Images" />
                  </SelectTrigger>
                  <SelectContent>
                  <SelectGroup>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="6">6</SelectItem>
                      <SelectItem value="8">8</SelectItem>
                      <SelectItem value="12">12</SelectItem>
                      <SelectItem value="16">16</SelectItem>
                  </SelectGroup>
                  </SelectContent>
              </Select>
            </div>
            <Textarea onChange={(e) => {
                setPrompt(e.target.value)
            }} placeholder="Fantasize yourself..."  />
          </div>
        </CardContent>
        <CardFooter className="p-4 border-t border-border [.border-t]:pt-4">
           <Button disabled={model === "" || prompt === "" || numOfImages === null} className="w-full mt-8" onClick={async () => {
                const res = axios.post(BACKEND_URL+"/api/ai/generate", {
                  prompt,
                  modelId: model,
                  num: numOfImages
                })
            }}>
             Generate
            </Button>
        </CardFooter>
    </Card>
  );
}

