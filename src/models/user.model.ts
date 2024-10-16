import { Schema, model, models } from "mongoose";

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
}

const userSchema = new Schema<IUser>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, default: "moderator" },
});

// Check if the model is already created to prevent overwriting issues in Next.js's hot-reload
const User = models.User || model<IUser>("User", userSchema);

export default User;
