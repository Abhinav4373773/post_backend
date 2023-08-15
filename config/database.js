const mongoose = require("mongoose");

require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(() => {console.log("DB connection is successful")})
    .catch((err) => {
        console.error(err);
        console.log("Some Error occured while connecting with DB");
        process.exit(1);
    })
}