import expressLoader from "./express";
import mongooseLoader from "./mongoose";

export default async ({ expressApp }: { expressApp: any }) => {
  await mongooseLoader();
  await expressLoader({ app: expressApp });
};
