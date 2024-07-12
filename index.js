const express = require("express")

const mongoose = require("mongoose");
const bnbRouter = require("./router/bnb.router")

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))


// connecting mongodb
const dbURI = `mongodb+srv://testprojectadmin:1234@firstprojectnodejs.yy4bi8x.mongodb.net/node-tuts?retryWrites=true&w=majority&appName=firstProjectNodeJS`
    mongoose.connect(dbURI)
        .then( result =>{
            app.listen(4444);
            console.log("hey im running at port: 4444")}
        )
        .catch(  err => console.log(err.message)  )


app.use("/api",bnbRouter)