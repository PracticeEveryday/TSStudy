import * as passport from "passport";
import User from "../models/user";

export default () => {
  // serializeUser 로그인 할 때 한 번 실행
  passport.serializeUser((user: User, done) => {
    done(null, user.id);
  });
  // 모든 라우터 요청에 대해 한 번씩 실행 됨! 매번 실행됨
  passport.deserializeUser(async (id: number, done) => {
    try {
      const user = await User.findOne({
        where: { id },
      });
      return done(null, user); //req.user
    } catch (err) {
      console.error(err);
      return done(err);
    }
  });
  local();
};
