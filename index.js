const express = require("express");
const mongoose = require("mongoose");
const app = express();
const authRoute = require("./routes/auth")
const eventRoute = require("./routes/events")
const cors = require('cors')

app.use(cors())
const PORT = process.env.PORT || 4000;
// console.log(`server is running at Port: ${PORT}`);
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/campaigns", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) 
  .then((result) => {
    console.log("connection succesful");
  })
  .catch((error) => console.log(error));


  app.use("/auth", authRoute);
  app.use("/event" , eventRoute);
  app.listen(PORT);