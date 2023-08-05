let express = require("express");
let morgan = require("morgan");
let cors = require("cors");
let bodyParser = require("body-parser");
let cookieParser = require("cookie-parser");
let colors = require("colors");
let dotenv = require("dotenv");
let errorHandler = require("./middleware/error");
let ConnectDB = require("./config/db");
dotenv.config();
let app = express();

//?MIDDLEWARE
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "5mb" }));
app.use(cookieParser());
//?Error Middleware
app.use(errorHandler);

//?home
app.get("/", (req, res) => {
  res.send("Welcome to JobPortal 🙋‍♂️");
});

//?port
let port = process.env.PORT || 8000;
//connecting to the server and listen to the port
app.listen(port, () => {
  try {
    ConnectDB;
    console.log(`Connected to the DB 🚀`.bgBlue);
  } catch (error) {
    console.log(error);
  }
  console.log(`server is running at port ${port} 🎉`.bgMagenta);
});
