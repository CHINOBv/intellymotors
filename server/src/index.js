const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const express = require("express");

const router = require("./routes");

//configs
let PORT = process.env.PORT || 4000;
const app = express();

//MiddleWares
app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json({ encoding: true }));
app.use(helmet());
app.use(morgan("dev"));

app.use("/public", express.static(__dirname + "/public"));

//Routes
app.use(router);

app.listen(PORT, () => console.log("Runing on Port", PORT));
