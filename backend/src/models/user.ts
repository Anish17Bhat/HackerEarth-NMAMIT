import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db';

class User extends Model {
  public id!: number;
  public google_id!: string | null; // initially null but not null due to schema, so set default empty string to avoid errors
  public email!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    google_id: {
      type: DataTypes.STRING(32),
      unique: true,
      allowNull: true, // Allow null initially, given your requirement
      defaultValue: null,
    },
    email: {
      type: DataTypes.STRING(150),
      unique: true,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'users',
    timestamps: false,
  }
);

export default User;
