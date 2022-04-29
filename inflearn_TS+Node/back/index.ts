// export defulat 아니면 * as 를 해줘야한다.
import * as express from "express";
import * as morgan from "morgan";
import * as cors from "cors";
import * as cookieParser from "cookie-parser";
import * as expressSession from "express-session";
import * as dotenv from "dotenv";
import * as passport from "passport";
import * as hpp from "hpp";
import helmet from "helmet";

import { sequelize } from "./models";

dotenv.config();

import { Request, Response, NextFunction } from "express";

const app = express();

const prod: boolean = process.env.NODE_ENV !== "production";

app.set("port", prod ? process.env.PORT : 3000);

//force true 서버 재시작 때마다 테이블 초기화함 중요...
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((err: Error) => {
    console.error(err);
  });

if (prod) {
  app.use(hpp());
  app.use(helmet());
  app.use(morgan("combined"));
  app.use(
    cors({
      origin: "http://localhost",
      credentials: true,
    })
  );
} else {
  app.use(morgan("dev"));
  app.use(
    cors({
      origin: true,
      credentials: true,
    })
  );
}
app.use("/", express.static("uploads"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  expressSession({
    resave: true,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET!,
    cookie: {
      httpOnly: true,
      secure: false, // https -> true
      domain: prod ? ".nodebird.com" : undefined,
    },
    name: "rnbck",
  })
);

app.use(passport.initialize());
app.use(passport.session());
// express에 변수를 설정하는 방법

// Express.Request 로 글로벌적으로도 가능
app.get("/", (req: Express.Request, res: Response, next: NextFunction) => {
  res.status(200).json({ status: "succ" });
});

app.listen(app.get("port"), () => {
  console.log("3000번 포트 온");
});
