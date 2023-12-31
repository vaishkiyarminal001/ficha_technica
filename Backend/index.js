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
app.get("/gallery/:id", async (req, res) => {
    try {
      const productId = req.params.id; // Get the 'id' parameter from the URL
      const product = await userModel.findOne({ _id: productId });
  
      if (!product) {
        // Handle the case where the product with the given ID is not found
        return res.status(404).json({ message: "Product not found" });
      }
  
      res.json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error while loading product" });
    }
  });



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


// delete

app.delete("/gallery/:notesId", async (req, res) => {
    const notesId = req.params.notesId;

    try {
        const deletedNote = await userModel.findByIdAndRemove(notesId);

        if (!deletedNote) {
            return res.status(404).json({ message: "Note not found" });
        }

        res.json({ message: "Note deleted successfully" });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.listen(port, async()=>{

   try {
    await connection();
    console.log("Connected to Mongo");
    
   } catch (error) {
    console.log(error);
    console.log("Error!!!!! Not Connect to MongoDB");
   }



    

});


