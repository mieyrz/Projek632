// const mongoose = require("mongoose")

// mongoose.connect("mongodb://localhost:27017/ITT632")
// .then(()=>{
//     console.log("connection not setup")
//     console.log(err)
// })

const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://127.0.0.1:27017/Lab4")
  .then(() => {
    console.log("Connection established successfully");
  })
  .catch((err) => {
    console.log("Connection fail");
    console.log(err);
  });

  //routes





