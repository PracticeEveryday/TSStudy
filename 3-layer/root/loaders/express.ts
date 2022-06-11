import cors from "cors";
import morgan from "morgan";
import express from "express";
import routers from "../api";

export default ({ app }: { app: express.Application }) => {
  app.use(cors());
  app.use(morgan("tiny"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(routers());
};
