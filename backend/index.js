const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./router/todorouter");
var cors = require("cors");
mongoose.connect(
  "mongodb://localhost:27017/todoapp",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () => {
    console.log(`Db is connected`);
  }
);
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
