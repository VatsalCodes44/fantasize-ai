import {z} from "zod";

export const trainModel = z.object({
    name: z.string(),
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
    blad: z.boolean(),
    eyeColor: z.enum(["Brown","Blue","Green","Hazel","Other"]),
    zipUrl: z.string(),
    createdAt: z.date(),
    updatedAt: z.date()
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
