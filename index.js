import express from "express";
import cors from 'cors';
import corsOptions from "./config/corsOptions";

const app = express()
app.use(express.json())

app.use(cors(corsOptions))

app.listen(process.env.PORT || 8000, ()=>{
    console.log("Backend started")
})