import mongoose from "mongoose";
import User from "../models/userModel.js";

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getUser = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(401).send("Invalid id");
  }

  try {
    const user = await User.findOne({ _id: id });

    if (!user) res.status(400).send("User not found");

    res.status(200).send(user);
  } catch (error) {
    console.error(error);
  }
};

const createUser = async (req, res) => {
  const { firstName, lastName, phoneNumber, address } = req.body;

  if (!firstName || !lastName)
    res.status(401).send("First name and last name are required");

  const newUser = new User({
    firstName,
    lastName,
    phoneNumber,
    address,
  });

  try {
    await newUser.save();
  } catch (error) {
    res.status(500).send("An error occurred creating the user");
  }
};
const deleteUser = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(401).send("Invalid id");
  }

  try {
    const user = await User.findOne({ _id: id });

    if (!user) res.status(400).send("User not found");

    await User.findByIdAndDelete(id);

    res.status(200).send("User has been deleted");
  } catch (error) {
    res.status(500).send("An error occurred deleting the user");
  }
};
const updateUser = async (req, res) => {
  const id = req.params.id;
  const { firstName, lastName, phoneNumber, address } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(401).send("Invalid id");
  }

  try {
    const user = await User.findOne({ _id: id });

    if (!user) res.status(400).send("User not found");

    const update = {
      firstName,
      lastName,
      phoneNumber,
      address,
    };

    await User.findByIdAndUpdate(id, update);

    res.status(200).send("User has been updated");
  } catch (error) {
    res.status(500).send("An error occurred updating the user");
  }
};

export { getUser, getUsers, deleteUser, updateUser, createUser };
