import { Router, Request, Response, NextFunction } from "express";

export default (app: Router) => {
  const userRouter = Router();

  app.use("/user", userRouter);

  userRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).json({
        status: "succ",
      });
    } catch (error) {
      next(error);
    }
  });
};
