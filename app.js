import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import logger from "morgan";
//^ path library to manage paths
import path from "path";

//! this enables the app to read all constant variables
dotenv.config();

//! define the port
const port = process.env.PORT || 5050;

//! define the app
const app = express();

//^ logger morgan middleware
app.use(logger("dev"));

//! allow any request from anywhere
//^ remove before deploy
// app.use(cors());

//^ public folder available for any browser, only get method
app.use(express.static(process.argv[1] + "/public"));

//! route for /api/users
app.get("/api/users", (req, res) => {
  res.json([
    {
      name: "Aggie",
      lastName: "Msola",
      age: "28",
    },
    {
      name: "Valery",
      lastName: "Msola",
      age: "35",
    },
  ]);
});

//^ /api messages
app.post("/api/messages", (req, res) => {
  let messages = [
    {
      id: 0,
      title: "Hallo there customer1",
      body: "any",
    },
    {
      id: 1,
      title: "Hallo there customer2",
      body: "any",
    },
    {
      id: 2,
      title: "Hallo there customer3",
      body: "any",
    },
  ];
  res.json(messages);
});

app.get("*", (req, res) => {
  res.sendFile(`${process.argv[1]}/public/index.html`);
});

//^ keep app running and listening
//! \t gives a space, \n gives a newline
app.listen(port, () => console.log(`Ready on: \t http://localhost:${port}`));
