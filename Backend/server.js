import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { errorHandler } from "./middleware/errorHandler.js";
import router from "./router/index.js";

const port = 4000;

const server = () => {
  const app = express();

  app.use(cors());
  app.use(bodyParser.json());
  async function main() {
    await mongoose.connect(
        "mongodb+srv://karanbhardwaj7917:K%40ran@cluster0.tnyotml.mongodb.net/FitnessAppData",
        { dbName: "FitnessAppData" }
      );
  }

  router(app);

  app.use(errorHandler);

  app.listen(port, () => {
    main();
    const message = `|| Server running on port ${port} 🚀 ||`;
    const len = message.length;

    console.log("~".repeat(len));
    console.log(message);
    console.log("~".repeat(len));
  });
};

export default server;