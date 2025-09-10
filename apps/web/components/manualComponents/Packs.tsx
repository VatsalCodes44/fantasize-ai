"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import parse from "html-react-parser";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { BACKEND_URL } from "@/app/config";

type Card = {
  id: string;
  title: string;
  description: string;
  src: string;
  buttonName: string;
  numOfImages: number;
  content: string;
};

type Model = {
  id: string;
  name: string;
};

export function Packs({ cards, models }: { cards: Card[]; models: Model[] }) {
  const [model, setModel] = useState<string | null>(null);

  return (
    <ul className="max-w-5xl mx-auto w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 items-start gap-4">
      {cards.map((card) => (
        <Dialog key={card.id}>
          <DialogTrigger asChild>
            <div
              className="p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
            >
              <img
                src={card.src}
                alt={card.title}
                className="h-60 w-full rounded-lg object-cover object-top"
              />
              <h3 className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base">
                {card.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base">
                {card.description}
              </p>
            </div>
          </DialogTrigger>

          <DialogContent className="rounded-md " >
            <div
              className="sm:max-w-[500px] max-h-120 p-6 overflow-y-scroll
              [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)] 
              [mask-repeat:no-repeat] 
              [mask-size:100%_100%] 
              [scrollbar-width:none] 
              [-ms-overflow-style:none] 
              [&::-webkit-scrollbar]:hidden"
            >
              <img
                src={card.src}
                alt={card.title}
                className="w-full h-60 object-cover rounded-md"
              />
              <DialogTitle className="pt-4">{card.title}</DialogTitle>
              <p className="text-sm mt-1 text-neutral-600 dark:text-neutral-400">
                {card.description}
              </p>
              <p className="text-green-600 text-sm mt-1">
                Number of Images: {card.numOfImages}
              </p>

              <div className="mt-4 text-sm text-neutral-700 dark:text-neutral-300">
                {parse(card.content)}
              </div>

              <div className="mt-4">
                <Select value={model ?? undefined} onValueChange={setModel}>
                  <SelectTrigger className="w-full hover:cursor-pointer">
                    <SelectValue placeholder="Select Your Face Model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Faces</SelectLabel>
                      {models.map((m) => (
                        <SelectItem className="hover:cursor-pointer" key={m.id} value={m.id}>
                          {m.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <button disabled={!model} className="my-6 px-4 py-2 rounded-full bg-green-500 text-white font-bold w-full hover:cursor-pointer hover:bg-green-600
              disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-green-300 disabled:bg-green-300"
              onClick={async () => {
                const res = axios.post(`${BACKEND_URL}/ai/generate/pack`,{
                  modelId: model,
                  packId: card.id
                })
              }}
              >
                {card.buttonName}
              </button>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </ul>
  );
}
