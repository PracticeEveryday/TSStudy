import * as express from "express";
// export defulat면 * as 를 해줘야한다.
import { Request, Response, NextFunction } from "express";

const app = express();

const prod: boolean = process.env.NODE_ENV !== "production";

// express에 변수를 설정하는 방법
app.set("port", prod ? process.env.PORT : 3000);

// Express.Request 로 글로벌적으로도 가능
app.get("/", (req: Express.Request, res: Response, next: NextFunction) => {
  res.status(200).json({ status: "succ" });
});

app.listen(app.get("port"), () => {
  console.log("3000번 포트 온");
});
