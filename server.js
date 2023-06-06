//server.js

require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());

//Add requires

const usersRouter = require("./routes/users");
app.use("/users", usersRouter);

const invoicesRouter = require("./routes/invoices");
app.use("/invoices", invoicesRouter);

app.listen(3000, () => console.log("Server Started"));
