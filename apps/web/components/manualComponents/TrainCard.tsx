"use client";

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
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "next-themes";
import { FileUploadDemo } from "./FileUploadDemo";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Switch } from "@components/ui/switch";
import { useState } from "react";
import { BACKEND_URL } from "@/app/config";

export function TrainCard() {
  const { theme } = useTheme();

  const [files, setFiles] = useState<File[]>([]);
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };


  return (
    <Card className="p-0 max-w-xl w-full shadow-none border-none">
      <MagicCard
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        className="p-0"
      >
        <CardHeader className="border-b border-border p-4 [.border-b]:pb-4">
          <CardTitle>Create Model</CardTitle>
          <CardDescription>
            Create your face trained model
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4">
          <form>
                <div className="">
                    <div className="">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" type="text" placeholder="Name of the model" />
                    </div>


                    <div className="grid grid-cols-2 gap-4">
                        <div className="pt-2 col-span-1 w-full">
                            <Label htmlFor="type">Type</Label>
                            <div id="type">
                                <Select onValueChange={() => {}}>
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
                                <Select onValueChange={() => {}}>
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
                                            <SelectItem value="EastAsian">EastAsian</SelectItem>
                                            <SelectItem value="SouthEastAsian">SouthEastAsian</SelectItem>
                                            <SelectItem value="SouthAsian">SouthAsian</SelectItem>
                                            <SelectItem value="MiddleEastern">MiddleEastern</SelectItem>
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
                                <Select onValueChange={() => {}}>
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
                                <Input id="Age" type="number" placeholder="Age" />
                            </div>
                            <div>
                                <Label htmlFor="Bald">Bald</Label>
                                <div id="Bald" className="flex flex-col justify-center min-h-9">
                                    <Switch />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="w-full pt-2" >
                        <FileUploadDemo handleFileUpload={handleFileUpload} />
                    </div>
                </div>
          </form>
        </CardContent>
        <CardFooter className="p-4 border-t border-border [.border-t]:pt-4">
          <Button onClick={() => {
            console.log(files)
            const res = await ax.get(`${BACKEND_URL}/api/pre-signed-url`)
          }} className="w-full">Generate</Button>
        </CardFooter>
      </MagicCard>
    </Card>
  );
}
