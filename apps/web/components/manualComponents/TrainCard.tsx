"use client";
import axios from "axios"
import JSZip from "jszip"
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
import { useTheme } from "next-themes";
import { FileUploadDemo } from "./FileUploadDemo";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Switch } from "@components/ui/switch";
import { useState } from "react";
import { BACKEND_URL } from "@/app/config";
import { ShineBorder } from "../magicui/shine-border";

export function TrainCard() {
  const { theme } = useTheme();

  const [files, setFiles] = useState<File[]>([]);
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
  };

  const [modelName, setModelName] = useState("")
  const [type, setType] = useState("")
  const [ethinicity, setEthinicity] = useState("")
  const [eyeColor, setEyeColor] = useState("")
  const [age, setAge] = useState(0)
  const [bald, setBald] = useState(false)
  const [disabled, setDisabled] = useState(false)
//   console.log(modelName,type,ethinicity,eyeColor,age,bald, files.length)


  return (
    <Card className="p-0 max-w-xl relative overflow-hidden w-full">
      <ShineBorder shineColor={["#2f0874" ,"#872d9b", "#e903f9", "#08f9fb", "#068fe0"]} />
        <CardHeader className="border-b border-border p-4 [.border-b]:pb-4">
          <CardTitle className="text-xl text-center">Create Model</CardTitle>
          <CardDescription className="text-center">
            Create your face trained model
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4">
            <div className="">
                <div className="">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" type="text" onChange={(e) => {
                        setModelName(e.target.value)
                    }} placeholder="Name of the model" />
                </div>


                <div className="grid grid-cols-2 gap-4">
                    <div className="pt-2 col-span-1 w-full">
                        <Label htmlFor="type">Type</Label>
                        <div id="type">
                            <Select onValueChange={(value) => {
                                setType(value)
                            }}>
                                <SelectTrigger className="w-full" >
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                    {/* <SelectLabel>Fruits</SelectLabel> */}
                                        <SelectItem value="Man">Man</SelectItem>
                                        <SelectItem value="Women">Women</SelectItem>
                                        <SelectItem value="Couple">Couple</SelectItem>
                                        <SelectItem value="Dog">Dog</SelectItem>
                                        <SelectItem value="Cat">Cat</SelectItem>
                                        <SelectItem value="Other">Other</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="pt-2 col-span-1 w-full">
                        <Label htmlFor="Ethinicity">Ethinicity</Label>
                        <div id="Ethinicity">
                            <Select onValueChange={(value) => {
                                setEthinicity(value)
                            }}>
                                <SelectTrigger className="w-full" >
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                    {/* <SelectLabel>Fruits</SelectLabel> */}
                                        <SelectItem value="White">White</SelectItem>
                                        <SelectItem value="Black">Black</SelectItem>
                                        <SelectItem value="Asian">Asian</SelectItem>
                                        <SelectItem value="American">American</SelectItem>
                                        <SelectItem value="EastAsian">East Asian</SelectItem>
                                        <SelectItem value="SouthEastAsian">South East Asian</SelectItem>
                                        <SelectItem value="SouthAsian">South Asian</SelectItem>
                                        <SelectItem value="MiddleEastern">Middle Eastern</SelectItem>
                                        <SelectItem value="Pacific">Pacific</SelectItem>
                                        <SelectItem value="Hispanic">Hispanic</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>


                <div className="grid grid-cols-2 gap-4">
                    <div className="pt-2 col-span-1">
                        <Label htmlFor="Eye Color">Eye Color</Label>
                        <div id="Eye Color">
                            <Select onValueChange={(value) => {
                                setEyeColor(value)
                            }}>
                                <SelectTrigger className="w-full" >
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                    {/* <SelectLabel>Fruits</SelectLabel> */}
                                        <SelectItem value="Black">Black</SelectItem>
                                        <SelectItem value="Brown">Brown</SelectItem>
                                        <SelectItem value="Blue">Blue</SelectItem>
                                        <SelectItem value="Green">Green</SelectItem>
                                        <SelectItem value="Hazel">Hazel</SelectItem>
                                        <SelectItem value="Other">Other</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="col-span-1 pt-2 flex justify-between">
                        <div className="">
                            <Label htmlFor="Age">Age</Label>
                            <Input id="Age" type="number" onChange={(e) => {
                                setAge(parseInt(e.target.value))
                            }} placeholder="Age" />
                        </div>
                        <div className="">
                            <Label htmlFor="Bald">Bald</Label>
                            <div id="Bald" className="flex flex-col justify-center min-h-9">
                                <Switch onCheckedChange={(value) => {
                                    setBald(value)
                                }} />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="w-full pt-2" >
                    <FileUploadDemo handleFileUpload={handleFileUpload} />
                </div>
            </div>
        </CardContent>
        <CardFooter className="p-4 border-t border-border [.border-t]:pt-4">
          <Button disabled={disabled || modelName === "" || ethinicity === "" || eyeColor === "" || type === "" || age === 0 || files.length < 5} onClick={async () => {
            setDisabled(true)
            const res = await axios.get(`${BACKEND_URL}/pre-signed-url/zip`);
            const presignedUrl = res.data.url;
            const key: string = res.data.Key;


            const zip = new JSZip();

            for (const file of files) {
                const content = await file.arrayBuffer();
                zip.file(file.name, content)
            }

            const content = await zip.generateAsync({type:"blob"});

            const res2 = await axios.put(presignedUrl, content, {
                headers: {
                    "Content-Type": content.type
                }
            })

            
            const res3 = await axios.post(BACKEND_URL+"/ai/training", {
                name: modelName,
                age,
                type,
                ethinicity,
                bald: bald.toString(),
                eyeColor,
                key,
                createdAt: new Date(),
                updatedAt: new Date()
            })

            alert("It may take 10 - 15 mins to train face model")
            setDisabled(false)

          }} className="w-full hover:cursor-pointer">Generate</Button>
        </CardFooter>
    </Card>
  );
}
