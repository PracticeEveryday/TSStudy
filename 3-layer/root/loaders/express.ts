import cors from "cors";
import morgan from "morgan";
import express from "express";

export default ({ app }: { app: express.Application }) => {
  app.use(cors());
  app.use(morgan("tiny"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
};
