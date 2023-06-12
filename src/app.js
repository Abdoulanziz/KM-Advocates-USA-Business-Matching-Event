require("dotenv").config();
const express = require('express');
const ejs = require('ejs');
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
const path = require("path");
const MongoStore = require("connect-mongo");


const { PORT, NODE_ENV, SESSION_SECRET, DB_CONNECTION_STRING } = process.env;
const app = express();

app.use(cors());
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, "../public")));


const nodeEnv = NODE_ENV || "production";
const port = PORT || 5000;
const dbURI = nodeEnv === "development" ? "mongodb://127.0.0.1:27017/business-match" : DB_CONNECTION_STRING;


mongoose.set("strictQuery", true);
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    const server = app.listen(port, () => {
      const host = req.get('host');
      const serverAddress = `http://${host}`;
      console.log(`Server running at: ${serverAddress}`);
      // console.log(`Server running on port ${port}`);
    });
  })
  .catch(() => console.log("Connection failure!"));

app.use(
  session({
    name: "app.connect.sid",
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: dbURI }),
    cookie: { httpOnly: false, maxAge: null },
  })
);

app.use("/", require("../routes/pageRoutes"));

