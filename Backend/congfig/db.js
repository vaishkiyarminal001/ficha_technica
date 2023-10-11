const mongoose = require("mongoose");
require("dotenv").config();

// const username = "port";
// const password = "Mail123456789";
// const dbName = "paint";

// const dbURI = `mongodb+srv://${username}:${password}@cluster-name.mongodb.net/${dbName}?retryWrites=true&w=majority`;

// const connection = mongoose.connect(dbURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // module.exports = { connection };

// module.exports = {
//     connection 
// }



const connection= async()=>{
  await mongoose.connect("mongodb+srv://minal:8507223100@cluster0.mojk3bo.mongodb.net/paint?retryWrites=true&w=majority");

  console.log("Connection is done");
}

module.exports = {
    connection 
}