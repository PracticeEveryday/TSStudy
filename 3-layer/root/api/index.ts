import { Router } from "express";
import user from "./routers/userRouter";

export default () => {
  const app = Router();

  user(app);

  return app;
};
