import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },

    isAdmin: {
      type: Boolean,
      default: false,
    },
    //   createdAt: Date.now(),
  },
  { timestamps: true }
);

const UserModel = mongoose.model("User", UserSchema);
export { UserModel };

// https://stackoverflow.com/questions/34560235/how-to-write-a-mongoose-model-in-es6-es2015
