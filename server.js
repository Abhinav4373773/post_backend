const express = require("express");
const app = express();

require("dotenv").config();
const Port = process.env.PORT || 4000;

app.use(express.json());

require("./config/database").connect();

const route =require("./routes/router");
app.use("/api/v3",route);

app.listen(Port,() => {
    console.log(`Server started at ${Port}`)
});