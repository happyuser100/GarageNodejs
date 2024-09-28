const express = require("express");
const mongoose = require("mongoose");
const garageRouter = require("./routes/GarageRoutes");

const app = express();

//configure mongoose
mongoose.connect(process.env.MONGO_URL ? process.env.MONGO_URL : 'mongodb://127.0.0.1:27017/garages', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then((res) => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log(error);
  });

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/garages", garageRouter);

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
