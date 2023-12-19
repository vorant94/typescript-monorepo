import express from 'express';
import {REPLY} from "lib";

const app = express();
const port =  3000;

app.get('/', (_, res) => {
  res.send(REPLY);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
