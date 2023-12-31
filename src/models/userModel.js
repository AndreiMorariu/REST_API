import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phoneNumber: String,
    address: String,
  },
  { timestamps: true },
);

const User = new mongoose.model("User", schema);
export default User;
