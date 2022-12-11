const express = require("express");
const { connection } = require("./config/db");
const { authentication } = require("./middleware/authentication");
const { noteRouter } = require("./routes/note.routes");
const { userRouter } = require("./routes/user.routes");



const app = express();
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Welcome to Homepage")
    })

app.use(`/user`,userRouter)
app.use(authentication)
app.use(`/note`,noteRouter)

    app.listen(8000, async() => {
        try{
            await connection
            console.log("connected");
        }
        catch(e){
            console.log(e);
        }
        console.log("listening to port http://localhost:8000")
    })