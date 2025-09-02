import {z} from "zod";

export const trainModel = z.object({
    name: z.string(),
    key: z.string(),
    type: z.enum(["Man","Women","Couple","Dog","Cat","Other"]),
    age: z.number(),
    ethinicity: z.enum([
        "White",
        "Black",
        "Asian",
        "American",
        "EastAsian",
        "SouthEastAsian",
        "SouthAsian",
        "MiddleEastern",
        "Pacific",
        "Hispanic"
    ]),
    bald: z.enum(["true","false"]),
    eyeColor: z.enum(["Black","Brown","Blue","Green","Hazel","Other"]),
    createdAt: z.string(),
    updatedAt: z.string()
}) 

export const generateImage = z.object({
    prompt: z.string(),
    modelId: z.string(),
    num: z.number()
})

export const generateImageFromPack = z.object({
    modelId: z.string(),
    packId: z.string()
})
