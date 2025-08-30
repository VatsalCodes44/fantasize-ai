import express from "express"
import * as zodTypes  from "@repo/common/types"
const app = express();

app.post("/ai/training", (req,res) => {

})

app.post("/ai/generate", (req,res) => {
    
})

app.post("/pack/generate", (req,res) => {

})

app.get("/pack/bulk", (req,res) => {

})

app.get("/image", (req,res) => {

})

app.listen(3005, () => {
    console.log("listening on port 3005")
});