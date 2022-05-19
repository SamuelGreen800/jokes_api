const express = require("express");
const port= 8000;
const app = express();
require("./config/mongoose.config");

    
app.use(express.json(), express.urlencoded({ extended: true }));
    
const JokeRoutes = require("./routes/joke.routes");
JokeRoutes(app);
    
app.listen(8000, () => console.log("The server is kicking on port 8000"));
