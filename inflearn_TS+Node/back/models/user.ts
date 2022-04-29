import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelize";
import { dbType } from "./index";
class User extends Model {
  // !는 반드시 존재해야 함을 알려주는 것
  public readonly id!: number;
  public nickname!: string;
  public userId!: string;
  public password!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    nickname: {
      type: DataTypes.STRING(20),
    },
    userId: {
      type: DataTypes.STRING(200),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "User",
    charset: "utf8",
    collate: "utf8_general_ci",
  }
);

export const associate = (db: dbType) => {};

export default User;
