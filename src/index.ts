import express from "express";
import { rootHandler, helloHandler } from "./handlers";

const app = express();
const port = 3000;

app.get("/", rootHandler);
app.get("/hello/:name", helloHandler);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
