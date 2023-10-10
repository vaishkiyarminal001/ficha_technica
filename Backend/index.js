const express = require("express");
const cors = require("cors");

const {connection} = require("./congfig/db");
const {userModel} = require("./module/User.model");
 

const app = express();
const port = 8000;
app.use(express.json());
app.use(cors());


app.get("/",(req,res) =>{
    res.send("Welcome to home");
})

// for gallery
app.get("/gallery", async(req, res) =>{


    try {

    const displayPaint = await userModel.find();
    res.send(displayPaint);
        
    } catch (error) {
        console.log(error);
        console.log("Error While loading Get Method");
        
    }
    


})



// for single product
app.get("/gallery/:id", async(req, res) =>{


    try {

    const displayPaint = await userModel.findOne();
    res.send(displayPaint);
        
    } catch (error) {
        console.log(error);
        console.log("Error While loading Get Method");
        
    }
    


})



app.post("/post", async(req, res) =>{
    //  res.send("Welcome to post page");
    const payload = req.body;
    console.log(payload);


    try {

    const newPaint = new userModel(payload);
    await newPaint.save();

    res.send({Msg: "Post Successfully", newPaint});
        
    } catch (error) {
        console.log(error);
        console.log("Error!!!! While Post Method");
        
    }
    
})




// app.delete("/delet", (req, res) =>{
//     res.send("Welcome to delet");
// })

app.listen(port, async()=>{

   try {
    await connection;
    console.log("Connected to Mongo");
    
   } catch (error) {
    console.log(error);
    console.log("Error!!!!! Not Connect to MongoDB");
   }



    

});


