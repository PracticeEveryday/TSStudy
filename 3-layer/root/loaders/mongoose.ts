import mongoose from "mongoose";
import config from "../config";

export default async () => {
  mongoose
    .connect(config.MONGO_URL)
    .then(() => {
      console.log("mongodb is successfully connected");
    })
    .catch((error) => {
      console.error(error);
    });
};
